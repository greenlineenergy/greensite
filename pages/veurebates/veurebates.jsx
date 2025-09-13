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
                </ul>
              </div>
            </div>
          </section>
        </main>
        {/* Footer */}
        <footer className="py-8 bg-black border-t border-[#1f1f1f] text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm sm:text-base">
            <p className="font-medium text-white">© {new Date().getFullYear()} Greenline Energy Pty Ltd • ABN 12 345 678 901</p>
            <div className="flex items-center gap-4 flex-wrap">
              <Link
                href="https://www.energy.vic.gov.au/victorian-energy-upgrades"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-lime-400 transition-colors"
              >
                VEU Program
              </Link>
              <span className="text-white">•</span>
              <Link
                href="https://www.solar.vic.gov.au/hot-water-rebate"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-lime-400 transition-colors"
              >
                Solar Victoria Rebates
              </Link>
              <span className="text-white">•</span>
              <Link href="mailto:info@greenlineenergy.com.au" className="text-white hover:text-lime-400 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
