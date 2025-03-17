const productModel = require('../models/product')
const userModel = require('../models/user')


exports.createProduct = async (req, res) => {
    try {
        

        const {productName,productQuantity,productPrice} = req.body


        const newData = new productModel({
            productName,
            productQuantity,
            productPrice,
        

        })

        await newData.save()
        

        res.status(200).json({message: 'product has been created successfully', data: newData})
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message:'internal server error', data:error.message})
    }
}




exports.getAllProducts = async (req, res) => {
    try {
        const product = await productModel.find()

        res.status(200).json({message: 'all products in the database', data:product})
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: 'internal server error'})
    }
}



exports.getOneProduct = async (req, res) => {
    try {
        const {id} =req.params


        const userProduct = await productModel.findById(id)

        if(!userProduct) {
            return res.status(404).json({message: 'product not found'})
        }

        res.status(200).json({message: `kindly find the product below` ,data: userProduct})

    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: 'internal server error'})
    }
}



exports.updateProduct = async (req, res) => {
    try {
        const {id} = req.params

        const product = await productModel.findById(id)
        if(!product) {
            return res.status(404).json({message: 'product not found'})
 
        }

        const {productName,productQuantity,ProductPrice} = req.body

        const data = {
            productName,
            productQuantity,
            ProductPrice
        }

    

        const updatedProduct = await productModel.findByIdAndUpdate(id , data, {new: true})

        res.status(200).json({message: `product has been updated successfully`, data: updatedProduct})


    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: 'internal server error'})
    }
}




exports.deleteProduct = async (req, res) => {
    try {
        const {id } = req.params

        const product = await productModel.findById(id)

        if(!product) {
            return res.status({message: 'product not found'})
        }


        const deleteProduct = await productModel.findByIdAndDelete(id)

        res.status(200).json({message: 'product has been deleted successfully', data: deleteProduct})


    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: 'internal server error'})
    }
}