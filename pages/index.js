import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>GreenLine Energy — VEU Heat Pumps, Aircon & Hot Water Upgrades</title>
        <meta
          name="description"
          content="GreenLine Energy Pty Ltd — VEU-accredited upgrades: heat pump hot water, reverse-cycle air conditioning, and hydronics. Save on bills, cut carbon."
        />
        <meta property="og:title" content="GreenLine Energy Solutions" />
        <meta
          property="og:description"
          content="VEU-accredited upgrades for heat pump hot water, air conditioning, and hydronics. Reduce costs and emissions with certified installations."
        />
        <meta property="og:image" content="https://greensite-rouge.vercel.app/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://cdn.tailwindcss.com" />
        <script src="https://cdn.tailwindcss.com"></script>
        <link
          rel="icon"
          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='256' height='256' viewBox='0 0 256 256'%3E%3Ccircle cx='128' cy='128' r='120' fill='%230a7f4f'/%3E%3Cpath d='M68 148c40-10 68-42 84-88 18 20 28 44 28 72 0 45-31 82-84 82-22 0-39-7-51-20 9-17 13-31 23-46z' fill='%23fff'/%3E%3C/svg%3E"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "GreenLine Energy Pty Ltd",
            "url": "https://greensite-rouge.vercel.app",
            "telephone": "+61 412 345 678",
            "areaServed": "Victoria, Australia",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Green Street",
              "addressLocality": "Melbourne",
              "addressRegion": "VIC",
              "postalCode": "3000",
              "addressCountry": "AU",
            },
            "sameAs": [
              "https://www.energy.vic.gov.au/victorian-energy-upgrades",
              "https://www.solar.vic.gov.au/hot-water-rebate",
            ],
          })}
        </script>
      </Head>
      <body className="bg-gradient-to-b from-blue-50 via-white to-white text-gray-900 antialiased">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-blue-100">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex items-center justify-between h-20">
              <a href="#top" className="flex items-center gap-3 font-semibold text-blue-900">
                <span className="h-10 w-10 rounded-full bg-blue-700 inline-block"></span>
                GreenLine Energy
              </a>
              <nav className="hidden md:flex items-center gap-8 text-base">
                <a href="#solutions" className="hover:text-blue-700 transition-colors">
                  Solutions
                </a>
                <a href="#pricing" className="hover:text-blue-700 transition-colors">
                  Pricing
                </a>
                <a href="#process" className="hover:text-blue-700 transition-colors">
                  Process
                </a>
                <a href="#faq" className="hover:text-blue-700 transition-colors">
                  FAQ
                </a>
                <a href="#contact" className="hover:text-blue-700 transition-colors">
                  Contact
                </a>
              </nav>
              <a href="#contact" className="btn btn-primary text-base">
                Request Consultation
              </a>
            </div>
          </div>
        </header>
        {/* Hero */}
        <section id="top" className="section">
          <div className="mx-auto max-w-7xl px-4 md:px-6 grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7 space-y-8">
              <span className="badge">VEU-Accredited Upgrades</span>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                Energy Efficiency. <span className="text-blue-800">Government Supported.</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700">
                GreenLine Energy Pty Ltd offers VEU-accredited upgrades for heat pump hot water, reverse-cycle air conditioning, and hydronics, helping Victorians save on bills and reduce carbon emissions.
              </p>
              <div className="flex gap-4 flex-wrap">
                <a href="#contact" className="btn btn-primary">
                  Request Consultation
                </a>
                <a href="#rebates" className="btn btn-ghost">
                  Explore Rebates
                </a>
              </div>
              <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm pt-6">
                <li className="card p-4 text-center">
                  <strong>Up to $3,000</strong>
                  <br />in combined rebates*
                </li>
                <li className="card p-4 text-center">
                  <strong>$1,000–$1,400</strong>
                  <br />Hot water rebates
                </li>
                <li className="card p-4 text-center">
                  <strong>Save $1,275/yr</strong>
                  <br />vs old electric tanks
                </li>
                <li className="card p-4 text-center">
                  <strong>Fast Installs</strong>
                  <br />Licensed experts
                </li>
              </ul>
            </div>
            <div className="md:col-span-5">
              <div className="card p-6">
                <img
                  src="/hero-bg.jpg"
                  alt="Modern home with energy-efficient heat pump and solar panels"
                  width="600"
                  height="400"
                  className="rounded-2xl object-cover"
                />
                <p className="text-xs text-gray-500 mt-2">
                  Efficient, all-electric comfort with certified upgrades.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Solutions */}
        <section id="solutions" className="section bg-blue-50/50 border-y border-blue-100">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">Our Solutions</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <article className="card p-6">
                <h3 className="text-xl font-semibold">Heat Pump Hot Water</h3>
                <p className="mt-3 text-sm text-gray-700">
                  High-efficiency heat pumps replace outdated electric or gas systems, reducing costs.
                </p>
                <ul className="mt-4 text-sm space-y-2 list-disc pl-5">
                  <li>Up to 80% less electricity usage</li>
                  <li>Quiet operation with smart controls</li>
                  <li>Eligible for VEU and STC rebates</li>
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="badge">Emerald / EcoGenica</span>
                  <span className="badge">VEU + STCs</span>
                </div>
              </article>
              <article className="card p-6">
                <h3 className="text-xl font-semibold">Reverse-Cycle Air Conditioning</h3>
                <p className="mt-3 text-sm text-gray-700">
                  Efficient heating and cooling with VEU-eligible systems.
                </p>
                <ul className="mt-4 text-sm space-y-2 list-disc pl-5">
                  <li>Year-round climate control</li>
                  <li>VEU discounts on approved models</li>
                  <li>Custom sizing for homes</li>
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="badge">Daikin • Mitsubishi</span>
                  <span className="badge">VEU eligible</span>
                </div>
              </article>
              <article className="card p-6">
                <h3 className="text-xl font-semibold">Hydronics & Boilers</h3>
                <p className="mt-3 text-sm text-gray-700">
                  Hydronic heating and boiler replacements for efficient warmth.
                </p>
                <ul className="mt-4 text-sm space-y-2 list-disc pl-5">
                  <li>Custom-designed systems</li>
                  <li>Rebate eligibility varies</li>
                  <li>Full project support</li>
                </ul>
                <div className="mt-5">
                  <span className="badge">Custom quoted</span>
                </div>
              </article>
            </div>
          </div>
        </section>
        {/* Rebates */}
        <section id="rebates" className="section bg-white">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">Government Rebates</h2>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="space-y-6">
                <p className="text-lg text-gray-700">
                  GreenLine Energy is an accredited provider under the Victorian Energy Upgrades (VEU) program, offering rebates for energy-efficient upgrades.
                </p>
                <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
                  <li>Up to $3,000 in combined hot water and heating rebates</li>
                  <li>$1,000–$1,400 Solar Victoria hot water rebate</li>
                  <li>VEU discounts on approved air conditioning models</li>
                </ul>
                <p className="text-sm text-gray-500">
                  *Rebate amounts vary by postcode, eligibility, and approved products. Contact us for a tailored assessment.
                </p>
              </div>
              <div>
                <img
                  src="/rebates-illustration.png"
                  alt="Illustration of solar panels and heat pump systems"
                  width="400"
                  height="300"
                  className="rounded-2xl object-cover shadow-md"
                />
              </div>
            </div>
            <div className="mt-8 text-center">
              <a href="#contact" className="btn btn-primary">
                Request Rebate Assessment
              </a>
            </div>
          </div>
        </section>
        {/* Pricing */}
        <section id="pricing" className="section bg-blue-50/50 border-y border-blue-100">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">Indicative Pricing (after rebates)</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="card p-6">
                <h3 className="font-semibold text-lg">Heat Pump Hot Water (260–300L)</h3>
                <p className="text-sm text-gray-700 mt-3">
                  From <span className="font-semibold">$799</span> installed*
                </p>
                <ul className="mt-4 text-sm list-disc pl-5 space-y-1">
                  <li>Standard install, removal included</li>
                  <li>5–7 year warranties</li>
                </ul>
              </div>
              <div className="card p-6">
                <h3 className="font-semibold text-lg">Split System RCAC (2.5–3.5kW)</h3>
                <p className="text-sm text-gray-700 mt-3">VEU-discounted, site-dependent</p>
                <ul className="mt-4 text-sm list-disc pl-5 space-y-1">
                  <li>Single room comfort</li>
                  <li>Approved models only</li>
                </ul>
              </div>
              <div className="card p-6">
                <h3 className="font-semibold text-lg">Ducted RCAC (Whole Home)</h3>
                <p className="text-sm text-gray-700 mt-3">VEU-discounted, custom design</p>
                <ul className="mt-4 text-sm list-disc pl-5 space-y-1">
                  <li>Efficient heating & cooling</li>
                  <li>Load calcs included</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-6">
              *Prices assume eligibility and standard metro install. Rebates vary by postcode and system. Confirm with us.
            </p>
          </div>
        </section>
        {/* Process */}
        <section id="process" className="section bg-white border-y">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">How It Works</h2>
            <ol className="grid md:grid-cols-5 gap-4 text-sm">
              <li className="card p-4">
                <span className="badge mb-2">1</span> Eligibility Check
              </li>
              <li className="card p-4">
                <span className="badge mb-2">2</span> System Selection
              </li>
              <li className="card p-4">
                <span className="badge mb-2">3</span> Installation
              </li>
              <li className="card p-4">
                <span className="badge mb-2">4</span> Removal & Recycling
              </li>
              <li className="card p-4">
                <span className="badge mb-2">5</span> Rebate Application
              </li>
            </ol>
          </div>
        </section>
        {/* Contact */}
        <section id="contact" className="section bg-blue-50/50">
          <div className="mx-auto max-w-3xl px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Contact Us</h2>
            <p className="mt-3 text-gray-700">
              Get expert advice on energy-efficient upgrades and rebate eligibility.
            </p>
            <form className="card mt-6 p-6 grid md:grid-cols-2 gap-4 text-left">
              <label className="block">
                <span className="text-sm font-medium">Full Name</span>
                <input
                  type="text"
                  required
                  className="mt-1 w-full rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Jane Citizen"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium">Email</span>
                <input
                  type="email"
                  required
                  className="mt-1 w-full rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="jane@email.com"
                />
              </label>
              <label className="block md:col-span-2">
                <span className="text-sm font-medium">Postcode</span>
                <input
                  type="text"
                  required
                  className="mt-1 w-full rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="3000"
                />
              </label>
              <label className="block md:col-span-2">
                <span className="text-sm font-medium">Message</span>
                <textarea
                  rows="4"
                  required
                  className="mt-1 w-full rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Describe your needs…"
                />
              </label>
              <div className="md:col-span-2 flex gap-3">
                <button type="submit" className="btn btn-primary w-full">
                  Submit Inquiry
                </button>
                <a href="mailto:info@greenline.energy" className="btn btn-ghost w-full">
                  Email Us
                </a>
              </div>
            </form>
            <p className="text-xs text-gray-500 mt-3">
              By submitting, you authorize GreenLine Energy to contact you regarding rebates and installations.
            </p>
          </div>
        </section>
        {/* FAQ */}
        <section id="faq" className="section bg-white">
          <div className="mx-auto max-w-7xl px-4 md:px-6 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Rebate Details</h3>
              <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
                <li>Hot water rebates: Up to $1,400 (Solar Victoria, eligible products)</li>
                <li>VEU incentives: Up to $3,000 for combined upgrades</li>
                <li>Air conditioning: VEU discounts on approved models</li>
                <li>Eligibility varies by postcode and system</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Benefits of Switching</h3>
              <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
                <li>Reduce hot water costs from $1,015/yr to ~$205/yr</li>
                <li>Replace gas heating with efficient AC</li>
                <li>Lower emissions with all-electric systems</li>
              </ul>
            </div>
          </div>
          <div className="mx-auto max-w-7xl px-4 md:px-6 mt-6">
            <p className="text-xs text-gray-500">
              *Indicative figures. Rebates and eligibility are subject to Solar Victoria and VEU program rules and may change. Confirm with us before proceeding.
            </p>
          </div>
        </section>
        {/* Footer */}
        <footer className="py-8 border-t bg-white">
          <div className="mx-auto max-w-7xl px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <p className="text-gray-600">
              © <span id="year">{new Date().getFullYear()}</span> GreenLine Energy Pty Ltd • All rights reserved
            </p>
            <div className="text-gray-500">
              <a
                className="hover:text-blue-700"
                href="https://www.energy.vic.gov.au/victorian-energy-upgrades"
                target="_blank"
                rel="noopener noreferrer"
              >
                VEU Program
              </a>{" "}
              •
              <a
                className="hover:text-blue-700"
                href="https://www.solar.vic.gov.au/hot-water-rebate"
                target="_blank"
                rel="noopener noreferrer"
              >
                Solar Victoria Rebates
              </a>{" "}
              •
              <a className="hover:text-blue-700" href="#contact">
                Contact
              </a>
            </div>
          </div>
        </footer>
      </body>
    </>
  );
}
