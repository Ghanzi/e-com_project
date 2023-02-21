const prodController=require("../controllers/productController")
const express=require("express")
const router=express.Router()

router.get("/",prodController.getALLProducts)
router.get("/:id",prodController.getProductById)
router.post("/",prodController.addProduct)
router.delete("/:id",prodController.deleteProduct)
router.put("/:id",prodController.updateProduct)

module.exports=router

