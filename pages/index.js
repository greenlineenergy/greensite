import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "home", label: "Home" },
  { id: "contact", label: "Contact" },
];

function useScrollSpy(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const observers = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) {
        console.warn(`Element with ID "${id}" not found in DOM`);
        return null;
      }
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) setActive(id);
          });
        },
        { threshold: 0.4 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o && o.disconnect());
  }, [ids]);
  return active;
}

function LogoMark({ className = "w-9 h-9" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="GreenLine emblem"
    >
      <title>GreenLine Logo</title>
      <defs>
        <linearGradient id="g" x1="0" x2="1" y1="1" y2="0">
          <stop offset="0%" stopColor="#16a34a" />
          <stop offset="100%" stopColor="#22c55e" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="30" stroke="url(#g)" strokeWidth="4" fill="none" />
      <path
        d="M10 38c9-2 16-10 22-18 6 10 12 16 22 18; M30 26c-4 5-6 9-6 12 4-1 9-4 12-7"
        stroke="#0ea5e9"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function Nav() {
  const active = useScrollSpy(sections.map((s) => s.id));
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-3">
            <LogoMark />
            <div className="leading-tight">
              <span className="font-bold text-xl">GreenLine</span>
              <div className="text-xs text-muted-foreground">Energy • HVAC • Solar</div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-1">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`px-3 py-2 rounded-full text-sm transition hover:bg-gray-100 ${
                  active === s.id ? "bg-primary/10 text-primary" : "text-muted-foreground"
                }`}
              >
                {s.label}
              </a>
            ))}
            <button className="ml-2 bg-primary text-white px-4 py-2 rounded-md hover:bg-emerald-700">
              <a href="#contact">Get a Quote</a>
            </button>
          </nav>
          <button
            className="md:hidden border border-gray-300 px-4 py-2 rounded-md"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            Menu
          </button>
        </div>
        <motion.div
          id="mobile-menu"
          initial={{ x: "100%" }}
          animate={{ x: open ? 0 : "100%" }}
          transition={{ duration: 0.3 }}
          className={`md:hidden pb-4 grid gap-1 ${open ? "block" : "hidden"}`}
        >
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={() => setOpen(false)}
              className={`px-3 py-2 rounded-lg text-sm transition hover:bg-gray-100 ${
                active === s.id ? "bg-primary/10 text-primary" : "text-muted-foreground"
              }`}
            >
              {s.label}
            </a>
          ))}
          <button className="mx-3 bg-primary text-white px-4 py-2 rounded-md hover:bg-emerald-700">
            <a href="#contact" onClick={() => setOpen(false)}>Get a Quote</a>
          </button>
        </motion.div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-emerald-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold">
            Upgrade Comfort. <span className="text-emerald-600">Lower Costs.</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            GreenLine delivers energy-efficient heating, cooling, hot water, and solar solutions.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <button className="bg-primary text-white px-6 py-3 rounded-md hover:bg-emerald-700">
              <a href="#contact">Get a Quote</a>
            </button>
            <button className="border border-primary text-primary px-6 py-3 rounded-md hover:bg-emerald-50">
              <a href="#contact">Contact Us</a>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  function submit(e) {
    e.preventDefault();
    if (!/^\+?\d{10,12}$/.test(phone)) {
      setError("Please enter a valid phone number (10-12 digits)");
      return;
    }
    setError("");
    const body = encodeURIComponent(`Name: ${name}\nPhone: ${phone}\n\n${message}`);
    window.location.href = `mailto:hello@greenline.energy?subject=Quote%20Request&body=${body}`;
    setSent(true);
  }

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold">Get a Quote</h2>
            <p className="mt-2 text-muted-foreground">Contact us for a free consultation.</p>
            <div className="mt-6 space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">📞 +61 123 456 789</div>
              <div className="flex items-center gap-2">✉️ hello@greenline.energy</div>
              <div className="flex items-center gap-2">📍 123 Green St, Melbourne, VIC 3000</div>
              <div className="flex items-center gap-2">🛡️ ABN: 12 345 678 901</div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Quick Contact Form</h3>
            <form onSubmit={submit} className="mt-4 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium" htmlFor="name">Name</label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full border rounded-md px-3 py-2"
                    aria-describedby="name-desc"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium" htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full border rounded-md px-3 py-2"
                    aria-describedby="email-desc"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium" htmlFor="phone">Phone</label>
                <input
                  id="phone"
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full border rounded-md px-3 py-2"
                  aria-describedby="phone-desc"
                />
              </div>
              <div>
                <label className="block text-sm font-medium" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your needs..."
                  className="w-full border rounded-md px-3 py-2"
                  aria-describedby="message-desc"
                />
              </div>
              {error && <p className="text-sm text-red-600">{error}</p>}
              <div className="flex items-center gap-3">
                <button type="submit" className="bg-primary text-white px-4 py-2 rounded-md hover:bg-emerald-700">
                  Send
                </button>
                {sent && <span className="text-sm text-emerald-600">Email client opened!</span>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 text-sm">
          <div>
            <div className="flex items-center gap-3">
              <LogoMark className="w-8 h-8" />
              <div className="font-semibold">GreenLine</div>
            </div>
            <p className="mt-3 text-muted-foreground">Energy-efficient HVAC • Hot Water • Solar</p>
          </div>
          <div>
            <div className="font-medium">Links</div>
            <ul className="mt-2 space-y-1 text-muted-foreground">
              <li><a href="#home" className="hover:text-primary">Home</a></li>
              <li><a href="#contact" className="hover:text-primary">Contact</a></li>
            </ul>
          </div>
          <div>
            <div className="font-medium">Details</div>
            <div className="mt-2 space-y-1 text-muted-foreground">
              <div>ABN: 12 345 678 901</div>
              <div>© 2025 GreenLine Pty Ltd</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Website() {
  useEffect(() => {
    const handler = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (!target) return;
      const id = target.getAttribute("href").slice(1);
      const el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      window.history.pushState({}, "", `#${id}`);
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <Hero />
      <Contact />
      <Footer />
    </div>
  );
}
