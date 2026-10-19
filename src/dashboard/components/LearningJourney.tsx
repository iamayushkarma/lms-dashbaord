import { ArrowUpRight } from "lucide-react";
import learningJourney from "../../assets/Learning_Journey_Mountain_Dashboard.png";

export default function LearningJourney() {
  return (
    <section className="w-full rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-bold text-indigo-950 sm:text-base">
          Learning Journey
        </h2>

        <button
          type="button"
          className="flex cursor-pointer items-center gap-1 text-xs font-semibold text-indigo-500 transition hover:text-indigo-700"
        >
          View Details
          <ArrowUpRight size={14} />
        </button>
      </div>

      {/* Image */}
      <div className="mt-3 w-full overflow-hidden rounded-xl">
        <img
          src={learningJourney}
          alt="Learning Journey"
          className="block h-auto max-h-72 w-full object-contain"
        />
      </div>
    </section>
  );
}
