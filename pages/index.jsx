import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>GreenLine Energy — Melbourne VEU Rebates, Heating, Cooling & Hot Water</title>
        <meta
          name="description"
          content="GreenLine Energy offers VEU-accredited upgrades for heating, cooling, and hot water in Melbourne. Save up to $9,900 with government rebates."
        />
        <meta property="og:title" content="GreenLine Energy Solutions - Melbourne VEU Rebates" />
        <meta
          property="og:description"
          content="Unlock up to $9,900 in VEU rebates for energy-efficient heating, cooling, and hot water upgrades in Melbourne. Reduce bills and emissions."
        />
        <meta property="og:image" content="https://greensite-rouge.vercel.app/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://cdn.tailwindcss.com" />
        <script src="https://cdn.tailwindcss.com"></script>
        <link rel="icon" href="/favicon.ico" />
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
      </Head>
      <div className="bg-black text-white antialiased font-sans">
        {/* Banner */}
        <div className="w-full">
          <img
            src="/limebanner.png"
            alt="GreenLine Energy Melbourne VEU Rebates Banner"
            className="w-full h-auto object-cover rounded-b-lg shadow-lg"
            loading="lazy"
          />
        </div>
        {/* Header */}
        <header className="sticky top-0 z-50 bg-black text-lime-400 shadow-md">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <div className="flex items-center justify-between h-20">
              <a href="#top" className="flex items-center gap-4 font-bold text-lime-400">
                <img
                  src="/greenline-logo-mark.png.jpeg"
                  alt="GreenLine Energy Logo"
                  className="h-12 w-12 rounded-full"
                  loading="lazy"
                />
                <img
                  src="/greenline-logo-word.png.jpeg.jpeg"
                  alt="GreenLine Energy Wordmark"
                  className="h-8"
                  loading="lazy"
                />
              </a>
              <nav className="hidden md:flex items-center gap-8 text-lg font-medium">
                <a href="#why-upgrade" className="hover:text-lime-300">Why Upgrade</a>
                <a href="#heating-cooling-features" className="hover:text-lime-300">Heating & Cooling</a>
                <a href="#hot-water" className="hover:text-lime-300">Hot Water</a>
                <a href="#rebates-eligibility" className="hover:text-lime-300">Rebates</a>
                <a href="#process" className="hover:text-lime-300">Process</a>
                <a href="#contact" className="hover:text-lime-300">Contact</a>
              </nav>
              <div className="flex items-center gap-4">
                <a
                  href="/vic-heat-pump/"
                  className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-bold bg-lime-400 text-black hover:bg-lime-300 focus:ring-4 focus:ring-lime-300/30 transition-all duration-200"
                  aria-label="Heat Pump Offer"
                >
                  Heat Pump Offer
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-bold bg-lime-400 text-black hover:bg-lime-300 focus:ring-4 focus:ring-lime-300/30 transition-all duration-200"
                  aria-label="Get a Quote"
                >
                  Get a Quote
                </a>
              </div>
            </div>
          </div>
        </header>
        {/* Hero - Introduction */}
        <section id="top" className="py-20 md:py-28 bg-black">
          <div className="mx-auto max-w-7xl px-6 md:px-12 grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7 space-y-8">
              <span className="inline-flex items-center rounded-full px-4 py-2 text-sm font-bold bg-lime-400 text-black ring-1 ring-lime-300/30">
                VEU-Accredited Upgrades
              </span>
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-lime-400">
                Take Advantage of Up to $9,900 in VEU Incentives
              </h1>
              <p className="text-xl md:text-2xl font-medium text-lime-300">
                Replace old gas heaters, air conditioners, or hot water systems with modern, energy-efficient technology to reduce bills, improve comfort, and cut emissions.
              </p>
              <div className="flex gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-lg px-4 py-2 font-medium bg-lime-400 text-black hover:bg-lime-300 focus:ring-2 focus:ring-lime-300/30 transition-all duration-200"
                >
                  Get a Free Quote
                </a>
                <a
                  href="/vic-heat-pump/"
                  className="inline-flex items-center justify-center rounded-lg px-4 py-2 font-medium bg-lime-400 text-black hover:bg-lime-300 focus:ring-2 focus:ring-lime-300/30 transition-all duration-200"
                >
                  Heat Pump Offer
                </a>
              </div>
              <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 text-lg">
                {[
                  ["Up to $9,900", "in Rebates*"],
                  ["Free Inspections", "Available"],
                  ["$1,010/yr", "Gas Heating Savings"],
                  ["Expert Team", "Fast Service"],
                ].map(([t, s], i) => (
                  <li
                    key={i}
                    className="bg-lime-400 rounded-lg shadow-md ring-1 ring-lime-300 p-4 text-center"
                  >
                    <strong className="block text-xl font-bold text-black">{t}</strong>
                    <span className="text-base text-black">{s}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-lime-300">
                *Savings vary by location, eligibility, and product. Contact for details.
              </p>
            </div>
            <div className="md:col-span-5">
              <div className="bg-black rounded-2xl shadow-lg ring-1 ring-lime-300/30 p-6">
                <img
                  src="/hero1.png"
                  alt="Modern energy-efficient home"
                  className="rounded-2xl object-cover w-full h-auto"
                  loading="lazy"
                />
                <p className="text-base font-medium text-lime-300 mt-3 text-center">
                  Upgrade to a modern, efficient home.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Featured GIFs */}
        <section id="featured-gifs" className="py-20 md:py-24 bg-black">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-lime-400">
              Featured Animations
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              <div className="bg-lime-400 rounded-2xl shadow-lg ring-1 ring-lime-300 p-6">
                <img
                  src="/gif1.gif"
                  alt="Animation 1"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                  loading="lazy"
                />
                <p className="text-center text-base font-medium text-black">Animation 1</p>
              </div>
              <div className="bg-lime-400 rounded-2xl shadow-lg ring-1 ring-lime-300 p-6">
                <img
                  src="/gif2.gif"
                  alt="Animation 2"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                  loading="lazy"
                />
                <p className="text-center text-base font-medium text-black">Animation 2</p>
              </div>
              <div className="bg-lime-400 rounded-2xl shadow-lg ring-1 ring-lime-300 p-6">
                <img
                  src="/gif3.gif"
                  alt="Animation 3"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                  loading="lazy"
                />
                <p className="text-center text-base font-medium text-black">Animation 3</p>
              </div>
              <div className="bg-lime-400 rounded-2xl shadow-lg ring-1 ring-lime-300 p-6">
                <img
                  src="/gif4.gif"
                  alt="Animation 4"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                  loading="lazy"
                />
                <p className="text-center text-base font-medium text-black">Animation 4</p>
              </div>
            </div>
          </div>
        </section>
        {/* Trust and Accreditation */}
        <section aria-label="Trust and Accreditation" className="py-10 bg-black">
          <div className="mx-auto max-w-7xl px-6 md:px-12 flex flex-wrap items-center justify-center gap-8">
            <img
              src="/veu.png.jpeg"
              alt="Victorian Energy Upgrades Accreditation"
              className="h-14"
              loading="lazy"
            />
            <img
              src="/esc.png.jpeg"
              alt="Essential Services Commission Accreditation"
              className="h-14"
              loading="lazy"
            />
            <span className="text-base font-medium text-lime-300">
              Licensed, Insured, and Committed to Excellence
            </span>
          </div>
        </section>
        {/* Why Upgrade */}
        <section className="bg-black text-white py-12 px-6 md:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-lime-400 mb-6">
              Why Upgrade?
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold text-lime-300 mb-10">
              Program-Level Benefits
            </h3>
            <ul className="space-y-6 text-lg leading-relaxed">
              <li>
                <span className="text-lime-400 font-semibold">✅ Government Rebates Available</span><br />
                Access rebates under the <strong>Victorian Energy Upgrades (VEU) program</strong>,
                making energy-efficient upgrades more affordable than ever.
              </li>
              <li>
                <span className="text-lime-400 font-semibold">✅ Long-Term Certainty</span><br />
                The program is <strong>extended until 2045</strong>, giving homeowners rebates
                for decades to come.
              </li>
              <li>
                <span className="text-lime-400 font-semibold">✅ Save More Every Year</span><br />
                • Up to <strong>$1,010 per year</strong> by replacing ducted gas.<br />
                • Up to <strong>$370 per year</strong> by upgrading space heaters.
              </li>
              <li>
                <span className="text-lime-400 font-semibold">✅ Proven Impact</span><br />
                Over <strong>2.4 million Victorian homes</strong> already upgraded, cutting
                <strong>37 million tonnes of CO₂</strong> between 2022–2027.
              </li>
              <li>
                <span className="text-lime-400 font-semibold">✅ Free Inspections & Quotes</span><br />
                Enjoy <strong>no-obligation onsite inspections</strong> and tailored quotes —
                know exactly how much you can save.
              </li>
            </ul>
            <div className="mt-10">
              <p className="text-xl font-semibold text-lime-300">
                💡 Switch today with <span className="text-lime-400">GreenLine Energy</span> —
                reduce your bills and help the environment.
              </p>
            </div>
          </div>
        </section>
        {/* Heating & Cooling - Key Features */}
        <section id="heating-cooling-features" className="bg-black text-white py-12 px-6 md:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-lime-400 mb-6">
              Heating & Cooling - Key Features
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold text-lime-300 mb-10">
              Modern Split Systems
            </h3>
            <ul className="space-y-6 text-lg leading-relaxed">
              <li>
                <span className="text-lime-400 font-semibold">✅ Energy Efficiency</span><br />
                Reduces bills while maintaining comfort.
              </li>
              <li>
                <span className="text-lime-400 font-semibold">✅ 5 Fan Speeds</span><br />
                From turbo cooling to a gentle breeze.
              </li>
              <li>
                <span className="text-lime-400 font-semibold">✅ Super Quiet Operation</span><br />
                Whisper-quiet across all modes.
              </li>
              <li>
                <span className="text-lime-400 font-semibold">✅ Filter Cleaning Reminder</span><br />
                Keeps indoor air fresh.
              </li>
              <li>
                <span className="text-lime-400 font-semibold">✅ 30-Second Fast Cooling</span><br />
                Drops air from 27°C to 18°C.
              </li>
              <li>
                <span className="text-lime-400 font-semibold">✅ Ultra Inverter Compressor</span><br />
                Efficient low-frequency operation.
              </li>
              <li>
                <span className="text-lime-400 font-semibold">✅ R32 Refrigerant</span><br />
                Lower GWP, more efficient than R410.
              </li>
              <li>
                <span className="text-lime-400 font-semibold">✅ Silver Ion Filter</span><br />
                Eliminates bacteria and fungi.
              </li>
            </ul>
          </div>
        </section>
        {/* Product Options (Heating & Cooling) */}
        <section id="product-options" className="py-20 md:py-24 bg-black">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-lime-400">
              Product Options for Heating & Cooling
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Emerald Split System",
                  body: "Reverse cycle (heating + cooling) with 360° full DC inverter.",
                  chips: "Advanced ducting & louver fin",
                  image: "/revcycair.jpeg",
                },
                {
                  title: "Avanti PLUS® Series",
                  body: "Platinum-grade, award-winning design with motion sensor.",
                  chips: "Clean Air Technology",
                  image: "/revcycair.jpeg",
                },
                {
                  title: "Rinnai T Series",
                  body: "Long-distance airflow with Wi-Fi & voice control.",
                  chips: "R32 refrigerant",
                  image: "/revcycair.jpeg",
                },
              ].map((card, i) => (
                <article
                  key={i}
                  className="bg-lime-400 rounded-2xl shadow-lg ring-1 ring-lime-300 p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={card.image}
                    alt={`${card.title} Product`}
                    className="w-full h-48 object-cover rounded-lg mb-6"
                    loading="lazy"
                  />
                  <h3 className="text-2xl font-bold text-black mb-4">{card.title}</h3>
                  <p className="text-lg font-medium text-black mb-4">{card.body}</p>
                  <span className="inline-flex items-center rounded-full px-4 py-2 text-base font-medium bg-black text-lime-400 ring-1 ring-lime-300/20 mt-4">
                    {card.chips}
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>
        {/* Hot Water Upgrades */}
        <section id="hot-water" className="py-20 md:py-24 bg-black">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-lime-400">
              Hot Water Upgrades
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-black text-white rounded-2xl shadow-lg ring-1 ring-lime-300/30 p-6">
                <h3 className="text-3xl md:text-4xl font-bold text-lime-400 mb-6">
                  Rebates & Incentives
                </h3>
                <ul className="space-y-6 text-lg leading-relaxed text-center">
                  <li>
                    <span className="text-lime-400 font-semibold">✅ Rebates up to $2,681</span><br />
                    For electric upgrades.
                  </li>
                  <li>
                    <span className="text-lime-400 font-semibold">✅ $0 Product Cost</span><br />
                    In some regions (e.g., Shepparton, Bendigo).
                  </li>
                  <li>
                    <span className="text-lime-400 font-semibold">✅ Electric Replacement Mandatory</span><br />
                    From Mar 1, 2027.
                  </li>
                </ul>
                <h3 className="text-xl md:text-2xl font-semibold text-lime-300 mt-10 mb-6">
                  Emergency Service
                </h3>
                <ul className="space-y-6 text-lg leading-relaxed text-center">
                  <li>
                    <span className="text-lime-400 font-semibold">✅ 48-Hour Replacement</span><br />
                    (Metro Melbourne).
                  </li>
                  <li>
                    <span className="text-lime-400 font-semibold">✅ Save $2,000–$3,000</span><br />
                    Vs. standard plumbing.
                  </li>
                </ul>
              </div>
              <div className="bg-black text-white rounded-2xl shadow-lg ring-1 ring-lime-300/30 p-6">
                <h3 className="text-3xl md:text-4xl font-bold text-lime-400 mb-6">
                  Product Options
                </h3>
                <ul className="space-y-6 text-lg leading-relaxed text-center">
                  <li>
                    <span className="text-lime-400 font-semibold">✅ Neopower Black® 260L</span><br />
                    Wi-Fi, 6-yr warranty, 5 people.
                  </li>
                  <li>
                    <span className="text-lime-400 font-semibold">✅ Emerald Energy 270L/320L</span><br />
                    Wi-Fi, 6-yr warranty.
                  </li>
                  <li>
                    <span className="text-lime-400 font-semibold">✅ EcoGenica Split</span><br />
                    215L, 260L, 290L, 7-yr warranty.
                  </li>
                </ul>
                <p className="mt-6 text-lg leading-relaxed text-center">
                  Includes 7-yr tank warranty, 12-month workmanship warranty, free recycling, and "install now, pay later" options.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Rebates & Eligibility */}
        <section id="rebates-eligibility" className="py-20 md:py-24 bg-black">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-lime-400">
              Rebates & Eligibility
            </h2>
            <div className="bg-black text-white rounded-2xl shadow-lg ring-1 ring-lime-300/30 p-6">
              <h3 className="text-3xl md:text-4xl font-bold text-lime-400 mb-6">
                Rebate Options
              </h3>
              <ul className="space-y-6 text-lg leading-relaxed text-center">
                <li>
                  <span className="text-lime-400 font-semibold">✅ VEU Rebate</span><br />
                  Home over 24 months old, replacing inefficient systems.
                </li>
                <li>
                  <span className="text-lime-400 font-semibold">✅ CER STCs</span><br />
                  System must meet efficiency standards.
                </li>
                <li>
                  <span className="text-lime-400 font-semibold">✅ SolarVic Rebate</span><br />
                  Income &lt; $210K, home &lt; $3M, system &gt; 3 years old.
                </li>
              </ul>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg px-8 py-3 font-bold bg-lime-400 text-black hover:bg-lime-300 focus:ring-4 focus:ring-lime-300/30 transition-all duration-200 mt-6"
              >
                Check Eligibility
              </a>
            </div>
          </div>
        </section>
        {/* Why Choose Accredited Providers */}
        <section id="why-choose" className="bg-black text-white py-12 px-6 md:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-lime-400 mb-6">
              Why Choose Accredited Providers
            </h2>
            <ul className="space-y-6 text-lg leading-relaxed">
              <li>
                <span className="text-lime-400 font-semibold">✅ Tailored System Selection</span><br />
                For your needs.
              </li>
              <li>
                <span className="text-lime-400 font-semibold">✅ High-Quality Products</span><br />
                With frost protection.
              </li>
              <li>
                <span className="text-lime-400 font-semibold">✅ Licensed VIC Professionals</span><br />
                Plumbers and electricians.
              </li>
              <li>
                <span className="text-lime-400 font-semibold">✅ 5-Yr Product Warranty</span><br />
                Plus 2-yr labor warranty (heating/cooling).
              </li>
              <li>
                <span className="text-lime-400 font-semibold">✅ 7-Yr Tank Warranty</span><br />
                (Hot water).
              </li>
              <li>
                <span className="text-lime-400 font-semibold">✅ 15+ Years of Expertise</span><br />
              </li>
              <li>
                <span className="text-lime-400 font-semibold">✅ 5 Days Standard Install</span><br />
                48 hrs emergency hot water.
              </li>
              <li>
                <span className="text-lime-400 font-semibold">✅ 4.9/5 Google Reviews</span><br />
                VEU accredited.
              </li>
            </ul>
          </div>
        </section>
        {/* Step-by-Step Process */}
        <section id="process" className="bg-black text-white py-12 px-6 md:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-lime-400 mb-6">
              Step-by-Step Process
            </h2>
            <ul className="space-y-6 text-lg leading-relaxed">
              <li>
                <span className="text-lime-400 font-semibold">✅ Step 1: Register</span><br />
                Complete quick form (eligibility check in ~60 seconds).
              </li>
              <li>
                <span className="text-lime-400 font-semibold">✅ Step 2: Confirm</span><br />
                Provider verifies rebate eligibility.
              </li>
              <li>
                <span className="text-lime-400 font-semibold">✅ Step 3: Install</span><br />
                Accredited professional completes setup.
              </li>
              <li>
                <span className="text-lime-400 font-semibold">✅ Step 4: Certify & Recycle</span><br />
                Certifications + old unit removed at no cost.
              </li>
            </ul>
          </div>
        </section>
        {/* Contact & Next Steps */}
        <section id="contact" className="py-20 md:py-24 bg-black">
          <div className="mx-auto max-w-4xl px-6 md:px-12 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-lime-400 mb-6">
              Contact & Next Steps
            </h2>
            <p className="text-xl font-medium text-lime-300 mb-6">
              Free inspections available across Victoria. Rebates apply now for heating, cooling, and hot water upgrades.
            </p>
            <form className="bg-lime-400 rounded-2xl shadow-lg ring-1 ring-lime-300 p-6 grid md:grid-cols-2 gap-6 text-left">
              <label className="block">
                <span className="text-base font-bold text-black">Full Name</span>
                <input
                  type="text"
                  required
                  className="mt-2 w-full rounded-lg border-gray-400 focus:border-black focus:ring-black p-3 bg-black text-lime-400"
                  placeholder="Jane Citizen"
                />
              </label>
              <label className="block">
                <span className="text-base font-bold text-black">Email</span>
                <input
                  type="email"
                  required
                  className="mt-2 w-full rounded-lg border-gray-400 focus:border-black focus:ring-black p-3 bg-black text-lime-400"
                  placeholder="jane@email.com"
                />
              </label>
              <label className="block md:col-span-2">
                <span className="text-base font-bold text-black">Postcode</span>
                <input
                  type="text"
                  required
                  className="mt-2 w-full rounded-lg border-gray-400 focus:border-black focus:ring-black p-3 bg-black text-lime-400"
                  placeholder="3000"
                />
              </label>
              <label className="block md:col-span-2">
                <span className="text-base font-bold text-black">Message</span>
                <textarea
                  rows={5}
                  required
                  className="mt-2 w-full rounded-lg border-gray-400 focus:border-black focus:ring-black p-3 bg-black text-lime-400"
                  placeholder="How can we assist you?"
                />
              </label>
              <div className="md:col-span-2 flex gap-6">
                <button
                  type="submit"
                  className="w-full md:w-auto inline-flex items-center justify-center rounded-lg px-8 py-3 font-bold bg-black text-lime-400 hover:bg-lime-300 focus:ring-4 focus:ring-lime-300/30 transition-all duration-200"
                >
                  Submit Inquiry
                </button>
                <a
                  href="mailto:contact@GLEnergy.com.au"
                  className="w-full md:w-auto inline-flex items-center justify-center rounded-lg px-8 py-3 font-bold bg-black text-lime-400 ring-1 ring-lime-300/30 hover:bg-lime-300 transition-colors duration-200"
                >
                  Email Us
                </a>
              </div>
            </form>
            <p className="text-sm text-lime-300 mt-4">
              Supported through 2045. By submitting, you agree to let us contact you.
            </p>
          </div>
        </section>
        {/* Refer a Friend */}
        <section className="w-full py-16 md:py-20 bg-black">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-black rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-lime-400 text-black text-center py-8">
                <h2 className="text-4xl font-extrabold tracking-tight flex items-center justify-center gap-2">
                  Refer a Friend, $100 Cash!
                </h2>
              </div>
              <div className="p-8 space-y-6 text-center">
                <p className="text-xl font-bold text-lime-400">
                  Invite your friends to join GreenLine Energy and earn <strong>$100 cash</strong> for each successful referral!
                </p>
                <p className="text-base font-medium text-lime-300">
                  No limit—refer more friends to boost your rewards!
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-lg px-8 py-3 font-bold bg-lime-400 text-black hover:bg-lime-300 focus:ring-4 focus:ring-lime-300/30 transition-all duration-200"
                >
                  Refer Now
                </a>
                <p className="flex justify-center mt-4 text-base font-medium text-lime-300">
                  Quick, easy, and rewarding way to share the savings.
                </p>
              </div>
              <div className="mt-6">
                <img
                  src="/refercash.png"
                  alt="Refer a Friend Cash Illustration"
                  className="w-full h-auto object-cover rounded-b-lg shadow-md"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
        {/* FAQ */}
        <section id="faq" className="bg-black text-white py-12 px-6 md:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-lime-400 mb-6">
              Frequently Asked Questions
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold text-lime-300 mb-10">
              Rebate Details
            </h3>
            <ul className="space-y-6 text-lg leading-relaxed">
              <li>
                <span className="text-lime-400 font-semibold">✅ Hot Water Rebates</span><br />
                Up to $2,681.
              </li>
              <li>
                <span className="text-lime-400 font-semibold">✅ Combined Incentives</span><br />
                Up to $9,900.
              </li>
              <li>
                <span className="text-lime-400 font-semibold">✅ Aircon & Heating Discounts</span><br />
                Available.
              </li>
            </ul>
            <h3 className="text-xl md:text-2xl font-semibold text-lime-300 mt-10 mb-6">
              Benefits of Switching
            </h3>
            <ul className="space-y-6 text-lg leading-relaxed">
              <li>
                <span className="text-lime-400 font-semibold">✅ Save on Heating</span><br />
                Up to $1,010/year.
              </li>
              <li>
                <span className="text-lime-400 font-semibold">✅ Upgrade to Efficiency</span><br />
              </li>
              <li>
                <span className="text-lime-400 font-semibold">✅ Reduce Carbon Footprint</span><br />
                By 37M tonnes.
              </li>
            </ul>
            <p className="mt-6 text-sm text-lime-300">
              *Estimates may vary. Contact us for personalized advice.
            </p>
          </div>
        </section>
        {/* Footer */}
        <footer className="py-10 bg-black text-lime-400">
          <div className="mx-auto max-w-7xl px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 text-lg">
            <p className="font-medium text-lime-400">
              © {new Date().getFullYear()} GreenLine Energy Pty Ltd • ABN 12 345 678 901
            </p>
            <div className="flex items-center gap-6">
              <a
                href="https://www.energy.vic.gov.au/victorian-energy-upgrades"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-lime-300 transition-colors duration-200"
              >
                VEU Program
              </a>
              <span className="text-lime-300/50">•</span>
              <a
                href="https://www.solar.vic.gov.au/hot-water-rebate"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-lime-300 transition-colors duration-200"
              >
                Solar Victoria Rebates
              </a>
              <span className="text-lime-300/50">•</span>
              <a
                href="mailto:contact@GLEnergy.com.au"
                className="hover:text-lime-300 transition-colors duration-200"
              >
                Contact
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
