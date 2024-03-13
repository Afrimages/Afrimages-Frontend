import { GoogleOAuthProvider } from "@react-oauth/google";
import { useEffect } from "react";
import { GOOGLE_CLIENT_ID } from "../constants/env";

const GoogleOAuthProviderWrapper = ({ children }) => (
  <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>{children}</GoogleOAuthProvider>
);

export default GoogleOAuthProviderWrapper;
