const productService=require("../services/productServices")


const getALLProducts=async(req,res)=>{
    try{ 
        const result= await productService.getProducts()
        res.status(200).json(result)
    }catch(error){
        res.status(500).json(error)
    }
        
    }
    

const addProduct=async(req,res)=>{
    try{
        const result= await productService.createProduct(req.body)
         res.status(200).json(result) 
    }catch(error){
        res.status(500).json(error)
    }
}

const getProductById=async(req,res)=>{
    try{
        const result= await productService.getProductById(req.params.id)
         res.status(200).json(result) 
    }catch(error){
        res.status(500).json(error)
    }
}


const deleteProduct=async(req,res)=>{
  try{
        const result= await productService.deleteProduct(req.params.id)
         res.status(200).json(result) 
    }catch(error){
        res.status(500).json(error)
    }
}

const updateProduct=async(req,res)=>{
    try{
          const result= await productService.updateProduct(req.body)
           res.status(200).json(result) 
      }catch(error){
         console.log(error)
          res.status(500).json(error)
      }

    }


module.exports={
    getALLProducts,
    getProductById,
    addProduct,
    deleteProduct,
    updateProduct


}
