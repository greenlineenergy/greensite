import Head from "next/head";
import { useEffect, useState } from "react";

/* ---------- tiny utilities ---------- */
const sections = [
  { id: "home", label: "Home" },
  { id: "contact", label: "Contact" },
];

function useScrollSpy(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const observers = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        (entries) => entries.forEach((e) => e.isIntersecting && setActive(id)),
        { threshold: 0.4 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o && o.disconnect());
  }, [ids]);
  return active;
}

/* ---------- components ---------- */
function LogoMark({ size = 36 }) {
  return (
    <img
      src="/greenline-logo-mark.png"
      width={size}
      height={size}
      alt="GreenLine logo"
      style={{ display: "block", borderRadius: "50%" }}
      onError={(e) => {
        // fallback to simple circle if image missing
        e.currentTarget.replaceWith(
          Object.assign(document.createElement("div"), {
            style:
              `width:${size}px;height:${size}px;border-radius:50%;` +
              "border:3px solid #10b981;",
          })
        );
      }}
    />
  );
}

function Nav() {
  const active = useScrollSpy(sections.map((s) => s.id));
  const [open, setOpen] = useState(false);

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <div style={styles.navbar}>
          <a href="#home" style={styles.brandLink}>
            <LogoMark />
            <div>
              <div style={styles.brandName}>GreenLine</div>
              <div style={styles.brandSub}>Energy • HVAC • Solar</div>
            </div>
          </a>

          {/* desktop menu */}
          <nav style={{ display: "none", gap: 12, alignItems: "center" }} className="desk">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                style={{
                  ...styles.navItem,
                  ...(active === s.id ? styles.navItemActive : null),
                }}
              >
                {s.label}
              </a>
            ))}
            <a href="#contact" style={styles.btnPrimary}>Get a Quote</a>
          </nav>

          {/* mobile button */}
          <button
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            style={styles.mobileBtn}
            className="mobile"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {/* mobile drawer */}
      {open && (
        <div style={styles.mobileDrawer} className="mobile">
          <div style={{ display: "grid", gap: 10 }}>
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setOpen(false)}
                style={{
                  ...styles.navItem,
                  padding: "12px 14px",
                  ...(active === s.id ? styles.navItemActive : null),
                }}
              >
                {s.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} style={styles.btnPrimary}>
              Get a Quote
            </a>
          </div>
        </div>
      )}

      {/* simple responsive CSS hooks */}
      <style jsx>{`
        @media (min-width: 860px) {
          .desk { display: flex !important; }
          .mobile, .mobileDrawer { display: none !important; }
        }
      `}</style>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" style={styles.hero}>
      <div style={styles.container}>
        <div style={styles.heroWrap}>
          <div>
            <div style={styles.badge}>Trusted local installers</div>
            <h1 style={styles.h1}>
              Upgrade comfort. <span style={{ color: "#10b981" }}>Lower costs.</span>
            </h1>
            <p style={styles.lead}>
              GreenLine delivers energy-efficient heating, cooling, hot water and solar.
              We help you unlock VEU rebates and design the best-fit system for your home or business.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 14 }}>
              <a href="#contact" style={styles.btnPrimary}>Get a quote</a>
              <a href="#contact" style={styles.btnOutline}>Contact us</a>
            </div>
            <ul style={styles.ticks}>
              <li>Licensed & insured</li>
              <li>5-year workmanship warranty</li>
              <li>Transparent pricing</li>
            </ul>
          </div>

          <div style={styles.card}>
            <h3 style={{ margin: "0 0 8px 0" }}>What we install</h3>
            <ul style={styles.ul}>
              <li>Reverse-cycle split systems (RCAC)</li>
              <li>Heat
