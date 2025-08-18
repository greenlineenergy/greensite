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
              <li>Heat-pump hot water</li>
              <li>Solar PV & batteries</li>
            </ul>
          </div>
        </div>
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
    if (phone && !/^\+?\d{8,12}$/.test(phone)) {
      setError("Please enter a valid phone number (8–12 digits).");
      return;
    }
    setError("");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`
    );
    window.location.href = `mailto:hello@greenline.energy?subject=Quote%20Request&body=${body}`;
    setSent(true);
  }

  return (
    <section id="contact" style={{ background: "#f8fafc", padding: "56px 0" }}>
      <div style={styles.container}>
        <div style={styles.contactGrid}>
          <div>
            <h2 style={styles.h2}>Get a quote</h2>
            <p style={styles.muted}>
              Tell us a bit about your site and we’ll get back quickly with options.
            </p>
            <div style={{ display: "grid", gap: 8, marginTop: 16, color: "#334155" }}>
              <div><strong>Phone:</strong> 0000 000 000</div>
              <div><strong>Email:</strong> hello@greenline.energy</div>
              <div><strong>Address:</strong> 123 Green St, Melbourne VIC 3000</div>
              <div><strong>ABN:</strong> 12 345 678 901</div>
            </div>
          </div>

          <form onSubmit={submit} style={styles.form} className="card">
            <label style={styles.label}>Name<input value={name} onChange={(e)=>setName(e.target.value)} required style={styles.input}/></label>
            <label style={styles.label}>Email<input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required style={styles.input}/></label>
            <label style={styles.label}>Phone<input value={phone} onChange={(e)=>setPhone(e.target.value)} style={styles.input}/></label>
            <label style={styles.label}>Message<textarea rows={6} value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="Tell us about your rooms/roof…" style={styles.textarea}/></label>
            {error && <div style={{ color:"#b91c1c", fontSize:12 }}>{error}</div>}
            <button type="submit" style={styles.btnPrimary}>Send</button>
            {sent && <div style={{ color:"#059669", fontSize:12 }}>Your email app should have opened — thanks!</div>}
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ borderTop: "1px solid #e2e8f0", background: "#fff", padding: "22px 0" }}>
      <div style={styles.container}>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", gap:16, flexWrap:"wrap" }}>
          <div style={{ display:"flex", alignItems:"center", gap:10 }}>
            <LogoMark size={30} />
            <strong>GreenLine</strong>
          </div>
          <div style={{ color: "#64748b", fontSize: 13 }}>
            © {new Date().getFullYear()} GreenLine Pty Ltd • Energy-efficient HVAC • Hot Water • Solar
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------- page ---------- */
export default function Page() {
  // smooth anchors
  useEffect(() => {
    const handler = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute("href").slice(1);
      const el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return (
    <>
      <Head>
        <title>GreenLine — Smart Energy. Lower Costs.</title>
        <meta name="description" content="Energy-efficient air conditioning, heat-pump hot water, solar and batteries. We help you access VEU rebates." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div style={{ minHeight: "100vh", background: "#fff", fontFamily: 'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif' }}>
        <Nav />
        <Hero />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

/* ---------- styles ---------- */
const styles = {
  container: { maxWidth: 1120, margin: "0 auto", padding: "0 16px" },
  header: {
    position: "sticky", top: 0, zIndex: 50,
    background: "rgba(255,255,255,0.9)", backdropFilter: "blur(8px)",
    borderBottom: "1px solid #e2e8f0"
  },
  navbar: { display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 },
  brandLink: { display: "flex", alignItems: "center", gap: 12, textDecoration: "none", color: "#0f172a" },
  brandName: { fontWeight: 800, fontSize: 20, letterSpacing: 0.2 },
  brandSub: { fontSize: 12, color: "#64748b" },
  navItem: { padding: "8px 12px", borderRadius: 10, textDecoration: "none", color: "#475569", fontWeight: 600 },
  navItemActive: { background: "#ecfdf5", color: "#0f766e" },
  btnPrimary: { background: "#10b981", color: "#fff", padding: "10px 16px", borderRadius: 12, fontWeight: 700, textDecoration: "none", display: "inline-block" },
  btnOutline: { background:"#fff", color:"#0f172a", border:"1px solid #e2e8f0", padding:"10px 16px", borderRadius:12, fontWeight:700, textDecoration:"none", display:"inline-block" },
  mobileBtn: { border: "1px solid #e2e8f0", padding: "8px 12px", borderRadius: 10, background: "#fff", fontWeight: 600 },
  mobileDrawer: { position:"fixed", top:64, left:0, right:0, bottom:0, background:"rgba(255,255,255,0.97)", padding:16, borderTop:"1px solid #e2e8f0" },

  hero: { background: "linear-gradient(180deg,#f0fdf4 0%,#ffffff 70%)", padding: "56px 0" },
  heroWrap: { display: "grid", gap: 24, gridTemplateColumns: "1.3fr 1fr" },
  h1: { fontSize: 42, lineHeight: 1.1, margin: "10px 0" },
  h2: { fontSize: 32, lineHeight: 1.2, margin: "0 0 8px" },
  lead: { color: "#64748b", fontSize: 18, maxWidth: 720 },
  badge: { display:"inline-block", background:"#ecfdf5", color:"#065f46", padding:"6px 10px", borderRadius: 999, fontSize:12, fontWeight: 800 },
  ticks: { display:"flex", gap:16, margin:"16px 0 0", padding:0, listStyle:"none", color:"#64748b", fontSize:14, flexWrap:"wrap" },
  card: { border:"1px solid #e2e8f0", borderRadius:16, background:"#fff", padding:16 },

  contactGrid: { display:"grid", gap:24, gridTemplateColumns:"1.1fr 1fr", alignItems:"start" },
  form: { display:"grid", gap:12, border:"1px solid #e2e8f0", borderRadius:16, background:"#fff", padding:16 },
  label: { display:"grid", gap:6, fontWeight:600 },
  input: { border:"1px solid #e2e8f0", borderRadius:10, padding:"10px 12px", font: "inherit" },
  textarea: { border:"1px solid #e2e8f0", borderRadius:10, padding:"10px 12px", font: "inherit" },
  muted: { color:"#64748b" },
};
