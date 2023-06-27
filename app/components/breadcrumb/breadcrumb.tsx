import { NavLink } from "@remix-run/react";
import { PropsWithChildren } from "react";

export type IBreadCrumbConfig = {
  path: string;
  child: React.ReactNode;
};

type BreadCrumbProps = {
  className?: string;
  breadCrumbConfig: IBreadCrumbConfig;
};

export function BreadCrumb({
  className = "",
  children,
  breadCrumbConfig,
}: PropsWithChildren<BreadCrumbProps>) {
  return (
    <NavLink
      to={breadCrumbConfig.path}
      className={({ isActive }) =>
        `${className} text-sm text-darkgrey ${isActive && "underline"}`
      }
      end
    >
      {breadCrumbConfig.child}
    </NavLink>
  );
}
