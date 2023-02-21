const express=require("express")
const router=express.Router()
const catController=require("../controllers/categoryController")

router.get("/",catController.getCategories)
router.post("/",catController.createCategory)

module.exports=router