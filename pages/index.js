<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>GreenLine Energy — VEU Heat Pumps, Aircon & Hot Water Upgrades</title>
  <meta name="description" content="GreenLine Energy Pty Ltd — VEU-accredited upgrades: heat pump hot water, reverse-cycle air conditioning, and hydronics. Save on bills, cut carbon." />
  <meta property="og:title" content="GreenLine Energy Solutions" />
  <meta property="og:description" content="VEU-accredited upgrades for heat pump hot water, air conditioning, and hydronics. Reduce costs and emissions with certified installations." />
  <meta property="og:image" content="https://greensite-rouge.vercel.app/og-image.jpg" />
  <meta property="og:type" content="website" />
  <link rel="preconnect" href="https://cdn.tailwindcss.com">
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='256' height='256' viewBox='0 0 256 256'%3E%3Ccircle cx='128' cy='128' r='120' fill='%230a7f4f'/%3E%3Cpath d='M68 148c40-10 68-42 84-88 18 20 28 44 28 72 0 45-31 82-84 82-22 0-39-7-51-20 9-17 13-31 23-46z' fill='%23fff'/%3E%3C/svg%3E" />
  <style>
    /* Minimal enhancements beyond Tailwind */
    .card { @apply bg-white/90 rounded-2xl shadow-lg ring-1 ring-gray-200; }
    .btn { @apply inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold transition-colors duration-200; }
    .btn-primary { @apply bg-blue-800 text-white hover:bg-blue-900; }
    .btn-ghost { @apply bg-white text-blue-800 hover:bg-blue-50 ring-1 ring-blue-200; }
    .badge { @apply inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium bg-blue-50 text-blue-800 ring-1 ring-blue-200; }
    .section { @apply py-16 md:py-24; }
    @media (max-width: 639px) {
      .md\:grid-cols-12 { grid-template-columns: 1fr !important; }
      .md\:grid-cols-3 { grid-template-columns: 1fr !important; }
      .md\:col-span-7 { grid-column: span 1 / span 1 !important; }
      .md\:col-span-5 { grid-column: span 1 / span 1 !important; }
    }
  </style>
  <!-- LocalBusiness schema -->
  <script type="application/ld+json">
  {
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
      "addressCountry": "AU"
    },
    "sameAs": ["https://www.energy.vic.gov.au/victorian-energy-upgrades", "https://www.solar.vic.gov.au/hot-water-rebate"]
  }
  </script>
