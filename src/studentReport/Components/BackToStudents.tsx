import { ArrowLeft } from "lucide-react";

function BackToStudents() {
  return (
    <button
      type="button"
      onClick={() => window.history.back()}
      className="cursor-pointer inline-flex items-center gap-2 text-xs font-medium text-[#2563eb] transition-colors hover:text-[#1D4ED8]"
    >
      <ArrowLeft size={15} strokeWidth={2} />
      <span>Back to Students</span>
    </button>
  );
}

export default BackToStudents;
