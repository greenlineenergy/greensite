import Head from "next/head";

export default function Home() {
  const year = new Date().getFullYear(); // Current year: 2025

  return (
    <>
      <Head>
        <title>GreenLine Energy — Save Big on Energy Upgrades</title>
        <meta
          name="description"
          content="GreenLine Energy Pty Ltd offers VEU-accredited upgrades for heat pumps, air conditioning, and hydronics. Save up to $4,000 with rebates and expert support."
        />
        <meta property="og:title" content="GreenLine Energy Solutions" />
        <meta
          property="og:description"
          content="Unlock VEU-accredited upgrades to save on energy costs and reduce emissions. Enjoy up to $4,000 in rebates with certified installations."
        />
        <meta property="og:image" content="https://greensite-rouge.vercel.app/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" /> {/* SEO improvement */}
        <link rel="canonical" href="https://greensite-rouge.vercel.app" /> {/* SEO improvement */}
        {/* Tailwind (for dev only; compile for prod) */}
        <link rel="preconnect" href="https://cdn.tailwindcss.com" />
        <script src="https://cdn.tailwindcss.com"></script>
        {/* Fonts: Poppins (headings) + Inter (body) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
        {/* Favicon (recommend static file in public/ instead) */}
        <link
          rel="icon"
          href="/favicon.ico" // Replace with static file in public/
          sizes="any"
        />
        {/* LocalBusiness JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
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
            sameAs: [
              "https://www.energy.vic.gov.au/victorian-energy-upgrades",
              "https://www.solar.vic.gov.au/hot-water-rebate",
            ],
          })}
        </script>
        {/* Inline font and color classes */}
        <style>{`
          :root {
            --forest: #2E7D32;
            --teal: #26A69A;
            --ink: #1A237E;
            --slate: #455A64;
            --muted: #E5E7EB;
          }
          .font-display { font-family: 'Poppins', sans-serif; }
          .font-body { font-family: 'Inter', sans-serif; }
        `}</style>
      </Head>
      {/* SITE WRAPPER */}
      <div className="font-body bg-gradient-to-b from-white via-white to-[var(--muted)] text-[var(--ink)] antialiased">
        {/* Banner */}
        <div className="w-full">
          <img
            src="/greenline-banner.png" // Adjusted to match typical filename
            alt="GreenLine Energy Savings Banner"
            className="w-full h-auto max-h-[200px] object-cover rounded-b-xl shadow-md"
            loading="lazy" // Lazy load for performance
          />
        </div>
        {/* Header */}
        <header className="sticky top-0 z-50 bg-[var(--teal)] text-white shadow-sm/50 backdrop-blur supports-[backdrop-filter]:bg-[color:rgb(38_166_154_/_0.85)]">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex items-center justify-between h-16">
              <a href="#top" className="flex items-center gap-3 font-semibold text-white">
                <img
                  src="/greenline-logo-mark.png" // Adjusted to match typical filename
                  alt="GreenLine Energy logo"
                  className="h-10 w-10 rounded-full ring-1 ring-white/20"
                  loading="lazy"
                />
                <span className="font-display text-lg tracking-tight">GreenLine Energy</span>
              </a>
              <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                {[
                  ["#solutions", "Solutions"],
                  ["#pricing", "Pricing"],
                  ["#process", "Process"],
                  ["#faq", "FAQ"],
                  ["#contact", "Contact"],
                ].map(([href, label]) => (
                  <a
                    key={href}
                    href={href}
                    className="hover:text-white/90 focus:outline-none focus:ring-2 focus:ring-white/40 rounded"
                  >
                    {label}
                  </a>
                ))}
              </nav>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg px-5 py-2 font-semibold bg-[var(--forest)] text-white hover:bg-[#225522] focus:ring-4 focus:ring-[color:rgb(46_125_50_/_0.35)] transition-colors duration-200"
                aria-label="Get a quote"
              >
                Get a Quote
              </a>
            </div>
          </div>
        </header>
        {/* Hero */}
        <section id="top" className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 md:px-12 grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7 space-y-6">
              <span className="inline-flex items-center rounded-full px-3 py-1 text-xs md:text-sm font-medium bg-[var(--muted)] text-[var(--ink)] ring-1 ring-[color:rgb(38_166_154_/_0.3)]">
                VEU-Accredited Upgrades
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--ink)]">
                Transform Your Home with <span className="text-[var(--forest)]">Real Savings</span>
              </h1>
              <p className="text-lg md:text-xl text-[var(--slate)]">
                GreenLine Energy delivers VEU-accredited upgrades that cut costs and emissions. Save up to <b>$4,000</b> with government rebates.
              </p>
              {/* Savings strip */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  ["Up to $4,000", "Combined rebates*"],
                  ["Up to $1,500", "Hot water savings"],
                  ["Save $1,500/yr", "vs older systems"],
                  ["Expert Team", "Fast installs"],
                ].map(([t, s], i) => (
                  <div key={i} className="rounded-xl bg-[var(--muted)] ring-1 ring-gray-200 p-3 text-center shadow-sm">
                    <div className="font-semibold">{t}</div>
                    <div className="text-xs text-[var(--slate)]">{s}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold bg-[var(--forest)] text-white hover:bg-[#225522] focus:ring-4 focus:ring-[color:rgb(46_125_50_/_0.35)] transition-all"
                >
                  Contact Us
                </a>
                <a
                  href="#rebates"
                  className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold bg-white text-[var(--ink)] ring-1 ring-[color:rgb(38_166_154_/_0.3)] hover:bg-[var(--muted)]"
                >
                  Explore Rebates
                </a>
              </div>
              <p className="text-xs text-[#78909C]">*Savings vary by location, eligibility, and product. Contact us for details.</p>
            </div>
            <div className="md:col-span-5">
              <div className="bg-white rounded-2xl shadow-md ring-1 ring-gray-200 p-4">
                <img
                  src="/hero-bg.png" // Adjusted to match typical filename
                  alt="Modern home with solar and heat pump"
                  width="600"
                  height="400"
                  className="rounded-xl object-cover w-full h-auto"
                  loading="lazy"
                />
                <p className="text-sm text-[var(--slate)] mt-2 text-center">
                  Upgrade to a cleaner, more efficient home.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Trust */}
        <section aria-label="Trust and Accreditation" className="py-8 bg-[var(--muted)]">
          <div className="mx-auto max-w-7xl px-6 md:px-12 flex flex-wrap items-center justify-center gap-6">
            <img
              src="/veu.png" // Adjusted to match typical filename
              alt="Victorian Energy Upgrades accreditation"
              className="h-12"
              loading="lazy"
            />
            <img
              src="/esc.png" // Adjusted to match typical filename
              alt="Essential Services Commission accreditation"
              className="h-12"
              loading="lazy"
            />
            <span className="text-sm text-[var(--slate)]">Licensed, insured, and committed to excellence</span>
          </div>
        </section>
        {/* Solutions */}
        <section id="solutions" className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-10 text-[var(--ink)]">
              Our Energy-Efficient Solutions
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Heat Pump Hot Water",
                  body: "Efficient, quiet systems to reduce heating costs.",
                  bullets: ["Up to 80% energy savings", "Smart technology", "VEU & STC eligible"],
                  chips: "Emerald • EcoGenica • Neopower",
                },
                {
                  title: "Reverse-Cycle Air Conditioning",
                  body: "Year-round comfort with VEU-approved units.",
                  bullets: ["All-season efficiency", "Custom sizing", "Rebate discounts"],
                  chips: "Daikin • Mitsubishi • Fujitsu",
                },
                {
                  title: "Hydronics & Boilers",
                  body: "Custom heating for consistent warmth.",
                  bullets: ["Tailored designs", "Site eligibility", "Complete service"],
                  chips: "Custom Quotes",
                },
              ].map((card, i) => (
                <article key={i} className="bg-[var(--muted)] rounded-2xl shadow-sm ring-1 ring-gray-200 p-5 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-[var(--teal)] mb-3">{card.title}</h3>
                  <p className="text-sm text-[var(--slate)] mb-3">{card.body}</p>
                  <ul className="text-sm space-y-1 list-disc pl-5 text-[var(--slate)]">
                    {card.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[var(--teal)] rounded-full" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-white text-[#00695C] ring-1 ring-[color:rgb(38_166_154_/_0.2)] mt-3">
                    {card.chips}
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>
        {/* Rebates */}
        <section id="rebates" className="py-16 md:py-20 bg-[var(--muted)]">
          <div className="mx-auto max-w-7xl px-6 md:px-12 grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-5">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--ink)]">
                Unlock Your Rebate Savings
              </h2>
              <p className="text-lg text-[var(--slate)]">
                As a VEU-accredited provider, GreenLine Energy secures government rebates to make your upgrades affordable.
              </p>
              <ul className="text-sm text-[var(--slate)] space-y-2">
                {[
                  "Up to $4,000 in combined rebates",
                  "Up to $1,500 hot water savings",
                  "Discounts on air conditioners",
                ].map((x) => (
                  <li key={x} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[var(--forest)] rounded-full" />
                    {x}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-[#78909C]">*Depends on location and eligibility. Contact for a personalized estimate.</p>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold bg-[var(--forest)] text-white hover:bg-[#225522] focus:ring-4 focus:ring-[color:rgb(46_125_50_/_0.35)] transition-all"
              >
                Check Eligibility
              </a>
            </div>
            <div className="md:pl-6">
              <img
                src="/rebates-illustration.png" // Adjusted to match typical filename
                alt="Rebate certificate and solar panel"
                width="400"
                height="300"
                className="rounded-2xl shadow-sm ring-1 ring-gray-200 object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </section>
        {/* Pricing */}
        <section id="pricing" className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-10 text-[var(--ink)]">
              Pricing After Rebates
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Heat Pump Hot Water (260–300L)",
                  desc: <>From <span className="font-semibold text-[var(--forest)]">$799</span> installed*</>,
                  points: ["Full install & removal", "5–7 year warranties", "Rebates applied"],
                },
                {
                  title: "Split System RCAC (2.5–3.5 kW)",
                  desc: <>VEU-discounted, site-specific</>,
                  points: ["Efficient single-room comfort", "Certified units", "Quick setup"],
                },
                {
                  title: "Ducted RCAC (Whole Home)",
                  desc: <>Custom, VEU-discounted</>,
                  points: ["Whole-home efficiency", "Load planning", "Professional install"],
                },
              ].map((p) => (
                <div key={p.title} className="bg-[var(--muted)] rounded-2xl shadow-sm ring-1 ring-gray-200 p-5 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-[var(--ink)] mb-2">{p.title}</h3>
                  <p className="text-sm text-[var(--slate)] mb-3">{p.desc}</p>
                  <ul className="text-sm space-y-1 list-disc pl-5 text-[var(--slate)]">
                    {p.points.map((x) => (
                      <li key={x} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[var(--teal)] rounded-full" />
                        {x}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="text-xs text-[#78909C] mt-4 text-center">*Based on eligibility. Confirm exact costs with us.</p>
          </div>
        </section>
        {/* Process */}
        <section id="process" className="py-16 md:py-20 bg-[var(--muted)]">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-10 text-[var(--ink)]">
              Your Upgrade Process
            </h2>
            <ol className="grid md:grid-cols-5 gap-5 text-sm text-center">
              {["Eligibility Check", "System Selection", "Installation", "Removal & Recycling", "Rebate Application"].map(
                (step, i) => (
                  <li key={step} className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 p-4 hover:shadow-md transition-shadow">
                    <span className="inline-flex items-center justify-center rounded-full bg-white text-[var(--ink)] w-8 h-8 mx-auto mb-2 ring-1 ring-gray-200">
                      {i + 1}
                    </span>
                    <p className="text-[var(--slate)]">{step}</p>
                  </li>
                )
              )}
            </ol>
          </div>
        </section>
        {/* Contact */}
        <section id="contact" className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-3xl px-6 md:px-12 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--ink)] mb-5">Let’s Get Started</h2>
            <p className="text-lg text-[var(--slate)] mb-5">Our team is here to assist with your energy upgrade needs.</p>
            <form className="bg-[var(--muted)] rounded-2xl shadow-sm ring-1 ring-gray-200 p-5 grid md:grid-cols-2 gap-4 text-left">
              <label className="block">
                <span className="text-sm font-medium text-[var(--ink)]">Full Name</span>
                <input type="text" required className="mt-2 w-full rounded-lg border-gray-200 focus:border-[var(--teal)] focus:ring-[var(--teal)] p-2 bg-white" placeholder="Jane Citizen" />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-[var(--ink)]">Email</span>
                <input type="email" required className="mt-2 w-full rounded-lg border-gray-200 focus:border-[var(--teal)] focus:ring-[var(--teal)] p-2 bg-white" placeholder="jane@email.com" />
              </label>
              <label className="block md:col-span-2">
                <span className="text-sm font-medium text-[var(--ink)]">Postcode</span>
                <input type="text" required className="mt-2 w-full rounded-lg border-gray-200 focus:border-[var(--teal)] focus:ring-[var(--teal)] p-2 bg-white" placeholder="3000" />
              </label>
              <label className="block md:col-span-2">
                <span className="text-sm font-medium text-[var(--ink)]">Message</span>
                <textarea rows={4} required className="mt-2 w-full rounded-lg border-gray-200 focus:border-[var(--teal)] focus:ring-[var(--teal)] p-2 bg-white" placeholder="How can we assist you?" />
              </label>
              <div className="md:col-span-2 flex gap-4">
                <button type="submit" className="w-full md:w-auto inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold bg-[var(--forest)] text-white hover:bg-[#225522] focus:ring-4 focus:ring-[color:rgb(46_125_50_/_0.35)] transition-all">
                  Submit Inquiry
                </button>
                <a href="mailto:contact@GLEnergy.com.au" className="w-full md:w-auto inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold bg-white text-[var(--ink)] ring-1 ring-[color:rgb(38_166_154_/_0.3)] hover:bg-[var(--muted)] transition-colors">
                  Email Us
                </a>
              </div>
            </form>
            <p className="text-sm text-[#78909C] mt-3">
              Refer a friend and get $100 off your next upgrade! By submitting, you agree to let us contact you.
            </p>
          </div>
        </section>
        {/* FAQ */}
        <section id="faq" className="py-16 md:py-20 bg-[var(--muted)]">
          <div className="mx-auto max-w-7xl px-6 md:px-12 grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-display text-xl font-semibold mb-4 text-[var(--ink)]">Rebate Details</h3>
              <ul className="text-sm text-[var(--slate)] space-y-2">
                {[
                  "Hot water rebates up to $1,500",
                  "Up to $4,000 in combined incentives",
                  "Aircon discounts available",
                ].map((x) => (
                  <li key={x} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[var(--teal)] rounded-full" />
                    {x}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold mb-4 text-[var(--ink)]">Benefits of Switching</h3>
              <ul className="text-sm text-[var(--slate)] space-y-2">
                {[
                  "Save up to $1,500/year on energy",
                  "Upgrade to efficient heating",
                  "Lower your carbon footprint",
                ].map((x) => (
                  <li key={x} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[var(--teal)] rounded-full" />
                    {x}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mx-auto max-w-7xl px-6 md:px-12 mt-4">
            <p className="text-sm text-[#78909C] text-center">*Estimates vary. Contact us for a detailed assessment.</p>
          </div>
        </section>
        {/* Footer */}
        <footer className="py-8 bg-[var(--forest)] text-white">
          <div className="mx-auto max-w-7xl px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <p>© {year} GreenLine Energy Pty Ltd • ABN 12 345 678 901</p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.energy.vic.gov.au/victorian-energy-upgrades"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#4DA8DA] transition-colors"
              >
                VEU Program
              </a>
              <span className="text-white/50">•</span>
              <a
                href="https://www.solar.vic.gov.au/hot-water-rebate"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#4DA8DA] transition-colors"
              >
                Solar Victoria Rebates
              </a>
              <span className="text-white/50">•</span>
              <a href="mailto:contact@GLEnergy.com.au" className="hover:text-[#4DA8DA] transition-colors">
                Contact
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
