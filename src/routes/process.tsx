import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import cows from "@/assets/cows-grazing.jpg";
import butter from "@/assets/butter.jpg";
import kitchen from "@/assets/village-kitchen.jpg";
import clayPot from "@/assets/clay-pot.jpg";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Our Process — Bilona Churned Ghee, Step by Step" },
      {
        name: "description",
        content:
          "Every stage of how Savi Halli Thuppa is made: dawn milking, clay-set curd, hand bilona churning, slow firewood heat and natural clay-pot storage.",
      },
      { property: "og:title", content: "Our Process — Savi Halli Thuppa" },
      {
        property: "og:description",
        content:
          "Dawn milking, clay-set curd, hand churning, slow firewood heat and clay-pot storage.",
      },
    ],
  }),
  component: Process,
});

const stages = [
  {
    n: "01",
    t: "Fresh Cow Milk",
    img: cows,
    d: "The herd is milked by hand at first light. Milk is strained through cotton and carried to the kitchen within minutes — it is never chilled, tankered or blended with another farm's collection.",
  },
  {
    n: "02",
    t: "Curd, Set in Clay",
    img: butter,
    d: "The milk is boiled once, cooled to body warmth and cultured with a spoon of yesterday's curd in an earthen vessel. It sets slowly overnight, which is what gives the finished ghee its depth.",
  },
  {
    n: "03",
    t: "Hand Churned Butter",
    img: butter,
    d: "At dawn the curd is churned with a wooden bilona — never a machine separator. White butter rises in about forty minutes of steady work, and the buttermilk goes back to the village.",
  },
  {
    n: "04",
    t: "Slow Fire",
    img: kitchen,
    d: "The butter simmers over firewood in a heavy vessel. It is stirred by hand and watched by smell: when the aroma turns nutty and the residue settles golden brown, the fire comes off.",
  },
  {
    n: "05",
    t: "Pure Golden Ghee",
    img: clayPot,
    d: "The ghee is strained warm through fine cotton, leaving the grainy crystals that only slow heating produces. Nothing is added at any point — no colour, no flavour, no preservative.",
  },
  {
    n: "06",
    t: "Stored Naturally in Clay Pot",
    img: clayPot,
    d: "It rests in mud pots before jarring. Clay naturally helps regulate temperature and protects the aroma, which is why our ancestors used it long before refrigeration existed.",
  },
];

function Process() {
  return (
    <main>
      <section className="surface-forest grain pt-40 pb-24">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <p className="eyebrow">Our Process</p>
          <h1 className="mt-5 font-display text-4xl text-cream sm:text-6xl">
            Nothing here is hidden
          </h1>
          <div className="mx-auto mt-7 rule-gold" />
          <p className="mt-7 text-sm leading-relaxed text-cream/70">
            Six stages, one kitchen, roughly fourteen hours from milking to jar. This is
            the full account — photographed and filmed on the days we churn.
          </p>
        </div>
      </section>

      <section className="bg-background">
        {stages.map((s, i) => (
          <div
            key={s.n}
            className={`grid items-center gap-0 lg:grid-cols-2 ${
              i % 2 === 1 ? "lg:[&>figure]:order-2" : ""
            }`}
          >
            <figure className="relative min-h-[380px]">
              <img
                src={s.img}
                alt={s.t}
                loading="lazy"
                width={1200}
                height={1000}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </figure>
            <Reveal
              className={`px-6 py-20 sm:px-16 ${
                i % 2 === 1 ? "bg-secondary" : "bg-background"
              }`}
            >
              <p className="eyebrow">Step {s.n}</p>
              <h2 className="mt-5 font-display text-3xl text-forest sm:text-4xl">{s.t}</h2>
              <div className="mt-6 rule-gold" />
              <p className="mt-6 max-w-xl text-[0.95rem] leading-relaxed text-brown">
                {s.d}
              </p>
            </Reveal>
          </div>
        ))}
      </section>
    </main>
  );
}
