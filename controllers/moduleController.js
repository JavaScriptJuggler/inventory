const { Module } = require("../models/Modules");

const addModule = async (req, res) => {
    let body = req.body;
    let insertModule = new Module(body);
    try {
        await insertModule.save();
        res.send('Module Created Successfully');
    } catch (error) {
        res.send(error);
    }

}

module.exports={
    addModule,
}

