// index.jsx
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
        <link
          rel="icon"
          href={`data:image/svg+xml,${encodeURIComponent(
            `<svg xmlns='http://www.w3.org/2000/svg' width='256' height='256' viewBox='0 0 256 256'><circle cx='128' cy='128' r='120' fill='#2E7D32'/><path d='M68 148c40-10 68-42 84-88 18 20 28 44 28 72 0 45-31 82-84 82-22 0-39-7-51-20 9-17 13-31 23-46z' fill='#fff'/></svg>`
          )}`}
        />
      </Head>

      <div className="bg-gradient-to-b from-[#F9F9F9] via-[#F9F9F9] to-[#E0E0E0] text-[#1A237E] antialiased">
        {/* Banner */}
        <div className="w-full">
          <img src="/greenline-banner.png.png.png" alt="Banner" className="w-full h-auto object-cover rounded-b-lg shadow-md" loading="lazy" />
        </div>

        {/* Header (Replaced Teal with Deep Blue-Green) */}
        <header className="sticky top-0 z-50 bg-[#1E3A34] text-white shadow-sm">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex items-center justify-between h-16">
              <a href="#top" className="flex items-center gap-3 font-semibold text-white">
                <img src="/greenline-logo-mark.png.jpeg" alt="Logo" className="h-10 w-10 rounded-full" loading="lazy" />
              </a>
              <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                <a href="#solutions" className="hover:text-[#4DA8DA]">Solutions</a>
                <a href="#pricing" className="hover:text-[#4DA8DA]">Pricing</a>
                <a href="#process" className="hover:text-[#4DA8DA]">Process</a>
                <a href="#faq" className="hover:text-[#4DA8DA]">FAQ</a>
                <a href="#contact" className="hover:text-[#4DA8DA]">Contact</a>
              </nav>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg px-5 py-2 font-semibold bg-[#2E7D32] text-white hover:bg-[#225522] transition-colors duration-200"
              >
                Get a Quote
              </a>
            </div>
          </div>
        </header>

        {/* More components would follow, using original green (#2E7D32) and updated deep green-blue theme where teal was used */}
      </div>
    </>
  );
}
