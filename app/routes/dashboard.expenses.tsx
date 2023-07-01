import { getAllExpenses } from "@Financely/Data/transaction";
import { DashboardHeader } from "@Financely/Module/dashboard";
import { Container } from "@Financely/UI/container";
import { List, ListItem } from "@Financely/UI/list";
import { SubText, SubTitle, Text } from "@Financely/UI/typography";
import { createRoute } from "@Financely/Util/nav";
import { json, LoaderArgs, V2_MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { routes } from "~/config/routes";

export const meta: V2_MetaFunction = () => [{ title: "Expenses | Financely" }];

export const loader = async ({ request }: LoaderArgs) => {
  const data = await getAllExpenses();

  return json({ data });
};

export default function ExpensePage() {
  const { data } = useLoaderData<typeof loader>();

  const breadCrumbs = [
    {
      path: createRoute([routes.dashboard.root, routes.dashboard.expenses]),
      child: "expenses",
    },
  ];

  const formatter = new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "USD",
  });

  return (
    <>
      <DashboardHeader
        titleText={"Expenses"}
        breadCrumbs={breadCrumbs}
        className="mb-4"
      />

      <Container>
        <div>
          <SubText text={"Last month (30 days)"} className="text-darkgrey" />
          <SubTitle text={"Expenses"} className="w-full border-b-2 pb-4" />
        </div>
        <List>
          {data.map((x, index) => (
            <ListItem key={index} className="px-0">
              <SubTitle text={x.name} />

              <div className="flex items-center justify-between gap-4">
                {x.description && (
                  <Text text={x.description} shouldTruncate={true} />
                )}
                <p>{formatter.format(parseFloat(x.amount))}</p>
              </div>
            </ListItem>
          ))}
        </List>
      </Container>
    </>
  );
}
