"use client";

import { AppColor, Size } from "../";
import Button from "../Button";
import Icon, { IconType } from "../Icon";
import Dropdown from "../Dropdown";

export default function UserCenter() {
  return (
    <div className="flex items-center">
      <Dropdown content={<div className="p-4">Test</div>}>
        <Button size={Size.LG} rounded>
          <Icon color={AppColor.PRIMARY} type={IconType.HAMBURGER} />
        </Button>
      </Dropdown>
    </div>
  );
}
