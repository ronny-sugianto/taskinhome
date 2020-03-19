

async function getChat(req,res,services) {
  const chat = await services.getChat();
  
  res.send(chat);
}

async function createChat(req,res,services){
  const data = req.body;
  const createData = await services.createChat(data);
  res.send(createData);
}

module.exports = {getChat,createChat};