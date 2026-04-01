import React from "react";
import { ArrowRight, ChevronRight } from "lucide-react";

export default function LighthousePointAdvisorsSite() {
  const serviceCategories = [
    {
      title: "Strategy & Value Creation",
      items: [
        "Define value-creation priorities and execution roadmap",
        "Develop 100-day plans and multi-year growth strategies",
        "Source and engage off-market acquisition targets",
        "Map competitive landscape to inform M&A and pricing",
      ],
    },
    {
      title: "Operations & Integration",
      items: [
        "Lead post-acquisition integration and operating alignment",
        "Optimize network, logistics, and service-level performance",
        "Capture procurement synergies across pricing and terms",
        "Standardize sourcing, vendors, and purchasing discipline",
      ],
    },
    {
      title: "Commercial & Growth",
      items: [
        "Drive pricing discipline and margin expansion",
        "Improve sales structure, incentives, and segmentation",
        "Enhance customer experience and retention",
        "Align commercial execution with PE performance expectations",
      ],
    },
    {
      title: "Organization & Leadership",
      items: [
        "Assess and upgrade organizational structure and talent",
        "Coach leadership teams in performance-driven environments",
        "Implement KPIs, dashboards, and operating cadence",
        "Support change management and cultural transition",
        "Provide interim leadership during critical transitions",
      ],
    },
  ];

  const founderHighlights = [
    <>Led a national <span className="font-semibold">industrial distribution</span> platform</>,
    <><span className="font-semibold">265</span> employees across multiple locations</>,
    <><span className="font-semibold">60+</span> tractors &amp; trailers</>,
    <><span className="font-semibold">4M+</span> miles driven annually</>,
    <><span className="font-semibold">$50M to $500M+</span> revenue growth track record</>,
    <><span className="font-semibold">&gt;$50M</span> working capital improvement</>,
    <><span className="font-semibold">&gt;$9M</span> synergies captured</>,
    <>Multiple successful ownership transitions</>,
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <svg
              width="170"
              height="40"
              viewBox="0 0 170 40"
              className="shrink-0"
              aria-label="Lighthouse Point Advisors logo"
              role="img"
            >
              <defs>
                <linearGradient id="lpaBeamRight" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#caa55b" stopOpacity="0.95" />
                  <stop offset="70%" stopColor="#caa55b" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#caa55b" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="lpaBeamLeft" x1="1" y1="0" x2="0" y2="0">
                  <stop offset="0%" stopColor="#caa55b" stopOpacity="0.95" />
                  <stop offset="70%" stopColor="#caa55b" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#caa55b" stopOpacity="0" />
                </linearGradient>
              </defs>

              <g transform="translate(1,1)">
                <rect x="0" y="26" width="30" height="2.2" rx="1.1" fill="#0f172a" />
                <rect x="14" y="11" width="2.2" height="15" rx="1.1" fill="#0f172a" />
                <rect x="11.4" y="8.2" width="7.4" height="2.1" rx="1" fill="#0f172a" />
                <circle cx="15.1" cy="5.8" r="2.2" fill="#ffffff" stroke="#0f172a" strokeWidth="1" />
                <rect x="4" y="5.3" width="22.2" height="1" rx="0.5" fill="#0f172a" opacity="0.72" />
                <polygon points="16.7,5.8 31,1.9 31,9.7" fill="url(#lpaBeamRight)" />
                <polygon points="13.5,5.8 0,1.9 0,9.7" fill="url(#lpaBeamLeft)" />
              </g>

              <g transform="translate(45,2)">
                <text
                  x="0"
                  y="15"
                  fill="#111827"
                  fontSize="16"
                  fontWeight="600"
                  letterSpacing="-0.02em"
                  fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
                >
                  Lighthouse Point
                </text>
                <text
                  x="0"
                  y="28"
                  fill="#caa55b"
                  fontSize="9.5"
                  fontWeight="500"
                  letterSpacing="0.22em"
                  fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
                >
                  ADVISORS
                </text>
              </g>
            </svg>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
            <a href="#about" className="hover:text-slate-900">About</a>
            <a href="#services" className="hover:text-slate-900">Services</a>
            <a href="#founder" className="hover:text-slate-900">Founder</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
            <a href="#contact" className="rounded-2xl bg-slate-900 px-5 py-2.5 text-white">
              Get in Touch
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')] bg-cover bg-center px-6 py-24 md:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/55 to-black/45" />
          <div className="relative max-w-5xl text-white">
            <div className="inline-flex items-center rounded-full border border-white/30 bg-black/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm">
              Private Equity • Value Creation • Operational Improvement
            </div>
            <h1 className="mt-8 text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
              Strategic advisory grounded in operating experience.
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-white/90">
              Lighthouse Point Advisors works with private equity firms and middle-market companies to drive operational improvement, strategic growth, and scalable performance.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="https://www.linkedin.com/in/greg-leidner-9a7136/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/30 bg-black/20 px-6 py-3 text-white hover:bg-black/30 backdrop-blur-sm"
              >
                View LinkedIn
              </a>
              <a href="#services" className="flex items-center gap-2 rounded-2xl bg-white px-6 py-3 font-medium text-slate-900 hover:bg-slate-100">
                Explore Services <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#founder" className="rounded-2xl border border-white/30 px-6 py-3 text-white hover:bg-black/20">
                Meet the Founder
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-semibold tracking-tight">About</h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Lighthouse Point Advisors advises private equity firms and middle-market companies on value creation, operational improvement, and strategic growth initiatives.
              </p>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-12 max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight">Services</h2>
            <p className="mt-4 text-slate-600">
              Lighthouse Point Advisors supports private equity firms and portfolio companies across a focused set of high-impact areas.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2">
            {serviceCategories.map((category) => (
              <div key={category.title} className="rounded-2xl border border-slate-200 p-6 transition duration-200 hover:-translate-y-0.5 hover:shadow-md">
                <h3 className="mb-4 text-lg font-semibold">{category.title}</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  {category.items.map((item, idx) => (
                    <li key={`${category.title}-${idx}`} className="flex items-start gap-2">
                      <ChevronRight className="mt-[2px] h-4 w-4 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="founder" className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">Greg Leidner</h2>
              <p className="mt-4 text-slate-600">
                Founder, Lighthouse Point Advisors. Former CEO, United Pipe &amp; Steel | Former BCG Consultant | MBA, MIT Sloan.
                <br />
                <br />
                Greg has led businesses through significant growth, operational transformation, and multiple successful ownership transitions, bringing a practical, operator-led perspective to every engagement focused on execution and measurable outcomes.
                <br />
                <br />
                Greg lives in Florida with his wife and three children. When he’s not driving his kids to and from their various activities (which is most of the time), he enjoys fishing, golf, and tennis.
              </p>
            </div>
            <div>
              <div className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Selected Experience
              </div>
              <div className="space-y-2">
                {founderHighlights.map((item, idx) => (
                  <div key={idx} className="flex gap-2 text-slate-700">
                    <ChevronRight className="mt-1 h-4 w-4 shrink-0" />
                    <div>{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
          <div className="rounded-2xl border border-slate-200 p-10 transition duration-200 hover:shadow-sm">
            <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
            <a href="mailto:greg@lighthousepointadv.com" className="mt-4 inline-block text-slate-900 underline">
              greg@lighthousepointadv.com
            </a>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/greg-leidner-9a7136/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-5 py-2.5 text-white hover:bg-slate-800"
              >
                View LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
