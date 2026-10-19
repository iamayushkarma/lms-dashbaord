import { ArrowLeft } from "lucide-react";

function BackToStudents() {
  return (
    <button
      type="button"
      onClick={() => window.history.back()}
      className="inline-flex items-center gap-2 text-xs font-medium text-violet-700 transition-colors hover:text-violet-900"
    >
      <ArrowLeft size={15} strokeWidth={2} />
      <span>Back to Students</span>
    </button>
  );
}

export default BackToStudents;
