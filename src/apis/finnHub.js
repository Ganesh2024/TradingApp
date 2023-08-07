import axios from 'axios';

const TOKEN = "cj70h69r01ql0ntj2o50cj70h69r01ql0ntj2o5g";
export default axios.create({
  baseURL: "https://finnhub.io/api/v1",
  params:{
    token:TOKEN
  }
})

