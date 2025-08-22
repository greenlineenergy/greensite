import Head from "next/head";
import Image from "next/image";

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 86400, // Revalidate every 24 hours for ISR
  };
}

export default function Home() {
  const year = new Date().getFullYear();
  const faqs = [
    {
      q: "How long does installation take?",
      a: "Most installations are completed within 1–2 days, depending on the system and site.",
    },
    {
      q: "Do I pay upfront or after rebates are applied?",
      a: "You pay the final cost after rebates are applied, ensuring maximum savings.",
    },
    {
      q: "What if I rent my home?",
      a: "Renters may be eligible with landlord approval. Contact us to check your options.",
    },
    {
      q: "What are the benefits of switching?",
      a: "Save up to $1,500/year, upgrade to efficient heating, and lower your carbon footprint.",
    },
  ];

  const jsonLdBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "GreenLine Energy Pty Ltd",
    url: "https://greensite-rouge.vercel.app",
    telephone: "+61 412 345 678",
    email: "contact@GLEnergy.com.au",
    areaServed: "Victoria, Australia",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Green Street",
      addressLocality: "Melbourne",
      addressRegion: "VIC",
      postalCode: "3000",
      addressCountry: "AU",
    },
    openingHours: "Mo-Fr 09:00-17:00",
    sameAs: [
      "https://www.energy.vic.gov.au/victorian-energy-upgrades",
      "https://www.solar.vic.gov.au/hot-water-rebate",
      "https://www.facebook.com/GreenLineEnergy",
      "https://www.linkedin.com/company/greenline-energy",
    ],
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <>
      <Head>
        <title>GreenLine Energy — Save Big on Energy Upgrades</title>
        <meta
          name="description"
          content="VEU-accredited upgrades for heat pumps, air conditioning, hydronics & hot water in Victoria. Save up to $9,000 in rebates and cut emissions."
        />
        <meta property="og:title" content="GreenLine Energy Solutions" />
        <meta
          property="og:description"
          content="Unlock VEU-accredited upgrades to save on energy costs and reduce emissions. Enjoy up to $9,000 in rebates with certified installations."
        />
        <meta property="og:image" content="https://greensite-rouge.vercel.app/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/styles.css" /> {/* Pre-built Tailwind CSS for production */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBusiness) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
        />
      </Head>

      <div className="bg-gradient-to-b from-[#111614] via-[#1B2422] to-[#22332F] text-white antialiased font-sans">
        {/* Header */}
        <header className="sticky top-0 z-50 backdrop-blur bg-black/40 border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6 md:px-12 h-16 flex items-center justify-between">
            <a href="#top" className="flex items-center gap-3" aria-label="GreenLine Energy Home">
              <img
                src="/greenline-logo-mark.png.jpeg"
                alt="GreenLine Energy logo"
                className="h-10 w-10 rounded-full"
              />
              <img
                src="/greenline-logo-word.png.jpeg"
                alt="GreenLine Energy wordmark"
                className="h-6"
              />
            </a>
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
              <a href="#solutions" className="hover:text-lime-300">Solutions</a>
              <a href="#rebates" className="hover:text-lime-300">Rebates</a>
              <a href="#pricing" className="hover:text-lime-300">Pricing</a>
              <a href="#process" className="hover:text-lime-300">Process</a>
              <a href="#faq" className="hover:text-lime-300">FAQ</a>
              <a href="#contact" className="hover:text-lime-300">Contact</a>
            </nav>
            <a
              href="#contact"
              className="hidden md:inline-flex items-center rounded-lg px-4 py-2 bg-lime-600 hover:bg-lime-500 font-semibold"
              aria-label="Get Your Free Quote"
            >
              Get Your Free Quote
            </a>
          </div>
        </header>

        {/* Hero */}
        <section id="top" className="relative">
          <video
            src="/landingvid.mp4"
            poster="/fallback-banner.jpg"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-[52vh] md:h-[68vh] object-cover"
          />
          <div className="absolute inset-0 grid place-items-center px-6">
            <div className="max-w-3xl text-center space-y-5">
              <span className="inline-flex items-center rounded-full px-4 py-1.5 text-xs md:text-sm font-bold bg-lime-600/80 ring-1 ring-white/20">
                VEU-Accredited Upgrades • Save up to $9,000
              </span>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Victorian Government Rebates for Energy Upgrades</h1>
              <p className="text-lg md:text-xl text-white/90">
                Replace old gas heaters, A/C or hot water with modern, efficient systems — and pay less with government rebates.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-lg px-6 py-3 bg-lime-600 hover:bg-lime-500 font-semibold"
                  aria-label="Get Your Free Quote"
                >
                  Get Your Free Quote
                </a>
                <a
                  href="#rebates"
                  className="inline-flex items-center justify-center rounded-lg px-6 py-3 ring-1 ring-white/20 hover:bg-white/10 font-semibold"
                  aria-label="Explore Rebates"
                >
                  Explore Rebates
                </a>
              </div>
              <p className="text-xs text-white/70">Trusted by 1,000+ Victorian households</p>
            </div>
          </div>
        </section>

        {/* Trust */}
        <section aria-label="Trust and accreditation" className="py-8 bg-black/30 border-y border-white/10">
          <div className="mx-auto max-w-7xl px-6 md:px-12 flex flex-wrap items-center justify-center gap-8">
            <img
              src="/veu.png.jpeg"
              alt="Victorian Energy Upgrades"
              className="h-12"
            />
            <img
              src="/esc.png.jpeg"
              alt="Essential Services Commission"
              className="h-12"
            />
            <span className="text-sm md:text-base text-white/80">Licensed • Insured • VBA & CoES Certified</span>
          </div>
        </section>

        {/* Solutions */}
        <section id="solutions" className="py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-12">Energy‑Efficient Solutions with Rebates</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Heat Pump Hot Water",
                  body: "Efficient, quiet systems. From $799 installed after rebates.",
                  bullets: ["Up to 80% energy savings", "Smart technology", "VEU & STC eligible"],
                  chips: "Emerald • EcoGenica • Neopower",
                  image: "/heatpumphotwater.jpeg",
                  beforeImage: "/old-hotwater.png",
                },
                {
                  title: "Reverse‑Cycle Air Conditioning",
                  body: "Year‑round comfort. From $999 installed after rebates.",
                  bullets: ["All‑season efficiency", "Custom sizing", "Rebate discounts"],
                  chips: "Daikin • Mitsubishi • Fujitsu",
                  image: "/revcycair.jpeg",
                  beforeImage: "/old-aircon.png",
                },
                {
                  title: "Hydronics & Boilers",
                  body: "Custom heating. Tailored designs and quotes after rebates.",
                  bullets: ["Site eligibility", "Complete service", "Professional install"],
                  chips: "Custom quotes",
                  image: "/hydronicsboilers.png",
                  beforeImage: "/old-boiler.png",
                },
              ].map((card) => (
                <article
                  key={card.title}
                  className="bg-white/5 rounded-2xl shadow-lg ring-1 ring-white/10 p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    <img
                      src={card.beforeImage}
                      alt={`Before: Old ${card.title}`}
                      className="w-full h-24 object-cover rounded-lg"
                    />
                    <img
                      src={card.image}
                      alt={`After: New ${card.title}`}
                      className="w-full h-24 object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                  <p className="text-white/90 mb-4">{card.body}</p>
                  <ul className="space-y-2 text-white/90">
                    {card.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <span className="mt-2 w-2 h-2 bg-lime-500 rounded-full" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-lime-600/20 text-lime-300 ring-1 ring-lime-500/20 mt-4">
                    VEU Eligible: {card.chips}
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Rebates */}
        <section id="rebates" className="py-20 bg-black/30 border-y border-white/10">
          <div className="mx-auto max-w-7xl px-6 md:px-12 grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-extrabold">Unlock Up to $9,000 in Rebates</h2>
              <p className="text-white/90">GreenLine Energy secures VEU‑accredited rebates to make upgrades affordable.</p>
              <ul className="space-y-3 text-white/90">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-lime-500 rounded-full" />Up to $9,000 in combined rebates
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-lime-500 rounded-full" />Hot water rebates up to $2,681 (VEU + STC + SolarVic)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-lime-500 rounded-full" />Program extended until 2045
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-lime-500 rounded-full" />Some regions (e.g., Shepparton, Bendigo) can reach $0 product cost
                </li>
              </ul>
              <a
                href="#contact"
                className="inline-flex items-center rounded-lg px-6 py-3 bg-lime-600 hover:bg-lime-500 font-semibold"
                aria-label="Check Eligibility Now"
              >
                Check Eligibility Now
              </a>

              <div className="bg-white/5 rounded-lg p-4 ring-1 ring-white/10">
                <h3 className="text-lg font-bold mb-2">Compare & Save</h3>
                <table className="w-full text-left text-white/90">
                  <thead>
                    <tr>
                      <th className="py-2">System</th>
                      <th className="py-2 text-right">Annual Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-white/10">
                      <td className="py-2">Old System</td>
                      <td className="py-2 text-right">$2,500</td>
                    </tr>
                    <tr className="border-t border-white/10">
                      <td className="py-2">New System</td>
                      <td className="py-2 text-right">$1,000</td>
                    </tr>
                  </tbody>
                </table>
                <p className="mt-2 text-xs text-white/70">
                  Annual savings examples also include ~$1,010/year replacing ducted gas heaters and ~$370/year replacing gas space heaters.
                </p>
              </div>
              <p className="text-xs text-white/70">
                *Savings vary by location, eligibility, and product. No hidden fees — full installation, removal, and warranties included.
              </p>
            </div>
            <div className="md:pl-8">
              <img
                src="/rebates-illustration.png.jpg"
                alt="Energy‑efficient home with rebates"
                className="rounded-2xl shadow-lg ring-1 ring-white/10 object-cover w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-12">Pricing After Rebates</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Heat Pump Hot Water (260–300L)",
                  price: "From $799 installed*",
                  points: ["Full install & removal", "6–7 year tank warranties", "Rebates applied"],
                  image: "/heatpumphotwater.jpeg",
                },
                {
                  title: "Split System RCAC (2.5–3.5 kW)",
                  price: "From $999 installed*",
                  points: ["Efficient single‑room comfort", "Certified units", "Quick setup"],
                  image: "/splitrcac.jpeg",
                },
                {
                  title: "Ducted RCAC (Whole Home)",
                  price: "Custom quotes*",
                  points: ["Whole‑home efficiency", "Load planning", "Professional install"],
                  image: "/ductedrcac.jpeg",
                },
              ].map((p) => (
                <article
                  key={p.title}
                  className="bg-white/5 rounded-2xl shadow-lg ring-1 ring-white/10 p-6 hover:shadow-xl transition-shadow"
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-48 object-cover rounded-lg mb-6"
                  />
                  <h3 className="text-xl font-bold mb-1">{p.title}</h3>
                  <p className="text-lime-300 font-semibold mb-3">{p.price}</p>
                  <ul className="space-y-2 text-white/90">
                    {p.points.map((x) => (
                      <li key={x} className="flex items-start gap-2">
                        <span className="mt-2 w-2 h-2 bg-lime-500 rounded-full" />
                        {x}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-xs text-white/70">*Based on eligibility. Full installation and warranties included.</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Program Facts & Emergency Hot Water */}
        <section className="py-20 bg-black/30 border-y border-white/10">
          <div className="mx-auto max-w-7xl px-6 md:px-12 grid md:grid-cols-2 gap-10 items-start">
            <div className="space-y-4">
              <h3 className="text-2xl font-extrabold">Program Highlights</h3>
              <ul className="space-y-2 text-white/90">
                <li className="flex items-start gap-2">
                  <span className="mt-2 w-2 h-2 bg-lime-500 rounded-full" />VEU program extended until 2045
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 w-2 h-2 bg-lime-500 rounded-full" />2.4M+ Victorian homes already upgraded
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 w-2 h-2 bg-lime-500 rounded-full" />Targeting 37M tonnes CO₂ reduction (2022–2027)
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 w-2 h-2 bg-lime-500 rounded-full" />From Mar 1, 2027: end‑of‑life gas hot water replacements must be electric in VIC
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-extrabold">Emergency Hot Water (Metro Melbourne)</h3>
              <ul className="space-y-2 text-white/90">
                <li className="flex items-start gap-2">
                  <span className="mt-2 w-2 h-2 bg-lime-500 rounded-full" />48‑hour emergency replacement
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 w-2 h-2 bg-lime-500 rounded-full" />Save ~$2,000–$3,000 vs. standard emergency plumbing
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 w-2 h-2 bg-lime-500 rounded-full" />Standard hot water installs in ~5 business days
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 w-2 h-2 bg-lime-500 rounded-full" />No hidden fees
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-12">Check → Install → Save</h2>
            <div className="grid md:grid-cols-12 gap-10 items-center">
              <div className="md:col-span-7 space-y-4">
                <ol className="space-y-3 text-white/90">
                  <li>
                    <span className="font-semibold">1) Register:</span> Quick form — eligibility check in ~60 seconds.
                  </li>
                  <li>
                    <span className="font-semibold">2) Confirm:</span> We verify VEU / STC / SolarVic eligibility.
                  </li>
                  <li>
                    <span className="font-semibold">3) Install:</span> Accredited pros complete setup in 1–2 days.
                  </li>
                  <li>
                    <span className="font-semibold">4) Certify & Recycle:</span> VBA/CoES certification + old unit removed.
                  </li>
                </ol>
                <div className="flex gap-3 pt-2">
                  <a
                    href="#contact"
                    className="inline-flex items-center rounded-lg px-6 py-3 bg-lime-600 hover:bg-lime-500 font-semibold"
                    aria-label="Book Free Consultation"
                  >
                    Book Free Consultation
                  </a>
                  <a
                    href="#faq"
                    className="inline-flex items-center rounded-lg px-6 py-3 ring-1 ring-white/20 hover:bg-white/10 font-semibold"
                    aria-label="Read FAQs"
                  >
                    Read FAQs
                  </a>
                </div>
              </div>
              <div className="md:col-span-5">
                <video
                  src="/process-animation.mp4"
                  poster="/eligible.png"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto object-cover rounded-xl ring-1 ring-white/10 shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Referral */}
        <section className="py-16 bg-black/30 border-y border-white/10">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-white/5 rounded-2xl ring-1 ring-white/10 overflow-hidden">
              <div className="bg-lime-700/40 text-center py-8">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Refer a Friend, Earn $100!</h2>
              </div>
              <div className="p-8 space-y-4 text-center">
                <p className="text-xl font-bold">
                  Earn <strong>$100 cash</strong> for each successful referral (completed installation) — no limit!
                </p>
                <p className="text-white/90">Share the savings with friends and boost your rewards.</p>
                <a
                  href="#contact"
                  className="inline-flex items-center rounded-lg px-6 py-3 bg-lime-600 hover:bg-lime-500 font-semibold"
                  aria-label="Refer Now"
                >
                  Refer Now
                </a>
                <p className="text-xs text-white/70">Reward paid after the referred customer’s installation is completed. Terms apply.</p>
              </div>
              <img
                src="/refercash.png"
                alt="Referral cash reward"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-10">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {faqs.map((f, i) => (
                <details key={i} className="bg-white/5 rounded-lg p-4 ring-1 ring-white/10">
                  <summary className="text-lg font-bold cursor-pointer">{f.q}</summary>
                  <p className="text-white/90 mt-2">{f.a}</p>
                </details>
              ))}
            </div>
            <p className="text-xs text-white/70 mt-6 text-center">Estimates vary. Contact us for a detailed assessment.</p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20">
          <div className="mx-auto max-w-4xl px-6 md:px-12 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Let’s Get Started</h2>
            <p className="text-lg md:text-xl text-white/90 mb-6">
              Call <a href="tel:+61412345678" className="underline decoration-lime-500 underline-offset-4 hover:text-lime-300">+61 412 345 678</a> or submit below.
            </p>
            <div className="flex justify-center gap-3 mb-6">
              <span className="text-xs font-medium bg-lime-600/30 text-lime-200 px-3 py-1 rounded-full">✓ VEU Accredited</span>
              <span className="text-xs font-medium bg-lime-600/30 text-lime-200 px-3 py-1 rounded-full">✓ Government Rebates</span>
              <span className="text-xs font-medium bg-lime-600/30 text-lime-200 px-3 py-1 rounded-full">✓ Licensed Installers</span>
            </div>
            <form className="bg-white/5 rounded-2xl ring-1 ring-white/10 p-6 grid md:grid-cols-2 gap-6 text-left">
              <label className="block">
                <span className="text-sm font-bold">Full Name</span>
                <input
                  type="text"
                  required
                  placeholder="Jane Citizen"
                  className="mt-2 w-full rounded-lg border border-white/10 focus:border-lime-500 focus:ring-lime-500 p-3 bg-black/30"
                />
              </label>
              <label className="block">
                <span className="text-sm font-bold">Email</span>
                <input
                  type="email"
                  required
                  placeholder="jane@email.com"
                  className="mt-2 w-full rounded-lg border border-white/10 focus:border-lime-500 focus:ring-lime-500 p-3 bg-black/30"
                />
              </label>
              <label className="block md:col-span-2">
                <span className="text-sm font-bold">Postcode</span>
                <input
                  type="text"
                  required
                  pattern="[0-9]{4}"
                  placeholder="3000"
                  className="mt-2 w-full rounded-lg border border-white/10 focus:border-lime-500 focus:ring-lime-500 p-3 bg-black/30"
                />
              </label>
              <label className="block md:col-span-2">
                <span className="text-sm font-bold">Message</span>
                <textarea
                  rows={5}
                  required
                  placeholder="How can we assist you?"
                  className="mt-2 w-full rounded-lg border border-white/10 focus:border-lime-500 focus:ring-lime-500 p-3 bg-black/30"
                />
              </label>
              <div className="md:col-span-2 flex gap-4">
                <button
                  type="submit"
                  className="w-full md:w-auto inline-flex items-center justify-center rounded-lg px-8 py-3 bg-lime-600 hover:bg-lime-500 font-semibold"
                >
                  Book Free Consultation
                </button>
                <a
                  href="mailto:contact@GLEnergy.com.au"
                  className="w-full md:w-auto inline-flex items-center justify-center rounded-lg px-8 py-3 ring-1 ring-white/20 hover:bg-white/10 font-semibold"
                >
                  Email Us
                </a>
              </div>
            </form>
            <p className="text-xs text-white/70 mt-3">
              By submitting, you agree to be contacted. Refer a friend and get $100 after their install is completed.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-10 bg-black/40 border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 md:px-12 grid md:grid-cols-3 gap-6 text-sm">
            <p className="text-white/80">© {year} GreenLine Energy Pty Ltd • ABN 12 345 678 901</p>
            <div className="flex items-center gap-6">
              <a
                href="tel:+61412345678"
                className="hover:text-lime-300"
                aria-label="Call GreenLine Energy"
              >
                +61 412 345 678
              </a>
              <span className="text-white/40">•</span>
              <a
                href="mailto:contact@GLEnergy.com.au"
                className="hover:text-lime-300"
                aria-label="Email GreenLine Energy"
              >
                contact@GLEnergy.com.au
              </a>
            </div>
            <div className="flex items-center gap-6">
              <a
                href="https://www.energy.vic.gov.au/victorian-energy-upgrades"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-lime-300"
                aria-label="Victorian Energy Upgrades Program"
              >
                VEU Program
              </a>
              <span className="text-white/40">•</span>
              <a
                href="https://www.solar.vic.gov.au/hot-water-rebate"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-lime-300"
                aria-label="Solar Victoria Rebates"
              >
                Solar Victoria Rebates
              </a>
              <span className="text-white/40">•</span>
              <a
                href="/privacy-policy"
                className="hover:text-lime-300"
                aria-label="Privacy Policy"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
