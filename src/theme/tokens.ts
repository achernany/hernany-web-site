import rawTokens from "./tokens.json";

export type ThemeTokens = typeof rawTokens;
export type TokenPath = string;

export const tokens: ThemeTokens = rawTokens;

export function getTokenValue(path: TokenPath): string | number | undefined {
  const parts = path.split(".");
  let current: unknown = tokens;

  for (const part of parts) {
    if (typeof current !== "object" || current === null || !(part in current)) {
      return undefined;
    }
    current = (current as Record<string, unknown>)[part];
  }

  if (typeof current === "string" || typeof current === "number") {
    return current;
  }

  return undefined;
}

export function resolveReference(value: string): string {
  const reference = value.match(/^\{(.+)}$/)?.[1];
  if (!reference) {
    return value;
  }

  const resolved = getTokenValue(reference);
  if (resolved === undefined) {
    return value;
  }

  return String(resolved);
}

export function toCssVarName(path: string): string {
  return `--token-${path.replace(/\./g, "-")}`;
}
