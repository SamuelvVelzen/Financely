import { cssBundleHref } from "@remix-run/css-bundle";
import type { ActionArgs, LinksFunction, LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useSearchParams,
} from "@remix-run/react";
import { useEffect, useState } from "react";

import { getUser, requireUserId } from "~/session.server";
import stylesheet from "~/tailwind.css";
import { params } from "./config/params";
import { createTransactions } from "./models/transaction/transaction.server";
import { TransactionTypeEnum } from "./modules/transaction/enums";
import { TransactionModal } from "./modules/transaction/transaction-modal";
import { CreateTransactionViewModel } from "./modules/transaction/types";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export const loader = async ({ request }: LoaderArgs) => {
  return json({ user: await getUser(request) });
};

export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData();

  const userId = await requireUserId(request);

  const types = formData.getAll("type");
  const amounts = formData.getAll("amount");
  const names = formData.getAll("name");
  const dates = formData.getAll("date");
  const descriptions = formData.getAll("description");

  console.log(descriptions);

  const transactions = [];

  for (let i = 0; i < types.length; i++) {
    const typeFormValue = types[i];
    const amountFormValue = amounts[i];
    const nameFormValue = names[i];
    const dateFormValue = dates[i];
    const descriptionFormValue = descriptions[i];

    const type: TransactionTypeEnum = parseInt(typeFormValue?.toString());

    const transaction: CreateTransactionViewModel = {
      type,
      amount: parseFloat(amountFormValue?.toString()),
      name: nameFormValue?.toString(),
      payDate: new Date(dateFormValue?.toString()),
      description: descriptionFormValue?.toString(),
    };

    transactions.push(transaction);
  }

  await createTransactions(transactions, userId);

  return null;
};

export default function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open && searchParams.get(params.transactionModal)) {
      searchParams.delete(params.transactionModal);
      setSearchParams(searchParams);
    }

    if (!open && searchParams.get(params.transactionModal)) {
      setOpen(true);
    }
  }, [searchParams, open]);

  return (
    <html lang="en" className="h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />

        <TransactionModal openState={[open, setOpen]} />
      </body>
    </html>
  );
}
