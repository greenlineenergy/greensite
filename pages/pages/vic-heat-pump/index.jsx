import Head from "next/head";

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
      q: "This sounds too good to be true, what's the catch?",
      a: "There is no catch! The Victorian Government provides financial incentives to install energy-efficient appliances, reducing electricity demand and prices.",
    },
    {
      q: "How do I know if I’m eligible for this offer?",
      a: "Eligible if owner-occupier, household income < $210,000, property < $3M, no prior hot water rebate, system > 3 years old. STCs/VEECs require an inefficient electric/gas system.",
    },
    {
      q: "Is it worth upgrading to a heat pump?",
      a: "Yes, cuts hot water bills by up to 80%, especially with gas phase-out.",
    },
    {
      q: "How long does the installation process take?",
      a: "4–6 hours, depending on home layout and additional work.",
    },
    {
      q: "Will my heat pump work effectively during winter?",
      a: "Yes, operates -7 to 43°C with de-icing and heat injection technology.",
    },
    {
      q: "Is there a limit to how many times I can apply for the Victorian Hot Water Rebate?",
      a: "Yes, once per property.",
    },
    {
      q: "What is the payback period for a heat pump hot water system?",
      a: "3–6 years, depending on upfront cost, rebates, usage, and electricity rates.",
    },
  ];

  const jsonLdBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "GLEnergy.com.au",
    url: "https://glenergy.com.au/vic-heat-pump/",
    telephone: "+61 [Phone Number]", // Replace with actual number
    email: "contact@glenergy.com.au",
    areaServed: "Victoria, Australia",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Green Street", // Replace with actual address if needed
      addressLocality: "Melbourne",
      addressRegion: "VIC",
      addressCountry: "AU",
    },
    openingHours: "Mo-Fr 09:00-17:00",
    sameAs: [
      "https://www.energy.vic.gov.au/victorian-energy-upgrades",
      "https://www.solar.vic.gov.au/hot-water-rebate",
    ],
  };

  return (
    <>
      <Head>
        <title>Get a 300L Heat Pump for $795! | GLEnergy.com.au</title>
        <meta
          name="description"
          content="Explore the 300L Econova heat pump offer with GLEnergy.com.au. Save up to $9,000 with Victorian Government rebates and cut hot water costs by 80%."
        />
        <meta property="og:title" content="300L Heat Pump Offer | GLEnergy.com.au" />
        <meta
          property="og:description"
          content="Switch to an energy-efficient 300L Econova heat pump with GLEnergy.com.au. Save up to $9,000 upfront and 80% on costs."
        />
        <meta property="og:image" content="https://glenergy.com.au/vic-heat-pump/og-image.jpg" /> {/* Replace with actual URL */}
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/styles.css" /> {/* Pre-built Tailwind CSS */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBusiness) }}
        />
      </Head>

      <div className="bg-gradient-to-b from-[#111614] via-[#1B2422] to-[#22332F] text-white antialiased font-sans">
        {/* Header */}
        <header className="sticky top-0 z-50 backdrop-blur bg-black/40 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
            <a href="/" className="flex items-center gap-3" aria-label="GLEnergy.com.au Home">
              <img
                src="/greenline-logo-mark.png.jpeg" // Placeholder; replace with GLEnergy logo
                alt="GLEnergy.com.au logo"
                className="h-10 w-10 rounded-full"
              />
              <img
                src="/greenline-logo-word.png.jpeg" // Placeholder; replace with GLEnergy wordmark
                alt="GLEnergy.com.au wordmark"
                className="h-6"
              />
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
              <a href="#offer" className="hover:text-lime-300">Offer</a>
              <a href="#included" className="hover:text-lime-300">Included</a>
              <a href="#rebates" className="hover:text-lime-300">Rebates</a>
              <a href="#faq" className="hover:text-lime-300">FAQ</a>
              <a href="#quote" className="hover:text-lime-300">Get a Quote</a>
            </nav>
            <a
              href="#quote"
              className="hidden md:inline-block bg-lime-600 text-black font-semibold px-4 py-2 rounded-lg hover:bg-lime-500"
              aria-label="Get a Quote"
            >
              Get a Quote
            </a>
          </div>
        </header>

        {/* Hero */}
        <section id="offer" className="relative isolate overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-lime-500/10 to-transparent pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block text-xs uppercase tracking-widest text-lime-300">VEU-Accredited Upgrade</span>
              <h1 className="mt-3 text-4xl md:text-5xl font-extrabold leading-tight">
                Switch to a <span className="text-lime-300">300L Heat Pump</span> and Cut Hot-Water Costs
              </h1>
              <p className="mt-4 text-white/80">
                Government-supported incentives reduce upfront costs to $795* and lower ongoing bills with high-efficiency technology.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-white/90">
                <li>
                  • Installed price from <span className="text-lime-300 font-semibold">$795*</span>
                </li>
                <li>
                  • Up to <span className="text-lime-300 font-semibold">80%</span> lower hot-water energy use
                </li>
                <li>
                  • <span className="text-lime-300 font-semibold">5-year</span> manufacturer warranty
                </li>
              </ul>
              <div className="mt-8 flex gap-3">
                <a
                  href="#quote"
                  className="bg-lime-600 text-black font-semibold px-5 py-3 rounded-lg hover:bg-lime-500"
                >
                  Get a Quote
                </a>
                <a
                  href="#rebates"
                  className="border border-white/20 px-5 py-3 rounded-lg hover:border-lime-300 text-white hover:text-lime-300"
                >
                  See Rebates
                </a>
              </div>
              <p className="mt-3 text-xs text-white/60">*Subject to eligibility & standard installation</p>
            </div>
            <div className="aspect-video rounded-2xl ring-1 ring-white/10 overflow-hidden">
              <video
                src="/landingvid.mp4"
                autoplay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* What’s Included? */}
        <section id="included" className="py-14 md:py-18 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center">What’s Included</h2>
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl ring-1 ring-white/10 bg-white/5">
                <h3 className="font-semibold text-lime-300 mb-2">300L All-in-One Heat Pump</h3>
                <p className="text-white/80 text-sm">High-efficiency Econova system, Wi-Fi control capable.</p>
              </div>
              <div className="p-6 rounded-xl ring-1 ring-white/10 bg-white/5">
                <h3 className="font-semibold text-lime-300 mb-2">Professional Installation</h3>
                <p className="text-white/80 text-sm">Qualified trades handle delivery, setup, and commissioning.</p>
              </div>
              <div className="p-6 rounded-xl ring-1 ring-white/10 bg-white/5">
                <h3 className="font-semibold text-lime-300 mb-2">Removal & Recycling</h3>
                <p className="text-white/80 text-sm">Old unit recycled, site left clean.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Heat Pumps */}
        <section className="py-14 md:py-18">
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
            <div className="p-6 rounded-2xl ring-1 ring-white/10 bg-white/5">
              <h3 className="text-xl font-semibold">Why Heat Pumps Cut Costs</h3>
              <p className="mt-3 text-white/80 text-sm">
                Heat pumps move heat from the air into water via a heat-exchange cycle, using 60–75% less electricity than traditional resistance systems, designed for Australian conditions.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-white/90">
                <li>• Energy reduction vs electric: ~60–75%</li>
                <li>• Designed for Australian cold mornings</li>
                <li>• Low-noise, compact, smart scheduling</li>
              </ul>
            </div>
            <div className="p-6 rounded-2xl ring-1 ring-white/10 bg-white/5">
              <h3 className="text-xl font-semibold">Product Highlights</h3>
              <ul className="mt-3 space-y-2 text-sm text-white/90">
                <li>• Wi-Fi remote monitoring and control</li>
                <li>• Durable build for long service life</li>
                <li>• Sleek, unobtrusive design</li>
                <li>• 5-year manufacturer warranty</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Rebates */}
        <section id="rebates" className="py-14 md:py-18 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center">Unlock Up to $9,000 in Rebates</h2>
            <p className="mt-4 text-white/80 text-center">
              GLEnergy.com.au secures VEU-accredited rebates to make your upgrade affordable.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-white/90 text-center">
              <li>• Up to $9,000 in combined rebates</li>
              <li>• Up to 80% energy reduction</li>
              <li>• 5-year warranty included</li>
            </ul>
            <p className="mt-4 text-xs text-white/60">*Savings vary by eligibility</p>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-14 md:py-18 border-t border-white/10">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold">What Our Customers Say</h2>
            <div className="mt-6 space-y-4">
              <blockquote className="text-white/80 italic">
                “Dimitri and his team did an exceptional job in helping us choose the right system. Their honesty and integrity were much appreciated and the quality of the system and build was second to none.” – Nelson G
              </blockquote>
              <blockquote className="text-white/80 italic">
                “Excellent service from initial contact to the final product, special mention to the installers who did a wonderful job and were both such joyful characters to deal with. Would recommend to anyone.” – Christina T
              </blockquote>
              <blockquote className="text-white/80 italic">
                “Saved a lot on our energy bills! Friendly staff and reliable as well. Have booked them in for an electrical job as well!” – Karl Chehade
              </blockquote>
              <blockquote className="text-white/80 italic">
                “Prompt attending to our enquiry and provided excellent advice which resulted in savings to our business energy usage.” – Alexandra Joanovic
              </blockquote>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-14 md:py-18 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-center text-2xl md:text-3xl font-bold">Check → Install → Save</h2>
            <div className="mt-8 grid md:grid-cols-12 gap-10 items-center">
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
                <div className="mt-6 flex gap-3">
                  <a
                    href="#quote"
                    className="bg-lime-600 text-black font-semibold px-5 py-3 rounded-lg hover:bg-lime-500"
                  >
                    Get a Quote
                  </a>
                  <a
                    href="#faq"
                    className="border border-white/20 px-5 py-3 rounded-lg hover:border-lime-300 text-white hover:text-lime-300"
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
                  className="w-full h-auto object-cover rounded-2xl ring-1 ring-white/10 shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-14 md:py-18 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-center text-2xl md:text-3xl font-bold">Frequently Asked Questions</h2>
            <div className="mt-6 space-y-4">
              {faqs.map((faq, i) => (
                <details key={i} className="bg-white/5 rounded-lg p-4 ring-1 ring-white/10">
                  <summary className="text-lg font-semibold cursor-pointer">{faq.q}</summary>
                  <p className="text-white/80 mt-2">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Get a Quote */}
        <section id="quote" className="py-14 md:py-18 border-t border-white/10">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold">Get a Quote Today</h2>
            <p className="mt-4 text-white/80">
              Complete the form below, and we’ll contact you within 48 hours to arrange your heat pump quote.
            </p>
            <form className="mt-6 max-w-lg mx-auto space-y-4 bg-white/5 rounded-lg p-6 ring-1 ring-white/10">
              <label className="block">
                <span className="text-sm font-bold">Full Name</span>
                <input
                  type="text"
                  required
                  placeholder="Jane Citizen"
                  className="mt-2 w-full rounded-lg border border-white/10 focus:border-lime-500 focus:ring-lime-500 p-3 bg-black/30 text-white"
                />
              </label>
              <label className="block">
                <span className="text-sm font-bold">Email</span>
                <input
                  type="email"
                  required
                  placeholder="jane@email.com"
                  className="mt-2 w-full rounded-lg border border-white/10 focus:border-lime-500 focus:ring-lime-500 p-3 bg-black/30 text-white"
                />
              </label>
              <label className="block">
                <span className="text-sm font-bold">Postcode</span>
                <input
                  type="text"
                  required
                  pattern="[0-9]{4}"
                  placeholder="3000"
                  className="mt-2 w-full rounded-lg border border-white/10 focus:border-lime-500 focus:ring-lime-500 p-3 bg-black/30 text-white"
                />
              </label>
              <button
                type="submit"
                className="w-full bg-lime-600 hover:bg-lime-500 text-black py-3 rounded-lg font-semibold"
              >
                Submit
              </button>
            </form>
            <p className="mt-4 text-xs text-white/60">
              *Terms & Conditions: Savings based on VEU, STC, and Solar Home Rebates eligibility. Price includes all rebates, metro Victoria only (regional may have wait periods). Extra charges for relocation ($110/m) or electrical upgrades ($395). Offer while stocks last.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-10 bg-black/40 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 text-center text-sm">
            <p className="text-white/80">© {year} GLEnergy.com.au • ABN 12 345 678 901</p>
            <div className="mt-2 space-x-4">
              <a href="/privacy-policy" className="hover:text-lime-300">Privacy Policy</a>
              <a href="/terms" className="hover:text-lime-300">Terms & Conditions</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
