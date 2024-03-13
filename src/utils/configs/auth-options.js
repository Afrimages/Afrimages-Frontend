import CredentialProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from "../constants/env";

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    }),
    CredentialProvider({
      name: "credentials",
      credentials: { email: { label: "Email", type: "email" }, password: { label: "Password", type: "password" } },
      async authorize(_req, credentials) {
        if (!credentials.email || !credentials.password) return null;

        // Make login check here for credentials

        return { id: crypto.randomUUID(), name: "Benjamin" };
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
