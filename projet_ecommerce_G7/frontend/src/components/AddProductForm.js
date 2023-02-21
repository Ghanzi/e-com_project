import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import productService from "../services/productServices"

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import catService from "../services/categoryService";

function AddProductForm(){
    const [price,setPrice]=useState(0)  
    const [name,setNAme] =useState("")
    const [description,setDescription]=useState("")
    const [categories,setCategories]=useState([])
    const[selectedCat,setSelectedCat]=useState(0)

    async function getCategories(){
        const res=await catService.getAllCategories()
        setCategories(res.data)
    }
    const navigate=useNavigate()

useEffect(()=>{
    getCategories()
},[])
    async function submitProduct(e){
       e.preventDefault()
        const p={"price":price,"name":name,"description":description,"category":categories[selectedCat]}
       await productService.addProduct(p)
        navigate("/products")
     }

    return (
        <form onSubmit={(e)=>submitProduct(e)}>
            <label className={"form-label"}>Prix :</label>
            <input className={"form-control"} type="text" id="price" onChange={(e)=>setPrice(e.target.value)} /><br/>
            <label className={"form-label"}>Nom :</label>
            <input className={"form-control"} type="text" id="name" onChange={(e)=>setNAme(e.target.value)} /><br/>
            <label className={"form-label"}>Description :</label>
            <input className={"form-control"} type="text" id="description" onChange={(e)=>setDescription(e.target.value)} /><br/>
            <label className={"form-label"}>Catégorie :</label>
            <select onChange={(e)=>setSelectedCat(e.target.value)} className={"form-select"}>
                {
                    categories.map((elem,index)=>{
                        return <option value={index} key={index}>{elem.name}</option>
                    })
                }
            </select>
            <input className={"btn btn-primary"} type="submit"/> 
        </form>

        
    )
}

export default AddProductForm 
