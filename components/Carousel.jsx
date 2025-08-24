import { useRef, useState } from "react";

/** Lightweight, dependency-free carousel with green theme and left-aligned text */
export default function Carousel({ images, altBase = "Slide", className = "" }) {
  const [idx, setIdx] = useState(0);
  const touchStartX = useRef(0);
  const touchDeltaX = useRef(0);

  const go = (n) => setIdx((p) => (p + n + images.length) % images.length);
  const goto = (n) => setIdx(n);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  };
  const onTouchMove = (e) => {
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };
  const onTouchEnd = () => {
    if (Math.abs(touchDeltaX.current) > 40) go(touchDeltaX.current > 0 ? -1 : 1);
  };

  return (
    <div className={`relative select-none ${className}`}>
      <div
        className="overflow-hidden rounded-lg bg-black"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        aria-roledescription="carousel"
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${idx * 100}%)` }}
        >
          {images.map((src, i) => (
            <div key={i} className="w-full flex-shrink-0">
              <img
                src={src}
                alt={`${altBase} ${i + 1}`}
                className="w-full h-56 md:h-64 lg:h-72 object-contain bg-black"
                loading="lazy"
              />
              <p className="text-base font-medium text-text-soft mt-2 text-left">
                {`${altBase} ${i + 1}`}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <button
        type="button"
        onClick={() => go(-1)}
        className="hidden sm:flex absolute left-2 top-1/2 -translate-y-1/2 h-9 w-9 items-center justify-center rounded-full bg-lime-neon text-black hover:bg-lime-soft shadow-md focus:ring-4 focus:ring-lime-neon/30 transition-all"
        aria-label="Previous slide"
      >
        ‹
      </button>
      <button
        type="button"
        onClick={() => go(1)}
        className="hidden sm:flex absolute right-2 top-1/2 -translate-y-1/2 h-9 w-9 items-center justify-center rounded-full bg-lime-neon text-black hover:bg-lime-soft shadow-md focus:ring-4 focus:ring-lime-neon/30 transition-all"
        aria-label="Next slide"
      >
        ›
      </button>

      {/* Dots */}
      <div className="mt-3 flex items-center justify-start gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => goto(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2.5 w-2.5 rounded-full transition ${
              i === idx ? "bg-lime-neon" : "bg-white/30 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
