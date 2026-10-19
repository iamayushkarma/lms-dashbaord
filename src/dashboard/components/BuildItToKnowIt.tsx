import { ArrowRight } from "lucide-react";
import circuitBoardImage from "../../assets/Futuristic-Blue-Circuit-Board-Macro.png";

type BuildItToKnowItProps = {
  onOpenLab?: () => void;
};

export default function BuildItToKnowIt({ onOpenLab }: BuildItToKnowItProps) {
  return (
    <section className="flex h-full min-h-[280px] w-full min-w-0 flex-col rounded-2xl border border-slate-100 bg-white p-2 shadow-sm sm:p-3">
      {/* Header */}
      <header className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#2563eb] text-white shadow-sm">
          <ArrowRight size={21} />
        </div>

        <h2 className="text-base font-bold tracking-tight text-slate-900 sm:text-lg">
          Build It To Know It
        </h2>
      </header>

      {/* Circuit chip promotional card */}
      <article
        className="relative flex min-h-[210px] flex-1 flex-col items-start overflow-hidden rounded-[22px] bg-cover bg-center p-5 sm:p-6"
        style={{
          backgroundImage: `linear-gradient(100deg, rgba(12, 38, 105, 0.88) 0%, rgba(20, 68, 160, 0.62) 55%, rgba(15, 70, 130, 0.28) 100%), url(${circuitBoardImage})`,
        }}
      >
        <div className="relative z-10">
          <h3 className="text-xl font-extrabold leading-tight tracking-tight text-white sm:text-2xl">
            Build It
            <br />
            To Know It
          </h3>

          <p className="mt-3 max-w-sm text-sm leading-relaxed text-blue-50 sm:text-base">
            Reading about a circuit is one thing. Wiring it up is what makes it
            stick.
          </p>

          <button
            type="button"
            onClick={onOpenLab}
            className="mt-5 inline-flex min-h-10 cursor-pointer items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-[#2563eb] shadow-sm transition-colors duration-200 hover:bg-blue-50 active:bg-blue-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#2563eb]"
          >
            Open a lab
            <ArrowRight size={17} />
          </button>
        </div>
      </article>
    </section>
  );
}
