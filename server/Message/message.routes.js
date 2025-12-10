import express from "express";
import MessageController from "./message.controller.js";

const messageController = new MessageController();
const msgRouter = express.Router();

//Post /api/messages == Create new Message

msgRouter.post("/", messageController.createMessage);

//Get /api/messages == Get all Messages

msgRouter.get("/", messageController.getMessages);

export default msgRouter;
