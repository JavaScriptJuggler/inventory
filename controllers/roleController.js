const { insertRoles } = require("../services/roleServices");

const addRole = async (req, res) => {
    let response = await insertRoles(req.body);
    response ? res.send("inserted Successfully") : res.send("Something Went Wrong");
}

module.exports = {
    addRole,
}