import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal, Counter } from "@/components/Reveal";
import { useCart, parsePrice } from "@/components/CartProvider";
import heroVillage from "@/assets/hero-village.jpg";
import grandmother from "@/assets/grandmother-ghee.jpg";
import clayPot from "@/assets/clay-pot.jpg";
import cows from "@/assets/cows-grazing.jpg";
import products from "@/assets/products.jpg";
import gheeRice from "@/assets/recipe-ghee-rice.jpg";
import dosa from "@/assets/recipe-dosa.jpg";
import kesari from "@/assets/recipe-kesari.jpg";
import kitchen from "@/assets/village-kitchen.jpg";
import butter from "@/assets/butter.jpg";
import map from "@/assets/map.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Savi Halli Thuppa — Pure Cow Ghee from the Heart of Karnataka" },
      {
        name: "description",
        content:
          "Bilona-churned pure cow ghee made in small batches in a Shivamogga village and stored naturally in clay pots. Rooted in Karnataka tradition.",
      },
      {
        property: "og:title",
        content: "Savi Halli Thuppa — Pure Cow Ghee from the Heart of Karnataka",
      },
      {
        property: "og:description",
        content:
          "Traditional hand-churned cow ghee from an old Karnataka village. No shortcuts, no chemicals, no preservatives.",
      },
    ],
  }),
  component: Home,
});

const differences = [
  { icon: "", title: "Pure Cow Milk", text: "Single-source milk from our own village herd, collected fresh each morning." },
  { icon: "", title: "No Additives", text: "Nothing added, nothing removed. Milk, patience and firewood." },
  { icon: "", title: "Stored in Mud Pot", text: "Earthen pots, the way our grandmothers kept ghee for generations." },
  { icon: "", title: "Traditional Bilona Churning", text: "Curd hand-churned with a wooden churner — never machine separated." },
  { icon: "", title: "Slow Heated", text: "Simmered on a gentle wood fire until the aroma turns golden." },
  { icon: "", title: "Made in Small Batches", text: "A few litres at a time, watched over by hand from start to jar." },
];

const steps = [
  { n: "01", t: "Fresh Cow Milk", d: "Milked at dawn from grass-fed native cows and brought straight to the kitchen." },
  { n: "02", t: "Curd", d: "Set overnight in earthen vessels with a spoon of the previous day's culture." },
  { n: "03", t: "Hand Churned Butter", d: "Churned by hand with a wooden bilona until white butter rises." },
  { n: "04", t: "Slow Fire", d: "The butter simmers over firewood — never rushed, never overheated." },
  { n: "05", t: "Pure Golden Ghee", d: "Clear golden ghee is strained off with its grainy aroma intact." },
  { n: "06", t: "Stored Naturally in Clay Pot", d: "Rested in mud pots so the aroma settles the way it always has." },
];

const mapPlaces = [

  {
    key: "Our Village",
    body: "Savi Halli sits in the green belt of all over Karnataka — red-tiled homes, areca groves and a temple pond that has fed the same fields for generations.",
  },
  {
    key: "Our Farm",
    body: "Twelve native cows graze open pasture through the day and are never pushed for yield. Their feed is green fodder, hay and mineral salt — nothing else.",
  },
  {
    key: "Our Dairy",
    body: "Milk travels metres, not miles. It is strained, set into curd in clay vessels and never chilled into losing its character.",
  },
  {
    key: "Our Kitchen",
    body: "One wood-fired hearth, one wooden churner, one pair of hands per batch. Everything you taste is finished in this room.",
  },
];

const jars = [
  { size: "250 ml", price: "₹499", note: "For a first taste" },
  { size: "500 ml", price: "₹899", note: "Our most loved jar" },
  { size: "1 Litre", price: "₹1,699", note: "For a full kitchen" },
  { size: "Gift Pack", price: "₹1,999", note: "Two jars, jute box, hand-tied" },
];

const reviews = [
  { quote: "It reminds me of my grandmother's ghee.", by: "Deepa R.", place: "Bengaluru" },
  { quote: "The aroma fills the entire kitchen.", by: "Suresh K.", place: "Mysuru" },
  { quote: "Exactly like homemade.", by: "Ananya M.", place: "Mangaluru" },
];

