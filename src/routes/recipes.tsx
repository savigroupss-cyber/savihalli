import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import gheeRice from "@/assets/recipe-ghee-rice.jpg";
import dosa from "@/assets/recipe-dosa.jpg";
import kesari from "@/assets/recipe-kesari.jpg";
import butter from "@/assets/butter.jpg";

export const Route = createFileRoute("/recipes")({
  head: () => ({
    meta: [
      { title: "Recipes — Traditional Karnataka Cooking with Pure Ghee" },
      {
        name: "description",
        content:
          "Ghee rice, dosa, chapathi, kesari bath, holige, bisibele bath and Mysore pak — traditional Karnataka recipes made with Savi Halli Thuppa cow ghee.",
      },
      { property: "og:title", content: "Karnataka Recipes with Savi Halli Thuppa" },
      {
        property: "og:description",
        content: "Seven traditional Karnataka dishes cooked with hand-churned village ghee.",
      },
    ],
  }),
  component: Recipes,
});

const recipes = [
  {
    name: "Ghee Rice",
    img: gheeRice,
    time: "30 min",
    body: "Two spoons of ghee, whole spices, fried cashews and onion, then rice and hot water. The ghee goes in twice — once for the spices, once off the flame.",
  },
  {
    name: "Dosa",
    img: dosa,
    time: "Overnight batter",
    body: "Brush the hot tawa with ghee before the batter and again along the edges. It is what turns a good dosa lace-crisp and golden.",
  },
  {
    name: "Kesari Bath",
    img: kesari,
    time: "25 min",
    body: "Roast rava in generous ghee until it smells nutty, then jaggery or sugar water, saffron and a final spoon of ghee for shine.",
  },
  {
    name: "Chapathi",
    img: butter,
    time: "20 min",
    body: "A teaspoon of ghee in the dough keeps chapathi soft for hours; a smear after roasting is what the children come running for.",
  },
  {
    name: "Holige",
    img: gheeRice,
    time: "1 hr",
    body: "Festival obbattu, rolled thin over banana leaf and served swimming in warm ghee — the classic Karnataka pairing.",
  },
  {
    name: "Bisibele Bath",
    img: kesari,
    time: "45 min",
    body: "Rice, toor dal and vegetables with bisibele powder, finished with ghee-fried cashews and a spoon of ghee at the table.",
  },
  {
    name: "Mysore Pak",
    img: dosa,
    time: "40 min",
    body: "Besan, sugar syrup and a steady stream of hot ghee. Nothing else — which is why the ghee decides whether it succeeds.",
  },
];

function Recipes() {
  return (
    <main>
      <section className="surface-forest grain pt-40 pb-24">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <p className="eyebrow">Recipes</p>
          <h1 className="mt-5 font-display text-4xl text-cream sm:text-6xl">
            Traditional Karnataka kitchen
          </h1>
          <div className="mx-auto mt-7 rule-gold" />
          <p className="mt-7 text-sm leading-relaxed text-cream/70">
            The dishes our ghee was made for, written the way they are cooked at home.
          </p>
        </div>
      </section>

      <section className="bg-background py-24">
        <ul className="mx-auto grid max-w-7xl gap-8 px-5 sm:grid-cols-2 lg:grid-cols-3">
          {recipes.map((r, i) => (
            <Reveal as="li" key={r.name} delay={i * 80}>
              <article className="group card-warm h-full overflow-hidden">
                <img
                  src={r.img}
                  alt={`${r.name} cooked with pure cow ghee`}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="h-64 w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />
                <div className="p-8">
                  <p className="eyebrow">{r.time}</p>
                  <h2 className="mt-4 font-display text-2xl text-forest">{r.name}</h2>
                  <p className="mt-4 text-sm leading-relaxed text-brown">{r.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </section>
    </main>
  );
}
