import axios from "axios";

const Axios = axios.create({  // creating a new instance/class from axios.
    baseURL: 
        process.env.NODE_ENV === 'development' ? "http://localhost:8080"
        : "deployed cloud address",
    timeout: 50000,
})

export default Axios