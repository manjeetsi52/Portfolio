import { sendContactEmail } from "../lib/email.js";
import { Message } from "../modal/message.js";

export const handleContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    console.log(req.body)

    await Message.create({name,email,message})

    if (!name || !email || !message) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    await sendContactEmail({ name, email, message });

    return res.status(200).json({
      message: "Message sent successfully!",
    });
 
  } catch (error) {
    console.error("Contact Error:", error.response?.body || error);

    return res.status(500).json({
      message: "Failed to send message",
    });
  }
};
