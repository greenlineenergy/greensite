// pages/index.js
import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Home() {
  // Carousel logic
  const carouselRef = useRef(null);
  const dotsRef = useRef([]);

  useEffect(() => {
    const carousel = carouselRef.current;
    const slides = carousel.querySelectorAll(".carousel-slide");
    const totalSlides = slides.length;
    let currentIndex = 0;
    let isDragging = false;
    let startPos = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;

    // Auto-play
    const autoPlay = () => {
      if (!carousel.matches(":hover")) {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel();
      }
    };
    const interval = setInterval(autoPlay, 5000);

    // Update carousel position
    const updateCarousel = () => {
      carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
      dotsRef.current.forEach((dot, i) => {
        dot.classList.toggle("bg-[#32CD32]", i === currentIndex);
        dot.classList.toggle("bg-[#32CD32]/50", i !== currentIndex);
      });
    };

    // Navigation buttons
    const prevButton = carousel.parentElement.querySelector(".carousel-prev");
    const nextButton = carousel.parentElement.querySelector(".carousel-next");
    prevButton.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateCarousel();
    });
    nextButton.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateCarousel();
    });

    // Dot navigation
    dotsRef.current.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        currentIndex = i;
        updateCarousel();
      });
    });

    // Touch support
    const touchStart = (e) => {
      isDragging = true;
      startPos = e.type.includes("mouse") ? e.clientX : e.touches[0].clientX;
      carousel.style.transition = "none";
    };
    const touchMove = (e) => {
      if (isDragging) {
        const currentPosition = e.type.includes("mouse") ? e.clientX : e.touches[0].clientX;
        const diff = currentPosition - startPos;
        currentTranslate = prevTranslate + diff;
        carousel.style.transform = `translateX(${currentTranslate}px)`;
      }
    };
    const touchEnd = () => {
      isDragging = false;
      const movedBy = currentTranslate - prevTranslate;
      if (movedBy < -100 && currentIndex < totalSlides - 1) currentIndex++;
      if (movedBy > 100 && currentIndex > 0) currentIndex--;
      prevTranslate = -currentIndex * carousel.offsetWidth;
      carousel.style.transition = "transform 0.3s ease";
      updateCarousel();
    };

    carousel.addEventListener("touchstart", touchStart);
    carousel.addEventListener("touchmove", touchMove);
    carousel.addEventListener("touchend", touchEnd);
    carousel.addEventListener("mousedown", touchStart);
    carousel.addEventListener("mousemove", touchMove);
    carousel.addEventListener("mouseup", touchEnd);
    carousel.addEventListener("mouseleave", touchEnd);

    // Keyboard navigation
    carousel.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateCarousel();
      } else if (e.key === "ArrowRight") {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel();
      }
    });

    return () => {
      clearInterval(interval);
      prevButton.removeEventListener("click", () => {});
      nextButton.removeEventListener("click", () => {});
      carousel.removeEventListener("touchstart", touchStart);
      carousel.removeEventListener("touchmove", touchMove);
      carousel.removeEventListener("touchend", touchEnd);
      carousel.removeEventListener("mousedown", touchStart);
      carousel.removeEventListener("mousemove", touchMove);
      carousel.removeEventListener("mouseup", touchEnd);
      carousel.removeEventListener("mouseleave", touchEnd);
    };
  }, []);

  return (
    <>
      <Head>
        <title>GreenLine Energy — Melbourne VEU Rebates, Heating, Cooling & Hot Water</title>
        <meta
          name="description"
          content="GreenLine Energy offers VEU-accredited upgrades for heating, cooling, and hot water in Melbourne. Save up to $9,900 with government rebates."
        />
        <meta property="og:title" content="GreenLine Energy Solutions - Melbourne VEU Rebates" />
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

      <div className="bg-black text-[#32CD32] antialiased font-inter">
        {/* Banner */}
        <div className="w-full">
          <Image
            src="/limebanner.png"
            alt="GreenLine Energy Melbourne VEU Rebates Banner"
            width={1920}
            height={400}
            className="w-full h-auto object-cover rounded-b-lg shadow-lg"
            loading="lazy"
          />
        </div>

        {/* Header */}
        <header className="sticky top-0 z-50 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/80 border-b border-[#1f1f1f] text-[#32CD32]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
            <div className="flex items-center justify-between gap-3 h-16 sm:h-20">
              <a href="#top" className="flex items-center gap-3 font-bold text-[#32CD32] shrink-0">
                <Image
                  src="/greenline-logo-mark.png.jpeg"
                  alt="GreenLine Energy Logo"
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full"
                  loading="lazy"
                />
                <Image
                  src="/greenline-logo-word.png.jpeg"
                  alt="GreenLine Energy Wordmark"
                  width={112}
                  height={28}
                  className="h-7"
                  loading="lazy"
                />
              </a>
              <nav className="hidden md:flex items-center gap-6 text-base font-medium">
                <a href="#why-upgrade" className="hover:text-[#66FF66] transition-colors">Why Upgrade</a>
                <a href="#heating-cooling-features" className="hover:text-[#66FF66] transition-colors">Heating & Cooling</a>
                <a href="#hot-water" className="hover:text-[#66FF66] transition-colors">Hot Water</a>
                <a href="#rebates-eligibility" className="hover:text-[#66FF66] transition-colors">Rebates</a>
                <a href="#process" className="hover:text-[#66FF66] transition-colors">Process</a>
                <a href="#contact" className="hover:text-[#66FF66] transition-colors">Contact</a>
              </nav>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  className="md:hidden inline-flex justify-center rounded-lg px-3 py-2 text-sm font-bold bg-[#32CD32] text-black hover:bg-[#66FF66] focus:ring-4 focus:ring-[#32CD32]/30 transition-all"
                  aria-label="Toggle Menu"
                  onClick={() => document.getElementById("mobile-menu").classList.toggle("hidden")}
                >
                  Menu
                </button>
                <div className="hidden md:flex items-center gap-3">
                  <a
                    href="/vic-heat-pump/"
                    className="inline-flex justify-center rounded-lg px-4 py-2 font-bold bg-[#32CD32] text-black hover:bg-[#66FF66] focus:ring-4 focus:ring-[#32CD32]/30 transition-all"
                    aria-label="Heat Pump Offer"
                  >
                    Heat Pump Offer
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex justify-center rounded-lg px-4 py-2 font-bold bg-[#32CD32] text-black hover:bg-[#66FF66] focus:ring-4 focus:ring-[#32CD32]/30 transition-all"
                    aria-label="Get a Quote"
                  >
                    Get a Quote
                  </a>
                </div>
              </div>
            </div>
            <div id="mobile-menu" className="hidden md:hidden bg-black border-t border-[#1f1f1f] px-4 py-4">
              <nav className="flex flex-col gap-4 text-base font-medium">
                <a href="#why-upgrade" className="hover:text-[#66FF66] transition-colors">Why Upgrade</a>
                <a href="#heating-cooling-features" className="hover:text-[#66FF66] transition-colors">Heating & Cooling</a>
                <a href="#hot-water" className="hover:text-[#66FF66] transition-colors">Hot Water</a>
                <a href="#rebates-eligibility" className="hover:text-[#66FF66] transition-colors">Rebates</a>
                <a href="#process" className="hover:text-[#66FF66] transition-colors">Process</a>
                <a href="#contact" className="hover:text-[#66FF66] transition-colors">Contact</a>
                <a
                  href="/vic-heat-pump/"
                  className="inline-flex justify-center rounded-lg px-4 py-2 font-bold bg-[#32CD32] text-black hover:bg-[#66FF66] focus:ring-4 focus:ring-[#32CD32]/30 transition-all"
                  aria-label="Heat Pump Offer"
                >
                  Heat Pump Offer
                </a>
                <a
                  href="#contact"
                  className="inline-flex justify-center rounded-lg px-4 py-2 font-bold bg-[#32CD32] text-black hover:bg-[#66FF66] focus:ring-4 focus:ring-[#32CD32]/30 transition-all"
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
              <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-bold bg-[#32CD32] text-black ring-1 ring-[#32CD32]/30">
                VEU-Accredited Upgrades
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#32CD32]">
                Take Advantage of Up to $9,900 in VEU Incentives
              </h1>
              <p className="text-base sm:text-lg md:text-xl font-medium text-[#32CD32]">
                Replace old gas heaters, air conditioners, or hot water systems with modern, energy-efficient technology to reduce bills, improve comfort, and cut emissions.
              </p>
              <div className="flex gap-3 flex-wrap">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-lg px-4 py-2 font-medium bg-[#32CD32] text-black hover:bg-[#66FF66] focus:ring-2 focus:ring-[#32CD32]/30 transition-all"
                >
                  Get a Free Quote
                </a>
                <a
                  href="/vic-heat-pump/"
                  className="inline-flex items-center justify-center rounded-lg px-4 py-2 font-medium bg-[#32CD32] text-black hover:bg-[#66FF66] focus:ring-2 focus:ring-[#32CD32]/30 transition-all"
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
                  <li key={i} className="bg-[#008000] rounded-lg shadow-md ring-1 ring-[#1f1f1f] p-3 text-center">
                    <strong className="block text-base sm:text-lg font-bold text-white">{t}</strong>
                    <span className="text-xs sm:text-sm text-white/80">{s}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs sm:text-sm text-[#66FF66]">
                *Savings vary by location, eligibility, and product. Contact for details.
              </p>
            </div>
            <div className="md:col-span-5">
              <div className="bg-[#008000] rounded-2xl shadow-lg ring-1 ring-[#1f1f1f] p-4">
                <Image
                  src="/hero1.png"
                  alt="Modern energy-efficient home with advanced heating and cooling"
                  width={500}
                  height={300}
                  className="rounded-2xl object-cover w-full h-auto"
                  loading="lazy"
                />
                <p className="text-xs sm:text-sm text-white/80 mt-2 text-left">
                  Upgrade to a modern, efficient home.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured GIFs */}
        <section id="featured-gifs" className="py-12 sm:py-16 md:py-20 bg-black">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-8 text-[#32CD32]">
              Featured Animations
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {["gif1.gif", "gif2.gif", "gif3.gif", "gif4.gif"].map((g, i) => (
                <div key={i} className="bg-[#008000] rounded-2xl shadow-lg ring-1 ring-[#1f1f1f] p-4">
                  <Image
                    src={`/${g}`}
                    alt={`Energy-efficient animation ${i + 1}`}
                    width={300}
                    height={192}
                    className="w-full h-48 object-cover rounded-lg mb-3"
                    loading="lazy"
                  />
                  <p className="text-xs sm:text-sm text-white/80 text-left">{`Animation ${i + 1}`}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust and Accreditation */}
        <section aria-label="Trust and Accreditation" className="py-8 bg-black border-y border-[#1f1f1f]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 flex flex-wrap items-center justify-center gap-6">
            <Image src="/veu.png.jpeg" alt="Victorian Energy Upgrades Accreditation" width={56} height={56} className="h-14" loading="lazy" />
            <Image src="/esc.png.jpeg" alt="Essential Services Commission Accreditation" width={56} height={56} className="h-14" loading="lazy" />
            <span className="text-sm sm:text-base font-medium text-[#66FF66]">
              Licensed, Insured, and Committed to Excellence
            </span>
          </div>
        </section>

        {/* Why Upgrade */}
        <section id="why-upgrade" className="bg-black text-[#32CD32] py-12 px-4 sm:px-6 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#008000] rounded-2xl shadow-lg ring-1 ring-[#1f1f1f] p-4 sm:p-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Why Upgrade?</h2>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white/80 mb-4">Program-Level Benefits</h3>
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
        <section id="heating-cooling-features" className="bg-black text-[#32CD32] py-12 px-4 sm:px-6 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#008000] rounded-2xl shadow-lg ring-1 ring-[#1f1f1f] p-4 sm:p-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Heating & Cooling - Key Features</h2>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white/80 mb-4">Modern Split Systems</h3>
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-8 text-[#32CD32]">
              Product Options for Heating & Cooling
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              <article className="bg-[#008000] rounded-2xl shadow-lg ring-1 ring-[#1f1f1f] p-4 sm:p-6 hover:shadow-xl transition-shadow">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-full max-w-md">
                    <Image
                      src="/IMG_5167.webp"
                      alt="Emerald Split System 2kW"
                      width={400}
                      height={224}
                      className="w-full h-56 object-cover rounded-lg"
                      loading="lazy"
                    />
                    <p className="text-xs sm:text-sm text-white/80 mt-1 text-left">Emerald Split System 2kW</p>
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 mt-3">Emerald Split System</h3>
                <p className="text-sm sm:text-base font-medium text-white/80 mb-3">
                  Reverse cycle (heating + cooling) with 360° full DC inverter.
                </p>
                <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-black text-[#32CD32] ring-1 ring-[#32CD32]/25 mt-2">
                  Advanced ducting & louver fin
                </span>
              </article>
              <article className="bg-[#008000] rounded-2xl shadow-lg ring-1 ring-[#1f1f1f] p-4 sm:p-6 hover:shadow-xl transition-shadow">
                <Image
                  src="/revcycair.jpeg"
                  alt="Avanti PLUS Series Product"
                  width={400}
                  height={224}
                  className="w-full h-56 object-cover rounded-lg mb-4"
                  loading="lazy"
                />
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Avanti PLUS® Series</h3>
                <p className="text-sm sm:text-base font-medium text-white/80 mb-3">
                  Platinum-grade, award-winning design with motion sensor.
                </p>
                <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-black text-[#32CD32] ring-1 ring-[#32CD32]/25 mt-2">
                  Clean Air Technology
                </span>
              </article>
              <article className="bg-[#008000] rounded-2xl shadow-lg ring-1 ring-[#1f1f1f] p-4 sm:p-6 hover:shadow-xl transition-shadow">
                <Image
                  src="/revcycair.jpeg"
                  alt="Rinnai T Series Product"
                  width={400}
                  height={224}
                  className="w-full h-56 object-cover rounded-lg mb-4"
                  loading="lazy"
                />
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Rinnai T Series</h3>
                <p className="text-sm sm:text-base font-medium text-white/80 mb-3">
                  Long-distance airflow with Wi-Fi & voice control.
                </p>
                <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-black text-[#32CD32] ring-1 ring-[#32CD32]/25 mt-2">
                  R32 refrigerant
                </span>
              </article>
            </div>
          </div>
        </section>

        {/* Hot Water Upgrades */}
        <section id="hot-water" className="py-12 sm:py-16 md:py-20 bg-black">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-8 text-[#32CD32]">
              Hot Water Upgrades
            </h2>
            {/* Custom Carousel */}
            <div className="bg-[#008000] rounded-2xl shadow-lg ring-1 ring-[#1f1f1f] p-4 sm:p-6 mb-6 relative overflow-hidden">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4">Emerald Hot Water Systems</h3>
              <div className="carousel-container relative w-full overflow-hidden" role="region" aria-label="Hot water product carousel" tabIndex="0">
                <div
                  ref={carouselRef}
                  className="carousel flex transition-transform duration-300 ease-in-out"
                  style={{ width: "300%" }}
                >
                  {[
                    { img: "/IMG_5165.webp", title: "Emerald 2kW System", desc: "Wi-Fi, 6-yr warranty, ideal for small households." },
                    { img: "/IMG_5166.webp", title: "Emerald 3kW System", desc: "Wi-Fi, 6-yr warranty, suitable for medium homes." },
                    { img: "/IMG_5167.webp", title: "Emerald 7kW System", desc: "Wi-Fi, 6-yr warranty, perfect for large families." },
                  ].map((item, i) => (
                    <div key={i} className="carousel-slide flex-none w-full sm:w-1/2 md:w-1/3 p-2">
                      <div className="flex flex-col items-center">
                        <Image
                          src={item.img}
                          alt={item.title}
                          width={400}
                          height={224}
                          className="w-full h-56 object-cover rounded-lg mb-3"
                          loading="lazy"
                        />
                        <h4 className="text-base sm:text-lg font-bold text-white">{item.title}</h4>
                        <p className="text-xs sm:text-sm text-white/80 text-center">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  className="carousel-prev absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/50 text-[#32CD32] p-2 rounded-full hover:text-[#66FF66] focus:outline-none focus:ring-2 focus:ring-[#32CD32]"
                  aria-label="Previous slide"
                >
                  ←
                </button>
                <button
                  className="carousel-next absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/50 text-[#32CD32] p-2 rounded-full hover:text-[#66FF66] focus:outline-none focus:ring-2 focus:ring-[#32CD32]"
                  aria-label="Next slide"
                >
                  →
                </button>
                <div className="carousel-dots flex justify-center mt-4 space-x-2">
                  {[0, 1, 2].map((_, i) => (
                    <button
                      key={i}
                      ref={(el) => (dotsRef.current[i] = el)}
                      className={`w-2 h-2 rounded-full ${i === 0 ? "bg-[#32CD32]" : "bg-[#32CD32]/50"} focus:outline-none focus:ring-2 focus:ring-[#32CD32]`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-[#008000] rounded-2xl shadow-lg ring-1 ring-[#1f1f1f] p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4">Rebates & Incentives</h3>
                <p className="text-sm sm:text-base text-white/80 mb-4">
                  Hot water rebates of up to $1,000 are available for eligible heat pump and solar hot water products. Choose a locally made product for up to $1,400. Heating hot water accounts for 15%–30% of household energy use. Save with efficient systems and VEU discounts.
                </p>
                <ul className="space-y-4 text-sm sm:text-base leading-relaxed">
                  <li><span className="text-white font-semibold">✅ Rebates up to $1,400</span><br /><span className="text-white/80">For locally made hot water systems.</span></li>
                  <li><span className="text-white font-semibold">✅ $0 Product Cost</span><br /><span className="text-white/80">In some regions (e.g., Shepparton, Bendigo).</span></li>
                  <li><span className="text-white font-semibold">✅ Electric Replacement Mandatory</span><br /><span className="text-white/80">From Mar 1, 2027.</span></li>
                </ul>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white/80 mt-4 mb-4">Emergency Service</h3>
                <ul className="space-y-4 text-sm sm:text-base leading-relaxed">
                  <li><span className="text-white font-semibold">✅ 48-Hour Replacement</span><br /><span className="text-white/80">(Metro Melbourne).</span></li>
                  <li><span className="text-white font-semibold">✅ Save $2,000–$3,000</span><br /><span className="text-white/80">Vs. standard plumbing.</span></li>
                </ul>
              </div>
              <div className="bg-[#008000] rounded-2xl shadow-lg ring-1 ring-[#1f1f1f] p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4">Product Options</h3>
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-8 text-[#32CD32]">
              Rebates & Eligibility
            </h2>
            <div className="bg-[#008000] rounded-2xl shadow-lg ring-1 ring-[#1f1f1f] p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4">Rebate Options</h3>
              <p className="text-sm sm:text-base text-white/80 mb-4">
                As a Victorian householder, you could receive a hot water rebate if you are an owner-occupier, household income is &lt; $210,000/year, property value is &lt; $3 million, and the system is &gt; 3 years old. Work with an authorised retailer using eligible products.
              </p>
              <ul className="space-y-4 text-sm sm:text-base leading-relaxed">
                <li><span className="text-white font-semibold">✅ VEU Rebate</span><br /><span className="text-white/80">Home over 24 months old, replacing inefficient systems.</span></li>
                <li><span className="text-white font-semibold">✅ CER STCs</span><br /><span className="text-white/80">System must meet efficiency standards.</span></li>
                <li><span className="text-white font-semibold">✅ SolarVic Rebate</span><br /><span className="text-white/80">Income &lt; $210K, home &lt; $3M, system &gt; 3 years old.</span></li>
              </ul>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg px-6 py-2 font-bold bg-black text-[#32CD32] hover:bg-[#66FF66] hover:text-black focus:ring-4 focus:ring-[#32CD32]/30 transition-all mt-4"
              >
                Check Eligibility
              </a>
            </div>
          </div>
        </section>

        {/* Why Choose Accredited Providers */}
        <section id="why-choose" className="bg-black text-[#32CD32] py-12 px-4 sm:px-6 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#008000] rounded-2xl shadow-lg ring-1 ring-[#1f1f1f] p-4 sm:p-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Accredited Providers</h2>
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
        <section id="process" className="bg-black text-[#32CD32] py-12 px-4 sm:px-6 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#008000] rounded-2xl shadow-lg ring-1 ring-[#1f1f1f] p-4 sm:p-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Step-by-Step Process</h2>
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

        {/* Contact */}
        <section id="contact" className="py-12 sm:py-16 md:py-20 bg-black">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-12 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#32CD32] mb-4">Contact & Next Steps</h2>
            <p className="text-base sm:text-lg md:text-xl font-medium text-[#32CD32] mb-6">
              Free inspections available across Victoria. Rebates apply now for heating, cooling, and hot water upgrades.
            </p>
            <form className="bg-[#008000] rounded-2xl shadow-lg ring-1 ring-[#1f1f1f] p-4 sm:p-6 grid sm:grid-cols-2 gap-4 text-left">
              <label className="block">
                <span className="text-sm sm:text-base font-bold text-white">Full Name</span>
                <input
                  type="text"
                  required
                  className="mt-1 w-full rounded-lg border-[#1f1f1f] focus:border-[#32CD32] focus:ring-[#32CD32] p-2 bg-black text-[#32CD32] transition-all"
                  placeholder="Jane Citizen"
                />
              </label>
              <label className="block">
                <span className="text-sm sm:text-base font-bold text-white">Email</span>
                <input
                  type="email"
                  required
                  className="mt-1 w-full rounded-lg border-[#1f1f1f] focus:border-[#32CD32] focus:ring-[#32CD32] p-2 bg-black text-[#32CD32] transition-all"
                  placeholder="jane@email.com"
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="text-sm sm:text-base font-bold text-white">Postcode</span>
                <input
                  type="text"
                  required
                  className="mt-1 w-full rounded-lg border-[#1f1f1f] focus:border-[#32CD32] focus:ring-[#32CD32] p-2 bg-black text-[#32CD32] transition-all"
                  placeholder="3000"
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="text-sm sm:text-base font-bold text-white">Message</span>
                <textarea
                  rows={5}
                  required
                  className="mt-1 w-full rounded-lg border-[#1f1f1f] focus:border-[#32CD32] focus:ring-[#32CD32] p-2 bg-black text-[#32CD32] transition-all"
                  placeholder="How can we assist you?"
                />
              </label>
              <div className="sm:col-span-2 flex gap-4 flex-wrap">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg px-6 py-2 font-bold bg-black text-[#32CD32] hover:bg-[#66FF66] hover:text-black focus:ring-4 focus:ring-[#32CD32]/30 transition-all"
                >
                  Submit Inquiry
                </button>
                <a
                  href="mailto:contact@GLEnergy.com.au"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg px-6 py-2 font-bold bg-black text-[#32CD32] hover:bg-[#66FF66] hover:text-black focus:ring-4 focus:ring-[#32CD32]/30 transition-all"
                >
                  Email Us
                </a>
              </div>
            </form>
            <p className="text-xs sm:text-sm text-[#66FF66] mt-3">
              Supported through 2045. By submitting, you agree to let us contact you.
            </p>
          </div>
        </section>

        {/* Refer a Friend */}
        <section className="w-full py-12 sm:py-16 md:py-20 bg-black border-t border-[#1f1f1f]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="bg-[#008000] rounded-2xl shadow-lg ring-1 ring-[#1f1f1f] overflow-hidden">
              <div className="bg-black text-[#32CD32] text-center py-6 border-b border-[#1f1f1f]">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#32CD32]">Refer a Friend, $100 Cash!</h2>
              </div>
              <div className="p-4 sm:p-6 space-y-4 text-left">
                <p className="text-base sm:text-lg font-bold text-white">
                  Invite your friends to join GreenLine Energy and earn <strong>$100 cash</strong> for each successful referral!
                </p>
                <p className="text-xs sm:text-sm text-white/80">No limit—refer more friends to boost your rewards!</p>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-lg px-6 py-2 font-bold bg-black text-[#32CD32] hover:bg-[#66FF66] hover:text-black focus:ring-4 focus:ring-[#32CD32]/30 transition-all"
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
        <section id="faq" className="bg-black text-[#32CD32] py-12 px-4 sm:px-6 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#008000] rounded-2xl shadow-lg ring-1 ring-[#1f1f1f] p-4 sm:p-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white/80 mb-4">Rebate Details</h3>
              <ul className="space-y-4 text-sm sm:text-base leading-relaxed">
                <li><span className="text-white font-semibold">✅ Hot Water Rebates</span><br /><span className="text-white/80">Up to $1,400 for locally made systems.</span></li>
                <li><span className="text-white font-semibold">✅ Combined Incentives</span><br /><span className="text-white/80">Up to $9,900.</span></li>
                <li><span className="text-white font-semibold">✅ Aircon & Heating Discounts</span><br /><span className="text-white/80">Available for efficient systems.</span></li>
              </ul>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white/80 mt-4 mb-4">Benefits of Switching</h3>
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
        <footer className="py-8 bg-black border-t border-[#1f1f1f] text-[#32CD32]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm sm:text-base">
            <p className="font-medium text-[#32CD32]">© {new Date().getFullYear()} GreenLine Energy Pty Ltd • ABN 12 345 678 901</p>
            <div className="flex items-center gap-4 flex-wrap">
              <a
                href="https://www.energy.vic.gov.au/victorian-energy-upgrades"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#32CD32] hover:text-[#66FF66] transition-colors"
              >
                VEU Program
              </a>
              <span className="text-[#66FF66]">•</span>
              <a
                href="https://www.solar.vic.gov.au/hot-water-rebate"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#32CD32] hover:text-[#66FF66] transition-colors"
              >
                Solar Victoria Rebates
              </a>
              <span className="text-[#66FF66]">•</span>
              <a href="mailto:contact@GLEnergy.com.au" className="text-[#32CD32] hover:text-[#66FF66] transition-colors">
                Contact
              </a>
            </div>
          </div>
        </footer>
      </div>

      {/* Custom Carousel Styles */}
      <style jsx global>{`
        .carousel-container {
          position: relative;
          overflow: hidden;
        }
        .carousel {
          display: flex;
          transition: transform 0.3s ease-in-out;
        }
        .carousel-slide {
          flex: 0 0 100%;
          box-sizing: border-box;
        }
        @media (min-width: 640px) {
          .carousel-slide {
            flex: 0 0 50%;
          }
        }
        @media (min-width: 1024px) {
          .carousel-slide {
            flex: 0 0 33.333%;
          }
        }
        .carousel-container:hover .carousel {
          animation-play-state: paused;
        }
        .carousel-prev,
        .carousel-next {
          display: none;
        }
        @media (min-width: 640px) {
          .carousel-prev,
          .carousel-next {
            display: block;
          }
        }
        .carousel-dots button {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          border: none;
          cursor: pointer;
        }
      `}</style>
    </>
  );
}
