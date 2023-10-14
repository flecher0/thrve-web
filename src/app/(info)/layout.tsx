import "../globals.css";
import { Inter } from "next/font/google";
import NavBar from "../components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <main className="min-h-screen p-6 wide-page-px">{children}</main>
      </body>
    </html>
  );
}
