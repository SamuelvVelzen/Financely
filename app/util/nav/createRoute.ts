export function createRoute(path: string[], config?: { isAbsolute: boolean }) {
  const route = path.join("/");

  return config?.isAbsolute ? route : `/${route}`;
}
