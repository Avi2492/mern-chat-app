import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;

    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: {
        $all: [senderId, receiverId],
      },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    // Save to db
    // await conversation.save();
    // await newMessage.save();

    //this is run in parallel above code optimisation
    await Promise.all([conversation.save(), newMessage.save()]);

    res.status(201).json(newMessage);
  } catch (error) {
    console.log("Error in sending message: ", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
  //   console.log("Message Sent", req.params.id);
};

export const getMessage = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate("messages");

    // not refrence but actual messages with above code

    if (!conversation) {
      return res.status(200).json([]);
    }

    const messages = conversation.messages;

    res.status(200).json(messages);
  } catch (error) {
    console.log("Error in getting message: ", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
