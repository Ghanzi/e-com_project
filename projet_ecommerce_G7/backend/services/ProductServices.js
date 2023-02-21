const product=require("../models/Product")

const getProducts=async ()=>{
     return await product.find().populate("category")                    //.sort({'_id': 1}).exec()

    
}
const getProductById=async (id)=>{
    return await product.findById(id)
}
const deleteProduct=async (id)=>{
    return await product.findByIdAndDelete(id)
}

const createProduct=async (p)=>{
    return await product.create(p)
}
const updateProduct=async (p)=>{
    return await product.findByIdAndUpdate(p._id,p)
}

module.exports={
    getProducts,
    getProductById,
    deleteProduct,
    createProduct,
    updateProduct


}