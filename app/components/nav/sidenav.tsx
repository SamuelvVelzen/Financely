import { PropsWithChildren } from "react";
import { Container } from "../container/container";

type SidenavProps = { className?: string };

export function Sidenav({
  className = "",
  children,
}: PropsWithChildren<SidenavProps>) {
  return (
    <aside className={`${className} w-1/2 min-w-fit sm:w-1/3 md:w-1/4`}>
      <Container className={`relative flex h-full flex-col rounded-l-none p-5`}>
        {children}
      </Container>
    </aside>
  );
}
