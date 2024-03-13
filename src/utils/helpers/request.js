import axios from "axios";
import { save } from "./localStorageServices";
import { toastError, toastSuccess } from "./toaster";
import { PUBlIC_API_URL } from "../constants/env";

const axiosConfig = axios.create({
  baseURL: PUBlIC_API_URL,
});

export const signUp = async (data) => {
  await axiosConfig
    .post("/auth/register", data)
    .then((resp) => {
      let data = resp.data;
      save("user", data.user);
      save("token", data.token);
      toastSuccess("Signed Up Successfully");

      // window.location.href = "/"
    })
    .catch((err) => {
      toastError(err.response.data.error);
    });
};

export const signIn = async (data) => {
  await axiosConfig
    .post("/auth/login", data)
    .then((resp) => {
      let data = resp.data;
      save("user", data.user);
      save("token", data.token);
      toastSuccess("Logged In Successfully");

      window.location.href = "/";
    })
    .catch((err) => {
      toastError(err.response.data.error);
    });
};

export const continueWithGoogle = async () => {
  await axiosConfig
    .post("/auth/google")
    .then((resp) => {
      console.log(resp);
    })
    .catch((err) => {
      console.log(err);
    });
};
