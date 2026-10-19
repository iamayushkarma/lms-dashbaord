import indiaMap from "../../assets/Indian-map.png";

type LearningAcrossIndiaProps = {
  schoolCount?: number;
};

export default function LearningAcrossIndia({
  schoolCount = 150,
}: LearningAcrossIndiaProps) {
  return (
    <section className="w-full rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
      {/* Header */}
      <header className="mb-3">
        <h2 className="text-lg font-bold tracking-tight text-slate-900">
          Schools Across India
        </h2>
        <p className="mt-1 text-sm text-slate-500">Schools using our LMS</p>
      </header>

      {/* India map */}
      <div className="flex h-56 items-center justify-center overflow-hidden">
        <img
          src={indiaMap}
          alt="Map of India showing LMS school locations"
          className="h-full w-full object-contain"
        />
      </div>

      {/* School count */}
      <div className="mt-3 border-t border-slate-100 pt-4">
        <p className="text-sm text-slate-500">Total schools using our LMS</p>
        <p className="mt-1 text-2xl font-bold tracking-tight text-slate-900">
          {schoolCount.toLocaleString("en-IN")}+
        </p>
      </div>
    </section>
  );
}
