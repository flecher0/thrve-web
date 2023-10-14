import type { Metadata } from "next";
import { AppColor, Size } from "../components";
import Button from "../components/Button";

export const metadata: Metadata = {
  title: "Glow",
  description: "Join the Glow Network Today",
};

export default function Home() {
  return (
    <div
      className="flex flex-col justify-center"
      style={{ minHeight: `calc(100vh - 72px)`, paddingTop: 72 }}
    >
      <div className="h-full mx-auto mb-6 text-center">
        <h1 className="text-5xl font-bold tracking-tight">
          Grow with Glow today
        </h1>
        <div className="w-full mt-10 flex items-center justify-center gap-x-6">
          <Button
            color={AppColor.PRIMARY}
            size={Size.XL2}
            primary
            style={{ minWidth: 120 }}
          >
            Join Now
          </Button>
          <Button
            color={AppColor.PRIMARY}
            size={Size.XL2}
            style={{ minWidth: 120 }}
          >
            Log In
          </Button>
        </div>
      </div>
    </div>
  );
}
