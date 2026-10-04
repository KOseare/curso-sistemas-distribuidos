"use client";
import StickyNote from "@/components/StickyNote";
import StickyNoteCreator from "@/components/StickyNoteCreator";
import { useState, useEffect, startTransition } from "react";

type StickyNoteData = {
  id: number;
  title: string;
  text: string;
  seconds: number;
};

export default function StickyNotesPage() {
  const [stickyNotes, setStickyNotes] = useState<StickyNoteData[]>([]);

  const addNoteHandler = (newNote: StickyNoteData) => {
    const newNotes = [...stickyNotes, newNote];
    setStickyNotes(newNotes);
    localStorage.setItem("stickyNotes", JSON.stringify(newNotes));
  };

  const getNotesFromLocalStorage = () => {
    const notes = localStorage.getItem("stickyNotes");
    if (notes) {
      startTransition(() => {
        setStickyNotes(JSON.parse(notes));
      });
    }
  };

  useEffect(() => {
    getNotesFromLocalStorage();
  }, []);

  return (
    <div className="text-zinc-800 flex flex-col flex-1 bg-zinc-50 font-sans">
      <main className="flex flex-wrap gap-4 w-full py-32 px-16">
        <StickyNoteCreator
          onAdd={addNoteHandler}
        />
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
