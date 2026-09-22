"use client";
import StickyNote from "@/components/StickyNote";
import { useState } from "react";

type StickyNoteData = {
  id: number;
  title: string;
  text: string;
  seconds: number;
};

export default function StickyNotesPage() {
  const [stickyNotes, setStickyNotes] = useState<StickyNoteData[]>([]);

  return (
    <div className="text-zinc-800 flex flex-col flex-1 bg-zinc-50 font-sans">
      <main className="flex flex-wrap gap-4 w-full py-32 px-16">
        <button
          onClick={() =>
            setStickyNotes([
              ...stickyNotes,
              {
                id: Date.now(),
                title: "New note",
                text: "Hello from StickyNote!",
                seconds: 0,
              },
            ])
          }
        >
          Add Sticky Note
        </button>
        {stickyNotes.map((stickyNote) => (
          <StickyNote
            key={stickyNote.id}
            title={stickyNote.title}
            text={stickyNote.text}
            seconds={stickyNote.seconds}
          />
        ))}
      </main>
    </div>
  );
}
