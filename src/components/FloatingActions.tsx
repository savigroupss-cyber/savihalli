import { useEffect, useState } from "react";
import { useCart } from "./CartProvider";

/** Cursor glow, floating WhatsApp button and sticky Order Now bar. */
export function FloatingActions() {
  const { count, setOpen } = useCart();
  const [pos, setPos] = useState({ x: -400, y: -400 });
  const [showOrder, setShowOrder] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const scroll = () => setShowOrder(window.scrollY > 600);
    window.addEventListener("pointermove", move);
    window.addEventListener("scroll", scroll, { passive: true });
    scroll();
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("scroll", scroll);
    };
  }, []);

  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none fixed z-40 hidden h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 mix-blend-soft-light md:block"
        style={{
          left: pos.x,
          top: pos.y,
          background:
            "radial-gradient(circle, oklch(0.716 0.113 78.5 / 0.35) 0%, transparent 65%)",
        }}
      />

      <a
        href="https://wa.me/918088200400"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="animate-float-y fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-forest text-gold ring-1 ring-gold/60 shadow-[var(--shadow-warm)] transition-transform hover:scale-110"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor">
          <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.66.15-.2.3-.78.96-.96 1.16-.18.2-.35.22-.65.07-.3-.15-1.13-.42-2.15-1.33-.8-.71-1.33-1.59-1.48-1.89-.15-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.66-1.6-.9-2.19-.24-.57-.48-.5-.66-.5h-.56c-.2 0-.5.07-.76.37-.26.3-1 .97-1 2.37s1.02 2.75 1.17 2.95c.15.2 2.02 3.2 4.9 4.36 2.87 1.16 2.87.77 3.39.72.52-.05 1.68-.68 1.92-1.35.24-.66.24-1.23.17-1.35-.07-.12-.27-.19-.57-.34ZM12 22a10 10 0 1 1 8.53-4.75L22 22l-4.9-1.28A9.96 9.96 0 0 1 12 22Z" />
        </svg>
      </a>

      <div
        className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
          showOrder ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
        }`}
      >
        <button
          onClick={() => setOpen(true)}
          className="inline-flex items-center gap-2 rounded-full border border-gold bg-forest px-6 py-3 text-xs font-medium tracking-[0.22em] uppercase text-cream transition-colors hover:bg-forest-deep"
        >
          {count > 0 ? `Your Orders (${count})` : "Your Orders"}
        </button>
      </div>
    </>
  );
}
