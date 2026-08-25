import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import cows from "@/assets/cows-grazing.jpg";
import village from "@/assets/hero-village.jpg";

export const Route = createFileRoute("/farm")({
  head: () => ({
    meta: [
      { title: "Our Farm — Native Cows & Milk Sourcing in Shivamogga" },
      {
        name: "description",
        content:
          "Meet the herd behind Savi Halli Thuppa: native Karnataka cows, open grazing, green fodder and morning hand-milking in Shivamogga district.",
      },
      { property: "og:title", content: "Our Farm — Savi Halli Thuppa" },
      {
        property: "og:description",
        content:
          "Native Karnataka cows, open grazing and morning hand-milking in Shivamogga district.",
      },
    ],
  }),
  component: Farm,
});

const herd = [
  { name: "Gauri", note: "Our eldest. Twelve years, and still first out to pasture." },
  { name: "Lakshmi", note: "The calm one. Stands for milking without being tied." },
  { name: "Chinni", note: "Born on the farm in 2021, daughter of Gauri." },
  { name: "Kaveri", note: "Gives the richest milk in the monsoon months." },
];

const practices = [
  {
    t: "Open Grazing",
    d: "The herd walks out after milking and grazes eight hours a day on our own fields and the village common.",
  },
  {
    t: "Green Fodder Only",
    d: "Napier grass, paddy hay, groundnut cake and mineral salt. No growth promoters and no hormone injections, ever.",
  },
  {
    t: "Calf First",
    d: "The calf feeds before we take any milk. What is left over is what becomes ghee — which is why our batches stay small.",
  },
  {
    t: "Hand Milking",
    d: "Milked by the same two people every morning, so any change in an animal is noticed the same day.",
  },
];

function Farm() {
  return (
    <main>
      <section className="relative flex h-[70vh] min-h-[440px] items-center justify-center overflow-hidden">
        <img
          src={cows}
          alt="Native Karnataka cows grazing in green pasture"
          width={1600}
          height={1008}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-forest-deep/55" />
        <div className="relative z-10 px-6 text-center">
          <p className="eyebrow">Our Farm</p>
          <h1 className="mt-5 font-display text-4xl tracking-[0.08em] text-cream uppercase sm:text-6xl">
            Meet the herd
          </h1>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Milk Sourcing</p>
            <h2 className="mt-5 font-display text-4xl text-forest">
              Milk that travels metres, not miles
            </h2>
            <div className="mt-6 rule-gold" />
            <p className="mt-6 text-[0.95rem] leading-relaxed text-brown">
              Every litre we churn comes from our own twelve native cows in Savi Halli and
              from two neighbouring families whose animals we have known for years. There
              is no collection route, no tanker and no pooling.
            </p>
          </Reveal>

          <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {practices.map((p, i) => (
              <Reveal as="li" key={p.t} delay={i * 90}>
                <div className="card-warm h-full p-8">
                  <h3 className="font-display text-2xl text-forest">{p.t}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-brown">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="surface-forest grain py-24">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal className="text-center">
            <p className="eyebrow">Our Cows</p>
            <h2 className="mt-5 font-display text-4xl text-cream">Known by name</h2>
            <div className="mx-auto mt-6 rule-gold" />
          </Reveal>
          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {herd.map((h, i) => (
              <Reveal as="li" key={h.name} delay={i * 90}>
                <div className="h-full border border-gold/25 p-8 text-center">
                  <p className="font-display text-3xl text-gold">{h.name}</p>
                  <p className="mt-4 text-sm leading-relaxed text-cream/70">{h.note}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative h-[420px]">
        <img
          src={village}
          alt="Savi Halli village fields"
          loading="lazy"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-forest-deep/55">
          <p className="max-w-2xl px-6 text-center font-display text-2xl text-cream italic sm:text-3xl">
            “The animals set the pace of this business. We have never once asked them to go
            faster.”
          </p>
        </div>
      </section>
    </main>
  );
}
