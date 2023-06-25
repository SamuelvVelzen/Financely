import { createExpense } from "@Financely/Data/transaction";
import type { ActionArgs, LoaderArgs, V2_MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { Sidenav } from "~/components/nav";
import { requireUserId } from "~/session.server";
import { validateUserSession } from "~/util/auth";

export const meta: V2_MetaFunction = () => [{ title: "Dashboard" }];

export const loader = async ({ params, request }: LoaderArgs) => {
  return await validateUserSession(request);
};

export const action = async ({ request }: ActionArgs) => {
  const userId = await requireUserId(request);

  const formData = await request.formData();

  const amount = formData.get("amount");
  const name = formData.get("name");
  const description = formData.get("description");
  const payDate = formData.get("payDate");

  await createExpense({
    amount: 2342.51,
    name: "Test 1",
    description: "Test 3 beschrijving",
    payDate: new Date(),
    userId,
  });

  return null;
};

export default function DashboardPage() {
  return (
    <div className="flex h-full min-h-screen bg-lightgrey">
      <Sidenav />

      <main className="m-4 flex w-full flex-col">
        <Outlet />
      </main>
    </div>
  );
}
