```jsx
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Greenline Energy — Melbourne VEU Rebates, Heating, Cooling & Hot Water</title>
        <meta
          name="description"
          content="Greenline Energy offers VEU-accredited upgrades for heating, cooling, and hot water in Melbourne. Save up to $9,900 with government rebates."
        />
        <meta property="og:title" content="Greenline Energy Solutions - Melbourne VEU Rebates" />
        <meta
          property="og:description"
          content="Unlock up to $9,900 in VEU rebates for energy-efficient heating, cooling, and hot water upgrades in Melbourne. Reduce bills and emissions."
        />
        <meta property="og:image" content="https://greensite-rouge.vercel.app/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" />
      </Head>
      <div className="bg-black text-white antialiased font-inter">
        {/* Banner */}
        <div className="w-full">
          <Image
            src="/limebanner.png"
            alt="Greenline Energy Melbourne VEU Rebates Banner"
            width={1920}
            height={400}
            className="w-full h-auto object-cover rounded-b-lg shadow-lg"
            loading="lazy"
          />
        </div>
        {/* Header */}
        <header className="sticky top-0 z-50 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/80 border-b border-[#1f1f1f] text-lime-500">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
            <div className="flex items-center justify-between gap-3 h-16 sm:h-20">
              <a href="#top" className="flex items-center gap-3 font-bold text-lime-500 shrink-0">
                <Image
                  src="/greenline-logo-mark.png.jpeg"
                  alt="Greenline Energy Logo"
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full"
                  loading="lazy"
                />
                <Image
                  src="/greenline-logo-word.png.jpeg"
                  alt="Greenline Energy Wordmark"
                  width={112}
                  height={28}
                  className="h-7"
                  loading="lazy"
                />
              </a>
              <nav className="hidden md:flex items-center gap-6 text-base font-medium">
                <a href="#why-upgrade" className="text-white hover:text-lime-400 transition-colors">Why Upgrade</a>
                <a href="#heating-cooling-features" className="text-white hover:text-lime-400 transition-colors">Heating & Cooling</a>
                <a href="#hot-water" className="text-white hover:text-lime-400 transition-colors">Hot Water</a>
                <a href="/veurebates" className="text-white hover:text-lime-400 transition-colors">VEU Rebates</a>
                <a href="#home-energy-assessments" className="text-white hover:text-lime-400 transition-colors">Energy Assessments</a>
                <a href="#solar-panel-rebates" className="text-white hover:text-lime-400 transition-colors">Solar Rebates</a>
                <a href="#hot-water-guide" className="text-white hover:text-lime-400 transition-colors">Hot Water Guide</a>
                <a href="#emergency-installations" className="text-white hover:text-lime-400 transition-colors">Emergency Installations</a>
                <a href="#process" className="text-white hover:text-lime-400 transition-colors">Process</a>
                <a href="#contact" className="text-white hover:text-lime-400 transition-colors">Contact</a>
              </nav>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  className="md:hidden inline-flex justify-center rounded-lg px-3 py-2 text-sm font-bold bg-lime-500 text-black hover:bg-lime-400 focus:ring-4 focus:ring-lime-500/30 transition-all"
                  aria-label="Toggle Menu"
                  onClick={() => document.getElementById("mobile-menu").classList.toggle("hidden")}
                >
                  Menu
                </button>
                <div className="hidden md:flex items-center gap-3">
                  <a
                    href="/vic-heat-pump/"
                    className="inline-flex justify-center rounded-lg px-4 py-2 font-bold bg-lime-500 text-black hover:bg-lime-400 focus:ring-4 focus:ring-lime-500/30 transition-all"
                    aria-label="Heat Pump Offer"
                  >
                    Heat Pump Offer
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex justify-center rounded-lg px-4 py-2 font-bold bg-lime-500 text-black hover:bg-lime-400 focus:ring-4 focus:ring-lime-500/30 transition-all"
                    aria-label="Get a Quote"
                  >
                    Get a Quote
                  </a>
                </div>
              </div>
            </div>
            <div id="mobile-menu" className="hidden md:hidden bg-black border-t border-[#1f1f1f] px-4 py-4">
              <nav className="flex flex-col gap-4 text-base font-medium">
                <a href="#why-upgrade" className="text-white hover:text-lime-400 transition-colors">Why Upgrade</a>
                <a href="#heating-cooling-features" className="text-white hover:text-lime-400 transition-colors">Heating & Cooling</a>
                <a href="#hot-water" className="text-white hover:text-lime-400 transition-colors">Hot Water</a>
                <a href="/veurebates" className="text-white hover:text-lime-400 transition-colors">VEU Rebates</a>
                <a href="#home-energy-assessments" className="text-white hover:text-lime-400 transition-colors">Energy Assessments</a>
                <a href="#solar-panel-rebates" className="text-white hover:text-lime-400 transition-colors">Solar Rebates</a>
                <a href="#hot-water-guide" className="text-white hover:text-lime-400 transition-colors">Hot Water Guide</a>
                <a href="#emergency-installations" className="text-white hover:text-lime-400 transition-colors">Emergency Installations</a>
                <a href="#process" className="text-white hover:text-lime-400 transition-colors">Process</a>
                <a href="#contact" className="text-white hover:text-lime-400 transition-colors">Contact</a>
                <a
                  href="/vic-heat-pump/"
                  className="inline-flex justify-center rounded-lg px-4 py-2 font-bold bg-lime-500 text-black hover:bg-lime-400 focus:ring-4 focus:ring-lime-500/30 transition-all"
                  aria-label="Heat Pump Offer"
                >
                  Heat Pump Offer
                </a>
                <a
                  href="#contact"
                  className="inline-flex justify-center rounded-lg px-4 py-2 font-bold bg-lime-500 text-black hover:bg-lime-400 focus:ring-4 focus:ring-lime-500/30 transition-all"
                  aria-label="Get a Quote"
                >
                  Get a Quote
                </a>
              </nav>
            </div>
          </div>
        </header>
        {/* Hero */}
        <section id="top" className="py-12 sm:py-16 md:py-20 bg-black">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 grid md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-7 space-y-6">
              <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-bold bg-lime-500 text-black ring-1 ring-lime-500/30">
                VEU-Accredited Upgrades
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-lime-500">
                Take Advantage of Up to $9,900 in VEU Incentives
              </h1>
              <p className="text-base sm:text-lg md:text-xl font-medium text-white">
                Replace old gas heaters, air conditioners, or hot water systems with modern, energy-efficient technology to reduce bills, improve comfort, and cut emissions.
              </p>
              <div className="flex gap-3 flex-wrap">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-lg px-4 py-2 font-medium bg-lime-500 text-black hover:bg-lime-400 focus:ring-2 focus:ring-lime-500/30 transition-all"
                >
                  Get a Free Quote
                </a>
                <a
                  href="/vic-heat-pump/"
                  className="inline-flex items-center justify-center rounded-lg px-4 py-2 font-medium bg-lime-500 text-black hover:bg-lime-400 focus:ring-2 focus:ring-lime-500/30 transition-all"
                >
                  Heat Pump Offer
                </a>
              </div>
              <ul className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm sm:text-base">
                {[
                  ["Up to $9,900", "in Rebates*"],
                  ["Free Inspections", "Available"],
                  ["$1,010/yr", "Gas Heating Savings"],
                  ["Expert Team", "Fast Service"],
                ].map(([t, s], i) => (
                  <li key={i} className="bg-green-900 rounded-lg shadow-md ring-1 ring-[#1f1f1f] p-3 text-center">
                    <strong className="block text-base sm:text-lg font-bold text-white">{t}</strong>
                    <span className="text-xs sm:text-sm text-white/80">{s}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs sm:text-sm text-white">
                *Savings vary by location, eligibility, and product. Contact for details.
              </p>
            </div>
            <div className="md:col-span-5">
              <div className="bg-green-900 rounded-2xl shadow-lg ring-1 ring-[#1f1f1f] p-4 text-center">
                <Image
                  src="/hero1.png"
                  alt="Modern energy-efficient home with advanced heating and cooling"
                  width={500}
                  height={300}
                  className="rounded-2xl object-cover w-full h-auto"
                  loading="lazy"
                />
                <p className="text-xs sm:text-sm text-white/80 mt-2">
                  Upgrade to a modern, efficient home.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Featured GIFs */}
        <section id="featured-gifs" className="py-12 sm:py-16 md:py-20 bg-black">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-8 text-lime-500">
              Featured Animations
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {["gif1.gif", "gif2.gif", "gif3.gif", "gif4.gif"].map((g, i) => (
                <div key={i} className="bg-green-900 rounded-2xl shadow-lg ring-1 ring-[#1f1f1f] p-4 text-center">
                  <Image
                    src={`/${g}`}
                    alt={`Energy-efficient animation ${i + 1}`}
                    width={300}
                    height={192}
                    className="w-full h-48 object-cover rounded-lg mb-3"
                    loading="lazy"
                  />
                  <p className="text-xs sm:text-sm text-white/80">{`Animation ${i + 1}`}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Trust and Accreditation */}
        <section aria-label="Trust and Accreditation" className="py-8 bg-black border-y border-[#1f1f1f]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-6 items-center justify-center">
              {[
                { src: "/veu.png.jpeg", alt: "Victorian Energy Upgrades Accreditation" },
                { src: "/esc.png.jpeg", alt: "Essential Services Commission Accreditation" },
                { src: "/IMG_5250.jpeg", alt: "Accreditation Logo 1" },
                { src: "/IMG_5249.jpeg", alt: "Accreditation Logo 2" },
                { src: "/IMG_5248.jpeg", alt: "Accreditation Logo 3" },
                { src: "/IMG_5247.jpeg", alt: "Accreditation Logo 4" },
                { src: "/IMG_5246.jpeg", alt: "Accreditation Logo 5" },
              ].map((item, i) => (
                <div key={i} className="flex justify-center">
                  <div className="bg-white rounded-lg p-2">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={56}
                      height={56}
                      className="h-14 w-14 object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
              <div className="col-span-2 sm:col-span-4 lg:col-span-7 text-center">
                <span className="text-sm sm:text-base font-medium text-white">
                  Licensed, Insured, and Committed to Excellence
                </span>
              </div>
            </div>
          </div>
        </section>
        {/* Why Upgrade */}
        <section id="why-upgrade" className="bg-black text-white py-12 px-4 sm:px-6 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-green-900 rounded-2xl shadow-lg ring-1 ring-[#1f1f1f] p-4 sm:p-6 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-lime-500 mb-4">Why Upgrade?</h2>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-lime-500 mb-4">Program-Level Benefits</h3>
              <ul className="space-y-4 text-sm sm:text-base leading-relaxed">
                <li>
                  <span className="text-white font-semibold">✅ Government Rebates Available</span><br />
                  <span className="text-white/80">Access rebates under the <strong>Victorian Energy Upgrades (VEU) program</strong>, making energy-efficient upgrades more affordable than ever.</span>
                </li>
                <li>
                  <span className="text-white font-semibold">✅ Long-Term Certainty</span><br />
                  <span className="text-white/80">The program is <strong>extended until 2045</strong>, giving homeowners rebates for decades to come.</span>
                </li>
                <li>
                  <span className="text-white font-semibold">✅ Save More Every Year</span><br />
                  <span className="text-white/80">• Up to <strong>$1,010 per year</strong> by replacing ducted gas.<br />• Up to <strong>$370 per year</strong> by upgrading space heaters.</span>
                </li>
                <li>
                  <span className="text-white font-semibold">✅ Proven Impact</span><br />
                  <span className="text-white/80">Over <strong>2.4 million Victorian homes</strong> already upgraded, cutting <strong>37 million tonnes of CO₂</strong> between 2022–2027.</span>
                </li>
                <li>
                  <span className="text-white font-semibold">✅ Free Inspections & Quotes</span><br />
                  <span className="text-white/80">Enjoy <strong>no-obligation onsite inspections</strong> and tailored quotes — know exactly how much you can save.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* Heating & Cooling - Key Features */}
        <section id="heating-cooling-features" className="bg-black text-white py-12 px-4 sm:px-6 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-green-900 rounded-2xl shadow-lg ring-1 ring-[#1f1f1f] p-4 sm:p-6 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-lime-500 mb-4">Heating & Cooling - Key Features</h2>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-lime-500 mb-4">Modern Split Systems</h3>
              <ul className="space-y-4 text-sm sm:text-base leading-relaxed">
                {[
                  "Energy Efficiency — reduces bills while maintaining comfort.",
                  "5 Fan Speeds — from turbo cooling to a gentle breeze.",
                  "Super Quiet Operation — whisper-quiet across all modes.",
                  "Filter Cleaning Reminder — keeps indoor air fresh.",
                  "30-Second Fast Cooling — drops air from 27°C to 18°C.",
                  "Ultra Inverter Compressor — efficient low-frequency operation.",
                  "R32 Refrigerant — lower GWP, more efficient than R410.",
                  "Silver Ion Filter — eliminates bacteria and fungi.",
                ].map((txt, i) => (
                  <li key={i}>
                    <span className="text-white font-semibold">✅ {txt.split(" — ")[0]}</span><br />
                    <span className="text-white/80">{txt.includes(" — ") ? txt.split(" — ")[1] : ""}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        {/* Product Options */}
        <section id="product-options" className="py-12 sm:py-16 md:py-20 bg-black">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-8 text-lime-500">
              Product Options for Heating & Cooling
            </h2>
            {/* Static Avanti and Rinnai Boxes */}
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { img: "/IMG_5223.jpeg", title: "Avanti PLUS® Series", desc: "Platinum-grade, award-winning design with motion sensor." },
                { img: "/IMG_5225.jpeg", title: "Rinnai T Series", desc: "Long-distance airflow with Wi-Fi & voice control." },
              ].map((item, i) => (
                <div key={i} className="bg-green-900 rounded-2xl shadow-lg ring-1 ring-[#1f1f1f] p-4 text-center">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={400}
                    height={224}
                    className="w-full h-56 object-cover rounded-lg mb-3"
                    loading="lazy"
                  />
                  <h4 className="text-base sm:text-lg font-bold text-lime-500">{item.title}</h4>
                  <p className="text-xs sm:text-sm text-white/80">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Hot Water Upgrades */}
        <section id="hot-water" className="py-12 sm:py-16 md:py-20 bg-black">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-8 text-lime-500">
              Hot Water Upgrades
            </h2>
            {/* Static Rinnai Hot Water Box */}
            <div className="bg-green-900 rounded-2xl shadow-lg ring-1 ring-[#1f1f1f] p-4 sm:p-6 mb-6 text-center">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-lime-500 mb-4">Rinnai Hot Water System</h3>
              <div className="flex flex-col items-center">
                <Image
                  src="/IMG_5168.webp"
                  alt="Rinnai Solar Hot Water"
                  width={400}
                  height={224}
                  className="w-full h-56 object-cover rounded-lg mb-3"
                  loading="lazy"
                />
                <h4 className="text-base sm:text-lg font-bold text-lime-500">Rinnai Solar Hot Water</h4>
                <p className="text-xs sm:text-sm text-white/80">Eligible for up to $1,400 rebate with locally made components, ideal for energy-efficient homes.</p>
              </div>
            </div>
            {/* Rebates & Incentives and Product Options */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-green-900 rounded-2xl shadow-lg ring-1 ring-[#1f1f1f] p-4 sm:p-6 text-center">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-lime-500 mb-4">Rebates & Incentives</h3>
                <p className="text-sm sm:text-base text-white/80 mb-4">
                  Hot water rebates of up to $1,000 are available for eligible heat pump and solar hot water products. Choose a locally made product for up to $1,400. Heating hot water accounts for 15%–30% of household energy use. Save with efficient systems and VEU discounts.
                </p>
                <ul className="space-y-4 text-sm sm:text-base leading-relaxed">
                  <li><span className="text-white font-semibold">✅ Rebates up to $1,400</span><br /><span className="text-white/80">For locally made hot water systems.</span></li>
                  <li><span className="text-white font-semibold">✅ $0 Product Cost</span><br /><span className="text-white/80">In some regions (e.g., Shepparton, Bendigo).</span></li>
                  <li><span className="text-white font-semibold">✅ Electric Replacement Mandatory</span><br /><span className="text-white/80">From Mar 1, 2027.</span></li>
                </ul>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-lime-500 mt-4 mb-4">Emergency Service</h3>
                <ul className="space-y-4 text-sm sm:text-base leading-relaxed">
                  <li><span className="text-white font-semibold">✅ 48-Hour Replacement</span><br /><span className="text-white/80">(Metro Melbourne).</span></li>
                  <li><span className="text-white font-semibold">✅ Save $2,000–$3,000</span><br /><span className="text-white/80">Vs. standard plumbing.</span></li>
                </ul>
              </div>
              <div className="bg-green-900 rounded-2xl shadow-lg ring-1 ring-[#1f1f1f] p-4 sm:p-6 text-center">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-lime-500 mb-4">Product Options</h3>
                <ul className="space-y-4 text-sm sm:text-base leading-relaxed">
                  <li><span className="text-white font-semibold">✅ Neopower Black® 260L</span><br /><span className="text-white/80">Wi-Fi, 6-yr warranty, 5 people.</span></li>
                  <li><span className="text-white font-semibold">✅ Emerald Energy 270L/320L</span><br /><span className="text-white/80">Wi-Fi, 6-yr warranty.</span></li>
                  <li><span className="text-white font-semibold">✅ EcoGenica Split</span><br /><span className="text-white/80">215L, 260L, 290L, 7-yr warranty.</span></li>
                </ul>
                <p className="mt-4 text-xs sm:text-sm text-white/80">
                  Includes 7-yr tank warranty, 12-month workmanship warranty, free recycling, and “install now, pay later” options.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Rebates & Eligibility */}
        <section id="rebates-eligibility" className="py-12 sm:py-16 md:py-20 bg-black">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-8 text-lime-500">
              Rebates & Eligibility
            </h2>
            <div className="bg-green-900 rounded-2xl shadow-lg ring-1 ring-[#1f1f1f] p-4 sm:p-6 text-center">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-lime-500 mb-4">Rebate Options</h3>
              <p className="text-sm sm:text-base text-white/80 mb-4">
                As a Victorian householder, you could receive a hot water rebate if you are an owner-occupier, household income is &lt; $210,000/year, property value is &lt; $3 million, the system is &gt; 3 years old, and the property has not previously received a hot water or solar battery rebate under the Solar Homes Program. Work with an authorised retailer using eligible products.
              </p>
              <ul className="space-y-4 text-sm sm:text-base leading-relaxed">
                <li><span className="text-white font-semibold">✅ VEU Rebate</span><br /><span className="text-white/80">Home over 24 months old, replacing inefficient systems.</span></li>
                <li><span className="text-white font-semibold">✅ CER STCs</span><br /><span className="text-white/80">System must meet efficiency standards.</span></li>
                <li><span className="text-white font-semibold">✅ SolarVic Rebate</span><br /><span className="text-white/80">Income &lt; $210K, home &lt; $3M, system &gt; 3 years old, no prior Solar Homes rebates.</span></li>
              </ul>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg px-6 py-2 font-bold bg-black text-white hover:bg-lime-400 hover:text-black focus:ring-4 focus:ring-lime-500/30 transition-all mt-4"
              >
                Check Eligibility
              </a>
            </div>
          </div>
        </section>
        {/* Why Choose Accredited Providers */}
        <section id="why-choose" className="bg-black text-white py-12 px-4 sm:px-6 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-green-900 rounded-2xl shadow-lg ring-1 ring-[#1f1f1f] p-4 sm:p-6 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-lime-500 mb-4">Why Choose Accredited Providers</h2>
              <ul className="space-y-4 text-sm sm:text-base leading-relaxed">
                {[
                  "Tailored System Selection — For your needs.",
                  "High-Quality Products — With frost protection.",
                  "Licensed VIC Professionals — Plumbers and electricians.",
                  "5-Yr Product Warranty — Plus 2-yr labor warranty (heating/cooling).",
                  "7-Yr Tank Warranty — (Hot water).",
                  "15+ Years of Expertise —",
                  "5 Days Standard Install — 48 hrs emergency hot water.",
                  "4.9/5 Google Reviews — VEU accredited.",
                ].map((line, i) => (
                  <li key={i}>
                    <span className="text-white font-semibold">✅ {line.split(" — ")[0]}</span><br />
                    <span className="text-white/80">{line.includes(" — ") ? line.split(" — ")[1] : ""}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        {/* Step-by-Step Process */}
        <section id="process" className="bg-black text-white py-12 px-4 sm:px-6 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-green-900 rounded-2xl shadow-lg ring-1 ring-[#1f1f1f] p-4 sm:p-6 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-lime-500 mb-4">Step-by-Step Process</h2>
              <p className="text-sm sm:text-base text-white/80 mb-4">
                Follow these steps to access hot water rebates and install an efficient system:
              </p>
              <ul className="space-y-4 text-sm sm:text-base leading-relaxed">
                {[
                  ["Step 1: Research", "Read the Hot Water Buyers Guide and contact an authorised retailer."],
                  ["Step 2: Quote", "Select an eligible system; retailer uploads quote to Solar Victoria portal."],
                  ["Step 3: Approval", "Get pre-approval, upload eligibility documents, and receive QR code."],
                  ["Step 4: Install", "Complete installation within 120 days and pay the remaining cost."],
                  ["Step 5: Emergency", "For urgent replacements, install first, then apply for rebate."],
                ].map(([h, s], i) => (
                  <li key={i}>
                    <span className="text-white font-semibold">✅ {h}</span><br />
                    <span className="text-white/80">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        {/* Home Energy Rating Assessments */}
        <section id="home-energy-assessments" className="bg-black text-white py-12 px-4 sm:px-6 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-green-900 rounded-2xl shadow-lg ring-1 ring-[#1f1f1f] p-4 sm:p-6 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-lime-500 mb-4">Home Energy Rating Assessments</h2>
              <p className="text-sm sm:text-base text-white/80 mb-4">
                The Residential Efficiency Scorecard assesses your home’s energy efficiency, helping you save on energy bills. Most homes are eligible for a rebate of approximately $120.
              </p>
              <ul className="space-y-4 text-sm sm:text-base leading-relaxed">
                <li>
                  <span className="text-white font-semibold">✅ Energy Efficiency Check</span><br />
                  <span className="text-white/80">Evaluates your home and appliances to identify savings opportunities.</span>
                </li>
                <li>
                  <span className="text-white font-semibold">✅ $120 Rebate</span><br />
                  <span className="text-white/80">Available for most Victorian households.</span>
                </li>
              </ul>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg px-6 py-2 font-bold bg-black text-white hover:bg-lime-400 hover:text-black focus:ring-4 focus:ring-lime-500/30 transition-all mt-4"
              >
                Book an Assessment
              </a>
            </div>
          </div>
        </section>
        {/* Solar Panel Rebates and All-Electric Homes */}
        <section id="solar-panel-rebates" className="bg-black text-white py-12 px-4 sm:px-6 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-green-900 rounded-2xl shadow-lg ring-1 ring-[#1f1f1f] p-4 sm:p-6 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-lime-500 mb-4">Solar Panel Rebates & All-Electric Homes</h2>
              <p className="text-sm sm:text-base text-white/80 mb-4">
                Eligible Victorians can access solar panel (PV) rebates to reduce energy costs. Switching to an all-electric home powered by solar can save thousands annually.
              </p>
              <ul className="space-y-4 text-sm sm:text-base leading-relaxed">
                <li>
                  <span className="text-white font-semibold">✅ Solar Panel Rebates</span><br />
                  <span className="text-white/80">Available through the Solar Homes Program for eligible households.</span>
                </li>
                <li>
                  <span className="text-white font-semibold">✅ All-Electric Savings</span><br />
                  <span className="text-white/80">Save thousands per year with solar-powered electric systems.</span>
                </li>
              </ul>
              <a
                href="https://www.solar.vic.gov.au/solar-panel-rebate"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg px-6 py-2 font-bold bg-black text-white hover:bg-lime-400 hover:text-black focus:ring-4 focus:ring-lime-500/30 transition-all mt-4"
              >
                Learn More About Solar Rebates
              </a>
            </div>
          </div>
        </section>
        {/* Hot Water Buyers Guide and Product Lists */}
        <section id="hot-water-guide" className="bg-black text-white py-12 px-4 sm:px-6 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-green-900 rounded-2xl shadow-lg ring-1 ring-[#1f1f1f] p-4 sm:p-6 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-lime-500 mb-4">Hot Water Buyers Guide & Product Lists</h2>
              <p className="text-sm sm:text-base text-white/80 mb-4">
                Explore our Hot Water Buyers Guide to choose the best system for your home. Select from eligible products, including locally made options for higher rebates up to $1,400, supporting local jobs.
              </p>
              <ul className="space-y-4 text-sm sm:text-base leading-relaxed">
                <li>
                  <span className="text-white font-semibold">✅ Buyers Guide</span><br />
                  <span className="text-white/80">Helps you select energy-efficient hot water systems tailored to your needs.</span>
                </li>
                <li>
                  <span className="text-white font-semibold">✅ Locally Made Incentive</span><br />
                  <span className="text-white/80">Up to $1,400 rebate for products with at least 50% locally made or assembled parts, supporting Local Jobs First.</span>
                </li>
                <li>
                  <span className="text-white font-semibold">✅ Product Lists</span><br />
                  <span className="text-white/80">Check eligible products regularly updated by Solar Victoria.</span>
                </li>
              </ul>
              <a
                href="https://www.solar.vic.gov.au/hot-water-rebate"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg px-6 py-2 font-bold bg-black text-white hover:bg-lime-400 hover:text-black focus:ring-4 focus:ring-lime-500/30 transition-all mt-4"
              >
                View Buyers Guide & Product Lists
              </a>
            </div>
          </div>
        </section>
        {/* Emergency Installations */}
        <section id="emergency-installations" className="bg-black text-white py-12 px-4 sm:px-6 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-green-900 rounded-2xl shadow-lg ring-1 ring-[#1f1f1f] p-4 sm:p-6 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-lime-500 mb-4">Emergency Hot Water Installations</h2>
              <p className="text-sm sm:text-base text-white/80 mb-4">
                If your hot water system breaks down or is unsafe, you can replace it immediately without waiting for rebate approval. Apply for the rebate post-installation to save up to $1,400.
              </p>
              <ul className="space-y-4 text-sm sm:text-base leading-relaxed">
                <li>
                  <span className="text-white font-semibold">✅ Immediate Replacement</span><br />
                  <span className="text-white/80">Contact an authorised retailer for a solar hot water or heat pump installation.</span>
                </li>
                <li>
                  <span className="text-white font-semibold">✅ Post-Installation Rebate</span><br />
                  <span className="text-white/80">Submit eligibility documents after installation to claim your rebate.</span>
                </li>
                <li>
                  <span className="text-white font-semibold">✅ Eligibility Check</span><br />
                  <span className="text-white/80">Ensure you meet criteria (e.g., owner-occupier, income &lt; $210K) to avoid missing out.</span>
                </li>
              </ul>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg px-6 py-2 font-bold bg-black text-white hover:bg-lime-400 hover:text-black focus:ring-4 focus:ring-lime-500/30 transition-all mt-4"
              >
                Arrange Emergency Installation
              </a>
            </div>
          </div>
        </section>
        {/* Contact */}
        <section id="contact" className="py-12 sm:py-16 md:py-20 bg-black">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-12 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-lime-500 mb-4">Contact & Next Steps</h2>
            <p className="text-base sm:text-lg md:text-xl font-medium text-white mb-6">
              Free inspections available across Victoria. Rebates apply now for heating, cooling, and hot water upgrades.
            </p>
            <form className="bg-green-900 rounded-2xl shadow-lg ring-1 ring-[#1f1f1f] p-4 sm:p-6 grid sm:grid-cols-2 gap-4 text-center">
              <label className="block">
                <span className="text-sm sm:text-base font-bold text-white">Full Name</span>
                <input
                  type="text"
                  required
                  className="mt-1 w-full rounded-lg border-[#1f1f1f] focus:border-lime-500 focus:ring-lime-500 p-2 bg-black text-white transition-all"
                  placeholder="Jane Citizen"
                />
              </label>
              <label className="block">
                <span className="text-sm sm:text-base font-bold text-white">Email</span>
                <input
                  type="email"
                  required
                  className="mt-1 w-full rounded-lg border-[#1f1f1f] focus:border-lime-500 focus:ring-lime-500 p-2 bg-black text-white transition-all"
                  placeholder="jane@email.com"
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="text-sm sm:text-base font-bold text-white">Postcode</span>
                <input
                  type="text"
                  required
                  className="mt-1 w-full rounded-lg border-[#1f1f1f] focus:border-lime-500 focus:ring-lime-500 p-2 bg-black text-white transition-all"
                  placeholder="3000"
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="text-sm sm:text-base font-bold text-white">Message</span>
                <textarea
                  rows={5}
                  required
                  className="mt-1 w-full rounded-lg border-[#1f1f1f] focus:border-lime-500 focus:ring-lime-500 p-2 bg-black text-white transition-all"
                  placeholder="How can we assist you?"
                />
              </label>
              <div className="sm:col-span-2 flex gap-4 flex-wrap justify-center">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg px-6 py-2 font-bold bg-black text-white hover:bg-lime-400 hover:text-black focus:ring-4 focus:ring-lime-500/30 transition-all"
                >
                  Submit Inquiry
                </button>
                <a
                  href="mailto:info@greenlineenergy.com.au"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg px-6 py-2 font-bold bg-black text-white hover:bg-lime-400 hover:text-black focus:ring-4 focus:ring-lime-500/30 transition-all"
                >
                  Email Us
                </a>
              </div>
            </form>
            <p className="text-xs sm:text-sm text-white mt-3">
              Supported through 2045. By submitting, you agree to let us contact you.
            </p>
          </div>
        </section>
        {/* Refer a Friend */}
        <section className="w-full py-12 sm:py-16 md:py-20 bg-black border-t border-[#1f1f1f]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="bg-green-900 rounded-2xl shadow-lg ring-1 ring-[#1f1f1f] overflow-hidden text-center">
              <div className="bg-black text-lime-500 py-6 border-b border-[#1f1f1f]">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-lime-500">Refer a Friend, $100 Cash!</h2>
              </div>
              <div className="p-4 sm:p-6 space-y-4">
                <p className="text-base sm:text-lg font-bold text-white">
                  Invite your friends to join Greenline Energy and earn <strong>$100 cash</strong> for each successful referral!
                </p>
                <p className="text-xs sm:text-sm text-white/80">No limit—refer more friends to boost your rewards!</p>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-lg px-6 py-2 font-bold bg-black text-white hover:bg-lime-400 hover:text-black focus:ring-4 focus:ring-lime-500/30 transition-all"
                >
                  Refer Now
                </a>
                <p className="text-xs sm:text-sm text-white/80">
                  Quick, easy, and rewarding way to share the savings.
                </p>
              </div>
              <div className="mt-4">
                <Image
                  src="/refercash.png"
                  alt="Refer a Friend Cash Illustration"
                  width={800}
                  height={200}
                  className="w-full h-auto object-cover rounded-b-lg shadow-md"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Frequently Asked Questions */}
        <section id="faq" className="bg-black text-white py-12 px-4 sm:px-6 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-green-900 rounded-2xl shadow-lg ring-1 ring-[#1f1f1f] p-4 sm:p-6 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-lime-500 mb-4">Frequently Asked Questions</h2>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-lime-500 mb-4">Rebate Details</h3>
              <ul className="space-y-4 text-sm sm:text-base leading-relaxed">
                <li><span className="text-white font-semibold">✅ Hot Water Rebates</span><br /><span className="text-white/80">Up to $1,400 for locally made systems.</span></li>
                <li><span className="text-white font-semibold">✅ Combined Incentives</span><br /><span className="text-white/80">Up to $9,900.</span></li>
                <li><span className="text-white font-semibold">✅ Aircon & Heating Discounts</span><br /><span className="text-white/80">Available for efficient systems.</span></li>
              </ul>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-lime-500 mt-4 mb-4">Benefits of Switching</h3>
              <ul className="space-y-4 text-sm sm:text-base leading-relaxed">
                <li><span className="text-white font-semibold">✅ Save on Heating</span><br /><span className="text-white/80">Up to $1,010/year.</span></li>
                <li><span className="text-white font-semibold">✅ Home Energy Assessments</span><br /><span className="text-white/80">Rebate of ~$120 for Residential Efficiency Scorecard.</span></li>
                <li><span className="text-white font-semibold">✅ Reduce Carbon Footprint</span><br /><span className="text-white/80">By 37M tonnes (2022–2027).</span></li>
              </ul>
              <p className="mt-4 text-xs sm:text-sm text-white/80">*Estimates may vary. Contact us for personalized advice.</p>
            </div>
          </div>
        </section>
        {/* Footer */}
        <footer className="py-8 bg-black border-t border-[#1f1f1f] text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm sm:text-base">
            <p className="font-medium text-white">© {new Date().getFullYear()} Greenline Energy Pty Ltd • ABN 12 345 678 901</p>
            <div className="flex items-center gap-4 flex-wrap">
              <a
                href="https://www.energy.vic.gov.au/victorian-energy-upgrades"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-lime-400 transition-colors"
              >
                VEU Program
              </a>
              <span className="text-white">•</span>
              <a
                href="https://www.solar.vic.gov.au/hot-water-rebate"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-lime-400 transition-colors"
              >
                Solar Victoria Rebates
              </a>
              <span className="text-white">•</span>
              <a href="mailto:info@greenlineenergy.com.au" className="text-white hover:text-lime-400 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
```
