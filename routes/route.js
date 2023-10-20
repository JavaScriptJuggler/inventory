const express = require('express');
const router = express.Router();
const { jwtVerify } = require('../middlewares/jetVerify');

const { loginUser, registerUser } = require('../controllers/authController');
const { saveProduct } = require('../controllers/productController');

/* routes */
router.post('/register', registerUser)
router.post('/login', loginUser)

router.post('/add-products', jwtVerify, saveProduct)


module.exports = {
    router,
}