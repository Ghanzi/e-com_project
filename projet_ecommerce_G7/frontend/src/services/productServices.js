import http from "./http-common"

async function getAllProducts(){
     return await http.get("/products")
}

async function getProductById(id){
    return await http.get(`/products/${id}`)
}

async function deleteProduct(id){
    return await http.delete(`/products/${id}`)
}

async function addProduct(product){
    return await http.post(`/products`,product)
}

async function updateProduct(product){
    return await http.put(`/products/${product._id}`,product)
}

const productService={getAllProducts,getProductById,deleteProduct,addProduct,updateProduct}
export default productService
