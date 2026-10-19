import { useState } from "react";
import { FileText, Plus } from "lucide-react";

function StudentNotes() {
  const [note, setNote] = useState("");
  const [savedNote, setSavedNote] = useState("");

  function addNote() {
    const trimmedNote = note.trim();

    if (!trimmedNote) return;

    setSavedNote(trimmedNote);
    setNote("");
  }

  return (
    <section className="rounded-xl border border-slate-200/80 bg-white p-4">
      <div className="mb-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-50 text-violet-600">
            <FileText size={16} />
          </div>

          <h3 className="text-sm font-semibold text-slate-900">Notes</h3>
        </div>

        <button
          type="button"
          onClick={addNote}
          disabled={!note.trim()}
          className="inline-flex items-center gap-1 text-xs font-medium text-violet-700 hover:text-violet-900 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <Plus size={14} />
          Add note
        </button>
      </div>

      <textarea
        value={note}
        onChange={(event) => setNote(event.target.value)}
        placeholder="Add a note about this student..."
        rows={2}
        className="w-full resize-y rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-xs text-slate-700 outline-none placeholder:text-slate-400 focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
      />

      {savedNote && (
        <div className="mt-3 rounded-lg bg-slate-50 p-3">
          <p className="whitespace-pre-wrap text-xs leading-5 text-slate-700">
            {savedNote}
          </p>
        </div>
      )}
    </section>
  );
}

export default StudentNotes;
