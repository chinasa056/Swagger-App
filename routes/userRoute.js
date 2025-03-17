// const { initializePayment, verifyPayment } = require('../controllers/paymentController');
const { initializePayment, verifyPayment } = require('../controllers/paymentController.js');
const { registerUser, verifyUser, loginUser, forgetUserPassword, resetUserPassword, changeUserPassword } = require('../controllers/userController');


const router = require('express').Router();

/** 
 * @swagger
 * /api/v1/user:
 *   post:
 *     summary: this is the sign up route. used to register users to the platform
 *     requestBody: 
 *       required: true
 *       content: 
 *         application/json:
 *           schema: 
 *             type: object
 *             properties: 
 *               fullName: 
 *                 type: string
 *                 desciption: this the fullName of the user
 *                 example: Joy Pabs
 *               email: 
 *                 type: string
 *                 desciption: this the email of the user of the user
 *                 example: joypabs@gmail.com
 *               gender: 
 *                 type: string
 *                 desciption: this the email of the gender of the user
 *                 example: Female
 *               password: 
 *                 type: string
 *                 desciption: this the password of the user. must contain uppercase, lowercase and a special charater
 *                 example: Joyp$
 *               confirmPassword: 
 *                 type: string
 *                 desciption: this must match with the password
 *                 example: Joyp$
 *     responses: 
 *       201:
 *         description: user registerd successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties: 
 *                 fullName: 
 *                   type: string
 *                   desciption: this the fullName of the user
 *                   example: Joy Pabs
 *                 email: 
 *                   type: string
 *                   desciption: this the email of the user of the user
 *                   example: joypabs@gmail.com
 *                 gender: 
 *                   type: string
 *                   desciption: this the email of the gender of the user
 *                   example: Female
 *                 password: 
 *                   type: string
 *                   desciption: this the password of the user. must contain uppercase, lowercase and a special charater
 *                   example: Joyp$
 *       400:
 *         description: user with this email already exists
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 email: 
 *                   type: string
 *                   description: this is when you use a duplicate email
 *                   example: joypabs@gmail.com
 *       500:
 *         description: error registering user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message: 
 *                   type: string
 *                   example: internal server error
 * 
*/

router.post('/user', registerUser);
router.get('/verify/user/:token', verifyUser);


/** 
 * @swagger
 * /api/v1/login/user:
 *   post:
 *     summary: this is the login route.
 *     requestBody: 
 *       required: true
 *       content: 
 *         application/json:
 *           schema: 
 *             type: object
 *             properties: 
 *               email: 
 *                 type: string
 *                 desciption: this the email of the user of the user
 *                 example: joypabs@gmail.com             
 *               password: 
 *                 type: string
 *                 desciption: this the password of the user. must contain uppercase, lowercase and a special charater
 *                 example: Joyp$
 *     responses: 
 *       201:
 *         description: login  successfull
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties: 
 *                 fullName: 
 *                   type: string
 *                   desciption: this the fullName of the user
 *                   example: Joy Pabs
 *                 email: 
 *                   type: string
 *                   desciption: this the email of the user of the user
 *                   example: joypabs@gmail.com
 *                 gender: 
 *                   type: string
 *                   desciption: this the email of the gender of the user
 *                   example: Female
 *                 password: 
 *                   type: string
 *                   desciption: this the password of the user. must contain uppercase, lowercase and a special charater
 *                   example: Joyp$
 *                   token: 
 *                     type: string
 *                     description: the token genrated on successful log in
 *                     example: twbvdjh4gr447uhf334577hg3733746dsyys6sd5
 *       400:
 *         description: user with this email already exists
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 email: 
 *                   type: string
 *                   description: this is when you use a duplicate email
 *                   example: joypabs@gmail.com
 *       500:
 *         description: error registering user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message: 
 *                   type: string
 *                   example: internal server error
 * 
*/
router.post('/login/user/', loginUser);
router.post('/forgot=password/user', forgetUserPassword);
router.post('/reset=password/user/:token', resetUserPassword);
router.post('/change/password/user/:id',  changeUserPassword);

router.post("/payment/:userId", initializePayment)

// router.get("/payment/verify/:reference",verifyPayment)
router.get("/:ref", verifyPayment)



module.exports = router