import { Container } from "@Financely/UI/container";
import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => [{ title: "Dashboard" }];

export default function ExpensePage() {
  return <Container className="mb-4 p-4">Dashboard</Container>;
}
