"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { gallery } from "@/lib/site";

type Labels = { close: string; prev: string; next: string };

export function Gallery({ captions, labels }: { captions: string[]; labels: Labels }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState<number | null>(null);

  const open = (i: number) => {
    setIndex(i);
    dialog.current?.showModal();
  };
  const close = () => dialog.current?.close();
  const step = useCallback(
    (d: number) => setIndex((i) => (i === null ? i : (i + d + gallery.length) % gallery.length)),
    [],
  );

  useEffect(() => {
    const el = dialog.current;
    if (!el) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    const onClose = () => setIndex(null);
    el.addEventListener("keydown", onKey);
    el.addEventListener("close", onClose);
    return () => {
      el.removeEventListener("keydown", onKey);
      el.removeEventListener("close", onClose);
    };
  }, [step]);

  const current = index === null ? null : gallery[index];

  return (
    <>
      <ul className="columns-2 gap-3 sm:columns-3 lg:columns-4 [&>li]:mb-3">
        {gallery.map((img, i) => (
          <li key={img.n} className="break-inside-avoid">
            <button
              type="button"
              onClick={() => open(i)}
              className="group relative block w-full overflow-hidden rounded-xl bg-sand"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/images/gallery/${img.n}-sm.jpg`}
                alt={captions[i]}
                width={600}
                height={Math.round((600 * img.h) / img.w)}
                loading="lazy"
                decoding="async"
                className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-3 pb-2.5 pt-8 text-left text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                {captions[i]}
              </span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialog}
        className="m-auto h-full max-h-none w-full max-w-none bg-transparent p-0 backdrop:bg-black/90"
        onClick={(e) => e.target === e.currentTarget && close()}
        aria-label={current ? captions[index!] : undefined}
      >
        {current && (
          <div className="flex h-full flex-col items-center justify-center gap-4 p-4" onClick={(e) => e.target === e.currentTarget && close()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/images/gallery/${current.n}.jpg`}
              alt={captions[index!]}
              width={current.w}
              height={current.h}
              className="max-h-[80vh] w-auto max-w-full rounded-lg object-contain"
            />
            <p className="text-center text-sm text-white/90">
              {captions[index!]} <span className="text-white/50">· {index! + 1} / {gallery.length}</span>
            </p>
            <div className="flex gap-3">
              <button type="button" onClick={() => step(-1)} className="lightbox-btn" aria-label={labels.prev}>
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button type="button" onClick={close} className="lightbox-btn" aria-label={labels.close}>
                <X className="h-5 w-5" />
              </button>
              <button type="button" onClick={() => step(1)} className="lightbox-btn" aria-label={labels.next}>
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
