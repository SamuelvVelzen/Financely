import { DashboardSidenav } from "@Financely/Module/dashboard";
import type { LoaderArgs, V2_MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { validateUserSession } from "../util";

export const meta: V2_MetaFunction = () => [{ title: "Dashboard" }];

export const loader = async ({ params, request }: LoaderArgs) => {
  return await validateUserSession(request);
};

export default function DashboardPage() {
  return (
    <div className="flex h-full min-h-screen bg-lightgrey">
      <DashboardSidenav />

      <main className="flex w-full flex-col overflow-x-hidden p-4">
        <Outlet />
      </main>
    </div>
  );
}
