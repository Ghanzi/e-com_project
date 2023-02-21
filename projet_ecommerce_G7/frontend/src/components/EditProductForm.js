import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import productService from "../services/productServices"
import { useNavigate } from "react-router-dom"
function EditProductForm(){
    const {id}=useParams()
    const[price,setPrice]=useState(0)
    const[name,setNAme]=useState("")
    const[description,setDescription]=useState("")
    const navigate=useNavigate()
   async function getProduct(){
    console.log(id);
        const rep=await productService.getProductById(id)
        setPrice(rep.data.price)
        setNAme(rep.data.name)
        setDescription(rep.data.description)
    }
    useEffect(()=>{
        getProduct()
    },[])
    async function submitProduct(e){
        e.preventDefault()
         const p={"_id":id,"price":price,"name":name,"description":description}
        await productService.updateProduct(p)
         navigate("/products")
      }
    return (
    <form onSubmit={(e)=>submitProduct(e)}>
    <label htmlFor="price">Prix :</label>
    <input type="text" id="price " value={price} onChange={(e)=>setPrice(e.target.value)} /><br/>
    <label htmlFor="name">Nom :</label>
    <input type="text" id="name" value={name} onChange={(e)=>setNAme(e.target.value)} /><br/>
    <label htmlFor="description">Description :</label>
    <input type="text" id="description "  value={description}onChange={(e)=>setDescription(e.target.value)} /><br/>
    <input type="submit" value={"Submit"}/> 
</form>
)
}


export default EditProductForm
