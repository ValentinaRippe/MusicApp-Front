import axios from "axios"

export default axios.create({
  baseURL: "https://musicapp-apiv.herokuapp.com",
});

/* export default axios.create({
    baseURL: "http://localhost:4000",
  }); */