import { useEffect, useMemo, useState, type FormEvent, type ReactNode } from "react";
import { company, content, type Lang } from "./content";
import { IMAGES } from "./images";
import Reveal from "./components/Reveal";
import { BOOKINGS_PIN, loadBookings, saveBooking, updateBooking, whatsappBookingUrl, type Booking } from "./bookings";

const NAV = [
  { id: "home", key: "home" as const },
  { id: "about", key: "about" as const },
  { id: "services", key: "services" as const },
  { id: "advantages", key: "advantages" as const },
  { id: "contact", key: "contact" as const },
];

function Icon({
  name,
  className = "h-5 w-5",
}: {
  name:
    | "arrow"
    | "phone"
    | "mail"
    | "pin"
    | "globe"
    | "clock"
    | "check"
    | "store"
    | "chart"
    | "shield"
    | "mobile"
    | "cloud"
    | "support"
    | "menu"
    | "close"
    | "wa"
    | "spark"
    | "play";
  className?: string;
}) {
  const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  if (name === "arrow")
    return (
      <svg viewBox="0 0 24 24" className={className} {...stroke}>
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    );
  if (name === "phone")
    return (
      <svg viewBox="0 0 24 24" className={className} {...stroke}>
        <path d="M6.5 3.5h3l1.5 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.5v3A2 2 0 0 1 19 19 16 16 0 0 1 5 5a2 2 0 0 1 1.5-1.5Z" />
      </svg>
    );
  if (name === "mail")
    return (
      <svg viewBox="0 0 24 24" className={className} {...stroke}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    );
  if (name === "pin")
    return (
      <svg viewBox="0 0 24 24" className={className} {...stroke}>
        <path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" />
        <circle cx="12" cy="9" r="2.2" />
      </svg>
    );
  if (name === "globe")
    return (
      <svg viewBox="0 0 24 24" className={className} {...stroke}>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
      </svg>
    );
  if (name === "clock")
    return (
      <svg viewBox="0 0 24 24" className={className} {...stroke}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3.5 2" />
      </svg>
    );
  if (name === "check")
    return (
      <svg viewBox="0 0 24 24" className={className} {...stroke}>
        <path d="m5 13 4.5 4.5L19 7" />
      </svg>
    );
  if (name === "store")
    return (
      <svg viewBox="0 0 24 24" className={className} {...stroke}>
        <path d="M4 10h16l-1 10H5L4 10Z" />
        <path d="M4 10 6 4h12l2 6" />
        <path d="M9 14v3M15 14v3" />
      </svg>
    );
  if (name === "chart")
    return (
      <svg viewBox="0 0 24 24" className={className} {...stroke}>
        <path d="M4 19V5M4 19h16" />
        <path d="M8 16v-5M12 16V8M16 16v-8M20 16v-3" />
      </svg>
    );
  if (name === "shield")
    return (
      <svg viewBox="0 0 24 24" className={className} {...stroke}>
        <path d="M12 3 5 6v6c0 5 3.2 8.2 7 9.5 3.8-1.3 7-4.5 7-9.5V6l-7-3Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    );
  if (name === "mobile")
    return (
      <svg viewBox="0 0 24 24" className={className} {...stroke}>
        <rect x="7" y="3" width="10" height="18" rx="2" />
        <path d="M11 18h2" />
      </svg>
    );
  if (name === "cloud")
    return (
      <svg viewBox="0 0 24 24" className={className} {...stroke}>
        <path d="M7 18h10a4 4 0 0 0 .4-8 6 6 0 0 0-11.5-1.6A4 4 0 0 0 7 18Z" />
      </svg>
    );
  if (name === "support")
    return (
      <svg viewBox="0 0 24 24" className={className} {...stroke}>
        <path d="M4 14v-2a8 8 0 1 1 16 0v2" />
        <rect x="3" y="13" width="4" height="6" rx="1.5" />
        <rect x="17" y="13" width="4" height="6" rx="1.5" />
        <path d="M12 21a3 3 0 0 0 3-3v-1" />
      </svg>
    );
  if (name === "menu")
    return (
      <svg viewBox="0 0 24 24" className={className} {...stroke}>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </svg>
    );
  if (name === "close")
    return (
      <svg viewBox="0 0 24 24" className={className} {...stroke}>
        <path d="M6 6l12 12M18 6 6 18" />
      </svg>
    );
  if (name === "spark")
    return (
      <svg viewBox="0 0 24 24" className={className} {...stroke}>
        <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />
      </svg>
    );
  if (name === "play")
    return (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor">
        <path d="M9 7.5v9l8-4.5-8-4.5Z" />
      </svg>
    );
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.55 2 2.1 6.45 2.1 11.94c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.49 0 9.94-4.45 9.94-9.94 0-2.65-1.03-5.15-2.94-7zM12.04 20.15h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.35c0-4.54 3.7-8.23 8.25-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.7 8.2-8.24 8.2zm4.52-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.4-.12-.56.13-.17.24-.64.8-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.42h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.23-.17-.48-.29z" />
    </svg>
  );
}

