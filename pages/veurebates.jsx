```jsx
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function VEURrebates() {
  return (
    <>
      <Head>
        <title>Greenline Energy - Victorian Energy Upgrades Rebates</title>
        <meta
          name="description"
          content="Learn about Victorian Energy Upgrades (VEU) rebates with Greenline Energy. Save on energy-efficient heating and cooling system upgrades in Victoria."
        />
        <meta property="og:title" content="Greenline Energy - VEU Rebates" />
        <meta
          property="og:description"
          content="Discover how to save with VEU rebates for energy-efficient air conditioning and heating upgrades in Victoria with Greenline Energy."
        />
        <meta property="og:image" content="https://greensite-rouge.vercel.app/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" />
      </Head>
      <div className="bg-black text-white antialiased font-inter">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/80 border-b border-[#1f1f1f] text-lime-500">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
            <div className="flex items-center justify-between gap-3 h-16 sm:h-20">
              <Link href="/" className="flex items-center gap-3 font-bold text-lime-500 shrink-0">
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
              </Link>
              <nav className="hidden md:flex items-center gap-6 text-base font-medium">
                <Link href="#why-upgrade" className="text-white hover:text-lime-400 transition-colors">Why Upgrade</Link>
                <Link href="#heating-cooling-features" className="text-white hover:text-lime-400 transition-colors">Heating & Cooling</Link>
                <Link href="#hot-water" className="text-white hover:text-lime-400 transition-colors">Hot Water</Link>
                <Link href="/veurebates" className="text-white hover:text-lime-400 transition-colors">VEU Rebates</Link>
                <Link href="#home-energy-assessments" className="text-white hover:text-lime-400 transition-colors">Energy Assessments</Link>
                <Link href="#solar-panel-rebates" className="text-white hover:text-lime-400 transition-colors">Solar Rebates</Link>
                <Link href="#hot-water-guide" className="text-white hover:text-lime-400 transition-colors">Hot Water Guide</Link>
                <Link href="#emergency-installations" className="text-white hover:text-lime-400 transition-colors">Emergency Installations</Link>
                <Link href="#process" className="text-white hover:text-lime-400 transition-colors">Process</Link>
                <Link href="#contact" className="text-white hover:text-lime-400 transition-colors">Contact</Link>
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
                  <Link
                    href="/vic-heat-pump/"
                    className="inline-flex justify-center rounded-lg px-4 py-2 font-bold bg-lime-500 text-black hover:bg-lime-400 focus:ring-4 focus:ring-lime-500/30 transition-all"
                    aria-label="Heat Pump Offer"
                  >
                    Heat Pump Offer
                  </Link>
                  <Link
                    href="#contact"
                    className="inline-flex justify-center rounded-lg px-4 py-2 font-bold bg-lime-500 text-black hover:bg-lime-400 focus:ring-4 focus:ring-lime-500/30 transition-all"
                    aria-label="Get a Quote"
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
            </div>
            <div id="mobile-menu" className="hidden md:hidden bg-black border-t border-[#1f1f1f] px-4 py-4">
              <nav className="flex flex-col gap-4 text-base font-medium">
                <Link href="#why-upgrade" className="text-white hover:text-lime-400 transition-colors">Why Upgrade</Link>
                <Link href="#heating-cooling-features" className="text-white hover:text-lime-400 transition-colors">Heating & Cooling</Link>
                <Link href="#hot-water" className="text-white hover:text-lime-400 transition-colors">Hot Water</Link>
                <Link href="/veurebates" className="text-white hover:text-lime-400 transition-colors">VEU Rebates</Link>
                <Link href="#home-energy-assessments" className="text-white hover:text-lime-400 transition-colors">Energy Assessments</Link>
                <Link href="#solar-panel-rebates" className="text-white hover:text-lime-400 transition-colors">Solar Rebates</Link>
                <Link href="#hot-water-guide" className="text-white hover:text-lime-400 transition-colors">Hot Water Guide</Link>
                <Link href="#emergency-installations" className="text-white hover:text-lime-400 transition-colors">Emergency Installations</Link>
                <Link href="#process" className="text-white hover:text-lime-400 transition-colors">Process</Link>
                <Link href="#contact" className="text-white hover:text-lime-400 transition-colors">Contact</Link>
                <Link
                  href="/vic-heat-pump/"
                  className="inline-flex justify-center rounded-lg px-4 py-2 font-bold bg-lime-500 text-black hover:bg-lime-400 focus:ring-4 focus:ring-lime-500/30 transition-all"
                  aria-label="Heat Pump Offer"
                >
                  Heat Pump Offer
                </Link>
                <Link
                  href="#contact"
                  className="inline-flex justify-center rounded-lg px-4 py-2 font-bold bg-lime-500 text-black hover:bg-lime-400 focus:ring-4 focus:ring-lime-500/30 transition-all"
                  aria-label="Get a Quote"
                >
                  Get a Quote
                </Link>
              </nav>
            </div>
          </div>
        </header>
        {/* Main Content */}
        <main className="py-12 sm:py-16 md:py-20 bg-black">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-12 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-lime-500 mb-8">
              Victorian Energy Upgrades (VEU) Rebates
            </h1>
            <p className="text-base sm:text-lg md:text-xl font-medium text-white mb-6">
              Unlock significant savings on energy-efficient heating, cooling, and hot water system upgrades through the Victorian Energy Upgrades (VEU) program. Greenline Energy, an accredited provider, helps Victorian households reduce energy bills and emissions with tailored solutions.
            </p>
            <div className="flex gap-3 flex-wrap justify-center">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg px-4 py-2 font-medium bg-lime-500 text-black hover:bg-lime-400 focus:ring-4 focus:ring-lime-500/30 transition-all"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/vic-heat-pump/"
                className="inline-flex items-center justify-center rounded-lg px-4 py-2 font-medium bg-lime-500 text-black hover:bg-lime-400 focus:ring-4 focus:ring-lime-500/30 transition-all"
              >
                Heat Pump Offer
              </Link>
            </div>
          </div>
          {/* VEU Program Overview */}
          <section id="veu-overview" className="py-12 px-4 sm:px-6 lg:px-16">
            <div className="max-w-4xl mx-auto">
              <div className="bg-green-900 rounded-2xl shadow-lg ring-1 ring-[#1f1f1f] p-4 sm:p-6 text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-lime-500 mb-4">VEU Program Overview</h2>
                <p className="text-sm sm:text-base text-white/80 mb-4">
                  The VEU program is Victoria’s leading initiative to reduce energy consumption and greenhouse gas emissions by incentivizing energy-efficient upgrades. Greenline Energy specializes in helping you access these rebates for heating, cooling, and hot water systems.
                </p>
                <ul className="space-y-4 text-sm sm:text-base leading-relaxed">
                  <li>
                    <span className="text-white font-semibold">✅ Save Up to $9,900</span><br />
                    <span className="text-white/80">Through combined VEU incentives for eligible upgrades.</span>
                  </li>
                  <li>
                    <span className="text-white font-semibold">✅ Extended Until 2045</span><br />
                    <span className="text-white/80">Long-term support for energy-efficient upgrades.</span>
                  </li>
                  <li>
                    <span className="text-white font-semibold">✅ Reduce Energy Bills</span><br />
                    <span className="text-white/80">Save up to $1,010/year by replacing gas heating systems.</span>
                  </li>
                  <li>
                    <span className="text-white font-semibold">✅ Environmental Impact</span><br />
                    <span className="text-white/80">Contribute to cutting 37 million tonnes of CO₂ (2022–2027).</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          {/* Eligibility Criteria */}
          <section id="eligibility" className="py-12 px-4 sm:px-6 lg:px-16">
            <div className="max-w-4xl mx-auto">
              <div className="bg-green-900 rounded-2xl shadow-lg ring-1 ring-[#1f1f1f] p-4 sm:p-6 text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-lime-500 mb-4">Eligibility Criteria</h2>
                <p className="text-sm sm:text-base text-white/80 mb-4">
                  To qualify for VEU rebates, your home and systems must meet specific criteria. Greenline Energy guides you through the process to ensure compliance.
                </p>
                <ul className="space-y-4 text-sm sm:text-base leading-relaxed">
                  <li>
                    <span className="text-white font-semibold">✅ Home Age</span><br />
                    <span className="text-white/80">Property must be over 24 months old.</span>
                  </li>
                  <li>
                    <span className="text-white font-semibold">✅ System Replacement</span><br />
                    <span className="text-white/80">Replace inefficient gas or electric systems with approved energy-efficient models.</span>
                  </li>
                  <li>
                    <span className="text-white font-semibold">✅ Accredited Provider</span><br />
                    <span className="text-white/80">Work with VEU-accredited providers like Greenline Energy.</span>
                  </li>
                  <li>
                    <span className="text-white font-semibold">✅ Free Inspections</span><br />
                    <span className="text-white/80">No-obligation onsite assessments to confirm eligibility.</span>
                  </li>
                </ul>
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-lg px-6 py-2 font-bold bg-black text-white hover:bg-lime-400 hover:text-black focus:ring-4 focus:ring-lime-500/30 transition-all mt-4"
                >
                  Check Your Eligibility
                </Link>
              </div>
            </div>
          </section>
          {/* Benefits of VEU Upgrades */}
          <section id="benefits" className="py-12 px-4 sm:px-6 lg:px-16">
            <div className="max-w-4xl mx-auto">
              <div className="bg-green-900 rounded-2xl shadow-lg ring-1 ring-[#1f1f1f] p-4 sm:p-6 text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-lime-500 mb-4">Benefits of VEU Upgrades</h2>
                <p className="text-sm sm:text-base text-white/80 mb-4">
                  Upgrading to energy-efficient systems under the VEU program offers financial, environmental, and comfort benefits.
                </p>
                <ul className="space-y-4 text-sm sm:text-base leading-relaxed">
                  <li>
                    <span className="text-white font-semibold">✅ Financial Savings</span><br />
                    <span className="text-white/80">Reduce energy bills by up to $1,010/year for heating and cooling upgrades.</span>
                  </li>
                  <li>
                    <span className="text-white font-semibold">✅ Environmental Impact</span><br />
                    <span className="text-white/80">Lower your carbon footprint with efficient systems.</span>
                  </li>
                  <li>
                    <span className="text-white font-semibold">✅ Improved Comfort</span><br />
                    <span className="text-white/80">Modern systems provide consistent heating and cooling.</span>
                  </li>
                  <li>
                    <span className="text-white font-semibold">✅ Long-Term Value</span><br />
                    <span className="text-white/80">High-quality products with warranties up to 7 years.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          {/* Contact */}
          <section id="contact" className="py-12 sm:py-16 md:py-20 bg-black">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-12 text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-lime-500 mb-4">Contact & Next Steps</h2>
              <p className="text-base sm:text-lg md:text-xl font-medium text-white mb-6">
                Free inspections available across Victoria. Start your VEU rebate journey with Greenline Energy today.
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
        </main>
      </div>
    </>
  );
}
```
