import { type KeyboardEvent } from "react";
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
  const activeIndex = Math.max(
    0,
    items.findIndex((item) => item.id === activeId),
  );

  const focusItem = (index: number) => {
    const next = items[index];
    if (!next) {
      return;
    }

    document.getElementById(`segmented-tab-${next.id}`)?.focus();
    onChange(next.id);
  };

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      focusItem((index + 1) % items.length);
    }

    if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      focusItem((index - 1 + items.length) % items.length);
    }

    if (event.key === "Home") {
      event.preventDefault();
      focusItem(0);
    }

    if (event.key === "End") {
      event.preventDefault();
      focusItem(items.length - 1);
    }
  };

  return (
    <div className={cn("ui-segmented", className)} role="tablist" aria-label={ariaLabel}>
      {items.map((item, index) => {
        const isActive = item.id === activeId;
        return (
          <button
            key={item.id}
            id={`segmented-tab-${item.id}`}
            type="button"
            role="tab"
            aria-selected={isActive}
            tabIndex={isActive || index === activeIndex ? 0 : -1}
            onClick={() => onChange(item.id)}
            onKeyDown={(event) => onKeyDown(event, index)}
            className={cn("ui-segmented__item", isActive && "ui-segmented__item--active")}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
