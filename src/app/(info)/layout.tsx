import "../globals.css";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="fixed z-10 p-6 flex w-full items-center justify-between">
          <a
            className="font-sans text-5xl text-orange-300 tracking-widest pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="/"
          >
            <Image
              src="/glow-0.svg"
              alt="Glow Logo"
              height={48}
              width={48}
              priority
            />
            GLOW
          </a>
        </nav>
        <main className="min-h-screen p-6">{children}</main>
      </body>
    </html>
  );
}
