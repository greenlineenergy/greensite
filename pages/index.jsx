import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          GreenLine Energy — Melbourne VEU Rebates, Heating, Cooling & Hot Water
        </title>
        <meta
          name="description"
          content="GreenLine Energy offers VEU-accredited upgrades for heating, cooling, and hot water in Melbourne. Save up to $9,900 with government rebates."
        />
        <meta
          property="og:title"
          content="GreenLine Energy Solutions - Melbourne VEU Rebates"
        />
        <meta
          property="og:description"
          content="Unlock up to $9,900 in VEU rebates for energy-efficient heating, cooling, and hot water upgrades in Melbourne. Reduce bills and emissions."
        />
        <meta
          property="og:image"
          content="https://greensite-rouge.vercel.app/og-image.jpg"
        />
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
              <a
                href="#top"
                className="flex items-center gap-4 font-bold text-[#FFFFFF]"
              >
                <img
                  src="/greenline-logo-mark.png.jpeg"
                  alt="GreenLine Energy Logo"
                  className="h-12 w-12 rounded-full"
                  loading="lazy"
                />
                <img
                  src="/greenline-logo-word.png.jpeg"
                  alt="GreenLine Energy Wordmark"
                  className="h-8"
                  loading="lazy"
                />
              </a>
              <nav className="hidden md:flex items-center gap-8 text-lg font-medium">
                <a href="#why-upgrade" className="hover:text-[#3CB371]">
                  Why Upgrade
                </a>
                <a
                  href="#heating-cooling-features"
                  className="hover:text-[#3CB371]"
                >
                  Heating & Cooling
                </a>
                <a href="#hot-water" className="hover:text-[#3CB371]">
                  Hot Water
                </a>
                <a href="#rebates-eligibility" className="hover:text-[#3CB371]">
                  Rebates
                </a>
                <a href="#process" className="hover:text-[#3CB371]">
                  Process
                </a>
                <a href="#contact" className="hover:text-[#3CB371]">
                  Contact
                </a>
              </nav>
              <div className="flex items-center gap-4">
                <a
                  href="/vic-heat-pump/"
                  className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-bold bg-[#228B22] text-[#FFFFFF] hover:bg-[#3CB371] focus:ring-4 focus:ring-[#228B22]/30 transition-all duration-200"
                >
                  Heat Pump Offer
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-bold bg-[#228B22] text-[#FFFFFF] hover:bg-[#3CB371] focus:ring-4 focus:ring-[#228B22]/30 transition-all duration-200"
                >
                  Get a Quote
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section id="top" className="py-20 md:py-28 bg-[#1C2525]">
          <div className="mx-auto max-w-7xl px-6 md:px-12 grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7 space-y-8">
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-[#FFFFFF]">
                Master Transcript – Melbourne VEU Rebates, Heating, Cooling &
                Hot Water
              </h1>
              <p className="text-xl md:text-2xl font-medium text-[#F0FFF0]">
                Take advantage of up to $9,900 in Victorian Government Energy
                Upgrade (VEU) incentives to replace old gas heaters, outdated
                air conditioners, or electric/gas hot water systems with modern,
                energy-efficient technology.
              </p>
              <p className="text-lg text-[#D3D3D3]">
                These upgrades reduce your bills, improve comfort, and cut
                carbon emissions — supported by one of the most generous
                government-backed energy programs in Australia.
              </p>
            </div>
            <div className="md:col-span-5">
              <img
                src="/hero1.png"
                alt="Energy efficient home"
                className="rounded-2xl object-cover w-full h-auto shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Why Upgrade */}
        <section id="why-upgrade" className="py-20 md:py-24 bg-[#2F4F4F]">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-12">
              Why Upgrade? (Program-Level Benefits)
            </h2>
            <ul className="space-y-4 text-lg text-[#F0FFF0] max-w-3xl mx-auto">
              <li>
                Rebates available under the Victorian Energy Upgrades (VEU)
                program.
              </li>
              <li>Extended until 2045, offering long-term certainty.</li>
              <li>
                Annual savings examples: up to $1,010 per year (ducted gas) and
                $370 per year (space heaters).
              </li>
              <li>
                Program has already upgraded 2.4M+ Victorian homes, targeting
                37M tonnes CO₂ reduction (2022–2027).
              </li>
              <li>Free onsite inspections and quotes available.</li>
            </ul>
          </div>
        </section>

        {/* Heating & Cooling Features */}
        <section
          id="heating-cooling-features"
          className="py-20 md:py-24 bg-[#1C2525]"
        >
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-12">
              Heating & Cooling – Key Features of Modern Split Systems
            </h2>
            <ul className="grid md:grid-cols-2 gap-6 text-lg text-[#F0FFF0] max-w-4xl mx-auto">
              <li>Energy Efficiency – Maintain comfort while reducing bills.</li>
              <li>5 Fan Speeds – From turbo cooling to a gentle breeze.</li>
              <li>Super Quiet Operation – Whisper-quiet across all modes.</li>
              <li>Filter Cleaning Reminder – Keeps indoor air fresh.</li>
              <li>30-Second Fast Cooling – Drops air from 27°C to 18°C.</li>
              <li>Ultra Inverter Compressor – Efficient low-frequency use.</li>
              <li>R32 Refrigerant – Lower GWP, more efficient than R410.</li>
              <li>Silver Ion Filter – Eliminates bacteria and fungi.</li>
            </ul>
          </div>
        </section>

        {/* Product Options */}
        <section id="product-options" className="py-20 md:py-24 bg-[#2F4F4F]">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-12">
              Product Options (Heating & Cooling)
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Emerald Split System",
                  desc: "Reverse cycle (heating + cooling). 360° full DC inverter, advanced ducting & louver fin.",
                },
                {
                  title: "Avanti PLUS® Series",
                  desc: "Award-winning, ultra-quiet with motion sensor and Clean Air Technology.",
                },
                {
                  title: "Rinnai T Series",
                  desc: "Wi-Fi + voice control, R32 refrigerant, year-round performance.",
                },
              ].map((p, i) => (
                <div
                  key={i}
                  className="bg-[#6B8E23] rounded-xl p-6 text-white shadow-lg"
                >
                  <h3 className="text-2xl font-bold mb-4">{p.title}</h3>
                  <p className="text-lg">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hot Water Upgrades */}
        <section id="hot-water" className="py-20 md:py-24 bg-[#1C2525]">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-12">
              Hot Water Upgrades
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-[#F0FFF0]">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Rebates & Incentives
                </h3>
                <ul className="space-y-3">
                  <li>Rebates up to $2,681 for electric hot water upgrades.</li>
                  <li>
                    Some regions (e.g., Shepparton, Bendigo) may qualify for $0
                    cost systems.
                  </li>
                  <li>
                    From March 1, 2027, gas systems must be replaced with
                    electric.
                  </li>
                </ul>
                <h3 className="text-2xl font-bold mt-6 mb-4 text-white">
                  Emergency Service
                </h3>
                <p>
                  48-hour emergency replacement (Metro Melbourne). Can save
                  households $2,000–$3,000 vs normal emergency plumbing.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Hot Water Product Options
                </h3>
                <ul className="space-y-3">
                  <li>
                    Neopower Black® 260L All-in-One – Wi-Fi, 6-year warranty.
                  </li>
                  <li>
                    Emerald Energy 270L/320L – Wi-Fi, 6-year warranty, suits 2–7
                    people.
                  </li>
                  <li>
                    EcoGenica Split & All-in-One – 215L, 260L, 290L, 7-year
                    warranty.
                  </li>
                </ul>
                <p className="mt-4">
                  Includes tank warranties, 12-month workmanship warranty,
                  accredited installs, free recycling, and finance options.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Rebates & Eligibility */}
        <section id="rebates-eligibility" className="py-20 md:py-24 bg-[#2F4F4F]">
          <div className="mx-auto max-w-7xl px-6 md:px-12 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-12">
              Rebates & Eligibility
            </h2>
            <ul className="text-[#F0FFF0] space-y-3 text-lg max-w-3xl mx-auto">
              <li>
                VEU rebate – Home must be over 24 months old, replacing
                inefficient systems.
              </li>
              <li>CER STCs – System must meet efficiency standards.</li>
              <li>
                SolarVic rebate – Household income under $210K, home under $3M,
                replacing older systems.
              </li>
            </ul>
          </div>
        </section>

        {/* Why Choose */}
        <section id="why-choose" className="py-20 md:py-24 bg-[#1C2525]">
          <div className="mx-auto max-w-7xl px-6 md:px-12 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-12">
              Why Choose Accredited Providers
            </h2>
            <ul className="space-y-3 text-lg text-[#F0FFF0] max-w-4xl mx-auto">
              <li>Expert advice to select the right system for your budget.</li>
              <li>Licensed VIC plumbers & electricians for installs.</li>
              <li>Warranties: 5 years (heating/cooling), 7 years (hot water).</li>
              <li>Fast turnaround: 5 days, 48 hrs for emergency hot water.</li>
              <li>15+ years expertise in energy efficiency solutions.</li>
              <li>Trusted: 4.9/5 Google reviews, VEU accredited.</li>
            </ul>
          </div>
        </section>

        {/* Step-by-Step Process */}
        <section id="process" className="py-20 md:py-24 bg-[#2F4F4F]">
          <div className="mx-auto max-w-7xl px-6 md:px-12 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-12">
              Step-by-Step Process
            </h2>
            <ol className="text-left text-[#F0FFF0] space-y-4 max-w-xl mx-auto text-lg">
              <li>1) Register – Complete quick form (eligibility check ~60s).</li>
              <li>2) Confirm – Provider verifies rebate eligibility.</li>
              <li>3) Install – Accredited professional completes setup.</li>
              <li>4) Certify & Recycle – Old unit removed, certification provided.</li>
            </ol>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 md:py-24 bg-[#1C2525] text-center">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Contact & Next Steps
            </h2>
            <p className="text-lg text-[#F0FFF0] mb-8">
              Free inspections available across Victoria. Rebates apply now for
              heating, cooling, and hot water upgrades. Supported until 2045.
            </p>
            <a
              href="mailto:contact@GLEnergy.com.au"
              className="inline-flex items-center justify-center rounded-lg px-8 py-3 font-bold bg-[#228B22] text-white hover:bg-[#3CB371] transition"
            >
              Email Us
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-10 bg-[#1A3C1A] text-white text-center">
          <p>
            © {new Date().getFullYear()} GreenLine Energy Pty Ltd • ABN 12 345
            678 901
          </p>
        </footer>
      </div>
    </>
  );
}