function LogoMark({ size = 48 }: { size?: number }) {
  return (
    <img
      src={IMAGES.logo}
      alt="MS Software — الأعمال البرمجية"
      width={size}
      height={size}
      className="shrink-0 object-contain"
      style={{ width: size, height: size }}
    />
  );
}

export default function App() {
  const [lang, setLang] = useState<Lang>("ar");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("home");
  const t = content[lang];
  const isAr = lang === "ar";

  useEffect(() => {
    const html = document.documentElement;
    html.lang = lang;
    html.dir = t.dir;
    document.body.dataset.lang = lang;
  }, [lang, t.dir]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? Math.min(100, (window.scrollY / h) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const t1 = window.setTimeout(() => setLoaded(true), 1300);
    const t2 = window.setTimeout(() => setShowLoader(false), 1900);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, []);

  useEffect(() => {
    const ids = NAV.map((n) => n.id);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const flip = () => setLang((p) => (p === "ar" ? "en" : "ar"));

  const extraIcons: Record<string, ReactNode> = useMemo(
    () => ({
      store: <Icon name="store" className="h-6 w-6" />,
      chart: <Icon name="chart" className="h-6 w-6" />,
      shield: <Icon name="shield" className="h-6 w-6" />,
      mobile: <Icon name="mobile" className="h-6 w-6" />,
      cloud: <Icon name="cloud" className="h-6 w-6" />,
      support: <Icon name="support" className="h-6 w-6" />,
    }),
    [],
  );

  return (
    <div className={`min-h-screen bg-[#f4f8fc] text-slate-900 ${isAr ? "font-ar" : "font-en"}`}>
      <div className="fixed inset-x-0 top-0 z-[70] h-[3px] bg-transparent">
        <div
          className="h-full bg-gradient-to-l from-cyan-300 via-sky-400 to-blue-700"
          style={{ width: `${progress}%` }}
        />
      </div>
      {showLoader && (
        <div className={`transition-opacity duration-500 ${loaded ? "pointer-events-none opacity-0" : "opacity-100"}`}>
          <Loader isAr={isAr} />
        </div>
      )}

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-[#061428]/90 shadow-lg shadow-black/20 backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <LogoMark size={46} />
            <span className="hidden leading-tight sm:block">
              <span className="block text-[13px] font-extrabold tracking-wide text-white">MS SOFTWARE</span>
              <span className="block text-[11px] font-medium text-sky-200/80">
                {isAr ? "الأعمال البرمجية" : "Software Solutions"}
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className={`rounded-full px-3.5 py-2 text-[13.5px] font-semibold transition ${
                  active === n.id ? "bg-white/12 text-white" : "text-sky-100/80 hover:bg-white/8 hover:text-white"
                }`}
              >
                {t.nav[n.key]}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={company.phoneHref}
              className="hidden items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3 py-1.5 text-[13px] font-bold text-white hover:bg-white/15 xl:inline-flex"
              dir="ltr"
            >
              <Icon name="phone" className="h-4 w-4 text-cyan-300" />
              {company.phone}
            </a>
            <button
              onClick={flip}
              className="rounded-full border border-white/15 bg-white/8 px-3 py-1.5 text-xs font-bold tracking-wider text-white hover:bg-white/15"
              aria-label="Switch language"
            >
              {isAr ? "EN" : "عربي"}
            </button>
            <a href="#contact" className="btn-primary hidden !px-4 !py-2 text-[13px] md:inline-flex">
              {t.nav.cta}
            </a>
            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white lg:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
            >
              <Icon name={open ? "close" : "menu"} className="h-5 w-5" />
            </button>
          </div>
        </div>

        {open && (
          <div className="border-t border-white/10 bg-[#061428]/95 px-4 py-4 backdrop-blur-xl lg:hidden">
            <div className="flex flex-col gap-1">
              {NAV.map((n) => (
                <a
                  key={n.id}
                  href={`#${n.id}`}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-sm font-semibold text-sky-50 hover:bg-white/8"
                >
                  {t.nav[n.key]}
                </a>
              ))}
              <a
                href={company.phoneHref}
                className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-white/8 px-3 py-3 text-sm font-bold text-white"
                dir="ltr"
              >
                <Icon name="phone" className="h-4 w-4 text-cyan-300" />
                {company.phone}
              </a>
              <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-1">
                {t.nav.cta}
              </a>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* ================= COVER / HERO ================= */}
        <section id="home" className="relative isolate min-h-[100svh] overflow-hidden text-white">
          <img src={IMAGES.hero} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#04101f]/70 via-[#061428]/80 to-[#061428]" />
          <div className="absolute inset-0 mesh opacity-70" />
          <div className="grid-overlay absolute inset-0" />
          <div className="pointer-events-none absolute -top-24 start-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-sky-500/20 blur-[90px]" />

          <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col items-center justify-center px-4 pb-10 pt-28 text-center sm:px-6 lg:px-8 lg:pb-14">
            <div className="anim-scale relative mb-6">
              <div className="pointer-events-none absolute inset-8 rounded-full bg-sky-400/25 blur-3xl" />
              <img
                src={IMAGES.logo}
                alt="MS Software — الأعمال البرمجية"
                className="relative mx-auto w-[240px] object-contain sm:w-[300px] lg:w-[360px]"
              />
            </div>

            <div className="anim-up delay-1 mb-4 inline-flex items-center gap-2 rounded-full border border-sky-300/25 bg-sky-400/10 px-3 py-1.5 text-[12px] font-bold tracking-[0.18em] text-sky-200">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_#67e8f9]" />
              {t.hero.kicker}
            </div>
            <h1 className="anim-up delay-2 max-w-4xl text-3xl font-black leading-[1.2] tracking-tight sm:text-5xl lg:text-[54px]">
              {t.hero.title}
              <span className="mt-2 block gradient-text">{t.hero.highlight}</span>
            </h1>
            <p className="anim-up delay-3 mx-auto mt-5 max-w-2xl text-[15.5px] leading-8 text-sky-100/80 sm:text-base">
              {t.hero.subtitle}
            </p>
            <div className="anim-up delay-4 mt-8 flex flex-wrap items-center justify-center gap-3">
              <a href="#contact" className="btn-primary">
                {t.hero.cta}
                <Icon name="arrow" className={`h-4 w-4 ${isAr ? "rotate-180" : ""}`} />
              </a>
              <a href={company.phoneHref} className="btn-ghost" dir="ltr">
                <Icon name="phone" className="h-4 w-4" />
                {company.phone}
              </a>
            </div>

            <div className="anim-up delay-5 mt-12 grid w-full max-w-4xl grid-cols-2 overflow-hidden rounded-3xl border border-white/10 bg-white/6 backdrop-blur-md sm:grid-cols-4">
              {t.hero.stats.map((s, i) => (
                <div key={s.label} className={`px-5 py-5 ${i < 3 ? "sm:border-e sm:border-white/10" : ""} ${i % 2 === 0 ? "border-e border-white/10 sm:border-e-0" : ""} ${i < 2 ? "border-b border-white/10 sm:border-b-0" : ""}`}>
                  <div className="text-2xl font-black text-white sm:text-3xl">{s.value}</div>
                  <div className="mt-1 text-xs font-medium text-sky-100/70 sm:text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="relative z-10 -mt-1 overflow-hidden border-y border-white/5 bg-[#0a2144] py-4">
          <div className="marquee flex min-w-max gap-10 px-6 text-xs font-bold tracking-[0.22em] text-sky-200/70 uppercase">
            {[...t.industries, ...t.industries, ...t.industries].map((ind, i) => (
              <span key={i} className="flex items-center gap-10">
                {ind}
                <span className="h-1 w-1 rounded-full bg-cyan-400/70" />
              </span>
            ))}
          </div>
        </div>

        {/* ================= ABOUT ================= */}
        <section id="about" className="relative overflow-hidden bg-white py-20 lg:py-28">
          <div className="pointer-events-none absolute -start-24 top-10 h-72 w-72 rounded-full bg-sky-100 blur-3xl" />
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <Reveal className="relative">
              <div className="relative overflow-hidden rounded-[32px] shadow-2xl shadow-sky-900/15">
                <img src={IMAGES.about} alt="" className="h-[460px] w-full object-cover sm:h-[520px]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061428]/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 start-5 end-5 rounded-2xl bg-white/12 p-4 backdrop-blur-md">
                  <p className="text-sm font-bold text-white">{isAr ? "فريق متخصص · رؤية واضحة · تنفيذ دقيق" : "Specialist team · Clear vision · Precise execution"}</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -end-4 hidden w-48 overflow-hidden rounded-2xl border-4 border-white shadow-xl sm:block">
                <img src={IMAGES.growth} alt="" className="h-32 w-full object-cover" />
              </div>
            </Reveal>

            <div>
              <Reveal>
                <img src={IMAGES.logo} alt="MS Software" className="mb-5 h-20 w-20 object-contain" />
                <span className="section-kicker"><span className="opacity-50">02</span> {t.about.kicker}</span>
                <h2 className="mt-4 text-3xl font-black leading-tight text-[#061428] sm:text-4xl">{t.about.title}</h2>
                <p className="mt-5 text-lg font-semibold leading-8 text-sky-800">{t.about.lead}</p>
                <p className="mt-3 text-[15.5px] leading-8 text-slate-600">{t.about.body}</p>
              </Reveal>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <Reveal delay={80} className="rounded-2xl border border-sky-100 bg-gradient-to-br from-sky-50 to-white p-5">
                  <div className="mb-2 text-xs font-extrabold tracking-widest text-sky-600">{t.about.missionTitle}</div>
                  <p className="text-sm leading-7 text-slate-600">{t.about.mission}</p>
                </Reveal>
                <Reveal delay={160} className="rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50 to-white p-5">
                  <div className="mb-2 text-xs font-extrabold tracking-widest text-indigo-600">{t.about.visionTitle}</div>
                  <p className="text-sm leading-7 text-slate-600">{t.about.vision}</p>
                </Reveal>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {t.about.values.map((v, i) => (
                  <Reveal key={v.title} delay={80 * i} className="rounded-2xl bg-[#061428] p-4 text-white">
                    <div className="text-sm font-extrabold">{v.title}</div>
                    <p className="mt-1 hidden text-[11.5px] leading-5 text-sky-100/70 sm:block">{v.desc}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================= SERVICES ================= */}
        <section id="services" className="relative bg-[#07162c] py-20 text-white lg:py-28">
          <div className="absolute inset-0 opacity-40" style={{ backgroundImage: `url(${IMAGES.cta})`, backgroundSize: "cover" }} />
          <div className="absolute inset-0 bg-[#07162c]/88" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="mx-auto max-w-3xl text-center">
              <span className="section-kicker !bg-sky-400/10 !text-sky-200 !border-sky-400/20"><span className="opacity-50">03</span> {t.services.kicker}</span>
              <h2 className="mt-4 text-3xl font-black sm:text-4xl lg:text-5xl">{t.services.title}</h2>
              <p className="mt-4 text-sky-100/70 leading-8">{t.services.subtitle}</p>
            </Reveal>

            <div className="mt-14 space-y-10">
              {t.services.items.map((s, idx) => (
                <Reveal key={s.id}>
                  <article className={`grid overflow-hidden rounded-[32px] border border-white/10 bg-white/5 lg:grid-cols-2 ${idx === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}>
                    <div className="relative min-h-[280px]">
                      <img src={s.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#07162c] via-[#07162c]/20 to-transparent" />
                      <div className="absolute bottom-5 start-5 rounded-full bg-white/12 px-4 py-1.5 text-xs font-bold tracking-[0.2em] backdrop-blur">
                        {s.tag}  ·  {s.title}
                      </div>
                    </div>
                    <div className="p-7 sm:p-10">
                      <h3 className="text-2xl font-black leading-snug sm:text-3xl">{s.headline}</h3>
                      <p className="mt-3 text-[15px] leading-8 text-sky-100/75">{s.desc}</p>
                      <ul className="mt-6 space-y-4">
                        {s.points.map((p) => (
                          <li key={p.title} className="flex gap-3">
                            <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-cyan-300">
                              <Icon name="check" className="h-4 w-4" />
                            </span>
                            <div>
                              <div className="font-bold">{p.title}</div>
                              <p className="mt-0.5 text-sm leading-6 text-sky-100/65">{p.desc}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-14">
              <h3 className="mb-6 text-center text-xl font-bold text-sky-100">{t.extraServices.title}</h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {t.extraServices.items.map((it) => (
                  <div key={it.title} className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-sky-400/40 hover:bg-white/8">
                    <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-sky-400/15 text-cyan-300">
                      {extraIcons[it.icon]}
                    </div>
                    <div className="font-bold">{it.title}</div>
                    <p className="mt-1 text-sm text-sky-100/65">{it.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ================= PROCESS ================= */}
        <section className="bg-[#f4f8fc] py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="max-w-2xl">
              <span className="section-kicker">{t.process.kicker}</span>
              <h2 className="mt-4 text-3xl font-black text-[#061428] sm:text-4xl">{t.process.title}</h2>
            </Reveal>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {t.process.steps.map((st, i) => (
                <Reveal key={st.num} delay={i * 90} className="relative rounded-3xl bg-white p-6 shadow-lg shadow-sky-900/5">
                  <div className="text-4xl font-black text-sky-100">{st.num}</div>
                  <h3 className="mt-3 text-lg font-extrabold text-[#061428]">{st.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{st.desc}</p>
                  {i < 3 && (
                    <span className="absolute top-8 hidden h-px w-8 bg-sky-200 lg:block ltr:right-[-16px] rtl:left-[-16px]" />
                  )}
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ================= ADVANTAGES ================= */}
        <section id="advantages" className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="mx-auto max-w-2xl text-center">
              <span className="section-kicker"><span className="opacity-50">04</span> {t.advantages.kicker}</span>
              <h2 className="mt-4 text-3xl font-black text-[#061428] sm:text-4xl">{t.advantages.title}</h2>
            </Reveal>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {t.advantages.items.map((a, i) => (
                <Reveal key={a.title} delay={i * 100} as="article" className="group overflow-hidden rounded-[28px] border border-slate-100 bg-[#f7fbff] shadow-sm">
                  <div className="relative h-52 overflow-hidden">
                    <img src={a.image} alt="" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#061428]/55 to-transparent" />
                    <div className="absolute bottom-4 start-4 text-sm font-extrabold text-white">{a.title}</div>
                  </div>
                  <p className="p-6 text-[15px] leading-8 text-slate-600">{a.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ================= TESTIMONIALS ================= */}
        <section className="bg-[#f4f8fc] py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="mx-auto max-w-2xl text-center">
              <span className="section-kicker">{t.testimonials.kicker}</span>
              <h2 className="mt-4 text-3xl font-black text-[#061428] sm:text-4xl">{t.testimonials.title}</h2>
            </Reveal>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {t.testimonials.items.map((item, i) => (
                <Reveal key={item.name} delay={i * 90} className="flex flex-col rounded-[28px] bg-white p-7 shadow-lg shadow-sky-900/5">
                  <div className="mb-4 text-4xl font-black text-sky-200">“</div>
                  <p className="flex-1 text-[15px] leading-8 text-slate-700">{item.quote}</p>
                  <div className="mt-6 border-t border-slate-100 pt-4">
                    <div className="font-extrabold text-[#061428]">{item.name}</div>
                    <div className="text-xs font-semibold text-sky-700">{item.role}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="relative overflow-hidden py-20">
          <img src={IMAGES.cta} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-[#061428]/80" />
          <div className="relative mx-auto max-w-4xl px-4 text-center text-white sm:px-6">
            <Reveal>
              <span className="section-kicker !bg-white/10 !text-sky-200 !border-white/15">{t.cta.kicker}</span>
              <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">{t.cta.title}</h2>
              <p className="mx-auto mt-4 max-w-2xl text-sky-100/75 leading-8">{t.cta.subtitle}</p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a href="#contact" className="btn-primary">
                  {t.cta.button}
                  <Icon name="arrow" className={`h-4 w-4 ${isAr ? "rotate-180" : ""}`} />
                </a>
                <a href={company.phoneHref} className="btn-ghost">
                  <Icon name="phone" className="h-4 w-4" />
                  {t.cta.phone}
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <ContactSection t={t} isAr={isAr} />
      </main>

      <BookingsPanel isAr={isAr} />

      <footer className="bg-[#04101f] pt-14 text-sky-100/80">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-10 sm:px-6 lg:grid-cols-4 lg:px-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <LogoMark size={72} />
              <div>
                <div className="font-extrabold text-white">{t.footer.brand}</div>
                <div className="text-xs tracking-[0.2em] text-sky-300/70">INNOVATE · BUILD · DELIVER</div>
                <a href={company.phoneHref} className="mt-1 inline-block text-sm font-bold text-cyan-300" dir="ltr">
                  {company.phone}
                </a>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm leading-7">{t.footer.tagline}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              <Social href="#" label="LinkedIn">in</Social>
              <Social href="#" label="X">X</Social>
              <Social href="#" label="Instagram">Ig</Social>
              <Social href={company.waHref} label="WhatsApp">Wa</Social>
            </div>
          </div>
          <div>
            <div className="mb-3 text-sm font-extrabold text-white">{t.footer.col1}</div>
            <ul className="space-y-2 text-sm">
              {NAV.map((n) => (
                <li key={n.id}>
                  <a href={`#${n.id}`} className="hover:text-white">
                    {t.nav[n.key]}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="mb-3 text-sm font-extrabold text-white">{t.footer.col3}</div>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={company.phoneHref} dir="ltr" className="hover:text-white">
                  {company.phone}
                </a>
              </li>
              <li>
                <a href={company.waHref} className="hover:text-white">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="#bookings" className="text-sky-300/70 hover:text-white">
                  {isAr ? "لوحة الحجوزات" : "Bookings desk"}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/8 py-5 text-center text-xs text-sky-200/50">
          © {new Date().getFullYear()} MS Software — {t.footer.rights}
          <span className="mx-2 opacity-40">·</span>
          v1.0.0
        </div>
      </footer>

      <a
        href={company.waHref}
        target="_blank"
        rel="noreferrer"
        className="wa-btn fixed bottom-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-emerald-700/30 ltr:right-5 rtl:left-5"
        aria-label={t.wa}
        title={t.wa}
      >
        <Icon name="wa" className="h-7 w-7" />
      </a>
    </div>
  );
}

function Loader({ isAr }: { isAr: boolean }) {
  return (
    <div className="fixed inset-0 z-[80] flex flex-col items-center justify-center bg-[#061428] text-white">
      <div className="relative flex h-36 w-36 items-center justify-center">
        <span className="loader-ring absolute inset-0 rounded-full border-2 border-sky-400/20 border-t-sky-400" />
        <img src={IMAGES.logo} alt="MS Software" className="relative h-[118px] w-[118px] object-contain" />
      </div>
      <p className="mt-6 text-xs font-bold tracking-[0.35em] text-sky-200/70">
        {isAr ? "الأعمال البرمجية" : "SOFTWARE SOLUTIONS"}
      </p>
    </div>
  );
}

function ContactSection({
  t,
  isAr,
}: {
  t: (typeof content)[Lang];
  isAr: boolean;
}) {
  const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.service || !form.message.trim()) {
      setStatus("err");
      return;
    }
    setStatus("sending");
    saveBooking(form);
    window.setTimeout(() => {
      window.open(whatsappBookingUrl(form), "_blank", "noopener,noreferrer");
      setStatus("ok");
    }, 500);
  };

  const info = [
    { icon: "phone" as const, label: t.contact.info.phoneLabel, value: t.contact.info.phone, href: company.phoneHref },
    { icon: "clock" as const, label: t.contact.info.hoursLabel, value: t.contact.info.hours },
  ];

  return (
    <section id="contact" className="relative bg-[#eef5fb] py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <Reveal>
          <span className="section-kicker"><span className="opacity-50">05</span> {t.contact.kicker}</span>
          <h2 className="mt-4 text-3xl font-black text-[#061428] sm:text-4xl">{t.contact.title}</h2>
          <p className="mt-3 text-[15.5px] leading-8 text-slate-600">{t.contact.subtitle}</p>
          <div className="mt-8 space-y-3">
            {info.map((row) => (
              <div key={row.label} className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-700">
                  <Icon name={row.icon} className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs font-bold text-sky-700">{row.label}</div>
                  {row.href ? (
                    <a href={row.href} className="text-sm font-semibold text-[#061428] hover:text-sky-700">
                      {row.value}
                    </a>
                  ) : (
                    <div className="text-sm font-semibold text-[#061428]">{row.value}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            <a href="#" className="rounded-full bg-[#061428] px-4 py-2 text-xs font-bold text-white">LinkedIn</a>
            <a href="#" className="rounded-full bg-[#061428] px-4 py-2 text-xs font-bold text-white">X / Twitter</a>
            <a href="#" className="rounded-full bg-[#061428] px-4 py-2 text-xs font-bold text-white">Instagram</a>
            <a href={company.waHref} className="rounded-full bg-[#25D366] px-4 py-2 text-xs font-bold text-white">WhatsApp</a>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="overflow-hidden rounded-[28px] bg-white p-6 shadow-xl shadow-sky-900/10 sm:p-8">
            {status === "ok" ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                <span className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                  <Icon name="check" className="h-8 w-8" />
                </span>
                <h3 className="text-2xl font-black text-[#061428]">{t.contact.form.successTitle}</h3>
                <p className="mt-2 max-w-sm text-slate-600">{t.contact.form.successBody}</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label={t.contact.form.name}>
                    <input
                      className="input"
                      placeholder={t.contact.form.namePh}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </Field>
                  <Field label={t.contact.form.phone}>
                    <input
                      className="input"
                      placeholder={t.contact.form.phonePh}
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </Field>
                  <Field label={t.contact.form.service}>
                    <select
                      className="input"
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                    >
                      <option value="">{t.contact.form.servicePh}</option>
                      {t.contact.form.services.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>
                <Field label={t.contact.form.message}>
                  <textarea
                    className="input min-h-[140px] resize-y"
                    placeholder={t.contact.form.messagePh}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </Field>
                {status === "err" && <p className="text-sm font-semibold text-rose-600">{t.contact.form.error}</p>}
                <button type="submit" className="btn-primary w-full" disabled={status === "sending"}>
                  {status === "sending" ? t.contact.form.sending : t.contact.form.submit}
                  <Icon name="arrow" className={`h-4 w-4 ${isAr ? "rotate-180" : ""}`} />
                </button>
                <p className="text-center text-xs text-slate-500">
                  {isAr
                    ? "يُرسل الطلب مباشرة إلى واتساب الشركة على 0547032332"
                    : "The request is sent directly to the company WhatsApp 0547032332"}
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function BookingsPanel({ isAr }: { isAr: boolean }) {
  const [open, setOpen] = useState(false);
  const [pin, setPin] = useState("");
  const [ok, setOk] = useState(false);
  const [err, setErr] = useState(false);
  const [list, setList] = useState<Booking[]>([]);

  useEffect(() => {
    const sync = () => setOpen(window.location.hash === "#bookings");
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  useEffect(() => {
    if (ok) setList(loadBookings());
  }, [ok, open]);

  if (!open) return null;

  const close = () => {
    setOpen(false);
    setPin("");
    setOk(false);
    setErr(false);
    window.location.hash = "";
  };

  return (
    <div className="fixed inset-0 z-[90] overflow-y-auto bg-[#061428]/70 p-4 backdrop-blur-sm">
      <div className="mx-auto my-8 max-w-3xl rounded-3xl bg-white p-6 shadow-2xl sm:p-8">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <h2 className="text-2xl font-black text-[#061428]">{isAr ? "لوحة حجوزات الاستشارة" : "Consultation bookings"}</h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              {isAr
                ? "عندما يضغط العميل «إرسال الطلب» يصل الطلب إلى واتساب 0547032332، ويُحفظ هنا أيضاً. ادخل بالرمز 2332 لمراجعة الأسماء والأرقام."
                : "When a client submits the form, the request is sent to WhatsApp 0547032332 and saved here. Enter PIN 2332 to review names and numbers."}
            </p>
          </div>
          <button onClick={close} className="rounded-full bg-slate-100 px-3 py-1 text-sm font-bold text-slate-600">
            {isAr ? "إغلاق" : "Close"}
          </button>
        </div>

        {!ok ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (pin.trim() === BOOKINGS_PIN) {
                setOk(true);
                setErr(false);
              } else setErr(true);
            }}
            className="mx-auto max-w-sm space-y-3"
          >
            <label className="block text-sm font-bold text-[#0d2a56]">{isAr ? "رمز الدخول" : "Access PIN"}</label>
            <input
              className="input text-center tracking-[0.4em]"
              inputMode="numeric"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              placeholder="••••"
            />
            {err && <p className="text-sm font-semibold text-rose-600">{isAr ? "الرمز غير صحيح" : "Incorrect PIN"}</p>}
            <button className="btn-primary w-full" type="submit">
              {isAr ? "دخول" : "Enter"}
            </button>
          </form>
        ) : (
          <div className="space-y-4">
            <div className="rounded-2xl bg-sky-50 p-4 text-sm leading-7 text-sky-900">
              {isAr ? (
                <>
                  <b>كيف تتابع الحجوزات؟</b>
                  <br />1) واتساب على 0547032332 — كل طلب يفتح محادثة جاهزة بالنص.
                  <br />2) هذه اللوحة — تظهر الطلبات المحفوظة على هذا الجهاز.
                </>
              ) : (
                <>
                  <b>How to check bookings</b>
                  <br />1) WhatsApp 0547032332 — each request opens a ready message.
                  <br />2) This desk — shows requests saved on this device.
                </>
              )}
            </div>
            {list.length === 0 ? (
              <p className="py-10 text-center text-slate-500">{isAr ? "لا توجد حجوزات بعد." : "No bookings yet."}</p>
            ) : (
              list.map((b) => (
                <article key={b.id} className={`rounded-2xl border p-4 ${b.done ? "border-emerald-100 bg-emerald-50/50" : "border-slate-100 bg-slate-50"}`}>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="font-extrabold text-[#061428]">{b.name}</div>
                    <div className="text-xs text-slate-500">{new Date(b.at).toLocaleString(isAr ? "ar-SA" : "en-GB")}</div>
                  </div>
                  <div className="mt-1 font-bold text-sky-800" dir="ltr">
                    {b.phone}
                  </div>
                  <div className="mt-1 text-sm text-slate-600">{b.service}</div>
                  <p className="mt-2 text-sm leading-7 text-slate-700">{b.message}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <a href={`tel:${b.phone}`} className="rounded-full bg-[#061428] px-3 py-1.5 text-xs font-bold text-white">
                      {isAr ? "اتصال" : "Call"}
                    </a>
                    <a
                      href={`https://wa.me/966${b.phone.replace(/^0/, "").replace(/\D/g, "")}`}
                      className="rounded-full bg-[#25D366] px-3 py-1.5 text-xs font-bold text-white"
                    >
                      WhatsApp
                    </a>
                    <button
                      onClick={() => setList(updateBooking(b.id, { done: !b.done }))}
                      className="rounded-full bg-white px-3 py-1.5 text-xs font-bold text-sky-800 ring-1 ring-sky-200"
                    >
                      {b.done ? (isAr ? "غير مكتمل" : "Reopen") : isAr ? "تم التواصل" : "Mark done"}
                    </button>
                  </div>
                </article>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-bold text-[#0d2a56]">{label}</span>
      {children}
    </label>
  );
}

function Social({ href, label, children }: { href: string; label: string; children: ReactNode }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="inline-flex h-10 min-w-10 items-center justify-center rounded-full border border-white/12 bg-white/5 px-3 text-xs font-bold text-white hover:bg-sky-500 hover:border-sky-400"
    >
      {children}
    </a>
  );
}
