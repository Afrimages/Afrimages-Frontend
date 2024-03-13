import { useSession } from "next-auth/react";

const AuthProvider = ({ children }) => {
  // do some state manager update here
  const { data: session } = useSession();

  return <>{children}</>;
};

export default AuthProvider;
