"use client";
import GoogleOAuthProviderWrapper from "./google-provider";
import { Toaster } from "react-hot-toast";

const Providers = ({ children }) => {
  return (
    <GoogleOAuthProviderWrapper>
      {children}
      <Toaster />
    </GoogleOAuthProviderWrapper>
  );
};

export default Providers;
