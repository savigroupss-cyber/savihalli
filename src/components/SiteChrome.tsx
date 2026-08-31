import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useCart } from "./CartProvider";

/** Header cart toggle with item count. */
function CartButton({ mobile = false }: { mobile?: boolean }) {
  const { count, setOpen } = useCart();
  return (
    <button
      onClick={() => setOpen(true)}
      aria-label={`Open your order (${count} items)`}
      className={`flex items-center gap-2 rounded-full border border-gold/60 px-4 py-2 text-[0.7rem] tracking-[0.2em] text-cream uppercase transition-colors hover:border-gold hover:text-gold ${
        mobile ? "w-full justify-center" : ""
      }`}
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor">
        <path
          strokeWidth="1.5"
          d="M6 7h12l-1 13H7L6 7Zm3 0a3 3 0 1 1 6 0"
          strokeLinecap="round"
        />
      </svg>
      Cart{count > 0 ? ` (${count})` : ""}
    </button>
  );
}

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/process", label: "Our Process" },
  { to: "/farm", label: "Farm" },
  { to: "/products", label: "Products" },
  { to: "/recipes", label: "Recipes" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "surface-forest border-b border-gold/25 py-3 shadow-[var(--shadow-warm)]"
          : "py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5">
        <Link to="/" className="group leading-none">
          <span className="block font-display text-lg tracking-[0.3em] text-cream uppercase sm:text-xl">
            Savi Halli Thuppa
          </span>
          <span className="mt-1 block text-[0.6rem] tracking-[0.32em] text-gold uppercase">
            Pure Cow Ghee · Karnataka
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-[0.7rem] tracking-[0.2em] text-cream/80 uppercase transition-colors hover:text-gold"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/products"
            className="rounded-full border border-gold px-5 py-2 text-[0.7rem] tracking-[0.2em] text-cream uppercase transition-colors hover:bg-gold hover:text-forest-deep"
          >
            Shop
          </Link>
          <CartButton />
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span className="block h-px w-6 bg-cream" />
          <span className="block h-px w-6 bg-cream" />
          <span className="block h-px w-6 bg-cream" />
        </button>
      </div>

      {open && (
        <nav className="surface-forest mt-3 border-t border-gold/20 px-5 py-5 lg:hidden">
          <ul className="grid gap-4">
            {nav.map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="text-xs tracking-[0.22em] text-cream/85 uppercase"
                >
                  {n.label}
                </Link>
              </li>
            ))}
            <li>
              <CartButton mobile />
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="surface-forest grain border-t border-gold/25">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-2xl tracking-[0.22em] text-cream uppercase">
            Savi Halli Thuppa
          </p>
          <div className="rule-gold mt-4" />
          <p className="mt-5 max-w-md text-sm leading-relaxed text-cream/70">
            A celebration of Karnataka's village heritage — crafted from pure cow milk,
            prepared using traditional methods, and inspired by the way generations
            preserved and cherished ghee before modern conveniences.
          </p>
          <p className="mt-6 text-xs tracking-[0.2em] text-gold uppercase">
             Karnataka · India
          </p>
        </div>

        <div>
          <p className="eyebrow">Quick Links</p>
          <ul className="mt-5 grid gap-3 text-sm text-cream/70">
            {[
              { to: "/about", label: "About Us" },
              { to: "/process", label: "Our Process" },
              { to: "/farm", label: "Our Farm" },
              { to: "/products", label: "Products" },
              { to: "/recipes", label: "Recipes" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow">Stay Close</p>
          <ul className="mt-5 grid gap-3 text-sm text-cream/70">
            <li>
              <a href="https://wa.me/918088200400" className="hover:text-gold">
                WhatsApp
              </a>
            </li>
            <li>
              <a href="https://instagram.com/savi_halli_thuppa" className="hover:text-gold">
                Instagram
              </a>
            </li>
            
            <li>
              <a href="mailto:savigroupss@gmail.com" className="hover:text-gold">
                savigroupss@gmail.com
              </a>
            </li>
            
          </ul>

        </div>
      </div>

      <div className="border-t border-gold/15 px-5 py-6">
        <p className="mx-auto max-w-7xl text-[0.7rem] tracking-[0.18em] text-cream/45 uppercase">
          © {new Date().getFullYear()} Savi Halli Thuppa · Pure Cow Ghee from the Heart of
          Karnataka
        </p>
      </div>
    </footer>
  );
}
