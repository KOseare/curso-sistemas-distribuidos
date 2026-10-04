import { useState } from "react";

type StickyNoteData = {
  id: number;
  title: string;
  text: string;
  seconds: number;
};

type StickyNoteCreatorProps = {
  onAdd: (note: StickyNoteData) => void;
};

export default function StickyNoteCreator({ onAdd }: StickyNoteCreatorProps) {

  const [newNote, setNewNote] = useState<StickyNoteData>(() => ({
    id: Date.now(),
    title: "",
    text: "",
    seconds: 0,
  }));

  const handleNoteChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNewNote({
      ...newNote,
      [e.target.name]: e.target.value,
    });
  };

  const addNoteHandler = () => {
    onAdd(newNote);
    setNewNote({
      id: Date.now(),
      title: "",
      text: "",
      seconds: 0,
    });
  }


  return (
    <article className="flex w-[300px] min-h-[200px] flex-col rounded border border-zinc-200 bg-white px-4 py-3 shadow-sm">
      <input
        type="text"
        placeholder="Título"
        className="text-sm font-medium text-zinc-900"
        name="title"
        value={newNote.title}
        onChange={handleNoteChange}
      />
      <textarea
        placeholder="Texto de la nota...."
        className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600"
        name="text"
        value={newNote.text}
        onChange={handleNoteChange}
      />
      <footer className="mt-3 border-t border-zinc-100 pt-2">
        <input
          type="number"
          placeholder="Segundos"
          className="text-sm font-medium text-zinc-900"
          name="seconds"
          value={newNote.seconds}
          onChange={handleNoteChange}
        />
        <button onClick={addNoteHandler}>Agregar</button>
      </footer>
    </article>
  );
}
