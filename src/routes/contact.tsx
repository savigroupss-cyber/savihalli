import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Savi Halli Thuppa, Shivamogga Karnataka" },
      {
        name: "description",
        content:
          "Reach Savi Halli Thuppa by WhatsApp, phone or email, send an enquiry, or find our village kitchen in Shivamogga district, Karnataka on the map.",
      },
      { property: "og:title", content: "Contact Savi Halli Thuppa" },
      {
        property: "og:description",
        content: "WhatsApp, phone, email and directions to our village kitchen.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = `New enquiry from ${formData.name}`;
    const body = [
      `Name: ${formData.name}`,
      `Phone: ${formData.phone}`,
      `Email: ${formData.email}`,
      "",
      "Message:",
      formData.message,
    ].join("\n");

    const mailtoLink = `mailto:savigroupss@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    setSent(true);
  };

  return (
    <main>
      <section className="surface-forest grain pt-40 pb-24">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-5 font-display text-4xl text-cream sm:text-6xl">
            Come by, or write to us
          </h1>
          <div className="mx-auto mt-7 rule-gold" />
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-5 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Enquiry</p>
            <h2 className="mt-5 font-display text-3xl text-forest">Send us a message</h2>
            <div className="mt-6 rule-gold" />

            {sent ? (
              <p className="card-warm mt-9 p-8 text-sm leading-relaxed text-brown">
                Thank you — your message is with us. We reply from the kitchen, usually
                within a day.
              </p>
            ) : (
              <form className="mt-9 grid gap-5" onSubmit={handleSubmit}>
                {[
                  { id: "name", label: "Name", type: "text" },
                  { id: "phone", label: "Phone", type: "tel" },
                  { id: "email", label: "Email", type: "email" },
                ].map((f) => (
                  <div key={f.id}>
                    <label
                      htmlFor={f.id}
                      className="text-[0.65rem] tracking-[0.24em] text-brown uppercase"
                    >
                      {f.label}
                    </label>
                    <input
                      id={f.id}
                      name={f.id}
                      type={f.type}
                      value={formData[f.id as keyof typeof formData]}
                      onChange={handleChange}
                      required
                      className="mt-2 w-full border border-input bg-card px-4 py-3 text-sm text-forest focus:border-gold focus:outline-none"
                    />
                  </div>
                ))}
                <div>
                  <label
                    htmlFor="msg"
                    className="text-[0.65rem] tracking-[0.24em] text-brown uppercase"
                  >
                    Message
                  </label>
                  <textarea
                    id="msg"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full border border-input bg-card px-4 py-3 text-sm text-forest focus:border-gold focus:outline-none"
                  />
                </div>
                <button className="mt-2 justify-self-start rounded-full border border-gold bg-forest px-8 py-4 text-xs tracking-[0.24em] text-cream uppercase transition-colors hover:bg-gold hover:text-forest-deep">
                  Send Enquiry
                </button>
              </form>
            )}
          </Reveal>

          <Reveal delay={120}>
            <p className="eyebrow">Reach Us</p>
            <h2 className="mt-5 font-display text-3xl text-forest">The village kitchen</h2>
            <div className="mt-6 rule-gold" />
            <dl className="mt-9 divide-y divide-border border-y border-border text-sm">
              {[
                ["Address", "Bangalore, Karnataka"],
                ["WhatsApp", "+91 80882 00400"],
                ["Phone", "+91 80882 00400"],
                ["Email", "savigroupss@gmail.com"],
              ].map(([k, v]) => (
                <div key={k} className="flex flex-wrap justify-between gap-4 py-4">
                  <dt className="text-[0.65rem] tracking-[0.2em] text-brown uppercase">
                    {k}
                  </dt>
                  <dd className="text-forest">{v}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://wa.me/918088200400"
                className="rounded-full border border-gold bg-forest px-7 py-3 text-[0.7rem] tracking-[0.2em] text-cream uppercase transition-colors hover:bg-gold hover:text-forest-deep"
              >
                WhatsApp Us
              </a>
              <a
                href="tel:+918088200400"
                className="rounded-full border border-border px-7 py-3 text-[0.7rem] tracking-[0.2em] text-brown uppercase transition-colors hover:border-gold"
              >
                Call
              </a>
            </div>

            <div className="mt-10 overflow-hidden border border-border">
              <iframe
                title="Savi Halli Thuppa location in Bangalore, Karnataka"
                src="https://www.google.com/maps?q=Bangalore,Karnataka&output=embed"
                loading="lazy"
                className="h-72 w-full"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
