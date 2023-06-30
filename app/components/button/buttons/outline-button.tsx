import { propsWithOnClick } from "@Financely/Util/type";
import { PropsWithChildren } from "react";
import { ThemeColorEnum } from "./enums/ThemeColor.enum";

type OutlineButtonProps = { className?: string; theme: ThemeColorEnum };

export function OutlineButton({
  theme,
  className,
  children,
  onClick,
}: propsWithOnClick<PropsWithChildren<OutlineButtonProps>>) {
  return (
    <button
      onClick={onClick}
      className={`rounded-3xl px-4 py-2 ${OutlineButtonThemeOptions[theme].class} ${className}`}
    >
      {children}
    </button>
  );
}

const OutlineButtonThemeOptions: {
  [key in ThemeColorEnum]: {
    class: string;
  };
} = {
  [ThemeColorEnum.primary]: {
    class: "bg-light text-primary border border-primary",
  },
};
