import { Avatar, IAvatarSize } from "@Financely/UI/avatar";
import { Logo } from "@Financely/UI/logo";
import { Sidenav, SidenavNavItem } from "@Financely/UI/nav";
import { SubText, SubTitle } from "@Financely/UI/typography";
import {
  ArrowRightOnRectangleIcon,
  CameraIcon,
  TagIcon,
} from "@heroicons/react/24/outline";
import { Form } from "@remix-run/react";
import { routes } from "~/config/routes";
import { useUser } from "~/utils";

type DashboardSidenavProps = {
  className?: string;
  includeName?: boolean;
};

export function DashboardSidenav({ className = "" }: DashboardSidenavProps) {
  const user = useUser();

  return (
    <Sidenav>
      <div className="m-5 mb-10 flex flex-col">
        <Logo includeName={true} />
        <SubTitle text={`Hello ${user.firstName}!`} />
        <SubText className=" text-darkgrey" text={user.email} />
      </div>

      <SidenavNavItem
        path="/dashboard"
        icon={<CameraIcon className="h-5 w-5" />}
        label="Dashboard"
      />

      <SidenavNavItem
        path=""
        icon={<CameraIcon className="h-5 w-5" />}
        label="Income"
      />

      <SidenavNavItem
        path={routes.dashboard.expense}
        icon={<CameraIcon className="h-5 w-5" />}
        label="Expense"
      />

      <SidenavNavItem
        path=""
        icon={<TagIcon className="h-5 w-5" />}
        label="Labels"
      />

      <SidenavNavItem
        path=""
        icon={<CameraIcon className="h-5 w-5" />}
        label="Add in-expense"
        onClick={() => {}}
      />

      <SidenavNavItem
        path=""
        className="mt-auto"
        icon={<Avatar user={user} size={IAvatarSize.sm} />}
        label="Account"
      />

      <Form action="/logout" method="post">
        <button
          type="submit"
          className="flex w-full items-center rounded-3xl px-5 py-3 text-danger hover:underline"
        >
          <ArrowRightOnRectangleIcon className="mr-2 h-5 w-5 " />
          <span>Logout</span>
        </button>
      </Form>
    </Sidenav>
  );
}
