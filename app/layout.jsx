import "./globals.css";
import { Rubik } from "next/font/google";
import Providers from "./providers";

const inter = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "RideFlex",
  description: "Explore Freedom on Two Wheels",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
