import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type CartItem = { size: string; price: number; qty: number };

type CartCtx = {
  items: CartItem[];
  count: number;
  total: number;
  open: boolean;
  setOpen: (v: boolean) => void;
  add: (size: string, price: number) => void;
  setQty: (size: string, qty: number) => void;
  remove: (size: string) => void;
  clear: () => void;
};

const Ctx = createContext<CartCtx | null>(null);

/** Parses "₹1,699" into 1699. */
export function parsePrice(price: string) {
  return Number(price.replace(/[^\d]/g, "")) || 0;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [open, setOpen] = useState(false);

  const value = useMemo<CartCtx>(() => {
    const count = items.reduce((s, i) => s + i.qty, 0);
    const total = items.reduce((s, i) => s + i.qty * i.price, 0);
    return {
      items,
      count,
      total,
      open,
      setOpen,
      add: (size, price) => {
        setItems((prev) => {
          const found = prev.find((i) => i.size === size);
          if (found)
            return prev.map((i) => (i.size === size ? { ...i, qty: i.qty + 1 } : i));
          return [...prev, { size, price, qty: 1 }];
        });
        setOpen(true);
      },
      setQty: (size, qty) =>
        setItems((prev) =>
          qty <= 0
            ? prev.filter((i) => i.size !== size)
            : prev.map((i) => (i.size === size ? { ...i, qty } : i)),
        ),
      remove: (size) => setItems((prev) => prev.filter((i) => i.size !== size)),
      clear: () => setItems([]),
    };
  }, [items, open]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useCart() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
