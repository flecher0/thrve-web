import Dropdown, { Button } from "../Dropdown";
import Icon, { IconType } from "../Icon";
import { AppColor } from "..";

export default function UserCenter() {
  return (
    <div className="flex items-center">
      <Dropdown content={<div className="p-4">Test</div>}>
        <Button rounded>
          <Icon color={AppColor.PRIMARY} type={IconType.HAMBURGER} />
        </Button>
      </Dropdown>
    </div>
  );
}
