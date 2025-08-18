import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>GreenLine Energy — VEU Heat Pumps, Aircon & Hot Water Upgrades</title>
        <meta
          name="description"
          content="GreenLine Energy Pty Ltd — VEU-accredited upgrades: heat pump hot water, reverse-cycle air conditioning, and hydronics. Save on bills, cut carbon."
        />
        <meta property="og:title" content="GreenLine Energy Solutions" />
        <meta
          property="og:description"
          content="VEU-accredited upgrades for heat pump hot water, air conditioning, and hydronics. Reduce costs and emissions with certified installations."
        />
        <meta property="og:image" content="https://greensite-rouge.vercel.app/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://cdn.tailwindcss.com" />
        <script src="https://cdn.tailwindcss.com"></script>
        {/* favicon: eco green */}
        <link
          rel="icon"
          href={`data:image/svg+xml,${encodeURIComponent(
            `<svg xmlns='http://www.w3.org/2000/svg' width='256' height='256' viewBox='0 0 256 256'><circle cx='128' cy='128' r='120' fill='#2E7D32'/><path d='M68 148c40-10 68-42 84-88 18 20 28 44 28 72 0 45-31 82-84 82-22 0-39-7-51-20 9-17 13-31 23-46z' fill='#fff'/></svg>`
          )}`}
        />
        {/* LocalBusiness JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "GreenLine Energy Pty Ltd",
            url: "https://greensite-rouge.vercel.app",
            telephone: "+61 412 345 678",
            areaServed: "Victoria, Australia",
            address: {
              "@type": "PostalAddress",
              streetAddress: "123 Green Street",
              addressLocality: "Melbourne",
              addressRegion: "VIC",
              postalCode: "3000",
              addressCountry: "AU",
            },
            sameAs: [
              "https://www.energy.vic.gov.au/victorian-energy-upgrades",
              "https://www.solar.vic.gov.au/hot-water-rebate",
            ],
          })}
        </script>
      </Head>
      {/* SITE WRAPPER */}
      <div className="bg-gradient-to-b from-[#F5F5F5] via-white to-white text-[#1A237E] antialiased">
        {/* Header (Teal) */}
        <header className="sticky top-0 z-50 bg-[#26A69A] text-white/90">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex items-center justify-between h-16">
              <a href="#top" className="flex items-center gap-3 font-semibold">
                <img
                  src="/greenline-logo-mark.png.jpeg"
                  alt="GreenLine Logo Mark"
                  className="h-10 w-10 rounded-full"
                />
                <span className="sr-only">GreenLine Energy</span>
                <img
                  src="/greenline-logo-word.png.jpeg"
                  alt="GreenLine Energy"
                  className="hidden sm:block h-6"
                />
              </a>
              <nav className="hidden md:flex items-center gap-8 text-sm">
                <a href="#solutions" className="hover:text-white">Solutions</a>
                <a href="#pricing" className="hover:text-white">Pricing</a>
                <a href="#process" className="hover:text-white">Process</a>
                <a href="#faq" className="hover:text-white">FAQ</a>
                <a href="#contact" className="hover:text-white">Contact</a>
              </nav>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl px-5 py-2.5 font-semibold bg-[#2E7D32] text-white hover:brightness-95 focus:outline-none focus:ring-4 focus:ring-white/20"
              >
                Request Consultation
              </a>
            </div>
          </div>
        </header>
        {/* Hero */}
        <section id="top" className="py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-6 grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7 space-y-6">
              <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-[#E0F2F1] text-[#1A237E] ring-1 ring-[#26A69A]/30">
                VEU-Accredited Upgrades
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                Energy Efficiency.{" "}
                <span className="text-[#1A237E]">Government Supported.</span>
              </h1>
              <p className="text-lg md:text-xl text-[#455A64]">
                GreenLine Energy Pty Ltd offers VEU-accredited upgrades for heat pump hot water, reverse-cycle air
                conditioning, and hydronics—helping Victorians cut energy costs and emissions.
              </p>
              <div className="flex gap-3 flex-wrap">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold bg-[#2E7D32] text-white hover:brightness-95 focus:outline-none focus:ring-4 focus:ring-[#2E7D32]/30"
                >
                  Request Consultation
                </a>
                <a
                  href="#rebates"
                  className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold bg-white text-[#1A237E] ring-1 ring-[#26A69A]/30 hover:bg-[#E0F2F1]"
                >
                  Explore Rebates
                </a>
              </div>
              <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm pt-4">
                {[
                  ["Up to $3,000", "in combined rebates*"],
                  ["$1,000–$1,400", "Hot water rebates"],
                  ["Save $1,275/yr", "vs old electric tanks"],
                  ["Fast Installs", "Licensed experts"],
                ].map(([t, s], i) => (
                  <li
                    key={i}
                    className="bg-white/90 rounded-2xl shadow-md ring-1 ring-black/5 p-4 text-center"
                  >
                    <strong>{t}</strong>
                    <br />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-5">
              <div className="bg-white/90 rounded-2xl shadow-md ring-1 ring-black/5 p-6">
                <img
                  src="/hero-bg.jpg.png"
                  alt="Eco-friendly home with solar panels and heat pump"
                  width="600"
                  height="400"
                  className="rounded-2xl object-cover"
                />
                <p className="text-xs text-[#455A64] mt-2">
                  Efficient, all-electric comfort with certified upgrades.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Solutions (Soft Gray bg, Teal accents) */}
        <section id="solutions" className="py-16 md:py-20 bg-[#F5F5F5] border-y border-[#B0BEC5]">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#1A237E]">Our Solutions</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Heat Pump Hot Water",
                  body:
                    "High-efficiency heat pumps replace outdated electric or gas systems, reducing running costs.",
                  bullets: ["Up to 80% less electricity", "Quiet + smart controls", "VEU & STC eligible"],
                  chips: ["Emerald / EcoGenica / Neopower", "VEU + STCs"],
                },
                {
                  title: "Reverse-Cycle Air Conditioning",
                  body:
                    "Efficient heating and cooling with VEU-eligible systems for single rooms or whole homes.",
                  bullets: ["Year-round climate control", "VEU discounts (approved models)", "Right-sizing advice"],
                  chips: ["Daikin • Mitsubishi • Fujitsu", "VEU eligible"],
                },
                {
                  title: "Hydronics & Boilers",
                  body: "Hydronic panel or in-slab heating and boiler replacements for even, quiet warmth.",
                  bullets: ["Custom-designed systems", "Eligibility varies by site", "End-to-end delivery"],
                  chips: ["Custom quoted"],
                },
              ].map((card, i) => (
                <article
                  key={i}
                  className="bg-white rounded-2xl shadow-md ring-1 ring-black/5 p-6"
                >
                  <h3 className="text-xl font-semibold text-[#26A69A]">{card.title}</h3>
                  <p className="mt-3 text-sm text-[#455A64]">{card.body}</p>
                  <ul className="mt-4 text-sm space-y-2 list-disc pl-5 text-[#455A64]">
                    {card.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {card.chips.map((c) => (
                      <span
                        key={c}
                        className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-[#E0F7FA] text-[#00695C] ring-1 ring-[#26A69A]/20"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        {/* Rebates */}
        <section id="rebates" className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#1A237E]">Government Rebates</h2>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="space-y-5">
                <p className="text-lg text-[#455A64]">
                  GreenLine Energy is accredited under the Victorian Energy Upgrades (VEU) program. From hot water to
                  air conditioning, eligible upgrades can attract significant upfront incentives.
                </p>
                <ul className="text-sm text-[#455A64] space-y-2 list-disc pl-5">
                  <li>Up to $3,000 in combined hot water & heating incentives</li>
                  <li>$1,000–$1,400 Solar Victoria hot water rebate</li>
                  <li>VEU discounts on approved reverse-cycle air conditioners</li>
                </ul>
                <p className="text-xs text-[#78909C]">
                  *Amounts vary by postcode, site, and approved products. Contact us for a tailored assessment.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold bg-[#2E7D32] text-white hover:brightness-95 focus:outline-none focus:ring-4 focus:ring-[#2E7D32]/30"
                >
                  Request Rebate Assessment
                </a>
              </div>
              <div className="hidden md:block">
                <img
                  src="/rebates-illustration.png.png"
                  alt="Illustration of VEU-eligible energy systems"
                  width="400"
                  height="300"
                  className="rounded-2xl shadow-md ring-1 ring-black/5"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Pricing */}
        <section id="pricing" className="py-16 md:py-20 bg-[#F5F5F5] border-y border-[#B0BEC5]">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#1A237E]">Indicative Pricing (after rebates)</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Heat Pump Hot Water (260–300L)",
                  desc: (
                    <>
                      From <span className="font-semibold">$799</span> installed*
                    </>
                  ),
                  points: ["Standard install + removal", "5–7 year warranties"],
                },
                {
                  title: "Split System RCAC (2.5–3.5 kW)",
                  desc: <>VEU-discounted, site-dependent</>,
                  points: ["Single room comfort", "Approved models only"],
                },
                {
                  title: "Ducted RCAC (Whole Home)",
                  desc: <>VEU-discounted, custom design</>,
                  points: ["Efficient heating & cooling", "Load calcs included"],
                },
              ].map((p) => (
                <div key={p.title} className="bg-white rounded-2xl shadow-md ring-1 ring-black/5 p-6">
                  <h3 className="font-semibold text-lg">{p.title}</h3>
                  <p className="text-sm text-[#455A64] mt-3">{p.desc}</p>
                  <ul className="mt-4 text-sm list-disc pl-5 space-y-1 text-[#455A64]">
                    {p.points.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="text-xs text-[#78909C] mt-6">
              *Prices assume eligibility and standard metro install. Rebates vary by postcode and system—confirm with us.
            </p>
          </div>
        </section>
        {/* Process */}
        <section id="process" className="py-16 md:py-20 bg-white border-y border-[#B0BEC5]">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#1A237E]">How It Works</h2>
            <ol className="grid md:grid-cols-5 gap-4 text-sm">
              {["Eligibility Check", "System Selection", "Installation", "Removal & Recycling", "Rebate Application"].map(
                (step, i) => (
                  <li
                    key={i}
                    className="bg-white rounded-2xl shadow-md ring-1 ring-black/5 p-4"
                  >
                    <span className="inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold bg-[#E0F2F1] text-[#1A237E] mr-2">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                )
              )}
            </ol>
          </div>
        </section>
        {/* Contact */}
        <section id="contact" className="py-16 md:py-20 bg-[#F5F5F5]">
          <div className="mx-auto max-w-3xl px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A237E]">Contact Us</h2>
            <p className="mt-3 text-[#455A64]">
              Get expert advice on energy-efficient upgrades and rebate eligibility.
            </p>
            <form className="bg-white rounded-2xl shadow-md ring-1 ring-black/5 mt-6 p-6 grid md:grid-cols-2 gap-4 text-left">
              <label className="block">
                <span className="text-sm font-medium">Full Name</span>
                <input
                  type="text"
                  required
                  className="mt-1 w-full rounded-xl border-[#B0BEC5] focus:border-[#26A69A] focus:ring-[#26A69A]"
                  placeholder="Jane Citizen"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium">Email</span>
                <input
                  type="email"
                  required
                  className="mt-1 w-full rounded-xl border-[#B0BEC5] focus:border-[#26A69A] focus:ring-[#26A69A]"
                  placeholder="jane@email.com"
                />
              </label>
              <label className="block md:col-span-2">
                <span className="text-sm font-medium">Postcode</span>
                <input
                  type="text"
                  required
                  className="mt-1 w-full rounded-xl border-[#B0BEC5] focus:border-[#26A69A] focus:ring-[#26A69A]"
                  placeholder="3000"
                />
              </label>
              <label className="block md:col-span-2">
                <span className="text-sm font-medium">Message</span>
                <textarea
                  rows={4}
                  required
                  className="mt-1 w-full rounded-xl border-[#B0BEC5] focus:border-[#26A69A] focus:ring-[#26A69A]"
                  placeholder="Describe your needs…"
                />
              </label>
              <div className="md:col-span-2 flex gap-3">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold bg-[#2E7D32] text-white hover:brightness-95 focus:outline-none focus:ring-4 focus:ring-[#2E7D32]/30 w-full"
                >
                  Submit Inquiry
                </button>
                <a
                  href="mailto:info@greenline.energy"
                  className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold bg-white text-[#1A237E] ring-1 ring-[#26A69A]/30 hover:bg-[#E0F2F1] w-full"
                >
                  Email Us
                </a>
              </div>
            </form>
            <p className="text-xs text-[#78909C] mt-3">
              By submitting, you authorise GreenLine Energy to contact you regarding rebates and installations.
            </p>
          </div>
        </section>
        {/* FAQ */}
        <section id="faq" className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 md:px-6 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#1A237E]">Rebate Details</h3>
              <ul className="text-sm text-[#455A64] space-y-2 list-disc pl-5">
                <li>Hot water rebates: up to $1,400 (Solar Victoria, eligible products)</li>
                <li>VEU incentives: up to ~$3,000 combined (activity & site dependent)</li>
                <li>Air conditioning: VEU discounts on approved models</li>
                <li>Eligibility varies by postcode and system</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#1A237E]">Benefits of Switching</h3>
              <ul className="text-sm text-[#455A64] space-y-2 list-disc pl-5">
                <li>Reduce hot water costs from ~$1,015/yr to ~$205/yr</li>
                <li>Replace gas heating with efficient RCAC</li>
                <li>Lower emissions with all-electric systems</li>
              </ul>
            </div>
          </div>
          <div className="mx-auto max-w-7xl px-4 md:px-6 mt-6">
            <p className="text-xs text-[#78909C]">
              *Indicative figures. Rebates and eligibility are subject to Solar Victoria and VEU program rules and may
              change. Confirm with us before proceeding.
            </p>
          </div>
        </section>
        {/* Footer (Forest Green) */}
        <footer className="py-8 border-t bg-[#2E7D32]">
          <div className="mx-auto max-w-7xl px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <p className="text-[#E0F2F1]">
              © {new Date().getFullYear()} GreenLine Energy Pty Ltd • All rights reserved
            </p>
            <div className="text-[#E0F2F1]">
              <a
                className="hover:text-[#26A69A]"
                href="https://www.energy.vic.gov.au/victorian-energy-upgrades"
                target="_blank"
                rel="noopener noreferrer"
              >
                VEU Program
              </a>{" "}
              •{" "}
              <a
                className="hover:text-[#26A69A]"
                href="https://www.solar.vic.gov.au/hot-water-rebate"
                target="_blank"
                rel="noopener noreferrer"
              >
                Solar Victoria Rebates
              </a>{" "}
              •{" "}
              <a className="hover:text-[#26A69A]" href="#contact">
                Contact
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
