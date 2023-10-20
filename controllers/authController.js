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
                jwt.sign(JSON.stringify(userData), process.env['JWT_SECRECT'], (err, token) => {
                    if (err) {
                        console.error('Error while generating JWT:', err);
                        res.status(500).send('Internal Server Error');
                    } else if (token) {
                        res.send({ userData, token });
                    } else {
                        res.send('Something went wrong');
                    }
                });
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
    res.send(data);
}

module.exports = {
    loginUser,
    registerUser,
}
