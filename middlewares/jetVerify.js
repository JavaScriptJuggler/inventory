const jwt = require('jsonwebtoken');

const jwtVerify = async (req, res, next) => {
    if (req.headers['authorization']) {
        jwt.verify(req.headers['authorization'].split(" ")[1], process.env['JWT_SECRECT'], (err, decoded) => {
            if (err) {
                res.status(403).send(err)
            } else {
                next()
            }
        });
    } else {
        res.status(400).send({
            "error": "Authorization token not present",
        })
    }
}

module.exports = {
    jwtVerify,
}