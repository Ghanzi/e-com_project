const Category=require("../models/Category")

const getAllCategories=async ()=>{
    return await Category.find()
}

const addCategory=async (c)=>{
    return await Category.create(c)
}

module.exports={getAllCategories,addCategory}