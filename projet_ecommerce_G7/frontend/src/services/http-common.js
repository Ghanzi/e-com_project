import axios from "axios";
const http=axios.create({
    baseURL:"http://localhost:4455",
    Headers:{"content-type":"application/json"}
})
export default http