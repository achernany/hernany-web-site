import type { PropsWithChildren } from "react";

export function CaseLabelPill({ children }: PropsWithChildren) {
  return <span className="cs-layer-pill">{children}</span>;
}
