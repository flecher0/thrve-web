import Image from "next/image";
import { AppColor, Size } from "../";
import Button from "../Button";
import Icon, { IconType } from "../Icon";

export default function NavBar() {
  return (
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
          <Button size={Size.LG} rounded>
            <Icon color={AppColor.PRIMARY} type={IconType.HAMBURGER} />
          </Button>
        </div>
      </div>
    </nav>
  );
}
