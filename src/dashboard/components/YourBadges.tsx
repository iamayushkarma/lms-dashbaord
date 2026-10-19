import { useState } from "react";
import { Award, ArrowRight, FolderOpen } from "lucide-react";

type BadgeItem = {
  id: number;
  name: string;
  earned: boolean;
};

const BADGES: BadgeItem[] = [
  { id: 1, name: "7-Day Streak", earned: false },
  { id: 2, name: "Button Master", earned: false },
  { id: 3, name: "First Circuit", earned: false },
  { id: 4, name: "Theory Master", earned: false },
  { id: 5, name: "Traffic Light Engineer", earned: false },
];

type YourBadgesProps = {
  badges?: BadgeItem[];
  onViewAll?: () => void;
};

export default function YourBadges({
  badges = BADGES,
  onViewAll,
}: YourBadgesProps) {
  const [showAll, setShowAll] = useState(false);

  const visibleBadges = showAll ? badges : badges.slice(0, 5);
  const earnedCount = badges.filter((badge) => badge.earned).length;

  function handleViewAll() {
    setShowAll((previous) => !previous);
    onViewAll?.();
  }

  return (
    <section className="w-full min-w-0 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm sm:p-5">
      {/* Section header */}
      <div className="mb-4 flex items-center justify-between gap-2">
        <div className="flex min-w-0 items-center gap-2.5">
          <Award
            aria-hidden="true"
            className="h-5 w-5 shrink-0 text-indigo-500"
            strokeWidth={2}
          />

          <h2 className="truncate text-base font-bold tracking-tight text-slate-900">
            Your badges
          </h2>
        </div>

        <button
          type="button"
          onClick={handleViewAll}
          aria-expanded={showAll}
          className="inline-flex cursor-pointer shrink-0 items-center gap-1 text-xs font-medium text-[#2563eb] transition  sm:text-sm"
        >
          {showAll ? "Show Less" : "View All"}
          <ArrowRight
            className={`h-3.5 w-3.5 transition-transform ${
              showAll ? "rotate-90" : ""
            }`}
          />
        </button>
      </div>

      {/* Badge pills */}
      <div className="flex flex-wrap gap-2.5">
        {visibleBadges.map((badge) => (
          <div
            key={badge.id}
            className={`inline-flex min-h-10 max-w-full items-center gap-2 rounded-full border px-3.5 py-2 transition-colors ${
              badge.earned
                ? "border-indigo-200 bg-indigo-50 text-indigo-700"
                : "border-slate-200 bg-white text-slate-500"
            }`}
          >
            <FolderOpen
              aria-hidden="true"
              className={`h-3.5 w-3.5 shrink-0 ${
                badge.earned ? "text-indigo-500" : "text-slate-400"
              }`}
              strokeWidth={1.7}
            />

            <span
              className={`truncate text-xs italic sm:text-sm ${
                badge.earned ? "font-medium" : "font-normal"
              }`}
            >
              {badge.name}
            </span>
          </div>
        ))}
      </div>

      {/* Earned progress */}
      <p className="mt-4 text-xs text-slate-500 sm:text-sm">
        {earnedCount} of {badges.length} earned
      </p>
    </section>
  );
}
