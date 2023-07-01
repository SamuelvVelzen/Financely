import { propsWithOnClick } from "@Financely/Util/type";
import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { ThemeColorEnum } from "./enums/ThemeColor.enum";

type ButtonProps = {
  className?: string;
  theme: ThemeColorEnum;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
};

export function Button({
  type = "button",
  theme,
  className,
  children,
  onClick,
}: propsWithOnClick<PropsWithChildren<ButtonProps>>) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`rounded-3xl px-4 py-2 ${ButtonThemeOptions[theme].class} ${className}`}
    >
      {children}
    </button>
  );
}

const ButtonThemeOptions: {
  [key in ThemeColorEnum]: {
    class: string;
  };
} = {
  [ThemeColorEnum.primary]: {
    class: "bg-primary text-light",
  },
};
