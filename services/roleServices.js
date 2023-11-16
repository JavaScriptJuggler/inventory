const { Role } = require("../models/Role")

const insertRoles = async (data) => {
    let role = new Role(data);
    try {
        await role.save();
        return 1;
    } catch (error) {
        return error;
    }
}



module.exports={
    insertRoles,
}