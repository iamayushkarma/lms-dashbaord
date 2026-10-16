const colors = [
  "bg-amber-400",
  "bg-rose-400",
  "bg-sky-500",
  "bg-emerald-500",
  "bg-violet-400",
];

type AvatarStackProps = {
  avatars: string[]; // initials
  more?: number;
  max?: number;
};

export default function AvatarStack({ avatars, more = 0, max = 4 }: AvatarStackProps) {
  return (
    <div className="flex items-center">
      <div className="flex -space-x-2">
        {avatars.slice(0, max).map((initials, index) => (
          <span
            key={`${initials}-${index}`}
            className={`grid h-7 w-7 place-items-center rounded-full text-[10px] font-semibold text-white ring-2 ring-white ${colors[index % colors.length]}`}
          >
            {initials}
          </span>
        ))}
      </div>
      {more > 0 && (
        <span className="ml-2 text-xs font-medium text-slate-500">+{more}</span>
      )}
    </div>
  );
}
