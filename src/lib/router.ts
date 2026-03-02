export type RouteParams = Record<string, string>;

export function matchRoute(pattern: string, path: string): RouteParams | null {
  const normalize = (value: string) =>
    value
      .replace(/\/+$/g, "")
      .replace(/^$/, "/")
      .split("/")
      .filter(Boolean);

  const patternParts = normalize(pattern);
  const pathParts = normalize(path);

  if (patternParts.length !== pathParts.length) {
    return null;
  }

  const params: RouteParams = {};

  for (let index = 0; index < patternParts.length; index += 1) {
    const patternPart = patternParts[index];
    const pathPart = pathParts[index];

    if (!patternPart || !pathPart) {
      return null;
    }

    if (patternPart.startsWith(":")) {
      params[patternPart.slice(1)] = decodeURIComponent(pathPart);
      continue;
    }

    if (patternPart !== pathPart) {
      return null;
    }
  }

  return params;
}
