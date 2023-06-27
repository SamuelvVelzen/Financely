import { DashboardHeader } from "@Financely/Module/dashboard";
import { Avatar } from "@Financely/UI/avatar";
import type { V2_MetaFunction } from "@remix-run/node";
import { useUser } from "~/utils";

export const meta: V2_MetaFunction = () => [{ title: "Dashboard" }];

export default function ExpensePage() {
  const user = useUser();

  return (
    <>
      <DashboardHeader
        titleText={"Dashboard"}
        rightChild={<Avatar user={user} />}
      />
    </>
  );
}
