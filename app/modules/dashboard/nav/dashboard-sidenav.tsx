import { Avatar, IAvatarSize } from "@Financely/UI/avatar";
import { Logo } from "@Financely/UI/logo";
import { Sidenav, SidenavNavItem } from "@Financely/UI/nav";
import { SubText, SubTitle } from "@Financely/UI/typography";
import {
  ArrowRightOnRectangleIcon,
  CameraIcon,
  TagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Form, useSearchParams } from "@remix-run/react";
import { params } from "~/config/params";
import { routes } from "~/config/routes";
import { useUser } from "~/utils";

type DashboardSidenavProps = {
  className?: string;
  includeName?: boolean;
};

export function DashboardSidenav({ className = "" }: DashboardSidenavProps) {
  const user = useUser();
  const [searchParams, setSearchParams] = useSearchParams();

  function handleOpenModalClick(): void {
    searchParams.set(params.transactionModal, "true");

    setSearchParams(searchParams);
  }

  return (
    <Sidenav>
      <XMarkIcon className="absolute right-4 h-7 w-7" />

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
        path={routes.dashboard.incomes}
        icon={<CameraIcon className="h-5 w-5" />}
        label="Incomes"
      />

      <SidenavNavItem
        path={routes.dashboard.expenses}
        icon={<CameraIcon className="h-5 w-5" />}
        label="Expenses"
      />

      <SidenavNavItem
        path=""
        icon={<TagIcon className="h-5 w-5" />}
        label="Labels"
      />

      <div
        onClick={() => handleOpenModalClick()}
        className={`${className} flex items-center rounded-3xl px-5 py-3 hover:underline ${
          searchParams.get(params.transactionModal) && "bg-lightgrey font-bold"
        }`}
      >
        <CameraIcon className="h-5 w-5" />

        <span className="ml-2">Add in-expense</span>
      </div>

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
