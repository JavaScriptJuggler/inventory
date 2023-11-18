const { registerNewUser, getSingleUserData } = require("../services/userService");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


/* login */
async function loginUser(req, res) {
    let data = req.body;
    let email = data.email;
    let password = data.password;
    let userData = await getSingleUserData(email);
    if (userData) {
        bcrypt.compare(password, userData.password, (err, result) => {
            if (result) {
                let data = {
                    "name": userData.name,
                    "email": userData.email,
                    "phone": userData.phone_number,
                }
                let token = jwt.sign(data, process.env['JWT_SECRECT'], { expiresIn: '10d' });
                res.send({ data, token });
            }
            else {
                res.send("Email or Password doesn't match");
            }
        })
    } else {
        res.send("User not found");
    }
}

/* register */
async function registerUser(req, res) {
    let data = await registerNewUser(req.body);
    if (data) {
        res.send("User saved successfully");
    } else {
        res.send("Somethong Went Wrong");
    }
}

module.exports = {
    loginUser,
    registerUser,
}
