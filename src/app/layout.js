import { Poppins } from "next/font/google";
import Providers from "@/utils/providers/provider";
import "../../public/globals.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata = {
  title: "Afrimages",
  description: "Providing African images for individuals and designers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
