import Head from "next/head";
import { useState, useCallback, useMemo } from "react";

// Constants
const METRO_POSTCODES = [
  "3000", "3002", "3003", "3004", "3006", "3008", "3011", "3012", "3013", "3015",
  "3016", "3018", "3025", "3030", "3040", "3051", "3053", "3065", "3070", "3081",
  "3121", "3141", "3182",
];

export default function Home() {
  // State with initial values
  const [eligibility, setEligibility] = useState({ postcode: "", property: "Homeowner" });
  const [eligibilityMsg, setEligibilityMsg] = useState("");
  const [isChecking, setIsChecking] = useState(false);

  // Memoized eligibility check function
  const checkEligibility = useCallback(
    (e) => {
      e.preventDefault();
      setIsChecking(true);
      setEligibilityMsg("");

      if (!/^\d{4}$/.test(eligibility.postcode)) {
        setEligibilityMsg("Please enter a valid 4-digit VIC postcode.");
        setIsChecking(false);
        return;
      }

      const likelihood = METRO_POSTCODES.includes(eligibility.postcode) ? "High" : "Good";
      setEligibilityMsg(
        `✅ ${likelihood} likelihood of VEU/Solar Vic rebates in ${eligibility.postcode}. Submit the form and we’ll confirm within 1 business day.`
      );
      setIsChecking(false);
    },
    [eligibility.postcode]
  );

  // Memoized eligibility form data
  const propertyOptions = useMemo(
    () => [
      { value: "Homeowner", label: "Homeowner" },
      { value: "Renter (with approval)", label: "Renter (with approval)" },
      { value: "Landlord", label: "Landlord" },
      { value: "Business", label: "Business" },
    ],
    []
  );

  return (
    <>
      <Head>
        <title>GreenLine Energy — VEU Rebates, Heat Pumps & Efficient Aircon</title>
        <meta
          name="description"
          content="VEU-accredited upgrades across Victoria: heat pump hot water, reverse-cycle air conditioning, and hydronics. Check eligibility and get an instant quote."
        />
        <meta property="og:title" content="GreenLine Energy — Accredited VEU Upgrades" />
        <meta
          property="og:description"
          content="Cut bills and carbon with accredited installations. Fast eligibility checks, transparent pricing, and licensed experts."
        />
        <meta property="og:image" content="https://greensite-7ept.vercel.app/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" /> {/* Replace with static favicon.ico */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "GreenLine Energy Pty Ltd",
              url: "https://greensite-7ept.vercel.app",
              telephone: "1300 123 456",
              areaServed: "Victoria, Australia",
              sameAs: [
                "https://www.energy.vic.gov.au/victorian-energy-upgrades",
                "https://www.solar.vic.gov.au/hot-water-rebate",
              ],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "1300 123 456",
                  contactType: "customer service",
                  areaServed: "AU",
                  availableLanguage: ["English"],
                },
              ],
              address: {
                "@type": "PostalAddress",
                addressCountry: "AU",
                addressRegion: "VIC",
              },
            }),
          }}
        />
      </Head>

      <div className="bg-white text-gray-900 antialiased">
        {/* Top Announcement */}
        <div className="bg-blue-900 text-white text-center text-sm py-2 px-4">
          Limited 2025 rebates available — check your eligibility in 60 seconds.
        </div>

        {/* Header */}
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="h-16 flex items-center justify-between">
              <a href="#top" className="flex items-center gap-3">
                <img
                  src="/greenline-logo-mark.png"
                  alt="GreenLine Energy Logo"
                  className="h-8 w-8 rounded-full"
                  loading="lazy"
                />
                <span className="font-semibold tracking-tight text-blue-900">GreenLine Energy</span>
              </a>
              <nav className="hidden md:flex items-center gap-8 text-sm">
                <a href="#solutions" className="hover:text-blue-900">Services</a>
                <a href="#rebates" className="hover:text-blue-900">Rebates</a>
                <a href="#pricing" className="hover:text-blue-900">Pricing</a>
                <a href="#reviews" className="hover:text-blue-900">Reviews</a>
                <a href="#faq" className="hover:text-blue-900">FAQ</a>
              </nav>
              <div className="hidden md:flex items-center gap-3">
                <a href="tel:1300123456" className="text-sm font-medium text-blue-900">1300 123 456</a>
                <a
                  href="#eligibility"
                  className="inline-flex items-center justify-center rounded-xl px-4 py-2 font-semibold bg-green-700 text-white hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-700/20"
                >
                  Check Eligibility
                </a>
              </div>
              {/* Mobile Menu (Placeholder - Add hamburger logic) */}
              <button className="md:hidden text-blue-900 focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </div>
        </header>

        {/* Hero */}
        <section id="top" className="py-14 md:py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-6 grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7 space-y-6">
              <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-gray-100 ring-1 ring-teal-500/30 text-blue-900">
                VEU-Accredited Installer
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-blue-900">
                Save Thousands with Government-Backed Upgrades
              </h1>
              <p className="text-lg md:text-xl text-gray-600">
                Heat pump hot water, efficient reverse-cycle air conditioning, and hydronics—installed by licensed experts
                with rebates applied upfront.
              </p>
              <div className="flex gap-3 flex-wrap">
                <a
                  href="#eligibility"
                  className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold bg-green-700 text-white hover:bg-green-800 focus:ring-4 focus:ring-green-700/30"
                >
                  Start Eligibility Check
                </a>
                <a
                  href="#pricing"
                  className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold bg-white text-blue-900 ring-1 ring-teal-500/30 hover:bg-gray-100"
                >
                  View Pricing Examples
                </a>
              </div>
              <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm pt-2">
                {[
                  ["Up to $3,000", "combined incentives*"],
                  ["$0–$999", "typical HPHW install"],
                  ["Fast installs", "licensed & insured"],
                  ["5–7 yrs", "manufacturer warranties"],
                ].map(([t, s], i) => (
                  <li key={i} className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 p-4 text-center">
                    <strong>{t}</strong><br />{s}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-gray-500">*Amounts vary by postcode, property, and approved products.</p>
            </div>
            <div className="md:col-span-5">
              <picture>
                <source srcSet="/hero.webp" type="image/webp" />
                <img
                  src="/hero-bg.png.png"
                  alt="Efficient all-electric home with solar and heat pump"
                  width="640"
                  height="420"
                  className="rounded-2xl shadow-sm ring-1 ring-gray-200 w-full h-auto"
                  loading="lazy"
                />
              </picture>
              <p className="text-xs text-gray-500 mt-2">Efficient comfort, lower bills, smaller footprint.</p>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section aria-label="Trust & Accreditation" className="py-6 border-y border-gray-200 bg-gray-100">
          <div className="mx-auto max-w-7xl px-4 md:px-6 flex flex-wrap items-center justify-center gap-6 opacity-80">
            <img src="/badges/veu.png" alt="VEU Accredited" className="h-8" loading="lazy" />
            <img src="/badges/cec.png" alt="Clean Energy Council" className="h-8" loading="lazy" />
            <img src="/badges/aust-gov.png" alt="Australian Government" className="h-8" loading="lazy" />
            <span className="text-sm text-gray-500">Licensed • Insured • Police-checked</span>
          </div>
        </section>

        {/* Services */}
        <section id="solutions" className="py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-blue-900">Services We Deliver</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Heat Pump Hot Water",
                  body: "Replace old electric or gas with high-efficiency heat pumps. Quiet, smart, and reliable.",
                  bullets: ["Up to 80% less electricity", "5–7 year warranties", "Eligible for VEU + STCs"],
                  chip: "Brands: Emerald / EcoGenica / Neopower",
                },
                {
                  title: "Reverse-Cycle Air Conditioning",
                  body: "Efficient heating & cooling for one room or the whole home. Approved models only.",
                  bullets: ["Year-round comfort", "Right-sized design", "VEU discounts available"],
                  chip: "Brands: Daikin • Mitsubishi • Fujitsu",
                },
                {
                  title: "Hydronics & Boilers",
                  body: "Even, quiet warmth with panel or in-slab systems. Gas boiler replacements available.",
                  bullets: ["Custom design", "Load calculations", "End-to-end delivery"],
                  chip: "Site-specific eligibility",
                },
              ].map((card) => (
                <article
                  key={card.title}
                  className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 p-6 hover:shadow-md transition-shadow"
                >
                  <h3 className="text-xl font-semibold text-teal-500">{card.title}</h3>
                  <p className="mt-3 text-sm text-gray-600">{card.body}</p>
                  <ul className="mt-4 text-sm space-y-2 list-disc pl-5 text-gray-600">
                    {card.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                  <span className="inline-flex mt-5 rounded-full px-3 py-1 text-xs font-medium bg-gray-100 ring-1 ring-teal-500/20 text-gray-600">
                    {card.chip}
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Rebates Explainer */}
        <section id="rebates" className="py-16 md:py-20 bg-gray-100">
          <div className="mx-auto max-w-7xl px-4 md:px-6 grid md:grid-cols-2 gap-10 items-start">
            <div className="space-y-5">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900">Government Rebates Explained</h2>
              <p className="text-gray-600">
                We’re accredited under the Victorian Energy Upgrades (VEU) program. Eligible homes can receive
                significant incentives across hot water and efficient heating/cooling. Rebates are applied upfront to
                cut your out-of-pocket cost.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 list-disc pl-5">
                <li>Up to ~$3,000 combined incentives (site & product dependent)</li>
                <li>$1,000–$1,400 Solar Victoria hot water rebate (eligible products)</li>
                <li>VEU discounts on approved reverse-cycle air conditioners</li>
              </ul>
              <a
                href="#eligibility"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold bg-green-700 text-white hover:bg-green-800 focus:ring-4 focus:ring-green-700/30"
              >
                Check My Rebates
              </a>
              <p className="text-xs text-gray-500">Figures are indicative and vary by postcode, property type, and approved products.</p>
            </div>
            <div className="md:pl-4">
              <img
                src="/rebates-illustration.png.png"
                alt="Illustration of eligible upgrades"
                width="520"
                height="360"
                className="rounded-2xl shadow-sm ring-1 ring-gray-200 w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section id="pricing" className="py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-blue-900">Pricing After Rebates</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Heat Pump Hot Water (260–300L)",
                  price: "From $799 installed*",
                  points: ["Standard install & removal", "5–7 year warranties", "VEU + STCs applied upfront"],
                },
                {
                  title: "Split System RCAC (2.5–3.5 kW)",
                  price: "VEU-discounted, site-dependent",
                  points: ["Right-sized for your space", "Approved high-efficiency models", "Neat, warrantied workmanship"],
                },
                {
                  title: "Ducted RCAC (Whole Home)",
                  price: "VEU-discounted, custom design",
                  points: ["Load calculations included", "Zoning options", "Clean install & commissioning"],
                },
              ].map((p) => (
                <div key={p.title} className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 p-6">
                  <h3 className="font-semibold text-lg">{p.title}</h3>
                  <p className="text-sm text-blue-900 mt-2 font-medium">{p.price}</p>
                  <ul className="mt-4 text-sm list-disc pl-5 space-y-1 text-gray-600">
                    {p.points.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-6">
              *Assumes eligibility and standard metro installation. Final pricing confirmed after site check.
            </p>
          </div>
        </section>

        {/* How It Works */}
        <section id="process" className="py-16 md:py-20 bg-gray-100">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-blue-900">How It Works</h2>
            <ol className="grid md:grid-cols-5 gap-4 text-sm">
              {["Eligibility Check", "System Selection", "Installation", "Removal & Recycling", "Rebate Application"].map(
                (step, i) => (
                  <li key={step} className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 p-4">
                    <span className="inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold bg-gray-100 text-blue-900 mr-2">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                )
              )}
            </ol>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-blue-900">What Customers Say</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                ["Seamless install and immediate savings.", "— Melissa, Preston"],
                ["Clear pricing, fast turnaround, highly recommend.", "— Arjun, Werribee"],
                ["Rebates handled end-to-end. Great team.", "— Sam, Geelong"],
              ].map(([quote, author]) => (
                <blockquote
                  key={quote}
                  className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 p-6 hover:shadow-md transition-shadow"
                >
                  <p className="text-gray-600">{quote}</p>
                  <footer className="mt-3 text-sm text-gray-500">{author}</footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* Eligibility Checker + Contact */}
        <section id="eligibility" className="py-16 md:py-20 bg-gray-100">
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center">Check Your Eligibility</h2>
            <p className="mt-3 text-center text-gray-600">
              60-second check. No obligation. We’ll confirm rebates and installation timing.
            </p>
            <form onSubmit={checkEligibility} className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 mt-6 p-6 grid md:grid-cols-3 gap-4">
              <label className="block">
                <span className="text-sm font-medium">Postcode</span>
                <input
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  required
                  value={eligibility.postcode}
                  onChange={(e) => setEligibility({ ...eligibility, postcode: e.target.value })}
                  className="mt-1 w-full rounded-xl border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                  placeholder="e.g. 3000"
                  aria-label="Enter your 4-digit postcode"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium">Property Type</span>
                <select
                  value={eligibility.property}
                  onChange={(e) => setEligibility({ ...eligibility, property: e.target.value })}
                  className="mt-1 w-full rounded-xl border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                  aria-label="Select property type"
                >
                  {propertyOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
              <div className="flex items-end">
                <button
                  type="submit"
                  disabled={isChecking}
                  className="w-full inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold bg-green-700 text-white hover:bg-green-800 focus:ring-4 focus:ring-green-700/30 disabled:bg-gray-400"
                >
                  {isChecking ? "Checking..." : "Check Now"}
                </button>
              </div>
            </form>
            {eligibilityMsg && (
              <div
                className={`mt-4 rounded-xl p-4 text-sm ${
                  eligibilityMsg.includes("✅") ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
                }`}
                role="alert"
              >
                {eligibilityMsg}
              </div>
            )}
            <div id="contact" className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 mt-6 p-6">
              <form className="grid md:grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-sm font-medium">Full Name</span>
                  <input
                    type="text"
                    required
                    className="mt-1 w-full rounded-xl border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                    placeholder="Jane Citizen"
                    aria-label="Enter your full name"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-medium">Phone</span>
                  <input
                    type="tel"
                    required
                    className="mt-1 w-full rounded-xl border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                    placeholder="04xx xxx xxx"
                    aria-label="Enter your phone number"
                  />
                </label>
                <label className="block md:col-span-2">
                  <span className="text-sm font-medium">How Can We Help?</span>
                  <textarea
                    rows={4}
                    className="mt-1 w-full rounded-xl border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                    placeholder="Tell us about your hot water / heating & cooling needs…"
                    aria-label="Describe your needs"
                  />
                </label>
                <div className="md:col-span-2 flex flex-col md:flex-row gap-3">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold bg-green-700 text-white hover:bg-green-800 focus:ring-4 focus:ring-green-700/30 w-full md:w-auto"
                  >
                    Get My Quote
                  </button>
                  <a
                    href="tel:1300123456"
                    className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold bg-white text-blue-900 ring-1 ring-teal-500/30 hover:bg-gray-100 w-full md:w-auto"
                  >
                    Call 1300 123 456
                  </a>
                  <a
                    href="mailto:info@greenline.energy"
                    className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold bg-white text-blue-900 ring-1 ring-teal-500/30 hover:bg-gray-100 w-full md:w-auto"
                  >
                    Email Us
                  </a>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  By submitting, you authorise GreenLine Energy to contact you regarding rebates and installations.
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-6 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Rebate Details</h3>
              <ul className="text-sm text-gray-600 space-y-2 list-disc pl-5">
                <li>Hot water rebates: up to $1,400 (Solar Victoria, eligible products)</li>
                <li>VEU incentives: up to ~$3,000 combined (activity & site dependent)</li>
                <li>Air conditioning: VEU discounts on approved models</li>
                <li>Eligibility varies by postcode and system</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Benefits of Switching</h3>
              <ul className="text-sm text-gray-600 space-y-2 list-disc pl-5">
                <li>Reduce hot water costs from ~$1,015/yr to ~$205/yr*</li>
                <li>Efficient heating replaces costly gas</li>
                <li>Lower emissions with all-electric systems</li>
              </ul>
              <p className="text-xs text-gray-500 mt-2">*Indicative only; depends on usage and tariffs.</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-10 border-t bg-green-700 text-white">
          <div className="mx-auto max-w-7xl px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <p>© {new Date().getFullYear()} GreenLine Energy Pty Ltd • ABN 00 000 000 000</p>
            <div className="flex items-center gap-3">
              <a
                className="underline decoration-2 hover:text-teal-300"
                href="https://www.energy.vic.gov.au/victorian-energy-upgrades"
                target="_blank"
                rel="noopener noreferrer"
              >
                VEU Program
              </a>
              <span className="opacity-50">•</span>
              <a
                className="underline decoration-2 hover:text-teal-300"
                href="https://www.solar.vic.gov.au/hot-water-rebate"
                target="_blank"
                rel="noopener noreferrer"
              >
                Solar Victoria Rebates
              </a>
              <span className="opacity-50">•</span>
              <a className="underline decoration-2 hover:text-teal-300" href="#contact">
                Contact
              </a>
            </div>
          </div>
        </footer>

        {/* Mobile Sticky CTA */}
        <div className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-white/95 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-4 pb-4">
            <div className="shadow-lg ring-1 ring-gray-200 p-3 flex gap-3 rounded-2xl">
              <a
                href="tel:1300123456"
                className="w-1/2 inline-flex items-center justify-center rounded-xl px-4 py-3 font-semibold bg-white text-blue-900 ring-1 ring-teal-500/30"
              >
                Call
              </a>
              <a
                href="#eligibility"
                className="w-1/2 inline-flex items-center justify-center rounded-xl px-4 py-3 font-semibold bg-green-700 text-white"
              >
                Check Eligibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
