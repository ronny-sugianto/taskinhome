const express = require('express');
const router = express.Router();

const ChatService = require('../services/chat.service');
const {getChat,createChat} = require('../controller/chat.controller');

const services = new ChatService();

router.get('/', (req,res) => getChat(req,res,services));
router.post('/', (req,res) => createChat(req,res,services));

module.exports = router;