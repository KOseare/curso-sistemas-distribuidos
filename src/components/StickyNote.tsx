type StickyNoteCounterProps = {
  seconds: number;
};

function StickyNoteCounter({ seconds }: StickyNoteCounterProps) {
  return (
    <span className="text-xs text-zinc-400 tabular-nums">{seconds}s</span>
  );
}

type StickyNoteProps = {
  title: string;
  text: string;
  seconds: number;
};

export default function StickyNote({ title, text, seconds }: StickyNoteProps) {
  return (
    <article className="flex w-[300px] min-h-[200px] flex-col rounded border border-zinc-200 bg-white px-4 py-3 shadow-sm">
      <h2 className="text-sm font-medium text-zinc-900">{title}</h2>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600">{text}</p>
      <footer className="mt-3 border-t border-zinc-100 pt-2">
        <StickyNoteCounter seconds={seconds} />
      </footer>
    </article>
  );
}
