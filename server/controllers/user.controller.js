import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    // User that is logged in will not show here with this
    const filteredUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password");

    res.status(200).json(filteredUsers);
  } catch (error) {
    console.error("Error in  getting users for sidebar: ", error.message);
    res.status(500).json({ error: "Internal server error!" });
  }
};

// $ne means not equal to userId -  All users const allUsers = await User.find();
