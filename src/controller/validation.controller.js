async function createValidation(req,res,services){
    const data = req.body;
        const createData = await services.createValidation(data);
        res.send(createData);
}



module.exports = {createValidation};