import React from "react";
import { ArrowRight, ChevronRight } from "lucide-react";

export default function LighthousePointAdvisorsSite() {
  React.useEffect(() => {
    document.title = "Lighthouse Point Advisors | Strategic Advisory";

    const els = document.querySelectorAll(".animate-fade-in");
    els.forEach((el, i) => {
      el.style.opacity = 0;
      el.style.transform = "translateY(10px)";
      setTimeout(() => {
        el.style.transition = "all 0.6s ease";
        el.style.opacity = 1;
        el.style.transform = "translateY(0px)";
      }, i * 120);
    });
  }, []);

  const serviceCategories = [
    {
      title: "Pre-Transaction Preparation",
      items: [
        "Clarify value-creation priorities before a process begins",
        "Assess organizational readiness and leadership gaps",
        "Prepare the business for a smoother ownership transition",
        "Help CEOs think through what changes after closing",
      ],
    },
    {
      title: "Post-Transaction Integration",
      items: [
        "Support leadership teams through the first 100 days",
        "Establish operating cadence, KPIs, and decision-making rhythm",
        "Reduce friction between management teams and new owners",
        "Translate sponsor expectations into practical execution",
      ],
    },
    {
      title: "Operational & Commercial Improvement",
      items: [
        "Improve pricing discipline, margin management, and execution",
        "Optimize operations, procurement, network, and service levels",
        "Strengthen reporting, dashboards, and performance visibility",
        "Build scalable systems that support growth without disruption",
      ],
    },
    {
      title: "Leadership & Organizational Support",
      items: [
        "Coach leaders entering a more structured ownership environment",
        "Support newly elevated managers and function heads",
        "Align roles, accountability, and organizational design",
        "Provide practical support during periods of change and uncertainty",
      ],
    },
  ];

  const ceoMoments = [
    "Preparing for a potential sale or recapitalization",
    "Navigating the first months after a completed transaction",
    "Adjusting to a new board, reporting cadence, and ownership expectations",
    "Scaling the business without losing operational control",
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
            <a href="#founder" className="hover:text-slate-900">Greg</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
            <a href="#contact" className="rounded-2xl bg-slate-900 px-5 py-2.5 text-white">
              Get in Touch
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')] bg-cover bg-center px-6 py-24 shadow-lg md:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/55 to-black/45" />
          <div className="relative max-w-5xl text-white">
            <div className="inline-flex items-center rounded-full border border-white/30 bg-black/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm">
              For CEOs Preparing for Change
            </div>
            <h1 className="mt-8 text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
              Practical guidance for CEOs preparing for an exit or leading through life after a transaction.
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-white/90">
              Lighthouse Point Advisors helps leadership teams navigate the transition from founder-led or privately held businesses into more structured ownership environments, with hands-on support before a transaction, immediately after close, and during the push to build a stronger business.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#services" className="flex items-center gap-2 rounded-2xl bg-white px-6 py-3 font-medium text-slate-900 hover:bg-slate-100">
                Explore Services <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#founder" className="rounded-2xl border border-white/30 px-6 py-3 text-white hover:bg-black/20">
                Meet Greg
              </a>
              <a
                href="https://www.linkedin.com/in/greg-leidner-9a7136/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/30 bg-black/20 px-6 py-3 text-white hover:bg-black/30 backdrop-blur-sm"
              >
                View LinkedIn
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-[1.15fr_0.85fr] md:items-start">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">About</h2>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                Lighthouse Point Advisors was built for CEOs and leadership teams at moments of meaningful transition.
              </p>
              <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
                <p>
                  For some companies, that means preparing the business for a potential exit, recapitalization, or new ownership structure. For others, it means figuring out how to lead effectively once the transaction is done and expectations, reporting, and pace all change.
                </p>
                <p>
                  The firm brings an operator’s perspective to those moments. Rather than offering abstract advice, Lighthouse Point Advisors helps management teams think clearly, prioritize the right actions, and execute with discipline during periods that can feel exciting, unfamiliar, and demanding all at once.
                </p>
                <p>
                  While private equity sponsors may also find the work highly relevant, the focus is on helping CEOs and leadership teams succeed in the real day-to-day environment of transition, integration, performance improvement, and growth.
                </p>
              </div>
            </div>

            <div className="grid gap-6">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
                alt="Executive team meeting"
                className="h-64 w-full rounded-3xl object-cover shadow-sm"
              />
              <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Especially useful for CEOs who are
                </div>
                <div className="mt-5 space-y-3 text-sm text-slate-600">
                  {ceoMoments.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <ChevronRight className="mt-[2px] h-4 w-4 shrink-0 text-slate-400" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-12 max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight">Services</h2>
            <p className="mt-4 text-slate-600">
              Support designed for CEOs and leadership teams facing a transaction, adapting to new ownership, or building a stronger operating model after close.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2 animate-fade-in">
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
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-[0.9fr_1.1fr] md:items-start">
            <div className="space-y-6">
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                <img
                  src="/greg.jpeg"
                  alt="Greg Leidner"
                  className="h-[26rem] w-full object-cover"
                />
              </div>
              <img
                src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80"
                alt="Boats at a marina"
                className="h-48 w-full rounded-3xl object-cover shadow-sm"
              />
            </div>

            <div>
              <h2 className="text-3xl font-semibold tracking-tight">Meet Greg</h2>
              <p className="mt-4 text-slate-600">
                Founder, Lighthouse Point Advisors. Former CEO, United Pipe &amp; Steel | Former BCG Consultant | MBA, MIT Sloan.
              </p>
              <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
                <p>
                  Greg has led businesses through significant growth, operational transformation, and multiple successful ownership transitions. His perspective is shaped by years of operating experience, not just advisory work, which is why his approach tends to resonate with CEOs who want practical help rather than abstract frameworks.
                </p>
                <p>
                  He understands what it feels like to prepare a business for a sale, to lead through ownership change, and to keep a management team aligned while expectations rise. That firsthand perspective is central to the firm’s work.
                </p>
                <p>
                  Greg lives in Florida with his wife and three children. When he’s not driving his kids to and from their various activities, he enjoys fishing, golf, and tennis.
                </p>
              </div>

              <div className="mt-8">
                <div className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Selected Experience
                </div>

                <div className="space-y-3 text-slate-700">
                  <div className="text-lg font-semibold leading-snug text-slate-900">
                    Led a national industrial distribution platform over two decades
                  </div>

                  <div className="ml-5 space-y-2.5 text-sm text-slate-600">
                    <div className="flex gap-2">
                      <ChevronRight className="mt-[3px] h-4 w-4 shrink-0 text-slate-400" />
                      <div>265 employees across multiple locations</div>
                    </div>
                    <div className="flex gap-2">
                      <ChevronRight className="mt-[3px] h-4 w-4 shrink-0 text-slate-400" />
                      <div>60+ tractors &amp; trailers</div>
                    </div>
                    <div className="flex gap-2">
                      <ChevronRight className="mt-[3px] h-4 w-4 shrink-0 text-slate-400" />
                      <div>4M+ miles driven annually</div>
                    </div>
                    <div className="flex gap-2">
                      <ChevronRight className="mt-[3px] h-4 w-4 shrink-0 text-slate-400" />
                      <div><span className="font-medium text-slate-900">$50M to $500M+</span> revenue growth</div>
                    </div>
                    <div className="flex gap-2">
                      <ChevronRight className="mt-[3px] h-4 w-4 shrink-0 text-slate-400" />
                      <div><span className="font-medium text-slate-900">&gt;$50M</span> working capital improvement</div>
                    </div>
                    <div className="flex gap-2">
                      <ChevronRight className="mt-[3px] h-4 w-4 shrink-0 text-slate-400" />
                      <div><span className="font-medium text-slate-900">&gt;$9M</span> synergies captured</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
          <div className="rounded-2xl border border-slate-200 p-10 transition duration-200 hover:shadow-sm">
            <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
            <p className="mt-3 max-w-2xl text-slate-600">
              If you are a CEO preparing for a transition or working through the realities of new ownership, Lighthouse Point Advisors would be glad to start a conversation.
            </p>
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
