const { createProduct, getAllProducts, getOneProduct, updateProduct, deleteProduct } = require('../controllers/productController')

const router = require('express').Router()

router.post('/createProduct', createProduct)

router.get('/getAllProducts', getAllProducts)

router.get('/getOneProduct/:id', getOneProduct)

router.put('/updateProduct/:id', updateProduct)

router.delete('/deleteProduct/:id', deleteProduct)

module.exports = router

