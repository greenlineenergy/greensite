import Head from "next/head";

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 86400, // Revalidate every 24 hours for ISR
  };
}

export default function AirConditioningRebates() {
  const year = new Date().getFullYear();
  const faqs = [
    {
      q: "How much can I save with Victorian air conditioning rebates?",
      a: "Eligible Victorian households can save up to $9,000 when replacing old gas heating with energy-efficient reverse-cycle air conditioning through the VEU program.",
    },
    {
      q: "Who is eligible for VEU air conditioning rebates?",
      a: "Homeowners and some renters in Victoria may qualify. Eligibility depends on your current system, property type, and compliance with government criteria.",
    },
    {
      q: "What brands does GLEnergy.com.au install?",
      a: "We supply and install leading brands such as Daikin, Mitsubishi, and Fujitsu — all VEU-approved for efficiency and reliability.",
    },
    {
      q: "Do rebates apply for both heating and cooling?",
      a: "Yes. Reverse-cycle systems provide both heating and cooling, and rebates apply when replacing old, inefficient gas heaters.",
    },
  ];

  const jsonLdBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "GLEnergy.com.au",
    url: "https://glenergy.com.au/air-conditioning-rebates/",
    telephone: "+61 412 345 678",
    email: "contact@glenergy.com.au",
    logo: "https://glenergy.com.au/greenline-logo.png", // Update with actual URL
    image: "https://glenergy.com.au/og-image-aircon.jpg", // Update with actual URL
    description:
      "GLEnergy.com.au offers VEU-accredited reverse-cycle air conditioning installations in Victoria. Save up to $9,000 with government rebates by replacing your old gas heater.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Green Street",
      addressLocality: "Melbourne",
      addressRegion: "VIC",
      postalCode: "3000",
      addressCountry: "AU",
    },
    areaServed: ["Victoria", "Melbourne", "Geelong", "Ballarat", "Bendigo", "Shepparton"],
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
        <title>Save up to $9,000 with Air Conditioning Rebates | GLEnergy.com.au</title>
        <meta
          name="description"
          content="Discover VEU-accredited reverse-cycle air conditioning upgrades with GLEnergy.com.au. Save up to $9,000 by replacing old gas heaters in Victoria."
        />
        <meta
          name="keywords"
          content="Victorian air conditioning rebates, reverse-cycle air conditioning, VEU rebates, GLEnergy.com.au, government rebates Victoria, replace gas heating"
        />
        <meta
          property="og:title"
          content="Air Conditioning Rebates | GLEnergy.com.au"
        />
        <meta
          property="og:description"
          content="Upgrade to energy-efficient reverse-cycle air conditioning with GLEnergy.com.au. Save up to $9,000 with Victorian Government rebates."
        />
        <meta
          property="og:image"
          content="https://glenergy.com.au/air-conditioning-rebates/og-image-aircon.jpg"
        />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/styles.css" /> {/* Pre-built Tailwind CSS */}
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
        <section id="offer" className="relative py-16 px-6 md:px-12 text-center">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              Save up to <span className="text-lime-400">$9,000</span> with Victorian Air Conditioning Rebates
            </h1>
            <p className="text-white/80 mb-6">
              GLEnergy.com.au offers VEU-accredited reverse-cycle upgrades to replace old gas heaters with efficient systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#quote"
                className="bg-lime-600 hover:bg-lime-500 text-black px-6 py-3 rounded-lg font-semibold"
              >
                Get a Free Quote
              </a>
              <a
                href="#rebates"
                className="border border-white/20 hover:border-lime-400 px-6 py-3 rounded-lg font-semibold"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>

        {/* Rebates */}
        <section id="rebates" className="py-20 bg-black/30 border-y border-white/10">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Unlock Up to $9,000 in Rebates</h2>
            <p className="text-white/80 text-center mb-6">
              GLEnergy.com.au secures VEU-accredited rebates to make your air conditioning upgrade affordable.
            </p>
            <ul className="space-y-3 text-white/90 text-center">
              <li className="flex items-center gap-2 justify-center">
                <span className="w-2 h-2 bg-lime-500 rounded-full" />Up to $9,000 in combined rebates
              </li>
              <li className="flex items-center gap-2 justify-center">
                <span className="w-2 h-2 bg-lime-500 rounded-full" />Covers both heating and cooling
              </li>
              <li className="flex items-center gap-2 justify-center">
                <span className="w-2 h-2 bg-lime-500 rounded-full" />Eligible for gas heater replacement
              </li>
            </ul>
            <p className="mt-4 text-xs text-white/60">*Savings vary by eligibility and location</p>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-20 bg-white/5">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-extrabold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-5">
              {faqs.map((f, i) => (
                <details
                  key={i}
                  className="bg-black/40 p-4 rounded-lg ring-1 ring-white/10"
                >
                  <summary className="text-lg font-semibold cursor-pointer">
                    {f.q}
                  </summary>
                  <p className="mt-2 text-white/80">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Get a Quote */}
        <section id="quote" className="py-20 border-t border-white/10">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold">Get a Quote Today</h2>
            <p className="mt-4 text-white/80">
              Complete the form below, and we’ll contact you within 48 hours to discuss your air conditioning upgrade.
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
              *Terms & Conditions: Savings based on VEU eligibility. Additional charges may apply for complex installations.
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
