import axios from "axios";

const axiosConfig = axios.create({
    baseURL: "https://afrimages.onrender.com/api/v1",
    headers: {
        Authorization: ""
    }
})

export const signUp = async (data)=>{
   await axiosConfig.post("/auth/register", data)
    .then((resp) => {
        console.log(resp)
    })
    .catch((err)=>{
        console.log(err)
    })
}

export const signIn = async (data)=>{
   await axiosConfig.post("/auth/login")
    .then((resp) => {
        console.log(resp)
    })
    .catch((err)=>{
        console.log(err)
    })
}

export const continueWithGoogle = async ()=>{
    await axiosConfig.post("/auth/google")
    .then((resp) => {
        console.log(resp)
    })
    .catch((err)=>{
        console.log(err)
    })
}