</head>
<body class="bg-gradient-to-b from-blue-50 via-white to-white text-gray-900 antialiased">
  <!-- Header -->
  <header class="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-blue-100">
    <div class="mx-auto max-w-7xl px-4 md:px-6">
      <div class="flex items-center justify-between h-20">
        <a href="#top" class="flex items-center gap-3 font-semibold text-blue-900">
          <span class="h-10 w-10 rounded-full bg-blue-700 inline-block"></span>
          GreenLine Energy
        </a>
        <nav class="hidden md:flex items-center gap-8 text-base">
          <a href="#solutions" class="hover:text-blue-700 transition-colors">Solutions</a>
          <a href="#pricing" class="hover:text-blue-700 transition-colors">Pricing</a>
          <a href="#process" class="hover:text-blue-700 transition-colors">Process</a>
          <a href="#faq" class="hover:text-blue-700 transition-colors">FAQ</a>
          <a href="#contact" class="hover:text-blue-700 transition-colors">Contact</a>
        </nav>
        <a href="#contact" class="btn btn-primary text-base">Request Consultation</a>
      </div>
    </div>
  </header>
  <!-- Hero -->
  <section id="top" class="section">
    <div class="mx-auto max-w-7xl px-4 md:px-6 grid md:grid-cols-12 gap-10 items-center">
      <div class="md:col-span-7 space-y-8">
        <span class="badge">VEU-Accredited Upgrades</span>
        <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight">
          Energy Efficiency. <span class="text-blue-800">Government Supported.</span>
        </h1>
        <p class="text-lg md:text-xl text-gray-700">
          GreenLine Energy Pty Ltd offers VEU-accredited upgrades for heat pump hot water, reverse-cycle air conditioning, and hydronics, helping Victorians save on bills and reduce carbon emissions.
        </p>
        <div class="flex gap-4 flex-wrap">
          <a href="#contact" class="btn btn-primary">Request Consultation</a>
          <a href="#rebates" class="btn btn-ghost">Explore Rebates</a>
        </div>
        <ul class="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm pt-6">
          <li class="card p-4 text-center"><strong>Up to $3,000</strong><br/>in combined rebates*</li>
          <li class="card p-4 text-center"><strong>$1,000–$1,400</strong><br/>Hot water rebates</li>
          <li class="card p-4 text-center"><strong>Save $1,275/yr</strong><br/>vs old electric tanks</li>
          <li class="card p-4 text-center"><strong>Fast Installs</strong><br/>Licensed experts</li>
        </ul>
      </div>
      <div class="md:col-span-5">
        <div class="card p-6">
          <img src="/hero-bg.jpg" alt="Modern home with energy-efficient heat pump and solar panels" width="600" height="400" class="rounded-2xl object-cover" />
          <p class="text-xs text-gray-500 mt-2">Efficient, all-electric comfort with certified upgrades.</p>
        </div>
      </div>
    </div>
  </section>
  <!-- Solutions -->
  <section id="solutions" class="section bg-blue-50/50 border-y border-blue-100">
    <div class="mx-auto max-w-7xl px-4 md:px-6">
      <h2 class="text-3xl md:text-4xl font-bold mb-10">Our Solutions</h2>
      <div class="grid md:grid-cols-3 gap-6">
        <article class="card p-6">
          <h3 class="text-xl font-semibold">Heat Pump Hot Water</h3>
          <p class="mt-3 text-sm text-gray-700">
            High-efficiency heat pumps replace outdated electric or gas systems, reducing costs.
          </p>
          <ul class="mt-4 text-sm space-y-2 list-disc pl-5">
            <li>Up to 80% less electricity usage</li>
            <li>Quiet operation with smart controls</li>
            <li>Eligible for VEU and STC rebates</li>
          </ul>
          <div class="mt-5 flex flex-wrap gap-2">
            <span class="badge">Emerald / EcoGenica</span>
            <span class="badge">VEU + STCs</span>
          </div>
        </article>
        <article class="card p-6">
          <h3 class="text-xl font-semibold">Reverse-Cycle Air Conditioning</h3>
          <p class="mt-3 text-sm text-gray-700">
            Efficient heating and cooling with VEU-eligible systems.
          </p>
          <ul class="mt-4 text-sm space-y-2 list-disc pl-5">
            <li>Year-round climate control</li>
            <li>VEU discounts on approved models</li>
            <li>Custom sizing for homes</li>
          </ul>
          <div class="mt-5 flex flex-wrap gap-2">
            <span class="badge">Daikin • Mitsubishi</span>
            <span class="badge">VEU eligible</span>
          </div>
        </article>
        <article class="card p-6">
          <h3 class="text-xl font-semibold">Hydronics & Boilers</h3>
          <p class="mt-3 text-sm text-gray-700">
            Hydronic heating and boiler replacements for efficient warmth.
          </p>
          <ul class="mt-4 text-sm space-y-2 list-disc pl-5">
            <li>Custom-designed systems</li>
            <li>Rebate eligibility varies</li>
            <li>Full project support</li>
          </ul>
          <div class="mt-5"><span class="badge">Custom quoted</span></div>
        </article>
      </div>
    </div>
  </section>
  <!-- Rebates -->
  <section id="rebates" class="section bg-white">
    <div class="mx-auto max-w-7xl px-4 md:px-6">
      <h2 class="text-3xl md:text-4xl font-bold mb-10">Government Rebates</h2>
      <div class="grid md:grid-cols-2 gap-8 items-start">
        <div class="space-y-6">
          <p class="text-lg text-gray-700">
            GreenLine Energy is an accredited provider under the Victorian Energy Upgrades (VEU) program, offering rebates for energy-efficient upgrades.
          </p>
          <ul class="text-sm text-gray-700 space-y-2 list-disc pl-5">
            <li>Up to $3,000 in combined hot water and heating rebates</li>
            <li>$1,000–$1,400 Solar Victoria hot water rebate</li>
            <li>VEU discounts on approved air conditioning models</li>
          </ul>
          <p class="text-sm text-gray-500">*Rebate amounts vary by postcode, eligibility, and approved products. Contact us for a tailored assessment.</p>
        </div>
        <div>
          <img src="/rebates-illustration.png" alt="Illustration of solar panels and heat pump systems" width="400" height="300" class="rounded-2xl object-cover shadow-md" />
        </div>
      </div>
      <div class="mt-8 text-center">
        <a href="#contact" class="btn btn-primary">Request Rebate Assessment</a>
      </div>
    </div>
  </section>
  <!-- Pricing -->
  <section id="pricing" class="section bg-blue-50/50 border-y border-blue-100">
    <div class="mx-auto max-w-7xl px-4 md:px-6">
      <h2 class="text-3xl md:text-4xl font-bold mb-10">Indicative Pricing (after rebates)</h2>
      <div class="grid md:grid-cols-3 gap-6">
        <div class="card p-6">
          <h3 class="font-semibold text-lg">Heat Pump Hot Water (260–300L)</h3>
          <p class="text-sm text-gray-700 mt-3">From <span class="font-semibold">$799</span> installed*</p>
          <ul class="mt-4 text-sm list-disc pl-5 space-y-1">
            <li>Standard install, removal included</li>
            <li>5–7 year warranties</li>
          </ul>
        </div>
        <div class="card p-6">
          <h3 class="font-semibold text-lg">Split System RCAC (2.5–3.5kW)</h3>
          <p class="text-sm text-gray-700 mt-3">VEU-discounted, site-dependent</p>
          <ul class="mt-4 text-sm list-disc pl-5 space-y-1">
            <li>Single room comfort</li>
            <li>Approved models only</li>
          </ul>
        </div>
        <div class="card p-6">
          <h3 class="font-semibold text-lg">Ducted RCAC (Whole Home)</h3>
          <p class="text-sm text-gray-700 mt-3">VEU-discounted, custom design</p>
          <ul class="mt-4 text-sm list-disc pl-5 space-y-1">
            <li>Efficient heating & cooling</li>
            <li>Load calcs included</li>
          </ul>
        </div>
      </div>
      <p class="text-xs text-gray-500 mt-6">
        *Prices assume eligibility and standard metro install. Rebates vary by postcode and system. Confirm with us.
      </p>
    </div>
  </section>
  <!-- Process -->
  <section id="process" class="section bg-white border-y">
    <div class="mx-auto max-w-7xl px-4 md:px-6">
      <h2 class="text-3xl md:text-4xl font-bold mb-10">How It Works</h2>
      <ol class="grid md:grid-cols-5 gap-4 text-sm">
        <li class="card p-4"><span class="badge mb-2">1</span> Eligibility Check</li>
        <li class="card p-4"><span class="badge mb-2">2</span> System Selection</li>
        <li class="card p-4"><span class="badge mb-2">3</span> Installation</li>
        <li class="card p-4"><span class="badge mb-2">4</span> Removal & Recycling</li>
        <li class="card p-4"><span class="badge mb-2">5</span> Rebate Application</li>
      </ol>
    </div>
  </section>
  <!-- Contact -->
  <section id="contact" class="section bg-blue-50/50">
    <div class="mx-auto max-w-3xl px-4 md:px-6 text-center">
      <h2 class="text-3xl md:text-4xl font-bold">Contact Us</h2>
      <p class="mt-3 text-gray-700">Get expert advice on energy-efficient upgrades and rebate eligibility.</p>
      <form class="card mt-6 p-6 grid md:grid-cols-2 gap-4 text-left">
        <label class="block">
          <span class="text-sm font-medium">Full Name</span>
          <input type="text" required class="mt-1 w-full rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500" placeholder="Jane Citizen" />
        </label>
        <label class="block">
          <span class="text-sm font-medium">Email</span>
          <input type="email" required class="mt-1 w-full rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500" placeholder="jane@email.com" />
        </label>
        <label class="block md:col-span-2">
          <span class="text-sm font-medium">Postcode</span>
          <input type="text" required class="mt-1 w-full rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500" placeholder="3000" />
        </label>
        <label class="block md:col-span-2">
          <span class="text-sm font-medium">Message</span>
          <textarea rows="4" required class="mt-1 w-full rounded-xl border-gray-300 focus:border-blue-500 focus:ring-blue-500" placeholder="Describe your needs…"></textarea>
        </label>
        <div class="md:col-span-2 flex gap-3">
          <button type="submit" class="btn btn-primary w-full">Submit Inquiry</button>
          <a href="mailto:info@greenline.energy" class="btn btn-ghost w-full">Email Us</a>
        </div>
      </form>
      <p class="text-xs text-gray-500 mt-3">By submitting, you authorize GreenLine Energy to contact you regarding rebates and installations.</p>
    </div>
  </section>
  <!-- FAQ -->
  <section id="faq" class="section bg-white">
    <div class="mx-auto max-w-7xl px-4 md:px-6 grid md:grid-cols-2 gap-8">
      <div>
        <h3 class="text-xl font-semibold mb-4">Rebate Details</h3>
        <ul class="text-sm text-gray-700 space-y-2 list-disc pl-5">
          <li>Hot water rebates: Up to $1,400 (Solar Victoria, eligible products)</li>
          <li>VEU incentives: Up to $3,000 for combined upgrades</li>
          <li>Air conditioning: VEU discounts on approved models</li>
          <li>Eligibility varies by postcode and system</li>
        </ul>
      </div>
      <div>
        <h3 class="text-xl font-semibold mb-4">Benefits of Switching</h3>
        <ul class="text-sm text-gray-700 space-y-2 list-disc pl-5">
          <li>Reduce hot water costs from $1,015/yr to ~$205/yr</li>
          <li>Replace gas heating with efficient AC</li>
          <li>Lower emissions with all-electric systems</li>
        </ul>
      </div>
    </div>
    <div class="mx-auto max-w-7xl px-4 md:px-6 mt-6">
      <p class="text-xs text-gray-500">
        *Indicative figures. Rebates and eligibility are subject to Solar Victoria and VEU program rules and may change. Confirm with us before proceeding.
      </p>
    </div>
  </section>
  <!-- Footer -->
  <footer class="py-8 border-t bg-white">
    <div class="mx-auto max-w-7xl px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
      <p class="text-gray-600">
        © <span id="year"></span> GreenLine Energy Pty Ltd • All rights reserved
      </p>
      <div class="text-gray-500">
        <a class="hover:text-blue-700" href="https://www.energy.vic.gov.au/victorian-energy-upgrades" target="_blank" rel="noopener">VEU Program</a> •
        <a class="hover:text-blue-700" href="https://www.solar.vic.gov.au/hot-water-rebate" target="_blank" rel="noopener">Solar Victoria Rebates</a> •
        <a class="hover:text-blue-700" href="#contact">Contact</a>
      </div>
    </div>
  </footer>
  <script>
    document.addEventListener("DOMContentLoaded", () => {
      document.getElementById("year").textContent = new Date().getFullYear();
    });
  </script>
</body>
</html>
