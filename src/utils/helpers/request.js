import axios from "axios";
import { save } from "./localStorageServices";
import { toastError, toastSuccess } from "./toaster";

const axiosConfig = axios.create({
    baseURL: "https://afrimages.onrender.com/api/v1",
    headers: {
        Authorization: ""
    }
})

export const signUp = async (data)=>{
   await axiosConfig.post("/auth/register", data)
    .then((resp) => {
        let data = resp.data;
        save("user", data.user)
        save("token", data.token)
        toastSuccess("Signed Up Successfully")

        window.location.href = "/"
    })
    .catch((err)=>{
        toastError(err.response.data.error)
    })
}

export const signIn = async (data)=>{
   await axiosConfig.post("/auth/login", data )
    .then((resp) => {
        let data = resp.data;
        save("user", data.user)
        save("token", data.token)
        toastSuccess("Logged In Successfully")

        window.location.href = "/"
    })
    .catch((err)=>{
        toastError(err.response.data.error)
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