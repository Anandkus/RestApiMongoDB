const express =require('express');
const router=express.Router();
const { GetAllProduct,TextingProduct } = require('../controllers/product');


router.route("/").get(GetAllProduct);
router.route("/texting").get(TextingProduct);


module.exports = router;