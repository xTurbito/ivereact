import express from "express";

import {createProduct, deleteProduct,getAllProducts,getProduct,updateProduct} from "../controllers/ProductsController.js";

const router = express.Router()

router.get('/',getAllProducts)
router.get('/edit:idProducto',getProduct)
router.post('/',createProduct)
router.put('/:idProducto',updateProduct)
router.delete('/:idProducto',deleteProduct)

export default router