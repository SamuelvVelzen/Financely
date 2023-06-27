import { NavLink } from "@remix-run/react";
import { cloneElement, MouseEventHandler } from "react";

type SidenavItemProps = {
  className?: string;
  icon: JSX.Element;
  label: string;
  path: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

export function SidenavNavItem({
  className = "",
  icon,
  label,
  path,
  onClick,
}: SidenavItemProps) {
  function modify(child: JSX.Element, isActive: boolean) {
    return cloneElement(child, {
      className: `${child.props.className} ${isActive && "stroke-2"}`,
    });
  }

  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `${className} flex items-center rounded-3xl px-5 py-3 hover:underline ${
          isActive && "bg-lightgrey font-bold"
        }`
      }
      onClick={onClick}
      end
    >
      {({ isActive }) => (
        <>
          {modify(icon, isActive)}
          <span className="ml-2">{label}</span>
        </>
      )}
    </NavLink>
  );
}
