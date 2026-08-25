import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import grandmother from "@/assets/grandmother-ghee.jpg";
import heroVillage from "@/assets/hero-village.jpg";
import kitchen from "@/assets/village-kitchen.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Savi Halli Thuppa, a Karnataka Village Family" },
      {
        name: "description",
        content:
          "The family, the village and the tradition behind Savi Halli Thuppa — three generations of hand-churned cow ghee from Shivamogga, Karnataka.",
      },
      { property: "og:title", content: "About Savi Halli Thuppa" },
      {
        property: "og:description",
        content:
          "Three generations of hand-churned cow ghee from a village in Shivamogga, Karnataka.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <main>
      <section className="relative flex h-[70vh] min-h-[440px] items-center justify-center overflow-hidden">
        <img
          src={heroVillage}
          alt="Our village at sunrise"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-forest-deep/60" />
        <div className="relative z-10 px-6 text-center">
          <p className="eyebrow">About Us</p>
          <h1 className="mt-5 font-display text-4xl tracking-[0.1em] text-cream uppercase sm:text-6xl">
            A family, a village, a pot
          </h1>
        </div>
      </section>

      <section className="bg-background py-28">
        <div className="mx-auto grid max-w-7xl items-start gap-16 px-5 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Three Generations</p>
            <h2 className="mt-5 font-display text-4xl text-forest">
              It began with Ajji's kitchen
            </h2>
            <div className="mt-6 rule-gold" />
            <div className="mt-7 space-y-5 text-[0.95rem] leading-relaxed text-brown">
              <p>
                Our grandmother — Ajji, as the whole street called her — kept two clay
                pots on the shelf beside her hearth. One held curd for the morning, the
                other held ghee for the year. Neighbours came to her not for a product but
                for a smell they recognised.
              </p>
              <p>
                Her daughter carried the churner. Her grandchildren carried it further,
                and in 2019 we began putting the same ghee into jars for families outside
                the village who wrote to ask for it.
              </p>
              <p>
                Nothing about the method changed when we started selling it. Same herd,
                same wooden bilona, same wood fire, same clay. The only new thing is the
                label.
              </p>
              <p>
                Savi Halli Thuppa is a celebration of Karnataka's village heritage —
                crafted from pure cow milk, prepared using traditional methods, and
                inspired by the way generations preserved and cherished ghee before modern
                conveniences.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120} className="grid gap-6">
            <img
              src={grandmother}
              alt="Ajji hand-churning butter"
              loading="lazy"
              width={1408}
              height={1104}
              className="w-full object-cover"
            />
            <img
              src={kitchen}
              alt="Our wood-fired village kitchen"
              loading="lazy"
              width={800}
              height={800}
              className="w-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      <section className="surface-forest grain py-24">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <Reveal>
            <p className="eyebrow">Our Promise</p>
            <p className="mt-8 font-display text-3xl leading-snug text-cream italic sm:text-4xl">
              “Every jar carries the aroma, taste and warmth of an authentic village
              kitchen.”
            </p>
            <div className="mx-auto mt-8 rule-gold" />
            <Link
              to="/process"
              className="mt-10 inline-block rounded-full border border-gold px-8 py-4 text-xs tracking-[0.24em] text-cream uppercase transition-colors hover:bg-gold hover:text-forest-deep"
            >
              See how we make it
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
