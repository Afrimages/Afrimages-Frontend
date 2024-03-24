import axios from "axios";
import { PUBlIC_API_URL } from "../constants/env";
import { getSession } from "next-auth/react";
import authOptions from "./auth-options";

export const publicApi = axios.create({
  baseURL: PUBlIC_API_URL,
  headers: { "Content-Type": "application/json" },
});

export const authApi = axios.create({
  baseURL: PUBlIC_API_URL,
  headers: { "Content-Type": "application/json" },
});

// for routes that needs authentication
authApi.interceptors.request.use(async (config) => {
  // get user token
  const session = getSession();

  if (!session || !session.token) return config;

  // add to header
  const userToken = session.token;
  config.headers.Authorization = `Bearer ${userToken}`;

  return config;
});
