import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const Layout = async ({ children }) => {
  const session = await getServerSession();

  if (!session) redirect("/account/login");

  return <>{children}</>;
};

export default Layout;