const recipes = [
  { name: "Ghee Rice", img: gheeRice },
  { name: "Dosa", img: dosa },
  { name: "Kesari Bath", img: kesari },
  { name: "Chapathi", img: butter },
  { name: "Holige", img: gheeRice },
  { name: "Bisibele Bath", img: kesari },
  { name: "Mysore Pak", img: dosa },
];

const gallery = [
  { img: heroVillage, label: "Village" },
  { img: cows, label: "Cow" },
  { img: butter, label: "Butter" },
  { img: clayPot, label: "Clay Pot" },
  { img: kitchen, label: "Kitchen" },
  { img: grandmother, label: "Firewood" },
  { img: products, label: "Pouring Ghee" },
];

const faqs = [
  {
    q: "Why is your ghee different?",
    a: "It is made the long way. Curd is set in clay, hand-churned with a wooden bilona, and the butter is simmered slowly over firewood in small batches. That method gives the grainy texture and deep aroma industrial ghee cannot carry.",
  },
  {
    q: "Why clay pot?",
    a: "Earthen pots were how our ancestors stored ghee before refrigeration. Clay naturally helps regulate temperature and protects the aroma of the ghee, and we follow that tradition to preserve authenticity and flavour.",
  },
  {
    q: "Shelf life?",
    a: "Kept in a cool, dry place with a dry spoon, our ghee stays at its best for 12 months from the date of packing.",
  },
  {
    q: "Do you add preservatives?",
    a: "No. There are no preservatives, colours, flavours or vegetable fats. The jar holds cow milk ghee and nothing else.",
  },
  {
    q: "Where is the milk sourced?",
    a: "From our own herd of native cows in Savi Halli, Shivamogga district, along with two neighbouring families whose animals we know by name.",
  },
  {
    q: "Shipping?",
    a: "We dispatch across India within 48 hours of your order, with tracking sent over WhatsApp. Cash on delivery is available on most pin codes.",
  },
];

