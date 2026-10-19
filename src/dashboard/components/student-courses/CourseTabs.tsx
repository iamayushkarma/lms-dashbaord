import { useRef } from "react";
import type { KeyboardEvent } from "react";
import type { TabItem, TabKey } from "./types";

type CourseTabsProps = {
  tabs: TabItem[];
  active: TabKey;
  onChange: (key: TabKey) => void;
  panelId: string;
};

export default function CourseTabs({
  tabs,
  active,
  onChange,
  panelId,
}: CourseTabsProps) {
  const refs = useRef<Partial<Record<TabKey, HTMLButtonElement | null>>>({});

  function handleKeyDown(
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();

    const step = event.key === "ArrowRight" ? 1 : -1;
    const next = tabs[(index + step + tabs.length) % tabs.length];
    onChange(next.key);
    refs.current[next.key]?.focus();
  }

  return (
    <div
      role="tablist"
      aria-label="Filter courses"
      className="-mx-1 flex gap-1 overflow-x-auto px-1 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      {tabs.map((tab, index) => {
        const isActive = tab.key === active;

        return (
          <button
            key={tab.key}
            ref={(el) => {
              refs.current[tab.key] = el;
            }}
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-controls={panelId}
            tabIndex={isActive ? 0 : -1}
            onClick={() => onChange(tab.key)}
            onKeyDown={(event) => handleKeyDown(event, index)}
            className={`cursor-pointer relative shrink-0 whitespace-nowrap rounded-lg px-3.5 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-violet-500 ${
              isActive
                ? "bg-violet-50 text-violet-600 after:absolute after:inset-x-3 after:-bottom-px after:h-0.5 after:rounded-full after:bg-violet-500"
                : "text-slate-500 hover:bg-slate-100 hover:text-slate-700"
            }`}
          >
            {tab.label} ({tab.count})
          </button>
        );
      })}
    </div>
  );
}
