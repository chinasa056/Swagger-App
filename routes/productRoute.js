const { createProduct, getAllProducts, getOneProduct, updateProduct, deleteProduct } = require('../controllers/productController')
const { authenticate } = require('../middleware/authentication')

const router = require('express').Router()
/** 
 * @swagger
 * /api/v1/createProduct:
 *   post:
 *     summary: this is the route to add a product. requires authentication
 *     requestBody: 
 *       required: true
 *       content: 
 *         application/json:
 *           schema: 
 *             type: object
 *             properties: 
 *               productName: 
 *                 type: string
 *                 desciption: this the name of the product
 *                 example: nutri milk
 *               productQuantity: 
 *                 type: number
 *                 desciption: this is the quantity of product available
 *                 example: 45
 *               productPrice: 
 *                 type: number
 *                 desciption: this the price of the product being created
 *                 example: 45000
 
 *     responses: 
 *       201:
 *         description: product created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties: 
 *                 productName: 
 *                   type: string
 *                   desciption: this the name of the product
 *                   example: nutri milk
 *                 productQuantity: 
 *                   type: number
 *                   desciption: this is the quantity of product available
 *                   example: 45
 *                 productPrice: 
 *                   type: number
 *                   desciption: this the price of the product being created
 *                   example: 45000
 *       500:
 *         description: error createing product
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message: 
 *                   type: string
 *                   example: internal server error
 *     
 * 
*/
router.post('/createProduct', authenticate,createProduct)

router.get('/getAllProducts', getAllProducts)

router.get('/getOneProduct/:id', getOneProduct)

router.put('/updateProduct/:id', updateProduct)

router.delete('/deleteProduct/:id', deleteProduct)

module.exports = router

