const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { User } = require('../models/User');
mongoose.connection.once('open', () => { });

/* register user */
async function registerNewUser(data) {
    try {
        data.password = await bcrypt.hash(data.password, parseInt(process.env['BCRYPT_PASSWORD_ROUND']));
        let userSaveData = new User(data);
        await userSaveData.save()
        return "User saved successfully";
    } catch (error) {
        return 'something went wrong';
    }

}

/* get user data */
async function getSingleUserData(email) {
    try {
        let user = await User.findOne({ "email": email });
        return user;
    } catch (error) {
        return 0;
    }
}

module.exports = {
    registerNewUser,
    getSingleUserData,
}