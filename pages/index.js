import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>GreenLine Energy — Warm, Efficient Home Upgrades</title>
        <meta
          name="description"
          content="GreenLine Energy Pty Ltd offers VEU-accredited upgrades for heat pumps, air conditioning, and hydronics. Enjoy savings and a greener home with expert support."
        />
        <meta property="og:title" content="GreenLine Energy Solutions" />
        <meta
          property="og:description"
          content="Discover VEU-accredited upgrades for a warmer, more efficient home. Reduce costs and emissions with certified installations."
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
      <div className="bg-gradient-to-b from-[#F5F5F5] via-white to-[#F5E8C7] text-[#1A237E] antialiased">
        {/* Banner */}
        <div className="w-full">
          <img
            src="/greenline-banner.png.png"
            alt="Welcome to GreenLine Energy"
            className="w-full h-auto max-h-[200px] object-cover rounded-b-2xl shadow-md"
          />
        </div>
        {/* Header (Teal with warm accent) */}
        <header className="sticky top-0 z-50 bg-[#26A69A] text-white/90 shadow-sm">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex items-center justify-between h-16">
              <a href="#top" className="flex items-center gap-3 font-semibold text-white">
                <img
                  src="/greenline-logo-mark.png"
                  alt="GreenLine Energy Logo"
                  className="h-10 w-10 rounded-full"
                />
                <img
                  src="/greenline-logo-word.png.jpeg.png"
                  alt="GreenLine Energy"
                  className="hidden sm:block h-6"
                />
              </a>
              <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                <a href="#solutions" className="hover:text-[#F5E8C7]">Solutions</a>
                <a href="#pricing" className="hover:text-[#F5E8C7]">Pricing</a>
                <a href="#process" className="hover:text-[#F5E8C7]">Process</a>
                <a href="#faq" className="hover:text-[#F5E8C7]">FAQ</a>
                <a href="#contact" className="hover:text-[#F5E8C7]">Contact</a>
              </nav>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl px-5 py-2.5 font-semibold bg-[#2E7D32] text-white hover:bg-[#225522] transition-colors duration-200"
              >
                Get Started
              </a>
            </div>
          </div>
        </header>
        {/* Hero - Warm and Welcoming */}
        <section id="top" className="py-20 md:py-28 bg-[#F5E8C7]">
          <div className="mx-auto max-w-7xl px-6 md:px-12 grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7 space-y-8">
              <span className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium bg-white/80 text-[#1A237E] ring-1 ring-[#26A69A]/30 shadow-sm">
                VEU-Accredited Upgrades
              </span>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#1A237E]">
                Welcome to a Warmer, Greener Home
              </h1>
              <p className="text-lg md:text-xl text-[#455A64] leading-relaxed">
                At GreenLine Energy, we’re here to help you save on energy bills and reduce your carbon footprint with
                expert, government-supported upgrades.
              </p>
              <div className="flex gap-4 flex-wrap">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold bg-[#2E7D32] text-white hover:bg-[#225522] focus:ring-4 focus:ring-[#2E7D32]/30 transition-all duration-200"
                >
                  Contact Us Today
                </a>
                <a
                  href="#rebates"
                  className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold bg-white text-[#1A237E] ring-1 ring-[#26A69A]/30 hover:bg-[#E0F2F1] shadow-sm"
                >
                  Learn About Rebates
                </a>
              </div>
              <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm pt-4">
                {[
                  ["Up to $3,000", "in Rebates*"],
                  ["$1,000–$1,400", "Hot Water Savings"],
                  ["Save $1,275/yr", "vs Old Systems"],
                  ["Friendly Experts", "Fast Service"],
                ].map(([t, s], i) => (
                  <li
                    key={i}
                    className="bg-white rounded-2xl shadow-md ring-1 ring-gray-200/50 p-4 text-center text-[#1A237E]"
                  >
                    <strong className="block text-lg">{t}</strong>
                    <span className="text-sm text-[#455A64]">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-5">
              <div className="bg-white/90 rounded-2xl shadow-lg ring-1 ring-gray-200/50 p-6">
                <img
                  src="/hero-bg.png.png"
                  alt="Cozy home with solar panels and heat pump"
                  width="600"
                  height="400"
                  className="rounded-2xl object-cover w-full h-auto"
                />
                <p className="text-sm text-[#455A64] mt-3 text-center">
                  Enjoy a cozy, energy-efficient home with our certified solutions.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Solutions - Clean and Professional */}
        <section id="solutions" className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#1A237E]">
              Our Warm, Eco-Friendly Solutions
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Heat Pump Hot Water",
                  body: "Upgrade to efficient, quiet heat pumps that warm your home and save on costs.",
                  bullets: ["Up to 80% energy savings", "Smart controls", "VEU & STC eligible"],
                  chips: ["Emerald / EcoGenica / Neopower"],
                },
                {
                  title: "Reverse-Cycle Air Conditioning",
                  body: "Stay comfortable year-round with tailored, VEU-eligible systems.",
                  bullets: ["All-season comfort", "Expert sizing", "Government discounts"],
                  chips: ["Daikin • Mitsubishi • Fujitsu"],
                },
                {
                  title: "Hydronics & Boilers",
                  body: "Enjoy gentle, even warmth with custom hydronic heating solutions.",
                  bullets: ["Personalized designs", "Site-specific eligibility", "Full support"],
                  chips: ["Custom Quotes"],
                },
              ].map((card, i) => (
                <article
                  key={i}
                  className="bg-white rounded-2xl shadow-md ring-1 ring-gray-200/50 p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="text-xl font-semibold text-[#26A69A] mb-4">{card.title}</h3>
                  <p className="text-sm text-[#455A64] mb-4 leading-relaxed">{card.body}</p>
                  <ul className="text-sm space-y-2 list-disc pl-5 text-[#455A64] mb-4">
                    {card.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#26A69A] rounded-full"></span>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <span className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium bg-[#E0F7FA] text-[#00695C] ring-1 ring-[#26A69A]/20">
                    {card.chips}
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>
        {/* Rebates - Warm and Inviting */}
        <section id="rebates" className="py-16 md:py-24 bg-[#F5E8C7]">
          <div className="mx-auto max-w-7xl px-6 md:px-12 grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A237E] mb-4">
                Discover Your Rebate Savings
              </h2>
              <p className="text-lg text-[#455A64] leading-relaxed">
                As a VEU-accredited provider, we bring you government-supported incentives to make your home upgrades
                affordable and eco-friendly.
              </p>
              <ul className="text-sm text-[#455A64] space-y-3 list-none">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#2E7D32] rounded-full"></span>
                  Up to $3,000 in combined incentives
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#2E7D32] rounded-full"></span>
                  $1,000–$1,400 hot water rebates
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#2E7D32] rounded-full"></span>
                  Discounts on air conditioners
                </li>
              </ul>
              <p className="text-xs text-[#78909C]">
                *Varies by location and eligibility. Let’s find your perfect fit!
              </p>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold bg-[#2E7D32] text-white hover:bg-[#225522] focus:ring-4 focus:ring-[#2E7D32]/30 transition-all duration-200"
              >
                Explore Your Options
              </a>
            </div>
            <div className="md:pl-8">
              <img
                src="/rebates-illustration.png.png"
                alt="Warm home with energy-efficient upgrades"
                width="400"
                height="300"
                className="rounded-2xl shadow-md ring-1 ring-gray-200/50 object-cover"
              />
            </div>
          </div>
        </section>
        {/* Pricing - Clean and Warm */}
        <section id="pricing" className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#1A237E]">
              Affordable Pricing After Rebates
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Heat Pump Hot Water (260–300L)",
                  desc: (
                    <>
                      From <span className="font-semibold text-[#2E7D32]">$799</span> installed*
                    </>
                  ),
                  points: ["Full install & removal", "5–7 year warranties"],
                },
                {
                  title: "Split System RCAC (2.5–3.5 kW)",
                  desc: <>VEU-discounted, site-specific</>,
                  points: ["Cozy single-room comfort", "Certified models"],
                },
                {
                  title: "Ducted RCAC (Whole Home)",
                  desc: <>Custom design, VEU-discounted</>,
                  points: ["Whole-home warmth", "Expert load planning"],
                },
              ].map((p) => (
                <div
                  key={p.title}
                  className="bg-white rounded-2xl shadow-md ring-1 ring-gray-200/50 p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="text-lg font-semibold text-[#1A237E] mb-3">{p.title}</h3>
                  <p className="text-sm text-[#455A64] mb-4">{p.desc}</p>
                  <ul className="text-sm space-y-2 list-disc pl-5 text-[#455A64]">
                    {p.points.map((x) => (
                      <li key={x} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#26A69A] rounded-full"></span>
                        {x}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="text-xs text-[#78909C] mt-6 text-center">
              *Based on eligibility and metro installs. Contact us for details.
            </p>
          </div>
        </section>
        {/* Process - Warm Flow */}
        <section id="process" className="py-16 md:py-24 bg-[#F5E8C7]">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#1A237E]">
              Your Journey to Savings
            </h2>
            <ol className="grid md:grid-cols-5 gap-6 text-sm text-center">
              {["Eligibility Check", "System Selection", "Installation", "Removal & Recycling", "Rebate Application"].map(
                (step, i) => (
                  <li
                    key={i}
                    className="bg-white rounded-2xl shadow-md ring-1 ring-gray-200/50 p-6 hover:shadow-lg transition-shadow duration-300"
                  >
                    <span className="inline-flex items-center justify-center rounded-full bg-white/80 text-[#1A237E] w-10 h-10 mx-auto mb-3">
                      {i + 1}
                    </span>
                    <p className="text-[#455A64]">{step}</p>
                  </li>
                )
              )}
            </ol>
          </div>
        </section>
        {/* Contact - Warm and Welcoming */}
        <section id="contact" className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-3xl px-6 md:px-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A237E] mb-6">
              We’re Here to Help You
            </h2>
            <p className="text-lg text-[#455A64] mb-6 leading-relaxed">
              Our friendly team is ready to guide you through energy upgrades and rebate options.
            </p>
            <form className="bg-[#F5E8C7] rounded-2xl shadow-md ring-1 ring-gray-200/50 p-6 grid md:grid-cols-2 gap-4 text-left">
              <label className="block">
                <span className="text-sm font-medium text-[#1A237E]">Full Name</span>
                <input
                  type="text"
                  required
                  className="mt-2 w-full rounded-xl border-gray-200 focus:border-[#26A69A] focus:ring-[#26A69A] p-2 bg-white"
                  placeholder="Jane Citizen"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-[#1A237E]">Email</span>
                <input
                  type="email"
                  required
                  className="mt-2 w-full rounded-xl border-gray-200 focus:border-[#26A69A] focus:ring-[#26A69A] p-2 bg-white"
                  placeholder="jane@email.com"
                />
              </label>
              <label className="block md:col-span-2">
                <span className="text-sm font-medium text-[#1A237E]">Postcode</span>
                <input
                  type="text"
                  required
                  className="mt-2 w-full rounded-xl border-gray-200 focus:border-[#26A69A] focus:ring-[#26A69A] p-2 bg-white"
                  placeholder="3000"
                />
              </label>
              <label className="block md:col-span-2">
                <span className="text-sm font-medium text-[#1A237E]">Message</span>
                <textarea
                  rows={4}
                  required
                  className="mt-2 w-full rounded-xl border-gray-200 focus:border-[#26A69A] focus:ring-[#26A69A] p-2 bg-white"
                  placeholder="Tell us how we can assist you…"
                />
              </label>
              <div className="md:col-span-2 flex gap-4">
                <button
                  type="submit"
                  className="w-full md:w-auto inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold bg-[#2E7D32] text-white hover:bg-[#225522] focus:ring-4 focus:ring-[#2E7D32]/30 transition-all duration-200"
                >
                  Send Message
                </button>
                <a
                  href="mailto:info@greenline.energy"
                  className="w-full md:w-auto inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold bg-white text-[#1A237E] ring-1 ring-[#26A69A]/30 hover:bg-[#E0F2F1] transition-colors duration-200"
                >
                  Email Us
                </a>
              </div>
            </form>
            <p className="text-sm text-[#78909C] mt-4">
              We’re excited to assist you! By submitting, you agree to let us reach out about your energy needs.
            </p>
          </div>
        </section>
        {/* FAQ - Warm and Informative */}
        <section id="faq" className="py-16 md:py-24 bg-[#F5E8C7]">
          <div className="mx-auto max-w-7xl px-6 md:px-12 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#1A237E]">Rebate Insights</h3>
              <ul className="text-sm text-[#455A64] space-y-3 list-none">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#26A69A] rounded-full"></span>
                  Hot water rebates up to $1,400
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#26A69A] rounded-full"></span>
                  Up to $3,000 in combined incentives
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#26A69A] rounded-full"></span>
                  Aircon discounts available
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#1A237E]">Why Switch?</h3>
              <ul className="text-sm text-[#455A64] space-y-3 list-none">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#26A69A] rounded-full"></span>
                  Save up to $810/year on hot water
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#26A69A] rounded-full"></span>
                  Switch to efficient heating
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#26A69A] rounded-full"></span>
                  Reduce your carbon footprint
                </li>
              </ul>
            </div>
          </div>
          <div className="mx-auto max-w-7xl px-6 md:px-12 mt-6">
            <p className="text-sm text-[#78909C] text-center">
              *Estimates may vary. Contact us for personalized advice.
            </p>
          </div>
        </section>
        {/* Footer - Warm and Inviting */}
        <footer className="py-10 bg-[#2E7D32] text-[#E0F2F1]">
          <div className="mx-auto max-w-7xl px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <p className="text-[#E0F2F1]">
              © {new Date().getFullYear()} GreenLine Energy Pty Ltd • All rights reserved
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.energy.vic.gov.au/victorian-energy-upgrades"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F5E8C7] transition-colors duration-200"
              >
                VEU Program
              </a>
              <span className="text-white/50">•</span>
              <a
                href="https://www.solar.vic.gov.au/hot-water-rebate"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F5E8C7] transition-colors duration-200"
              >
                Solar Victoria Rebates
              </a>
              <span className="text-white/50">•</span>
              <a href="#contact" className="hover:text-[#F5E8C7] transition-colors duration-200">
                Contact Us
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
