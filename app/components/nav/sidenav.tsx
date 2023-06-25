import {
  ArrowRightOnRectangleIcon,
  CameraIcon,
  TagIcon,
} from "@heroicons/react/24/outline";
import { Form } from "@remix-run/react";
import { useState } from "react";
import { routes } from "~/config/routes";
import { useUser } from "~/utils";
import { Container } from "../container/container";
import { Logo } from "../logo";
import { SubText, SubTitle } from "../typography";
import { SidenavNavItem } from "./sidenav-nav-item";

type SidenavProps = { className?: string };

export function Sidenav({ className = "" }: SidenavProps) {
  const [openModal, setOpenModal] = useState(false);

  const user = useUser();

  return (
    <aside className={`${className} w-1/2 min-w-fit sm:w-1/3 md:w-1/4`}>
      <Container className={`flex h-full flex-col rounded-l-none p-5`}>
        <div className="m-5 mb-10 flex flex-col">
          <Logo includeName={true} />
          <SubTitle text={`Hello ${user.firstName}!`} />
          <SubText className=" text-darkgrey" text={user.email} />
        </div>

        <SidenavNavItem
          path="/dashboard"
          icon={<CameraIcon className="mr-2 h-5 w-5" />}
          label="Dashboard"
        />

        <SidenavNavItem
          path=""
          icon={<CameraIcon className="mr-2 h-5 w-5" />}
          label="Income"
        />

        <SidenavNavItem
          path={routes.dashboard.expense}
          icon={<CameraIcon className="mr-2 h-5 w-5" />}
          label="Expense"
        />

        <SidenavNavItem
          path=""
          icon={<TagIcon className="mr-2 h-5 w-5" />}
          label="Labels"
        />

        <SidenavNavItem
          path=""
          icon={<CameraIcon className="mr-2 h-5 w-5" />}
          label="Add in-expense"
          onClick={() => setOpenModal(true)}
        />

        <SidenavNavItem
          path=""
          className="mt-auto"
          icon={<CameraIcon className="mr-2 h-5 w-5" />}
          label="Account"
        />

        <Form action="/logout" method="post">
          <button
            type="submit"
            className="flex items-center rounded-3xl px-5 py-3 text-danger hover:underline"
          >
            <ArrowRightOnRectangleIcon className="mr-2 h-5 w-5 " />
            <span>Logout</span>
          </button>
        </Form>
      </Container>
    </aside>
  );
}