function Home() {
  const [place, setPlace] = useState(0);
  const { add } = useCart();

  return (
    <main>
      {/* 1 — Hero */}
      <section className="relative flex h-screen min-h-[640px] items-center justify-center overflow-hidden">
        <img
          src={heroVillage}
          alt="Morning sunlight over an old Karnataka village with traditional tiled houses"
          width={1920}
          height={1088}
          className="animate-ken-burns absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,oklch(0.238_0.05_158.5/0.85)_100%)]" />
        <div className="absolute inset-0 bg-forest-deep/30" />

        <div className="relative z-10 px-6 text-center">
          <p className="eyebrow">The Taste of Old Karnataka</p>
          <h1 className="mt-6 font-display text-5xl leading-[1.05] tracking-[0.14em] text-cream uppercase sm:text-6xl lg:text-7xl">
            Savi Halli
            <span className="block text-gold-gradient">Thuppa</span>
          </h1>
          <div className="mx-auto mt-7 rule-gold" />
          <p className="mt-7 font-display text-2xl text-cream/90 italic">Pure Cow Ghee</p>
          <p className="mt-2 text-xs tracking-[0.3em] text-cream/60 uppercase">
            Rooted in Karnataka Tradition
          </p>

          <div className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/products"
              className="w-60 rounded-full border border-gold bg-forest px-8 py-4 text-xs tracking-[0.24em] text-cream uppercase transition-all hover:bg-gold hover:text-forest-deep"
            >
              Shop Now
            </Link>
            <a
              href="#our-story"
              className="w-60 rounded-full border border-cream/40 px-8 py-4 text-xs tracking-[0.24em] text-cream uppercase transition-colors hover:border-gold hover:text-gold"
            >
              Watch Our Story
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[0.6rem] tracking-[0.3em] text-cream/50 uppercase">
          Scroll
        </div>
      </section>

      {/* 2 — Our Story */}
      <section id="our-story" className="grain bg-background py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-3 border border-gold/40" />
              <img
                src={grandmother}
                alt="Grandmother hand-churning butter in a village kitchen"
                loading="lazy"
                width={1408}
                height={1104}
                className="relative h-full w-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="eyebrow">Our Story</p>
            <h2 className="mt-5 font-display text-4xl leading-tight text-forest sm:text-5xl">
              Long before refrigeration existed
            </h2>
            <div className="mt-6 rule-gold" />
            <div className="mt-7 space-y-5 text-[0.95rem] leading-relaxed text-brown">
              <p>
                Every home in Karnataka preserved ghee naturally in clay pots. The pot sat
                in a cool corner of the kitchen, and the aroma of the morning's churning
                stayed in it for months.
              </p>
              <p>At Savi Halli Thuppa, we continue the same tradition.</p>
              <ul className="grid gap-3 font-display text-xl text-forest italic">
                <li>No shortcuts.</li>
                <li>No chemicals.</li>
                <li>No preservatives.</li>
              </ul>
              <p>
                Just pure cow milk transformed into golden ghee using time-honoured
                methods — the same ones our grandmother used, in the same village.
              </p>
            </div>
            <Link
              to="/about"
              className="mt-9 inline-block border-b border-gold pb-1 text-xs tracking-[0.24em] text-forest uppercase transition-colors hover:text-gold"
            >
              Read the full story
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 3 — Why We Are Different */}
      <section className="surface-forest grain py-28">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal className="text-center">
            <p className="eyebrow">Why We Are Different</p>
            <h2 className="mx-auto mt-5 max-w-2xl font-display text-4xl text-cream sm:text-5xl">
              Six things we refuse to change
            </h2>
            <div className="mx-auto mt-6 rule-gold" />
          </Reveal>

          <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {differences.map((d, i) => (
              <Reveal as="li" key={d.title} delay={i * 90}>
                <div className="group h-full border border-gold/25 bg-cream/[0.04] p-9 transition-all duration-500 hover:-translate-y-2 hover:border-gold/70 hover:bg-cream/[0.07]">
                  <span className="text-3xl">{d.icon}</span>
                  <h3 className="mt-6 font-display text-2xl text-cream">{d.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream/65">{d.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* 4 — Traditional Process */}
      <section className="bg-background py-28">
        <div className="mx-auto max-w-5xl px-5">
          <Reveal className="text-center">
            <p className="eyebrow">Traditional Process</p>
            <h2 className="mt-5 font-display text-4xl text-forest sm:text-5xl">
              From dawn milking to the mud pot
            </h2>
            <div className="mx-auto mt-6 rule-gold" />
          </Reveal>

          <ol className="relative mt-16 border-l border-gold/40 pl-10 sm:pl-14">
            {steps.map((s, i) => (
              <Reveal as="li" key={s.n} delay={i * 80} className="relative pb-14 last:pb-0">
                <span className="absolute -left-[3.15rem] flex h-9 w-9 items-center justify-center rounded-full border border-gold bg-background text-[0.65rem] tracking-widest text-gold sm:-left-[4.05rem]">
                  {s.n}
                </span>
                <h3 className="font-display text-2xl text-forest sm:text-3xl">{s.t}</h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-brown">{s.d}</p>
              </Reveal>
            ))}
          </ol>

          <Reveal className="mt-6 text-center">
            <Link
              to="/process"
              className="inline-block rounded-full border border-gold bg-forest px-8 py-4 text-xs tracking-[0.24em] text-cream uppercase transition-colors hover:bg-forest-deep"
            >
              See the process in film
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 5 — Why Mud Pot */}
      <section className="grid lg:grid-cols-2">
        <div className="relative min-h-[520px]">
          <img
            src={clayPot}
            alt="Golden ghee being poured into a handmade earthen clay pot"
            loading="lazy"
            width={1200}
            height={1408}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="surface-forest grain flex items-center px-6 py-24 sm:px-16">
          <Reveal>
            <p className="eyebrow">Why Mud Pot?</p>
            <h2 className="mt-5 font-display text-4xl text-cream sm:text-5xl">
              The pot is part of the recipe
            </h2>
            <div className="mt-6 rule-gold" />
            <div className="mt-8 space-y-5 text-[0.95rem] leading-relaxed text-cream/75">
              <p>
                Instead of refrigeration, our ancestors preserved ghee in earthen pots.
              </p>
              <p>
                Clay naturally helps regulate temperature and protects the aroma of the
                ghee without relying on artificial cold storage.
              </p>
              <p>
                Our traditional storage method is inspired by these age-old practices to
                preserve authenticity — the grain, the colour and the smell of a village
                kitchen.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6 — Interactive Karnataka Map */}
      <section className="bg-secondary py-28">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal className="text-center">
            <p className="eyebrow">Where It Comes From</p>
            <h2 className="mt-5 font-display text-4xl text-forest sm:text-5xl">
              Milk from every district of Karnataka
            </h2>
            <div className="mx-auto mt-6 rule-gold" />
            <p className="mx-auto mt-6 max-w-2xl text-[0.95rem] leading-relaxed text-brown">
              Our kitchen is inspired by the rich heritage of Karnataka, while our milk comes from trusted village families across the state. 
              From the fertile northern plains to the lush Western Ghats and the coastal belt,
               we bring together the goodness of Karnataka’s diverse landscapes to create pure, traditional ghee.
            </p>
          </Reveal>

          <div className="mt-16 grid items-center gap-14 lg:grid-cols-2">
            <Reveal>
              <div className="relative mx-auto max-w-md">
                <img
                  src={map}
                  alt="Map of Karnataka showing milk-sourcing districts"
                  width={1177}
                  height={1354}
                  className="w-full"
                />
              </div>
            </Reveal>


            <Reveal delay={120}>
              <div className="flex flex-wrap gap-2">
                {mapPlaces.map((p, i) => (
                  <button
                    key={p.key}
                    onClick={() => setPlace(i)}
                    className={`rounded-full border px-5 py-2.5 text-[0.7rem] tracking-[0.2em] uppercase transition-colors ${
                      place === i
                        ? "border-gold bg-forest text-cream"
                        : "border-border text-brown hover:border-gold"
                    }`}
                  >
                    {p.key}
                  </button>
                ))}
              </div>
              <div className="card-warm mt-8 p-9">
                <h3 className="font-display text-3xl text-forest">
                  {mapPlaces[place]!.key}
                </h3>
                <div className="mt-5 rule-gold" />
                <p className="mt-5 text-[0.95rem] leading-relaxed text-brown">
                  {mapPlaces[place]!.body}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 7 — Products */}
      <section className="bg-background py-28">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal className="text-center">
            <p className="eyebrow">Our Jars</p>
            <h2 className="mt-5 font-display text-4xl text-forest sm:text-5xl">
              Choose your jar
            </h2>
            <div className="mx-auto mt-6 rule-gold" />
          </Reveal>

          <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {jars.map((j, i) => (
              <Reveal as="li" key={j.size} delay={i * 90}>
                <div className="group card-warm h-full overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[var(--shadow-gold)]">
                  <div className="overflow-hidden bg-secondary">
                    <img
                      src={products}
                      alt={`${j.size} jar of Savi Halli Thuppa pure cow ghee`}
                      loading="lazy"
                      width={1408}
                      height={1104}
                      className="h-56 w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110 group-hover:rotate-2"
                    />
                  </div>
                  <div className="p-7">
                    <h3 className="font-display text-2xl text-forest">{j.size}</h3>
                    <p className="mt-1 text-xs tracking-[0.16em] text-muted-foreground uppercase">
                      {j.note}
                    </p>
                    <p className="mt-5 font-display text-xl text-gold">{j.price}</p>
                    <button
                      onClick={() => add(j.size, parsePrice(j.price))}
                      className="mt-6 block w-full rounded-full border border-gold bg-forest py-3 text-center text-[0.7rem] tracking-[0.22em] text-cream uppercase transition-colors hover:bg-gold hover:text-forest-deep"
                    >
                      Add to Order
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* 8 — Counters */}
      <section className="surface-forest py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 text-center sm:grid-cols-2 lg:grid-cols-4">
          {[
            { v: 100, l: "Pure Cow Milk" },
            { v: 0, l: "Preservatives" },
            { v: 100, l: "Natural" },
            { v: 100, l: "Traditional" },
          ].map((c, i) => (
            <Reveal key={c.l} delay={i * 100}>
              <p className="font-display text-6xl text-gold">
                <Counter value={c.v} />
              </p>
              <p className="mt-4 text-[0.7rem] tracking-[0.28em] text-cream/70 uppercase">
                {c.l}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 9 — Reviews */}
      <section className="bg-secondary py-28">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal className="text-center">
            <p className="eyebrow">Why Families Trust Us</p>
            <h2 className="mt-5 font-display text-4xl text-forest sm:text-5xl">
              Customer reviews
            </h2>
            <div className="mx-auto mt-6 rule-gold" />
          </Reveal>

          <ul className="mt-16 grid gap-6 lg:grid-cols-3">
            {reviews.map((r, i) => (
              <Reveal as="li" key={r.by} delay={i * 110}>
                <figure className="card-warm h-full p-10">
                  <p className="tracking-[0.3em] text-gold">★★★★★</p>
                  <blockquote className="mt-7 font-display text-2xl leading-snug text-forest italic">
                    “{r.quote}”
                  </blockquote>
                  <figcaption className="mt-8 text-[0.7rem] tracking-[0.22em] text-brown uppercase">
                    {r.by} · {r.place}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* 10 — Recipes */}
      <section className="bg-background py-28">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal className="text-center">
            <p className="eyebrow">Recipes</p>
            <h2 className="mt-5 font-display text-4xl text-forest sm:text-5xl">
              Cooked the way home smells
            </h2>
            <div className="mx-auto mt-6 rule-gold" />
          </Reveal>

          <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recipes.map((r, i) => (
              <Reveal as="li" key={r.name} delay={i * 70}>
                <Link to="/recipes" className="group relative block overflow-hidden">
                  <img
                    src={r.img}
                    alt={`${r.name} made with Savi Halli Thuppa ghee`}
                    loading="lazy"
                    width={800}
                    height={800}
                    className="h-72 w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-forest-deep/85 via-forest-deep/10 to-transparent" />
                  <span className="absolute bottom-6 left-6 font-display text-2xl text-cream">
                    {r.name}
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* 11 — Gallery */}
      <section className="surface-forest py-28">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal className="text-center">
            <p className="eyebrow">Gallery</p>
            <h2 className="mt-5 font-display text-4xl text-cream sm:text-5xl">
              From our village
            </h2>
            <div className="mx-auto mt-6 rule-gold" />
          </Reveal>

          <ul className="mt-16 grid grid-cols-2 gap-3 md:grid-cols-4">
            {gallery.map((g, i) => (
              <Reveal
                as="li"
                key={g.label}
                delay={i * 60}
                className={i === 0 ? "md:col-span-2 md:row-span-2" : ""}
              >
                <div className="group relative h-full overflow-hidden">
                  <img
                    src={g.img}
                    alt={`${g.label} — Savi Halli Thuppa`}
                    loading="lazy"
                    width={800}
                    height={800}
                    className={`w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110 ${
                      i === 0 ? "h-full min-h-[280px]" : "h-44 md:h-52"
                    }`}
                  />
                  <span className="absolute inset-0 flex items-end bg-forest-deep/45 p-4 text-[0.65rem] tracking-[0.24em] text-cream uppercase opacity-0 transition-opacity group-hover:opacity-100">
                    {g.label}
                  </span>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* 12 — FAQ */}
      <section className="bg-background py-28">
        <div className="mx-auto max-w-3xl px-5">
          <Reveal className="text-center">
            <p className="eyebrow">FAQ</p>
            <h2 className="mt-5 font-display text-4xl text-forest sm:text-5xl">
              Questions from our kitchen
            </h2>
            <div className="mx-auto mt-6 rule-gold" />
          </Reveal>

          <Reveal delay={100} className="mt-14">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`i${i}`} className="border-border">
                  <AccordionTrigger className="text-left font-display text-xl text-forest hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-brown">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
