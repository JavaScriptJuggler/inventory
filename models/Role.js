const mongoose = require('mongoose');
const roleSchema = new mongoose.Schema({
    "role_name":String,
    "premissions":String
});
const Role = mongoose.model('roles', roleSchema);
module.exports = {
    Role,
}