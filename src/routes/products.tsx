import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { useCart, parsePrice } from "@/components/CartProvider";
import products from "@/assets/products.jpg";
import clayPot from "@/assets/clay-pot.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Pure Cow Ghee in 200ml, 500ml & 1kg" },
      {
        name: "description",
        content:
          "Buy Savi Halli Thuppa bilona-churned cow ghee in 200 ml, 500 ml and 1 kg jars. Ingredients, nutrition and usage details included.",
      },
      { property: "og:title", content: "Savi Halli Thuppa — Products" },
      {
        property: "og:description",
        content:
          "Bilona-churned cow ghee in 200 ml, 500 ml and 1 kg jars, with full ingredient and nutrition detail.",
      },
    ],
  }),
  component: Products,
});

const jars = [
  {
    size: "200 ml",
    mrp: "₹350",
    price: "₹280",
    note: "A first jar, or a travel jar.",
    desc: "Enough for two weeks of dosas and a spoon over rice. Grainy, deep gold, unmistakably wood-fired.",
  },
  {
    size: "400 ml",
    mrp: "₹700",
    price: "₹560",
    note: "A small family favourite.",
    desc: "A balanced option for everyday cooking, breakfast and a few warm sweet moments at home.",
  },
  {
    size: "600 ml",
    mrp: "₹1,050",
    price: "₹840",
    note: "A dependable everyday jar.",
    desc: "For households that cook with ghee daily and want a steady stock without the large jar commitment.",
  },
  {
    size: "800 ml",
    mrp: "₹1,400",
    price: "₹1,120",
    note: "For regular family use.",
    desc: "Perfect for cooking, serving and gifting during busy weeks when you want a fuller kitchen staple.",
  },
  {
    size: "1 kg",
    mrp: "₹1,750",
    price: "₹1,400",
    note: "For a full kitchen.",
    desc: "For households that cook every meal at home, and for festival months when sweets take over.",
  },
];

const nutrition = [
  ["Energy", "900 kcal / 100 g"],
  ["Total Fat", "100 g"],
  ["Saturated Fat", "62 g"],
  ["Trans Fat", "0 g"],
  ["Vitamin A", "Naturally present"],
  ["Ingredients", "Cow milk ghee (100%)"],
];

function Products() {
  const { add } = useCart();
  return (
    <main>
      <section className="surface-forest grain pt-40 pb-24">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <p className="eyebrow">Products</p>
          <h1 className="mt-5 font-display text-4xl text-cream sm:text-6xl">
            One ghee. Many jars.
          </h1>
          <div className="mx-auto mt-7 rule-gold" />
          <p className="mt-7 text-sm text-cream/70">
            Delivery available · Dispatched in 48 hours · Monthly subscription on
            request
          </p>
        </div>
      </section>

      <section className="bg-background py-24">
        <ul className="mx-auto grid max-w-7xl gap-8 px-5 sm:grid-cols-2">
          {jars.map((j, i) => (
            <Reveal as="li" key={j.size} delay={i * 90}>
              <article className="group card-warm flex h-full flex-col overflow-hidden transition-shadow duration-500 hover:shadow-[var(--shadow-gold)]">
                <div className="overflow-hidden bg-secondary [perspective:1000px]">
                  <img
                    src={products}
                    alt={`${j.size} jar of pure cow ghee`}
                    loading="lazy"
                    width={1408}
                    height={1104}
                    className="h-72 w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:[transform:rotateY(12deg)_scale(1.08)]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-9">
                  <h2 className="font-display text-3xl text-forest">{j.size}</h2>
                  <p className="mt-1 text-xs tracking-[0.16em] text-gold uppercase">
                    {j.note}
                  </p>
                  <p className="mt-5 flex-1 text-sm leading-relaxed text-brown">
                    {j.desc}
                  </p>
                  <div className="mt-7 flex items-baseline gap-3">
                    <span className="text-sm text-brown line-through">{j.mrp}</span>
                    <span className="text-[0.65rem] font-semibold tracking-[0.12em] text-gold uppercase">
                      20% Off
                    </span>
                    <span className="font-display text-2xl text-forest">{j.price}</span>
                  </div>
                  <div className="mt-6 flex gap-3">
                    <button
                      onClick={() => add(j.size, parsePrice(j.price))}
                      className="flex-1 rounded-full border border-gold bg-forest py-3 text-center text-[0.7rem] tracking-[0.2em] text-cream uppercase transition-colors hover:bg-gold hover:text-forest-deep"
                    >
                      Add to Order
                    </button>
                    <a
                      href="https://wa.me/918088200400"
                      className="rounded-full border border-border px-5 py-3 text-[0.7rem] tracking-[0.2em] text-brown uppercase transition-colors hover:border-gold"
                    >
                      Subscribe
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="bg-secondary py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-2">
          <Reveal>
            <img
              src={clayPot}
              alt="Ghee poured from a clay pot"
              loading="lazy"
              width={1200}
              height={1408}
              className="w-full object-cover"
            />
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow">Ingredients & Nutrition</p>
            <h2 className="mt-5 font-display text-4xl text-forest">
              One ingredient, honestly listed
            </h2>
            <div className="mt-6 rule-gold" />
            <dl className="mt-9 divide-y divide-border border-y border-border">
              {nutrition.map(([k, v]) => (
                <div key={k} className="flex justify-between gap-6 py-4">
                  <dt className="text-xs tracking-[0.18em] text-brown uppercase">{k}</dt>
                  <dd className="text-sm text-forest">{v}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-10">
              <p className="eyebrow">How to use</p>
              <p className="mt-4 text-sm leading-relaxed text-brown">
                A spoon over hot rice with salt. For tempering dal and sambar. Brushed on
                chapathi and dosa. For kesari bath, holige and Mysore pak. Store in a cool
                dry place and always use a dry spoon.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
