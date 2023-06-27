import { DashboardHeader } from "@Financely/Module/dashboard";
import { Container } from "@Financely/UI/container";
import type { V2_MetaFunction } from "@remix-run/node";
import { routes } from "~/config/routes";
import { createRoute } from "~/util/nav";

export const meta: V2_MetaFunction = () => [{ title: "Dashboard" }];

export default function ExpensePage() {
  const breadCrumbs = [
    {
      path: createRoute([routes.dashboard.root, routes.dashboard.expenses]),
      child: "expenses",
    },
  ];

  return (
    <>
      <DashboardHeader
        titleText={"Expenses"}
        breadCrumbs={breadCrumbs}
        className="mb-4"
      />
      <Container className="mb-4">Expense</Container>
      <Container className="mb-4">Expense</Container>
      <Container className="mb-4">Expense</Container>
      <Container className="mb-4">Expense</Container>
    </>
  );
}
