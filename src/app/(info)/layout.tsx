import "../globals.css";
import { Inter } from "next/font/google";
import Image from "next/image";
import { AppColor, Size } from "../components";
import Button from "../components/Button";
import Icon, { IconType } from "../components/Icon";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="fixed z-10 w-full pt-5 pb-[19px] wide-page-px bg-white border-b border-zinc-200 flex items-center justify-between">
          <a
            className="font-sans font-semibold text-black text-3xl text-orange-500 tracking-widest pointer-events-none flex place-items-center gap-2 lg:pointer-events-auto lg:p-0"
            href="/"
          >
            <Image
              src="/glow-0.svg"
              alt="Glow Logo"
              height={40}
              width={40}
              priority
            />
            THRVE
          </a>
          <div className="flex items-center">
            <div className="relative ml-3">
              <div>
                <Button size={Size.LG} rounded>
                  <Icon color={AppColor.PRIMARY} type={IconType.HAMBURGER} />
                </Button>
              </div>
            </div>
          </div>
        </nav>
        <main className="min-h-screen p-6 wide-page-px">{children}</main>
      </body>
    </html>
  );
}
