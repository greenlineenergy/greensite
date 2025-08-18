import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>VEU Rebates Victoria – Save on Energy with GreenLine</title>
        <meta
          name="description"
          content="Cut energy bills with government rebates. GreenLine Energy Pty Ltd offers VEU-accredited upgrades for heat pumps, aircon, and hydronics. Apply online today."
        />
        <meta property="og:title" content="GreenLine Energy Solutions" />
        <meta
          property="og:description"
          content="VEU-accredited upgrades for heat pumps, air conditioning, and hydronics. Reduce costs and emissions with certified installations."
        />
        <meta property="og:image" content="https://greensite-7ept.vercel.app/og-image.jpg" />
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
            url: "https://greensite-7ept.vercel.app",
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
      <div className="bg-gradient-to-b from-[#F5F5F5] via-white to-white text-[#1A237E] antialiased">
        {/* Banner */}
        <div className="w-full">
          <img
            src="/greenline-banner.png"
            alt="GreenLine Energy Banner"
            className="w-full h-auto max-h-[200px] object-cover"
          />
        </div>
        {/* Header (Teal) */}
        <header className="sticky top-0 z-50 bg-[#26A69A] text-white/90 shadow-md">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex items-center justify-between h-16">
              <a href="#top" className="flex items-center gap-3 font-bold">
                <img
                  src="/greenline-logo-mark.png"
                  alt="GreenLine Logo Mark"
                  className="h-10 w-10 rounded-full"
                />
                <img
                  src="/greenline-logo-word.png.jpeg.png"
                  alt="GreenLine Energy"
                  className="hidden sm:block h-6"
                />
              </a>
              <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                <a href="#solutions" className="hover:text-white">Services</a>
                <a href="#rebates" className="hover:text-white">Rebates</a>
                <a href="#about" className="hover:text-white">About</a>
                <a href="#contact" className="hover:text-white">Contact</a>
              </nav>
              <a
                href="#eligibility"
                className="inline-flex items-center justify-center rounded-xl px-5 py-2.5 font-semibold bg-[#2E7D32] text-white hover:bg-[#225522] focus:outline-none focus:ring-4 focus:ring-white/20"
              >
                Check Eligibility
              </a>
            </div>
          </div>
        </header>
        {/* Hero */}
        <section id="top" className="py-20 md:py-28 bg-[#F5F5F5]">
          <div className="mx-auto max-w-7xl px-4 md:px-6 text-center">
            <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-[#E0F2F1] text-[#1A237E] ring-1 ring-[#26A69A]/30">
              VEU-Accredited Upgrades
            </span>
            <h1 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight">
              Save Thousands with VEU Rebates
            </h1>
            <p className="mt-4 text-lg md:text-xl text-[#455A64] max-w-2xl mx-auto">
              Upgrade to energy-efficient heat pumps, aircon, and hydronics with government support. Cut bills and
              emissions today!
            </p>
            <a
              href="#eligibility"
              className="mt-6 inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold bg-[#2E7D32] text-white hover:bg-[#225522] focus:outline-none focus:ring-4 focus:ring-[#2E7D32]/30"
            >
              Apply Now
            </a>
          </div>
        </section>
        {/* Solutions */}
        <section id="solutions" className="py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#1A237E]">
              Our Eco-Friendly Solutions
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Heat Pump Hot Water",
                  body: "Replace old systems with high-efficiency heat pumps.",
                  benefits: [
                    "Up to 80% less electricity",
                    "Smart controls included",
                    "VEU & STC eligible",
                  ],
                  brands: ["Emerald / EcoGenica / Neopower"],
                },
                {
                  title: "Reverse-Cycle Air Conditioning",
                  body: "Year-round comfort with VEU-eligible systems.",
                  benefits: ["Climate control for all seasons", "Approved models", "Expert sizing"],
                  brands: ["Daikin • Mitsubishi • Fujitsu"],
                },
                {
                  title: "Hydronics & Boilers",
                  body: "Custom heating solutions for quiet warmth.",
                  benefits: ["Tailored designs", "Site-specific eligibility", "Full installation"],
                  brands: ["Custom quoted"],
                },
              ].map((solution, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-semibold text-[#26A69A] mb-2">{solution.title}</h3>
                  <p className="text-sm text-[#455A64] mb-4">{solution.body}</p>
                  <ul className="text-sm text-[#455A64] space-y-2 mb-4 list-disc pl-5 text-left">
                    {solution.benefits.map((benefit) => (
                      <li key={benefit}>{benefit}</li>
                    ))}
                  </ul>
                  <div className="text-xs text-[#78909C]">{solution.brands}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Rebates */}
        <section id="rebates" className="py-16 md:py-20 bg-[#F5F5F5]">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#1A237E]">
              Government Rebate Savings
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="space-y-6">
                <ul className="text-lg text-[#455A64] space-y-4 list-none">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#2E7D32] rounded-full mr-2"></span>
                    Up to $3,000 in combined rebates
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#2E7D32] rounded-full mr-2"></span>
                    $1,000–$1,400 Solar Victoria hot water rebate
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#2E7D32] rounded-full mr-2"></span>
                    VEU discounts on air conditioners
                  </li>
                </ul>
                <p className="text-sm text-[#78909C]">
                  *Varies by postcode, site, and product. Get a tailored assessment.
                </p>
                <a
                  href="#eligibility"
                  className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold bg-[#2E7D32] text-white hover:bg-[#225522] focus:outline-none focus:ring-4 focus:ring-[#2E7D32]/30"
                >
                  Check Your Rebates
                </a>
              </div>
              <div className="hidden md:block">
                <img
                  src="/rebates-illustration.png.png"
                  alt="Illustration of VEU-eligible energy systems"
                  width="400"
                  height="300"
                  className="rounded-2xl shadow-md"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Testimonials */}
        <section id="about" className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#1A237E]">What Our Customers Say</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  name: "Jane D.",
                  rating: "★★★★★",
                  text: "Saved over $2,000 with my heat pump upgrade. Highly recommend!",
                },
                {
                  name: "Mark T.",
                  rating: "★★★★☆",
                  text: "Quick install and great rebate support. Eco-friendly and efficient.",
                },
              ].map((testimonial, i) => (
                <div
                  key={i}
                  className="bg-[#F5F5F5] rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <p className="text-sm text-[#455A64] mb-2">{testimonial.text}</p>
                  <p className="text-xs text-[#78909C] font-medium">{testimonial.name}</p>
                  <p className="text-xs text-[#26A69A]">{testimonial.rating}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-[#78909C]">
              VEU Accredited • 100% Government Approved • No Hidden Fees
            </p>
          </div>
        </section>
        {/* Pricing */}
        <section id="pricing" className="py-16 md:py-20 bg-[#F5F5F5]">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#1A237E]">
              Indicative Pricing (After Rebates)
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Heat Pump Hot Water (260–300L)",
                  price: "From $0 upfront*",
                  details: ["Standard install", "5–7 year warranty"],
                },
                {
                  title: "Split System RCAC (2.5–3.5 kW)",
                  price: "VEU-discounted*",
                  details: ["Single room comfort", "Approved models"],
                },
                {
                  title: "Ducted RCAC (Whole Home)",
                  price: "Custom quote*",
                  details: ["Whole-home efficiency", "Load calculations"],
                },
              ].map((plan, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 shadow-md text-center hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-lg font-semibold text-[#26A69A] mb-2">{plan.title}</h3>
                  <p className="text-xl font-bold text-[#2E7D32] mb-4">{plan.price}</p>
                  <ul className="text-sm text-[#455A64] space-y-2 list-disc pl-5 text-left">
                    {plan.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-[#78909C] text-center">
              *Prices assume eligibility. Rebates vary by postcode—confirm with us.
            </p>
          </div>
        </section>
        {/* Process */}
        <section id="process" className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#1A237E]">
              How It Works
            </h2>
            <ol className="grid md:grid-cols-5 gap-6 text-center">
              {[
                "Eligibility Check",
                "System Selection",
                "Installation",
                "Removal & Recycling",
                "Rebate Application",
              ].map((step, i) => (
                <li
                  key={i}
                  className="bg-[#F5F5F5] rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <span className="inline-flex items-center justify-center rounded-full bg-[#E0F2F1] text-[#1A237E] w-10 h-10 mx-auto mb-2">
                    {i + 1}
                  </span>
                  <p className="text-sm text-[#455A64]">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
        {/* Eligibility Checker */}
        <section id="eligibility" className="py-16 md:py-20 bg-[#F5F5F5]">
          <div className="mx-auto max-w-3xl px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1A237E]">
              Check Your Rebate Eligibility
            </h2>
            <form className="bg-white rounded-2xl shadow-md p-6 grid md:grid-cols-2 gap-4 text-left">
              <label className="block">
                <span className="text-sm font-medium">Postcode</span>
                <input
                  type="text"
                  required
                  className="mt-1 w-full rounded-xl border-[#B0BEC5] focus:border-[#26A69A] focus:ring-[#26A69A]"
                  placeholder="e.g., 3000"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium">Property Type</span>
                <select
                  required
                  className="mt-1 w-full rounded-xl border-[#B0BEC5] focus:border-[#26A69A] focus:ring-[#26A69A]"
                >
                  <option value="">Select...</option>
                  <option value="house">House</option>
                  <option value="apartment">Apartment</option>
                </select>
              </label>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold bg-[#2E7D32] text-white hover:bg-[#225522] focus:outline-none focus:ring-4 focus:ring-[#2E7D32]/30"
                >
                  Get Your Rebate Estimate
                </button>
              </div>
            </form>
            <p className="mt-4 text-sm text-[#78909C]">
              Limited rebates for 2025—apply now to secure your savings!
            </p>
          </div>
        </section>
        {/* Contact */}
        <section id="contact" className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-3xl px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1A237E]">Contact Us</h2>
            <p className="mt-3 text-[#455A64]">
              Get expert advice on energy upgrades and rebates.
            </p>
            <p className="mt-2 text-sm text-[#78909C]">
              Call us at <a href="tel:+61412345678" className="underline">+61 412 345 678</a> or email{" "}
              <a href="mailto:info@greenline.energy" className="underline">info@greenline.energy</a>
            </p>
            <form className="bg-[#F5F5F5] rounded-2xl shadow-md p-6 mt-6 grid md:grid-cols-2 gap-4 text-left">
              <label className="block">
                <span className="text-sm font-medium">Full Name</span>
                <input
                  type="text"
                  required
                  className="mt-1 w-full rounded-xl border-[#B0BEC5] focus:border-[#26A69A] focus:ring-[#26A69A]"
                  placeholder="Jane Citizen"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium">Phone</span>
                <input
                  type="tel"
                  required
                  className="mt-1 w-full rounded-xl border-[#B0BEC5] focus:border-[#26A69A] focus:ring-[#26A69A]"
                  placeholder="0400 123 456"
                />
              </label>
              <label className="block md:col-span-2">
                <span className="text-sm font-medium">Suburb</span>
                <input
                  type="text"
                  required
                  className="mt-1 w-full rounded-xl border-[#B0BEC5] focus:border-[#26A69A] focus:ring-[#26A69A]"
                  placeholder="Melbourne"
                />
              </label>
              <label className="block md:col-span-2">
                <span className="text-sm font-medium">Service Interest</span>
                <select
                  required
                  className="mt-1 w-full rounded-xl border-[#B0BEC5] focus:border-[#26A69A] focus:ring-[#26A69A]"
                >
                  <option value="">Select...</option>
                  <option value="heatpump">Heat Pump Hot Water</option>
                  <option value="aircon">Air Conditioning</option>
                  <option value="hydronics">Hydronics</option>
                </select>
              </label>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold bg-[#2E7D32] text-white hover:bg-[#225522] focus:outline-none focus:ring-4 focus:ring-[#2E7D32]/30"
                >
                  Submit Inquiry
                </button>
              </div>
            </form>
            <p className="mt-4 text-sm text-[#78909C]">
              By submitting, you authorise GreenLine Energy to contact you regarding rebates and installations.
            </p>
          </div>
        </section>
        {/* Footer (Forest Green) */}
        <footer className="py-8 bg-[#2E7D32] text-[#E0F2F1]">
          <div className="mx-auto max-w-7xl px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm">
              © {new Date().getFullYear()} GreenLine Energy Pty Ltd • ABN: 12 345 678 901
            </p>
            <div className="text-sm space-x-4">
              <a href="tel:+61412345678" className="hover:text-[#26A69A]">+61 412 345 678</a>
              <a href="mailto:info@greenline.energy" className="hover:text-[#26A69A]">
                info@greenline.energy
              </a>
              <a href="#top" className="hover:text-[#26A69A]">Back to Top</a>
            </div>
            <div className="text-sm">
              <a
                href="https://www.energy.vic.gov.au/victorian-energy-upgrades"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#26A69A"
              >
                VEU Accredited
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
