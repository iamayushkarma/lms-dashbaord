type ProgressBarProps = {
  value: number; // 0 - 100
  barClassName?: string;
};

export default function ProgressBar({
  value,
  barClassName = "bg-violet-500",
}: ProgressBarProps) {
  const percent = Math.min(100, Math.max(0, value));

  return (
    <div className="flex items-center gap-3">
      <div
        role="progressbar"
        aria-valuenow={percent}
        aria-valuemin={0}
        aria-valuemax={100}
        className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-200"
      >
        <div
          className={`h-full rounded-full transition-all ${barClassName}`}
          style={{ width: `${percent}%` }}
        />
      </div>
      <span className="w-9 text-right text-xs font-semibold text-slate-700">
        {percent}%
      </span>
    </div>
  );
}
