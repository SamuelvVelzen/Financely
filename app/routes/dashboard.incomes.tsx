import { DashboardHeader } from "@Financely/Module/dashboard";
import { TransactionModal } from "@Financely/Module/transaction";
import { Container } from "@Financely/UI/container";
import { List, ListItem } from "@Financely/UI/list";
import { SubText, SubTitle } from "@Financely/UI/typography";
import { createRoute } from "@Financely/Util/nav";
import type { V2_MetaFunction } from "@remix-run/node";
import { useState } from "react";
import { routes } from "~/config/routes";

export const meta: V2_MetaFunction = () => [{ title: "Incomes | Financely" }];

export default function ExpensePage() {
  const breadCrumbs = [
    {
      path: createRoute([routes.dashboard.root, routes.dashboard.incomes]),
      child: "Incomes",
    },
  ];

  const openState = useState(false);

  return (
    <>
      <DashboardHeader
        titleText={"Incomes"}
        breadCrumbs={breadCrumbs}
        className="mb-4"
      />

      <Container>
        <div>
          <SubText text={"Last month (30 days)"} className="text-darkgrey" />
          <SubTitle text={"Incomes"} className="mb-4 w-full border-b-2 pb-4" />
        </div>
        <List>
          {[12, 42, 24, 1, 2, 12, 42, 5, 5].map((x, index) => (
            <ListItem key={index} className="px-0">
              {x}
            </ListItem>
          ))}
        </List>
      </Container>

      <button onClick={() => openState[1](true)}>
        open {openState[0] ? "open" : "close"}
      </button>

      <TransactionModal openState={openState} />
    </>
  );
}
