import Message from "../Message/message.model.js";

//Create Message

class MessageController {
  createMessage = async (req, res) => {
    try {
      const newMessage = await Message.create(req.body);
      res.status(201).json({
        success: true,
        message: "Message sent successfully",
        data: newMessage,
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        error: err.message,
      });
    }
  };

  getMessages = async (req, res) => {
    try {
      const messages = await Message.find().sort({ createdAt: -1 });
      res.status(200).json(messages);
    } catch (err) {
      res.status(500).json({
        success: false,
        error: err.message,
      });
    }
  };
}

export default MessageController;
