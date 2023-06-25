import { getUserById } from "@Financely/Data/user";
import { logout, requireUserId } from "~/session.server";

export async function validateUserSession(request: Request) {
  const userId = await requireUserId(request);

  const user = await getUserById(userId);
  if (user) return user;

  throw await logout(request);
}
