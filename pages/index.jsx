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
      <div className="bg-gradient-to-b from-[#1C2525] via-[#1C2525] to-[#2F4F4F] text-[#D3D3D3] antialiased font-sans">
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
        <header className="sticky top-0 z-50 bg-[#1A3C1A] text-[#FFFFFF] shadow-md">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <div className="flex items-center justify-between h-20">
              <a href="#top" className="flex items-center gap-4 font-bold text-[#FFFFFF]">
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
                <a href="#why-upgrade" className="hover:text-[#3CB371]">Why Upgrade</a>
                <a href="#heating-cooling-features" className="hover:text-[#3CB371]">Heating & Cooling</a>
                <a href="#hot-water" className="hover:text-[#3CB371]">Hot Water</a>
                <a href="#rebates-eligibility" className="hover:text-[#3CB371]">Rebates</a>
                <a href="#process" className="hover:text-[#3CB371]">Process</a>
                <a href="#contact" className="hover:text-[#3CB371]">Contact</a>
              </nav>
              <div className="flex items-center gap-4">
                <a
                  href="/vic-heat-pump/"
                  className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-bold bg-[#228B22] text-[#FFFFFF] hover:bg-[#3CB371] focus:ring-4 focus:ring-[#228B22]/30 transition-all duration-200"
                  aria-label="Heat Pump Offer"
                >
                  Heat Pump Offer
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-bold bg-[#228B22] text-[#FFFFFF] hover:bg-[#3CB371] focus:ring-4 focus:ring-[#228B22]/30 transition-all duration-200"
                  aria-label="Get a Quote"
                >
                  Get a Quote
                </a>
              </div>
            </div>
          </div>
        </header>
        {/* Hero - Introduction */}
        <section id="top" className="py-20 md:py-28 bg-[#1C2525]">
          <div className="mx-auto max-w-7xl px-6 md:px-12 grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7 space-y-8">
              <span className="inline-flex items-center rounded-full px-4 py-2 text-sm font-bold bg-[#6B8E23] text-[#FFFFFF] ring-1 ring-[#228B22]/30">
                VEU-Accredited Upgrades
              </span>
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-[#FFFFFF]">
                Take Advantage of Up to $9,900 in VEU Incentives
              </h1>
              <p className="text-xl md:text-2xl font-medium text-[#F0FFF0]">
                Replace old gas heaters, air conditioners, or hot water systems with modern, energy-efficient technology to reduce bills, improve comfort, and cut emissions.
              </p>
              <div className="flex gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-lg px-4 py-2 font-medium bg-[#228B22] text-[#FFFFFF] hover:bg-[#3CB371] focus:ring-2 focus:ring-[#228B22]/30 transition-all duration-200"
                >
                  Get a Free Quote
                </a>
                <a
                  href="/vic-heat-pump/"
                  className="inline-flex items-center justify-center rounded-lg px-4 py-2 font-medium bg-[#228B22] text-[#FFFFFF] hover:bg-[#3CB371] focus:ring-2 focus:ring-[#228B22]/30 transition-all duration-200"
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
                    className="bg-[#6B8E23] rounded-lg shadow-md ring-1 ring-gray-700 p-4 text-center"
                  >
                    <strong className="block text-xl font-bold text-[#FFFFFF]">{t}</strong>
                    <span className="text-base text-[#F0FFF0]">{s}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-[#A9A9A9]">
                *Savings vary by location, eligibility, and product. Contact for details.
              </p>
            </div>
            <div className="md:col-span-5">
              <div className="bg-[#1C2525] rounded-2xl shadow-lg ring-1 ring-gray-700 p-6">
                <img
                  src="/hero1.png"
                  alt="Modern energy-efficient home"
                  className="rounded-2xl object-cover w-full h-auto"
                  loading="lazy"
                />
                <p className="text-base font-medium text-[#F0FFF0] mt-3 text-center">
                  Upgrade to a modern, efficient home.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Featured GIFs */}
        <section id="featured-gifs" className="py-20 md:py-24 bg-[#1C2525]">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-[#FFFFFF]">
              Featured Animations
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              <div className="bg-[#6B8E23] rounded-2xl shadow-lg ring-1 ring-gray-700 p-6">
                <img
                  src="/gif1.gif"
                  alt="Animation 1"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                  loading="lazy"
                />
                <p className="text-center text-base font-medium text-[#FFFFFF]">Animation 1</p>
              </div>
              <div className="bg-[#6B8E23] rounded-2xl shadow-lg ring-1 ring-gray-700 p-6">
                <img
                  src="/gif2.gif"
                  alt="Animation 2"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                  loading="lazy"
                />
                <p className="text-center text-base font-medium text-[#FFFFFF]">Animation 2</p>
              </div>
              <div className="bg-[#6B8E23] rounded-2xl shadow-lg ring-1 ring-gray-700 p-6">
                <img
                  src="/gif3.gif"
                  alt="Animation 3"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                  loading="lazy"
                />
                <p className="text-center text-base font-medium text-[#FFFFFF]">Animation 3</p>
              </div>
              <div className="bg-[#6B8E23] rounded-2xl shadow-lg ring-1 ring-gray-700 p-6">
                <img
                  src="/gif4.gif"
                  alt="Animation 4"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                  loading="lazy"
                />
                <p className="text-center text-base font-medium text-[#FFFFFF]">Animation 4</p>
              </div>
            </div>
          </div>
        </section>
        {/* Trust and Accreditation */}
        <section aria-label="Trust and Accreditation" className="py-10 bg-[#2F4F4F]">
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
            <span className="text-base font-medium text-[#F0FFF0]">
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
        <section id="product-options" className="py-20 md:py-24 bg-[#2F4F4F]">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-[#FFFFFF]">
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
                  className="bg-[#6B8E23] rounded-2xl shadow-lg ring-1 ring-gray-700 p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={card.image}
                    alt={`${card.title} Product`}
                    className="w-full h-48 object-cover rounded-lg mb-6"
                    loading="lazy"
                  />
                  <h3 className="text-2xl font-bold text-[#FFFFFF] mb-4">{card.title}</h3>
                  <p className="text-lg font-medium text-[#F0FFF0] mb-4">{card.body}</p>
                  <span className="inline-flex items-center rounded-full px-4 py-2 text-base font-medium bg-[#1C2525] text-[#6B8E23] ring-1 ring-[#228B22]/20 mt-4">
                    {card.chips}
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>
        {/* Hot Water Upgrades */}
        <section id="hot-water" className="py-20 md:py-24 bg-[#1C2525]">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-[#FFFFFF]">
              Hot Water Upgrades
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#6B8E23] rounded-2xl shadow-lg ring-1 ring-gray-700 p-6">
                <h3 className="text-2xl font-bold text-[#FFFFFF] mb-4">Rebates & Incentives</h3>
                <ul className="text-base font-medium text-[#F0FFF0] space-y-3 list-none">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#228B22] rounded-full"></span>
                    Rebates up to $2,681 for electric upgrades
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#228B22] rounded-full"></span>
                    $0 product cost in some regions (e.g., Shepparton, Bendigo)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#228B22] rounded-full"></span>
                    Electric replacement mandatory from Mar 1, 2027
                  </li>
                </ul>
                <h3 className="text-2xl font-bold text-[#FFFFFF] mt-6 mb-4">Emergency Service</h3>
                <ul className="text-base font-medium text-[#F0FFF0] space-y-3 list-none">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#228B22] rounded-full"></span>
                    48-hour replacement (Metro Melbourne)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#228B22] rounded-full"></span>
                    Save $2,000–$3,000 vs. standard plumbing
                  </li>
                </ul>
              </div>
              <div className="bg-[#1C2525] rounded-2xl shadow-lg ring-1 ring-gray-700 p-6">
                <h3 className="text-2xl font-bold text-[#FFFFFF] mb-4">Product Options</h3>
                <ul className="text-base font-medium text-[#F0FFF0] space-y-3 list-none">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#228B22] rounded-full"></span>
                    Neopower Black® 260L – Wi-Fi, 6-yr warranty, 5 people
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#228B22] rounded-full"></span>
                    Emerald Energy 270L/320L – Wi-Fi, 6-yr warranty
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#228B22] rounded-full"></span>
                    EcoGenica Split – 215L, 260L, 290L, 7-yr warranty
                  </li>
                </ul>
                <p className="text-base font-medium text-[#F0FFF0] mt-4">
                  Includes 7-yr tank warranty, 12-month workmanship warranty, free recycling, and "install now, pay later" options.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Rebates & Eligibility */}
        <section id="rebates-eligibility" className="py-20 md:py-24 bg-[#2F4F4F]">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-[#FFFFFF]">
              Rebates & Eligibility
            </h2>
            <div className="bg-[#6B8E23] rounded-2xl shadow-lg ring-1 ring-gray-700 p-6">
              <ul className="text-base font-medium text-[#F0FFF0] space-y-3 list-none">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#228B22] rounded-full"></span>
                  VEU Rebate – Home over 24 months old, replacing inefficient systems
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#228B22] rounded-full"></span>
                  CER STCs – System must meet efficiency standards
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#228B22] rounded-full"></span>
                  SolarVic Rebate – Income &lt; $210K, home &lt; $3M, system &gt; 3 years old
                </li>
              </ul>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg px-8 py-3 font-bold bg-[#228B22] text-[#FFFFFF] hover:bg-[#3CB371] focus:ring-4 focus:ring-[#228B22]/30 transition-all duration-200 mt-6"
              >
                Check Eligibility
              </a>
            </div>
          </div>
        </section>
        {/* Why Choose Accredited Providers */}
        <section id="why-choose" className="py-20 md:py-24 bg-[#1C2525]">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-[#FFFFFF]">
              Why Choose Accredited Providers
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#6B8E23] rounded-2xl shadow-lg ring-1 ring-gray-700 p-6">
                <ul className="text-base font-medium text-[#F0FFF0] space-y-3 list-none">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#228B22] rounded-full"></span>
                    Tailored system selection for your needs
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#228B22] rounded-full"></span>
                    High-quality products with frost protection
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#228B22] rounded-full"></span>
                    Licensed VIC plumbers and electricians
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#228B22] rounded-full"></span>
                    5-yr product + 2-yr labor warranty (heating/cooling)
                  </li>
                </ul>
              </div>
              <div className="bg-[#6B8E23] rounded-2xl shadow-lg ring-1 ring-gray-700 p-6">
                <ul className="text-base font-medium text-[#F0FFF0] space-y-3 list-none">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#228B22] rounded-full"></span>
                    7-yr tank warranty (hot water)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#228B22] rounded-full"></span>
                    Over 15 years of expertise
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#228B22] rounded-full"></span>
                    5 days standard install, 48 hrs emergency hot water
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#228B22] rounded-full"></span>
                    4.9/5 Google reviews, VEU accredited
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* Step-by-Step Process */}
        <section id="process" className="py-20 md:py-24 bg-[#2F4F4F]">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-[#FFFFFF]">
              Step-by-Step Process
            </h2>
            <div className="grid md:grid-cols-12 gap-10 items-center">
              <div className="md:col-span-7 space-y-6">
                <ol className="space-y-4 text-[#F0FFF0]">
                  <li className="flex items-start gap-2">
                    <span className="text-xl font-bold text-[#228B22]">1)</span>
                    <span>Register – Complete quick form (eligibility check in ~60 seconds)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-xl font-bold text-[#228B22]">2)</span>
                    <span>Confirm – Provider verifies rebate eligibility</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-xl font-bold text-[#228B22]">3)</span>
                    <span>Install – Accredited professional completes setup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-xl font-bold text-[#228B22]">4)</span>
                    <span>Certify & Recycle – Certifications + old unit removed at no cost</span>
                  </li>
                </ol>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-lg px-8 py-3 font-bold bg-[#228B22] text-[#FFFFFF] hover:bg-[#3CB371] focus:ring-4 focus:ring-[#228B22]/30 transition-all duration-200"
                >
                  Get Started
                </a>
              </div>
              <div className="md:col-span-5">
                <div className="bg-[#1C2525] rounded-2xl shadow-lg ring-1 ring-gray-700 p-6">
                  <img
                    src="/eligible.png"
                    alt="Upgrade Process"
                    className="rounded-2xl object-cover w-full h-auto"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Contact & Next Steps */}
        <section id="contact" className="py-20 md:py-24 bg-[#1C2525]">
          <div className="mx-auto max-w-4xl px-6 md:px-12 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#FFFFFF] mb-6">
              Contact & Next Steps
            </h2>
            <p className="text-xl font-medium text-[#F0FFF0] mb-6">
              Free inspections available across Victoria. Rebates apply now for heating, cooling, and hot water upgrades.
            </p>
            <form className="bg-[#6B8E23] rounded-2xl shadow-lg ring-1 ring-gray-700 p-6 grid md:grid-cols-2 gap-6 text-left">
              <label className="block">
                <span className="text-base font-bold text-[#FFFFFF]">Full Name</span>
                <input
                  type="text"
                  required
                  className="mt-2 w-full rounded-lg border-gray-400 focus:border-[#228B22] focus:ring-[#228B22] p-3 bg-[#1C2525] text-[#D3D3D3]"
                  placeholder="Jane Citizen"
                />
              </label>
              <label className="block">
                <span className="text-base font-bold text-[#FFFFFF]">Email</span>
                <input
                  type="email"
                  required
                  className="mt-2 w-full rounded-lg border-gray-400 focus:border-[#228B22] focus:ring-[#228B22] p-3 bg-[#1C2525] text-[#D3D3D3]"
                  placeholder="jane@email.com"
                />
              </label>
              <label className="block md:col-span-2">
                <span className="text-base font-bold text-[#FFFFFF]">Postcode</span>
                <input
                  type="text"
                  required
                  className="mt-2 w-full rounded-lg border-gray-400 focus:border-[#228B22] focus:ring-[#228B22] p-3 bg-[#1C2525] text-[#D3D3D3]"
                  placeholder="3000"
                />
              </label>
              <label className="block md:col-span-2">
                <span className="text-base font-bold text-[#FFFFFF]">Message</span>
                <textarea
                  rows={5}
                  required
                  className="mt-2 w-full rounded-lg border-gray-400 focus:border-[#228B22] focus:ring-[#228B22] p-3 bg-[#1C2525] text-[#D3D3D3]"
                  placeholder="How can we assist you?"
                />
              </label>
              <div className="md:col-span-2 flex gap-6">
                <button
                  type="submit"
                  className="w-full md:w-auto inline-flex items-center justify-center rounded-lg px-8 py-3 font-bold bg-[#228B22] text-[#FFFFFF] hover:bg-[#3CB371] focus:ring-4 focus:ring-[#228B22]/30 transition-all duration-200"
                >
                  Submit Inquiry
                </button>
                <a
                  href="mailto:contact@GLEnergy.com.au"
                  className="w-full md:w-auto inline-flex items-center justify-center rounded-lg px-8 py-3 font-bold bg-[#1C2525] text-[#FFFFFF] ring-1 ring-[#228B22]/30 hover:bg-[#2F4F4F] transition-colors duration-200"
                >
                  Email Us
                </a>
              </div>
            </form>
            <p className="text-sm text-[#A9A9A9] mt-4">
              Supported through 2045. By submitting, you agree to let us contact you.
            </p>
          </div>
        </section>
        {/* Refer a Friend */}
        <section className="w-full py-16 md:py-20 bg-[#2F4F4F]">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-[#1C2525] rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-[#1A3C1A] text-[#FFFFFF] text-center py-8">
                <h2 className="text-4xl font-extrabold tracking-tight flex items-center justify-center gap-2">
                  Refer a Friend, $100 Cash!
                </h2>
              </div>
              <div className="p-8 space-y-6 text-center">
                <p className="text-xl font-bold text-[#FFFFFF]">
                  Invite your friends to join GreenLine Energy and earn <strong>$100 cash</strong> for each successful referral!
                </p>
                <p className="text-base font-medium text-[#F0FFF0]">
                  No limit—refer more friends to boost your rewards!
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-lg px-8 py-3 font-bold bg-[#228B22] text-[#FFFFFF] hover:bg-[#3CB371] focus:ring-4 focus:ring-[#228B22]/30 transition-all duration-200"
                >
                  Refer Now
                </a>
                <p className="flex justify-center mt-4 text-base font-medium text-[#F0FFF0]">
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
        <section id="faq" className="py-20 md:py-24 bg-[#2F4F4F]">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-12 text-[#FFFFFF]">
              Frequently Asked Questions
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-extrabold mb-6 text-[#FFFFFF]">Rebate Details</h3>
                <ul className="text-base font-medium text-[#F0FFF0] space-y-3 list-none">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#228B22] rounded-full"></span>
                    Hot water rebates up to $2,681
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#228B22] rounded-full"></span>
                    Up to $9,900 in combined incentives
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#228B22] rounded-full"></span>
                    Aircon and heating discounts available
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-extrabold mb-6 text-[#FFFFFF]">Benefits of Switching</h3>
                <ul className="text-base font-medium text-[#F0FFF0] space-y-3 list-none">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#228B22] rounded-full"></span>
                    Save up to $1,010/year on heating
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#228B22] rounded-full"></span>
                    Upgrade to efficient systems
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#228B22] rounded-full"></span>
                    Reduce your carbon footprint by 37M tonnes
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-sm text-[#A9A9A9] mt-6 text-center">
              *Estimates may vary. Contact us for personalized advice.
            </p>
          </div>
        </section>
        {/* Footer */}
        <footer className="py-10 bg-[#1A3C1A] text-[#FFFFFF]">
          <div className="mx-auto max-w-7xl px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 text-lg">
            <p className="font-medium text-[#FFFFFF]">
              © {new Date().getFullYear()} GreenLine Energy Pty Ltd • ABN 12 345 678 901
            </p>
            <div className="flex items-center gap-6">
              <a
                href="https://www.energy.vic.gov.au/victorian-energy-upgrades"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#3CB371] transition-colors duration-200"
              >
                VEU Program
              </a>
              <span className="text-[#D3D3D3]/50">•</span>
              <a
                href="https://www.solar.vic.gov.au/hot-water-rebate"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#3CB371] transition-colors duration-200"
              >
                Solar Victoria Rebates
              </a>
              <span className="text-[#D3D3D3]/50">•</span>
              <a
                href="mailto:contact@GLEnergy.com.au"
                className="hover:text-[#3CB371] transition-colors duration-200"
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
