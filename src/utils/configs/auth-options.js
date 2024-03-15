import CredentialProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from "../constants/env";
import { publicApi } from "./axios-instance";

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    }),
    CredentialProvider({
      name: "credentials",
      credentials: { email: { label: "Email", type: "email" }, password: { label: "Password", type: "password" } },
      async authorize(credentials, _) {
        if (!credentials.email || !credentials.password) return null;

        try {
          const { email, password } = credentials;
          // Make login check here for credentials
          const { data } = await publicApi.post("/auth/login", { email, password });

          const { token, isVerified, user } = data;

          return { ...user, name: `${user.firstName} ${user.lastName}`, token, isVerified };
        } catch (e) {
          console.log(e.response.data.error ?? "an error occurred.");
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/profile",
    signOut: "/account/login",
    error: "/account/login",
  },
};

export default authOptions;
