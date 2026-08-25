import { useState } from "react";
import { useCart } from "./CartProvider";

const WHATSAPP = "918088200400";

const fields = [
  { id: "name", label: "Full Name", type: "text", required: true },
  { id: "phone", label: "Phone", type: "tel", required: true },
  { id: "email", label: "Email", type: "email", required: false },
  { id: "address", label: "Address", type: "text", required: true },
  { id: "city", label: "City / Village", type: "text", required: true },
  { id: "district", label: "District", type: "text", required: true },
  { id: "pincode", label: "Pincode", type: "text", required: true },
] as const;

type Form = Record<string, string>;

/** Slide-over cart with customer details; Place Order opens WhatsApp with the order. */
export function CartDrawer() {
  const { items, open, setOpen, total, setQty, remove, clear } = useCart();
  const [form, setForm] = useState<Form>({});
  const [payment, setPayment] = useState("Cash on Delivery");
  const [notes, setNotes] = useState("");
  const [placed, setPlaced] = useState(false);

  const placeOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!items.length) return;

    const lines = [
      "*New Order — Savi Halli Thuppa*",
      "",
      "*Items*",
      ...items.map((i) => `• ${i.size} × ${i.qty} — ₹${i.qty * i.price}`),
      "",
      `*Total:* ₹${total}`,
      `*Payment:* ${payment}`,
      "",
      "*Customer*",
      ...fields.map((f) => `${f.label}: ${form[f.id] ?? "-"}`),
      notes.trim() ? `Notes: ${notes.trim()}` : "",
    ].filter(Boolean);

    window.open(
      `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(lines.join("\n"))}`,
      "_blank",
      "noopener",
    );
    setPlaced(true);
    clear();
  };

  return (
    <>
      <div
        aria-hidden
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-[60] bg-forest-deep/60 backdrop-blur-sm transition-opacity duration-400 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <aside
        role="dialog"
        aria-label="Your order"
        className={`fixed inset-y-0 right-0 z-[70] flex w-full max-w-md flex-col border-l border-gold/40 bg-background transition-transform duration-500 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="surface-forest flex items-center justify-between border-b border-gold/25 px-6 py-5">
          <p className="font-display text-lg tracking-[0.2em] text-cream uppercase">
            Your Order
          </p>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close cart"
            className="text-2xl leading-none text-gold"
          >
            ×
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {placed ? (
            <div className="card-warm p-8 text-center">
              <p className="font-display text-2xl text-forest">Order sent</p>
              <div className="mx-auto mt-5 rule-gold" />
              <p className="mt-5 text-sm leading-relaxed text-brown">
                Your order has opened in WhatsApp. Press send there and we will confirm
                from the kitchen shortly.
              </p>
              <button
                onClick={() => {
                  setPlaced(false);
                  setOpen(false);
                }}
                className="mt-7 rounded-full border border-gold bg-forest px-7 py-3 text-[0.7rem] tracking-[0.2em] text-cream uppercase"
              >
                Done
              </button>
            </div>
          ) : items.length === 0 ? (
            <p className="mt-10 text-center text-sm text-brown">
              Your order is empty. Add a jar to begin.
            </p>
          ) : (
            <form onSubmit={placeOrder} className="grid gap-6">
              <ul className="divide-y divide-border border-y border-border">
                {items.map((i) => (
                  <li key={i.size} className="flex items-center gap-4 py-4">
                    <div className="flex-1">
                      <p className="font-display text-lg text-forest">{i.size}</p>
                      <p className="text-xs tracking-[0.16em] text-gold uppercase">
                        ₹{i.price} each
                      </p>
                    </div>
                    <div className="flex items-center border border-border">
                      <button
                        type="button"
                        aria-label={`Decrease ${i.size}`}
                        onClick={() => setQty(i.size, i.qty - 1)}
                        className="px-3 py-1 text-brown"
                      >
                        −
                      </button>
                      <span className="w-8 text-center text-sm text-forest">{i.qty}</span>
                      <button
                        type="button"
                        aria-label={`Increase ${i.size}`}
                        onClick={() => setQty(i.size, i.qty + 1)}
                        className="px-3 py-1 text-brown"
                      >
                        +
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={() => remove(i.size)}
                      aria-label={`Remove ${i.size}`}
                      className="text-[0.65rem] tracking-[0.16em] text-brown uppercase hover:text-gold"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between">
                <span className="text-[0.7rem] tracking-[0.22em] text-brown uppercase">
                  Total
                </span>
                <span className="font-display text-2xl text-forest">₹{total}</span>
              </div>

              <div>
                <p className="eyebrow">Your Details</p>
                <div className="mt-4 grid gap-4">
                  {fields.map((f) => (
                    <div key={f.id}>
                      <label
                        htmlFor={`cart-${f.id}`}
                        className="text-[0.65rem] tracking-[0.24em] text-brown uppercase"
                      >
                        {f.label}
                        {f.required ? " *" : ""}
                      </label>
                      <input
                        id={`cart-${f.id}`}
                        type={f.type}
                        required={f.required}
                        value={form[f.id] ?? ""}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, [f.id]: e.target.value }))
                        }
                        className="mt-2 w-full border border-input bg-card px-4 py-3 text-sm text-forest focus:border-gold focus:outline-none"
                      />
                    </div>
                  ))}

                  <div>
                    <label
                      htmlFor="cart-payment"
                      className="text-[0.65rem] tracking-[0.24em] text-brown uppercase"
                    >
                      Payment
                    </label>
                    <select
                      id="cart-payment"
                      value={payment}
                      onChange={(e) => setPayment(e.target.value)}
                      className="mt-2 w-full border border-input bg-card px-4 py-3 text-sm text-forest focus:border-gold focus:outline-none"
                    >
                      <option>Cash on Delivery</option>
                      <option>UPI / Bank Transfer</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="cart-notes"
                      className="text-[0.65rem] tracking-[0.24em] text-brown uppercase"
                    >
                      Notes/Promo Code
                    </label>
                    <textarea
                      id="cart-notes"
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="mt-2 w-full border border-input bg-card px-4 py-3 text-sm text-forest focus:border-gold focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <button className="rounded-full border border-gold bg-forest px-8 py-4 text-xs tracking-[0.24em] text-cream uppercase transition-colors hover:bg-gold hover:text-forest-deep">
                Place Order on WhatsApp
              </button>
            </form>
          )}
        </div>
      </aside>
    </>
  );
}
