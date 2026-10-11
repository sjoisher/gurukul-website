"use client";

import { useState } from "react";
import { Play } from "lucide-react";

// Loads YouTube only when the visitor presses play.
export function Video({ id, title, play }: { id: string; title: string; play: string }) {
  const [active, setActive] = useState(false);

  return (
    <div className="relative aspect-video overflow-hidden rounded-2xl bg-ink">
      {active ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button type="button" onClick={() => setActive(true)} className="group absolute inset-0 h-full w-full" aria-label={`${play}: ${title}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover opacity-80 transition-opacity group-hover:opacity-100"
          />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-saffron text-white shadow-lg transition-transform group-hover:scale-105 sm:h-20 sm:w-20">
              <Play className="ml-1 h-8 w-8" fill="currentColor" />
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
