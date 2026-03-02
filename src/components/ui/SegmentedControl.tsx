import { cn } from "../../lib/cn";

export interface SegmentedItem {
  id: string;
  label: string;
}

interface SegmentedControlProps {
  items: SegmentedItem[];
  activeId: string;
  onChange: (id: string) => void;
  className?: string;
  ariaLabel?: string;
}

export function SegmentedControl({
  items,
  activeId,
  onChange,
  className,
  ariaLabel,
}: SegmentedControlProps) {
  return (
    <div className={cn("ui-segmented", className)} role="tablist" aria-label={ariaLabel}>
      {items.map((item) => {
        const isActive = item.id === activeId;
        return (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(item.id)}
            className={cn("ui-segmented__item", isActive && "ui-segmented__item--active")}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
