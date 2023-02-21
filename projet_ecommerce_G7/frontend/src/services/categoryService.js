import http from "./http-common";

async function getAllCategories(){
    return await http.get("/categories")
}

async function addCategories(c){
    return await http.post("/categories", c)
}

const catService={getAllCategories,addCategories}

export default catService