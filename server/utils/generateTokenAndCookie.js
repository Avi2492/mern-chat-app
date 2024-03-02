import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  res.cookie("jwt", token, {
    // miliseconds format maxAge
    maxAge: 15 * 24 * 60 * 60 * 1000,

    // acces only on http prevent XSS attacks cross site scripting attacks
    httpOnly: true,

    // CSRF attacks cross-site request forgery attacks
    sameSite: "strict",

    secure: process.env.NODE_ENV !== "development",
  });
};

export default generateTokenAndSetCookie;
// Open gitbash run openssl rand -base64 32 to generate jwt secret
