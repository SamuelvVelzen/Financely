import { BreadCrumbs, IBreadCrumbConfig } from "@Financely/UI/breadcrumb";
import { Container } from "@Financely/UI/container";
import Title from "@Financely/UI/typography/title";
import { createRoute } from "@Financely/Util/nav";
import { HomeIcon } from "@heroicons/react/24/outline";
import { routes } from "~/config/routes";

type DashboardHeaderProps = {
  className?: string;
  titleText: string;
  breadCrumbs?: IBreadCrumbConfig[];
  rightChild?: React.ReactNode;
};

export function DashboardHeader({
  className = "",
  titleText,
  breadCrumbs = [],
  rightChild,
}: DashboardHeaderProps) {
  const homeRoute = {
    path: createRoute([routes.dashboard.root]),
    child: <HomeIcon className="inline-block h-5 w-5" />,
  };

  return (
    <Container className={`${className} grid grid-cols-2`}>
      <BreadCrumbs breadCrumbs={[homeRoute, ...breadCrumbs]} />
      <Title text={titleText} className="col-start-1"></Title>

      <span className="col-start-2 row-span-2 row-start-1 self-center justify-self-end">
        {rightChild}
      </span>
    </Container>
  );
}
