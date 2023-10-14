"use client";

import { useState } from "react";
import { AppColor } from "@/app/components";
import Button from "@/app/components/Button";
import Dropdown, { Button as DropdownButton } from "@/app/components/Dropdown";
import Icon, { IconType } from "@/app/components/Icon";
import Modal from "@/app/components/Modal";

export default function UserCenter() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="flex items-center">
      <Button
        color={AppColor.SECONDARY}
        border={false}
        shadow={false}
        rounded
        className="hover:bg-gray-100"
      >
        Become a THRVE Partner
      </Button>
      <Dropdown
        content={
          <div className="p-4">
            <Button onClick={() => setOpen(true)} className="w-full">
              Sign Up / Log In
            </Button>
          </div>
        }
      >
        <DropdownButton rounded threeD className="ml-2">
          <Icon color={AppColor.PRIMARY} type={IconType.HAMBURGER} />
        </DropdownButton>
      </Dropdown>
      {/* Modal must be placed outside the Dropdown's content because it unmounts when invisible */}
      <Modal open={open} onClose={() => setOpen(false)}>
        This component should prompt user to sign up / log in.
      </Modal>
    </div>
  );
}
