const mongoose = require('mongoose');

const modulesSchema = new mongoose.Schema({
    "module_name": String,
});
const Module = mongoose.model("modules", modulesSchema);

module.exports = {
    Module,
}