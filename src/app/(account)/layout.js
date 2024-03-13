import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const AccountLayout = async ({ children }) => {
  const session = await getServerSession();

  if (session) redirect("/profile");

  return <>{children}</>;
};

export default AccountLayout;
