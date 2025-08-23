import Head from "next/head";
export default function Home() {
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
            alt="GreenLine Energy Savings Banner"
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
                <a href="#solutions" className="hover:text-[#3CB371]">Solutions</a>
                <a href="#pricing" className="hover:text-[#3CB371]">Pricing</a>
                <a href="#process" className="hover:text-[#3CB371]">Process</a>
                <a href="#faq" className="hover:text-[#3CB371]">FAQ</a>
                <a href="#contact" className="hover:text-[#3CB371]">Contact</a>
              </nav>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-bold bg-[#228B22] text-[#FFFFFF] hover:bg-[#3CB371] transition-colors duration-200"
              >
                Get a Quote
              </a>
            </div>
          </div>
        </header>
        {/* Hero */}
        <section id="top" className="py-20 md:py-28 bg-[#1C2525]">
          <div className="mx-auto max-w-7xl px-6 md:px-12 grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7 space-y-8">
              <span className="inline-flex items-center rounded-full px-4 py-2 text-sm font-bold bg-[#6B8E23] text-[#FFFFFF] ring-1 ring-[#228B22]/30">
                VEU-Accredited Upgrades
              </span>
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-[#FFFFFF]">
                Transform Your Home with Energy Savings
              </h1>
              <p className="text-xl md:text-2xl font-medium text-[#F0FFF0]">
                GreenLine Energy offers VEU-accredited upgrades to cut costs and emissions. Save up to $4,000 with
                government rebates!
              </p>
              <div className="flex gap-6">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-lg px-8 py-3 font-bold bg-[#228B22] text-[#FFFFFF] hover:bg-[#3CB371] focus:ring-4 focus:ring-[#228B22]/30 transition-all duration-200"
                >
                  Contact Us
                </a>
                <a
                  href="#rebates"
                  className="inline-flex items-center justify-center rounded-lg px-8 py-3 font-bold bg-[#1C2525] text-[#FFFFFF] ring-1 ring-[#228B22]/30 hover:bg-[#2F4F4F]"
                >
                  Explore Rebates
                </a>
              </div>
              <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 text-lg">
                {[
                  ["Up to $4,000", "in Rebates*"],
                  ["Up to $1,500", "Hot Water Savings"],
                  ["Save $1,500/yr", "vs Old Systems"],
                  ["Expert Team", "Quick Installs"],
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
                  alt="Modern home with energy-efficient upgrades"
                  className="rounded-2xl object-cover w-full h-auto"
                  loading="lazy"
                />
                <p className="text-base font-medium text-[#F0FFF0] mt-3 text-center">
                  Upgrade to a more efficient, cost-saving home.
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
        {/* Solutions */}
        <section id="solutions" className="py-20 md:py-24 bg-[#1C2525]">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-[#FFFFFF]">
              Our Energy-Efficient Solutions
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Heat Pump Hot Water",
                  body: "Efficient, quiet systems to reduce heating costs.",
                  bullets: ["Up to 80% energy savings", "Smart technology", "VEU & STC eligible"],
                  chips: "Emerald / EcoGenica / Neopower",
                  image: "/heatpumphotwater.jpeg.jpeg",
                },
                {
                  title: "Reverse-Cycle Air Conditioning",
                  body: "Year-round comfort with VEU-approved units.",
                  bullets: ["All-season efficiency", "Custom sizing", "Rebate discounts"],
                  chips: "Daikin • Mitsubishi • Fujitsu",
                  image: "/revcycair.jpeg",
                },
                {
                  title: "Hydronics & Boilers",
                  body: "Custom heating for consistent warmth.",
                  bullets: ["Tailored designs", "Site eligibility", "Complete service"],
                  chips: "Custom Quotes",
                  image: "/hydronicsboilers.png",
                },
              ].map((card, i) => (
                <article
                  key={i}
                  className="bg-[#6B8E23] rounded-2xl shadow-lg ring-1 ring-gray-700 p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={card.image}
                    alt={`${card.title} Solution`}
                    className="w-full h-48 object-cover rounded-lg mb-6"
                    loading="lazy"
                  />
                  <h3 className="text-2xl font-bold text-[#FFFFFF] mb-4">{card.title}</h3>
                  <p className="text-lg font-medium text-[#F0FFF0] mb-4">{card.body}</p>
                  <ul className="text-base space-y-2 list-disc pl-6 text-[#F0FFF0]">
                    {card.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#228B22] rounded-full"></span>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <span className="inline-flex items-center rounded-full px-4 py-2 text-base font-medium bg-[#1C2525] text-[#6B8E23] ring-1 ring-[#228B22]/20 mt-4">
                    {card.chips}
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>
        {/* Rebates */}
        <section id="rebates" className="py-20 md:py-24 bg-[#2F4F4F]">
          <div className="mx-auto max-w-7xl px-6 md:px-12 grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#FFFFFF]">
                Unlock Your Rebate Savings
              </h2>
              <p className="text-xl font-medium text-[#F0FFF0]">
                As a VEU-accredited provider, GreenLine Energy secures government rebates to make your upgrades
                affordable.
              </p>
              <ul className="text-base font-medium text-[#F0FFF0] space-y-3 list-none">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#228B22] rounded-full"></span>
                  Up to $4,000 in combined rebates
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#228B22] rounded-full"></span>
                  Up to $1,500 hot water savings
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#228B22] rounded-full"></span>
                  Discounts on air conditioners
                </li>
              </ul>
              <p className="text-sm text-[#A9A9A9]">
                *Depends on location and eligibility. Contact for a personalized estimate.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg px-8 py-3 font-bold bg-[#228B22] text-[#FFFFFF] hover:bg-[#3CB371] focus:ring-4 focus:ring-[#228B22]/30 transition-all duration-200"
              >
                Check Eligibility
              </a>
            </div>
            <div className="md:pl-8">
              <img
                src="/rebates-illustration.png.jpg"
                alt="Energy-efficient home upgrades"
                className="rounded-2xl shadow-lg ring-1 ring-gray-700 object-cover w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </section>
        {/* Pricing */}
        <section id="pricing" className="py-20 md:py-24 bg-[#1C2525]">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-[#FFFFFF]">
              Pricing After Rebates
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Heat Pump Hot Water (260–300L)",
                  desc: (
                    <>
                      From <span className="font-bold text-[#FFFFFF]">$799</span> installed*
                    </>
                  ),
                  points: ["Full install & removal", "5–7 year warranties", "Rebates applied"],
                  image: "/heatpumphotwater.jpeg.jpeg",
                },
                {
                  title: "Split System RCAC (2.5–3.5 kW)",
                  desc: <>VEU-discounted, site-specific</>,
                  points: ["Efficient single-room comfort", "Certified units", "Quick setup"],
                  image: "/splitrcac.jpeg",
                },
                {
                  title: "Ducted RCAC (Whole Home)",
                  desc: <>Custom, VEU-discounted</>,
                  points: ["Whole-home efficiency", "Load planning", "Professional install"],
                  image: "/ductedrcac.jpeg",
                },
              ].map((p) => (
                <div
                  key={p.title}
                  className="bg-[#6B8E23] rounded-2xl shadow-lg ring-1 ring-gray-700 p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={p.image}
                    alt={`${p.title} Pricing`}
                    className="w-full h-48 object-cover rounded-lg mb-6"
                    loading="lazy"
                  />
                  <h3 className="text-xl font-bold text-[#FFFFFF] mb-3">{p.title}</h3>
                  <p className="text-base font-medium text-[#F0FFF0] mb-3">{p.desc}</p>
                  <ul className="text-base space-y-2 list-disc pl-6 text-[#F0FFF0]">
                    {p.points.map((x) => (
                      <li key={x} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#228B22] rounded-full"></span>
                        {x}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="text-sm text-[#A9A9A9] mt-6 text-center">
              *Based on eligibility. Confirm with us for exact costs.
            </p>
          </div>
        </section>
        {/* Process */}
        <section id="process" className="py-20 md:py-24 bg-[#2F4F4F]">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-[#FFFFFF]">
              Your Upgrade Process
            </h2>
            <div className="flex justify-center">
              <img
                src="/eligible.png"
                alt="Eligibility Process"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </section>
        {/* Contact */}
        <section id="contact" className="py-20 md:py-24 bg-[#1C2525]">
          <div className="mx-auto max-w-4xl px-6 md:px-12 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#FFFFFF] mb-6">
              Let’s Get Started
            </h2>
            <p className="text-xl font-medium text-[#F0FFF0] mb-6">
              Our team is here to assist with your energy upgrade needs.
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
              Refer a friend and get $100 off your next upgrade! By submitting, you agree to let us contact you.
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
          <div className="mx-auto max-w-7xl px-6 md:px-12 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-extrabold mb-6 text-[#FFFFFF]">Rebate Details</h3>
              <ul className="text-base font-medium text-[#F0FFF0] space-y-3 list-none">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#228B22] rounded-full"></span>
                  Hot water rebates up to $1,500
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#228B22] rounded-full"></span>
                  Up to $4,000 in combined incentives
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#228B22] rounded-full"></span>
                  Aircon discounts available
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-extrabold mb-6 text-[#FFFFFF]">Benefits of Switching</h3>
              <ul className="text-base font-medium text-[#F0FFF0] space-y-3 list-none">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#228B22] rounded-full"></span>
                  Save up to $1,500/year on energy
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#228B22] rounded-full"></span>
                  Upgrade to efficient heating
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#228B22] rounded-full"></span>
                  Lower your carbon footprint
                </li>
              </ul>
            </div>
          </div>
          <div className="mx-auto max-w-7xl px-6 md:px-12 mt-6">
            <p className="text-sm text-[#A9A9A9] text-center">
              *Estimates vary. Contact us for a detailed assessment.
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
