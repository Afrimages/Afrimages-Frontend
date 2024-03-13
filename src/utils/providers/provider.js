"use client";
import { SessionProvider } from "next-auth/react";
import AuthProvider from "./auth-provider";
import { Toaster } from "react-hot-toast";

const Providers = ({ children }) => {
  return (
    <SessionProvider>
      <AuthProvider>
        {children}
        <Toaster />
      </AuthProvider>
    </SessionProvider>
  );
};

export default Providers;
