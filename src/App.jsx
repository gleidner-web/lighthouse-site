import React from "react";
import gregPhoto from "./greg.jpeg";
import { ArrowRight, ChevronRight } from "lucide-react";
import {
  ArrowRight,
  ChevronRight,
  Mail,
  Linkedin,
  CheckCircle2,
} from "lucide-react";

export default function LighthousePointAdvisorsSite() {
React.useEffect(() => {
    document.title = "Lighthouse Point Advisors | Strategic Advisory";
    document.title = "Lighthouse Point Advisors | Strategic Advisory for CEOs";

const existingScript = document.querySelector(
'script[src="https://www.googletagmanager.com/gtag/js?id=G-6YC2WXL1S3"]'
@@ -26,73 +32,95 @@ export default function LighthousePointAdvisorsSite() {
document.head.appendChild(script2);
}

    const els = document.querySelectorAll(".animate-fade-in");
    const els = document.querySelectorAll("[data-reveal]");
els.forEach((el, i) => {
el.style.opacity = 0;
      el.style.transform = "translateY(10px)";
      el.style.transform = "translateY(16px)";
setTimeout(() => {
        el.style.transition = "all 0.6s ease";
        el.style.transition = "all 0.7s ease";
el.style.opacity = 1;
        el.style.transform = "translateY(0px)";
      }, i * 120);
        el.style.transform = "translateY(0)";
      }, i * 90);
});
}, []);

const serviceCategories = [
{
      title: "Performance & Strategic Readiness",
      title: "Performance Improvement",
      description:
        "Target the areas that matter most to profitability, cash flow, and execution.",
items: [
        "Clarify the highest-impact priorities to improve business performance",
        "Assess organizational readiness, leadership gaps, and execution risks",
        "Strengthen the business for scale, resilience, or future strategic options",
        "Help CEOs think through what needs to change to shift trajectory",
        "Pricing discipline and margin improvement",
        "Operational performance and service-level improvement",
        "Working capital and execution visibility",
        "KPIs, management cadence, and performance accountability",
],
},
{
      title: "Ownership Transition Support",
      title: "Leadership & Organizational Effectiveness",
      description:
        "Help leadership teams operate with greater clarity, discipline, and alignment.",
items: [
        "Support leadership teams through the first 100 days",
        "Establish operating cadence, KPIs, and decision-making rhythm",
        "Reduce friction between management teams and new owners",
        "Translate sponsor expectations into practical execution",
        "Leadership team alignment and role clarity",
        "Organizational design and accountability",
        "Support for newly elevated leaders and managers",
        "Decision-making rhythm and execution follow-through",
],
},
{
      title: "Operational & Commercial Improvement",
      title: "Strategic Readiness",
      description:
        "Prepare the business for scale, resilience, and stronger strategic options.",
items: [
        "Improve pricing discipline, margin management, and execution",
        "Optimize operations, procurement, network, and service levels",
        "Strengthen reporting, dashboards, and performance visibility",
        "Build scalable systems that support growth without disruption",
        "Business readiness for growth or complexity",
        "Assessment of execution risks and leadership gaps",
        "Prioritization of highest-impact initiatives",
        "Scalable operating structure for the next stage",
],
},
{
      title: "Leadership & Organizational Support",
      title: "Ownership Transition Support",
      description:
        "Support CEOs and management teams through periods of transaction or ownership change.",
items: [
        "Coach leaders entering a more structured ownership environment",
        "Support newly elevated managers and function heads",
        "Align roles, accountability, and organizational design",
        "Provide practical support during periods of change and uncertainty",
        "First 100 days support",
        "Management team alignment with new owners",
        "Translation of sponsor expectations into execution",
        "Reduced friction during transition and change",
],
},
];

  const ceoMoments = [
    "Performance has plateaued and needs to improve",
    "The business is scaling but systems and structure have not kept up",
    "Leadership teams need to operate at a higher level",
    "Preparing for a transaction or evaluating long-term strategic options",
  const whoWeHelp = [
    "Founder-led and family-influenced businesses reaching a more demanding stage of growth",
    "CEOs preparing for a transaction, recapitalization, or ownership transition",
    "Leadership teams that need stronger execution, structure, and operating discipline",
    "Private equity-backed management teams adjusting to a higher-performance environment",
  ];

  const howWeHelp = [
    "Clarify what matters most",
    "Focus leadership attention on the highest-value issues",
    "Translate strategy into practical execution",
    "Support management teams through moments that carry real pressure",
  ];

  const experienceStats = [
    { value: "$50M to $500M+", label: "Revenue growth" },
    { value: ">$50M", label: "Working capital improvement" },
    { value: ">$9M", label: "Synergies captured" },
    { value: "265", label: "Employees led across multiple locations" },
];

return (
<div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur">
<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
          <a href="#" className="flex items-center gap-3">
<svg
              width="170"
              width="178"
height="40"
              viewBox="0 0 170 40"
              viewBox="0 0 178 40"
className="shrink-0"
aria-label="Lighthouse Point Advisors logo"
role="img"
@@ -114,8 +142,23 @@ export default function LighthousePointAdvisorsSite() {
<rect x="0" y="26" width="30" height="2.2" rx="1.1" fill="#0f172a" />
<rect x="14" y="11" width="2.2" height="15" rx="1.1" fill="#0f172a" />
<rect x="11.4" y="8.2" width="7.4" height="2.1" rx="1" fill="#0f172a" />
                <circle cx="15.1" cy="5.8" r="2.2" fill="#ffffff" stroke="#0f172a" strokeWidth="1" />
                <rect x="4" y="5.3" width="22.2" height="1" rx="0.5" fill="#0f172a" opacity="0.72" />
                <circle
                  cx="15.1"
                  cy="5.8"
                  r="2.2"
                  fill="#ffffff"
                  stroke="#0f172a"
                  strokeWidth="1"
                />
                <rect
                  x="4"
                  y="5.3"
                  width="22.2"
                  height="1"
                  rx="0.5"
                  fill="#0f172a"
                  opacity="0.72"
                />
<polygon points="16.7,5.8 31,1.9 31,9.7" fill="url(#lpaBeamRight)" />
<polygon points="13.5,5.8 0,1.9 0,9.7" fill="url(#lpaBeamLeft)" />
</g>
@@ -145,214 +188,451 @@ export default function LighthousePointAdvisorsSite() {
</text>
</g>
</svg>
          </div>
          </a>

<nav className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
            <a href="#about" className="hover:text-slate-900">About</a>
            <a href="#services" className="hover:text-slate-900">Services</a>
            <a href="#founder" className="hover:text-slate-900">Greg</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
            <a href="#contact" className="rounded-2xl bg-slate-900 px-5 py-2.5 text-white">
              Get in Touch
            <a href="#who-we-help" className="transition hover:text-slate-900">
              Who We Help
            </a>
            <a href="#services" className="transition hover:text-slate-900">
              Services
            </a>
            <a href="#founder" className="transition hover:text-slate-900">
              Founder
            </a>
            <a href="#contact" className="transition hover:text-slate-900">
              Contact
            </a>
            <a
              href="#contact"
              className="rounded-full bg-slate-900 px-5 py-2.5 text-white transition hover:bg-slate-800"
            >
              Start a Conversation
</a>
</nav>
</div>
</header>

<main>
        <section className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')] bg-cover bg-center px-6 py-24 shadow-lg md:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/55 to-black/45" />
          <div className="relative max-w-5xl text-white">
            <div className="inline-flex items-center rounded-full border border-white/30 bg-black/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm">
              For CEOs Driving Meaningful Change
        <section className="relative isolate overflow-hidden border-b border-slate-200 bg-slate-950">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=80"
              alt="Ocean horizon"
              className="h-full w-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(202,165,91,0.18),transparent_28%),linear-gradient(to_right,rgba(2,6,23,0.92),rgba(2,6,23,0.82),rgba(2,6,23,0.9))]" />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
            <div className="grid gap-16 md:grid-cols-[1.25fr_0.75fr] md:items-end">
              <div data-reveal>
                <div className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/80 backdrop-blur">
                  Strategic advisory for CEOs and leadership teams
                </div>

                <h1 className="mt-8 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight text-white md:text-7xl">
                  Practical advisory for leaders facing moments that shape enterprise value.
                </h1>

                <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
                  Lighthouse Point Advisors helps CEOs improve performance,
                  strengthen execution, and navigate growth, transition, and
                  ownership change with greater clarity and discipline.
                </p>

                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-medium text-slate-900 transition hover:bg-slate-100"
                  >
                    Start a Conversation
                    <ArrowRight className="h-4 w-4" />
                  </a>

                  <a
                    href="#founder"
                    className="rounded-full border border-white/20 px-6 py-3.5 text-white transition hover:bg-white/10"
                  >
                    Meet Greg
                  </a>

                  <a
                    href="https://www.linkedin.com/in/greg-leidner-9a7136/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-white/90 transition hover:bg-white/10"
                  >
                    View LinkedIn
                  </a>
                </div>

                <div className="mt-12 grid gap-6 border-t border-white/10 pt-8 text-sm text-slate-300 md:grid-cols-3">
                  <div>
                    <div className="font-semibold text-white">Operator-led perspective</div>
                    <div className="mt-2 leading-7">
                      Built from firsthand leadership through growth, complexity, and ownership transition.
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold text-white">Practical, not abstract</div>
                    <div className="mt-2 leading-7">
                      Focused on decisions, priorities, and execution that actually move the business.
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold text-white">Selective and senior-level</div>
                    <div className="mt-2 leading-7">
                      Designed for CEOs and leadership teams working through consequential inflection points.
                    </div>
                  </div>
                </div>
              </div>

              <div data-reveal className="md:justify-self-end">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">
                    Representative experience
                  </div>

                  <div className="mt-6 grid gap-5">
                    {experienceStats.map((stat) => (
                      <div
                        key={stat.label}
                        className="border-b border-white/10 pb-4 last:border-none last:pb-0"
                      >
                        <div className="text-3xl font-semibold tracking-tight text-white">
                          {stat.value}
                        </div>
                        <div className="mt-1 text-sm leading-6 text-slate-300">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4 text-sm leading-7 text-slate-300">
                    Former CEO, United Pipe &amp; Steel<br />
                    Former BCG Consultant<br />
                    MBA, MIT Sloan
                  </div>
                </div>
              </div>
</div>
            <h1 className="mt-8 text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
              Practical guidance for CEOs looking to change the trajectory of their business.
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-white/90">
              Lighthouse Point Advisors helps leadership teams improve performance, scale effectively, and navigate moments of transition. That can mean preparing for an exit or adjusting to new ownership, but it can also mean building a stronger, more scalable business for the long term.
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
        </section>

        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto grid max-w-7xl gap-6 px-6 py-8 text-sm text-slate-500 md:grid-cols-4">
            <div className="font-medium text-slate-700">
              Trusted perspective shaped by operating experience
</div>
            <div>Growth and performance improvement</div>
            <div>Leadership and organizational effectiveness</div>
            <div>Transaction and transition readiness</div>
</div>
</section>

        <section id="about" className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-[1.15fr_0.85fr] md:items-start">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">About</h2>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                Lighthouse Point Advisors was built for CEOs and leadership teams looking to materially improve the trajectory of their business.
              </p>
              <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
                <p>
                  For some companies, that includes preparing the business for a potential exit, recapitalization, or new ownership structure. For many others, it means improving execution, strengthening leadership, and building a more scalable operating model regardless of ownership plans.
                </p>
                <p>
                  The firm brings an operator’s perspective to those moments. Rather than offering abstract advice, Lighthouse Point Advisors helps management teams think clearly, prioritize the right actions, and execute with discipline during periods that can feel exciting, unfamiliar, and demanding all at once.
                </p>
                <p>
                  While private equity sponsors may also find the work highly relevant, the focus is on helping CEOs and leadership teams succeed in the real day-to-day work of performance improvement, organizational change, operational execution, and growth.
                </p>
        <section
          id="who-we-help"
          className="mx-auto max-w-7xl px-6 py-24"
        >
          <div className="grid gap-14 md:grid-cols-[0.95fr_1.05fr] md:items-start">
            <div data-reveal>
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Who We Help
</div>
            </div>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900">
                Built for leadership teams facing meaningful change.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                The firm is designed for businesses that have reached a stage
                where experience, alignment, and execution discipline matter
                more than ever.
              </p>

            <div className="grid gap-6">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
                alt="Executive team meeting"
                className="h-64 w-full rounded-3xl object-cover shadow-sm"
              />
              <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-8">
<div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Where Lighthouse Point typically helps
                  What clients often need
</div>
                <div className="mt-5 space-y-3 text-sm text-slate-600">
                  {ceoMoments.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <ChevronRight className="mt-[2px] h-4 w-4 shrink-0 text-slate-400" />
                      <span>{item}</span>
                <div className="mt-5 space-y-4">
                  {howWeHelp.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-slate-900" />
                      <span className="text-slate-700">{item}</span>
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
              Support designed for CEOs and leadership teams focused on performance, scale, and meaningful change — with or without a transaction.
            </p>
            <div data-reveal className="grid gap-6">
              {whoWeHelp.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-2.5 w-2.5 rounded-full bg-[#caa55b]" />
                    <p className="text-base leading-8 text-slate-700">{item}</p>
                  </div>
                </div>
              ))}
            </div>
</div>
        </section>

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
        <section id="services" className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div data-reveal className="mb-14 max-w-3xl">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Services
</div>
            ))}
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900">
                Advisory support centered on performance, leadership, and readiness.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                The work is tailored to the needs of each business, but typically
                focuses on the areas where stronger clarity and execution can
                materially improve outcomes.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {serviceCategories.map((category) => (
                <div
                  key={category.title}
                  data-reveal
                  className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <h3 className="text-xl font-semibold tracking-tight text-slate-900">
                    {category.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {category.description}
                  </p>

                  <ul className="mt-6 space-y-3 text-sm text-slate-700">
                    {category.items.map((item, idx) => (
                      <li
                        key={`${category.title}-${idx}`}
                        className="flex items-start gap-3"
                      >
                        <ChevronRight className="mt-[2px] h-4 w-4 shrink-0 text-slate-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
</div>
</section>

        <section id="founder" className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-[0.9fr_1.1fr] md:items-start">
            <div className="space-y-6">
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                <img
                  src={gregPhoto}
                  alt="Greg Leidner"
                  className="h-[26rem] w-full object-cover object-top"
                />
              </div>
        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-14 md:grid-cols-[1fr_1fr] md:items-center">
            <div data-reveal>
<img
                src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80"
                alt="Boats at a marina"
                className="h-48 w-full rounded-3xl object-cover shadow-sm"
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80"
                alt="Executive team meeting"
                className="h-[30rem] w-full rounded-[2rem] object-cover shadow-sm"
/>
</div>

            <div>
              <h2 className="text-3xl font-semibold tracking-tight">Meet Greg</h2>
              <p className="mt-4 text-slate-600">
                Founder, Lighthouse Point Advisors. Former CEO, United Pipe &amp; Steel | Former BCG Consultant | MBA, MIT Sloan.
              </p>
            <div data-reveal>
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Why Lighthouse Point
              </div>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900">
                Advice shaped by experience operating from inside the pressure.
              </h2>
<div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
<p>
                  Greg has led businesses through significant growth, operational transformation, and multiple successful ownership transitions. His perspective is shaped by years of operating experience, not just advisory work, which is why his approach tends to resonate with CEOs who want practical help rather than abstract frameworks.
                  Lighthouse Point Advisors was built around a simple idea:
                  leadership teams benefit most from advice that is grounded in
                  what it actually feels like to lead through growth, complexity,
                  and change.
</p>
<p>
                  He understands what it feels like to prepare a business for a sale, to lead through ownership change, and to keep a management team aligned while expectations rise. That firsthand perspective is central to the firm’s work.
                  That perspective is especially valuable when a business is
                  preparing for a strategic event, adjusting to new ownership, or
                  simply trying to perform at a meaningfully higher level.
</p>
<p>
                  Greg lives in Florida with his wife and three children. When he’s not driving his kids to and from their various activities, he enjoys fishing, golf, and tennis.
                  The goal is not to overwhelm teams with theory. The goal is to
                  bring judgment, structure, and practical support to moments
                  where the stakes are real.
</p>
</div>
            </div>
          </div>
        </section>

        <section id="founder" className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:grid-cols-[0.88fr_1.12fr] md:items-start">
            <div data-reveal className="space-y-6">
              <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
                <img
                  src={gregPhoto}
                  alt="Greg Leidner"
                  className="h-[34rem] w-full object-cover object-top"
                />
              </div>

              <div className="mt-8">
                <div className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
Selected Experience
</div>

                <div className="space-y-3 text-slate-700">
                <div className="mt-5 space-y-4 text-sm text-slate-700">
<div className="text-lg font-semibold leading-snug text-slate-900">
Led a national industrial distribution platform over two decades
</div>

                  <div className="ml-5 space-y-2.5 text-sm text-slate-600">
                    <div className="flex gap-2">
                      <ChevronRight className="mt-[3px] h-4 w-4 shrink-0 text-slate-400" />
                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <ChevronRight className="mt-[2px] h-4 w-4 shrink-0 text-slate-400" />
<div>265 employees across multiple locations</div>
</div>
                    <div className="flex gap-2">
                      <ChevronRight className="mt-[3px] h-4 w-4 shrink-0 text-slate-400" />
                    <div className="flex gap-3">
                      <ChevronRight className="mt-[2px] h-4 w-4 shrink-0 text-slate-400" />
<div>60+ tractors &amp; trailers</div>
</div>
                    <div className="flex gap-2">
                      <ChevronRight className="mt-[3px] h-4 w-4 shrink-0 text-slate-400" />
                    <div className="flex gap-3">
                      <ChevronRight className="mt-[2px] h-4 w-4 shrink-0 text-slate-400" />
<div>4M+ miles driven annually</div>
</div>
                    <div className="flex gap-2">
                      <ChevronRight className="mt-[3px] h-4 w-4 shrink-0 text-slate-400" />
                      <div><span className="font-medium text-slate-900">$50M to $500M+</span> revenue growth</div>
                    <div className="flex gap-3">
                      <ChevronRight className="mt-[2px] h-4 w-4 shrink-0 text-slate-400" />
                      <div>
                        <span className="font-semibold text-slate-900">$50M to $500M+</span>{" "}
                        revenue growth
                      </div>
</div>
                    <div className="flex gap-2">
                      <ChevronRight className="mt-[3px] h-4 w-4 shrink-0 text-slate-400" />
                      <div><span className="font-medium text-slate-900">&gt;$50M</span> working capital improvement</div>
                    <div className="flex gap-3">
                      <ChevronRight className="mt-[2px] h-4 w-4 shrink-0 text-slate-400" />
                      <div>
                        <span className="font-semibold text-slate-900">&gt;$50M</span>{" "}
                        working capital improvement
                      </div>
</div>
                    <div className="flex gap-2">
                      <ChevronRight className="mt-[3px] h-4 w-4 shrink-0 text-slate-400" />
                      <div><span className="font-medium text-slate-900">&gt;$9M</span> synergies captured</div>
                    <div className="flex gap-3">
                      <ChevronRight className="mt-[2px] h-4 w-4 shrink-0 text-slate-400" />
                      <div>
                        <span className="font-semibold text-slate-900">&gt;$9M</span>{" "}
                        synergies captured
                      </div>
</div>
</div>
</div>
</div>
</div>

            <div data-reveal>
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Founder
              </div>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900">
                Greg Leidner
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Founder, Lighthouse Point Advisors. Former CEO, United Pipe &amp;
                Steel. Former BCG Consultant. MBA, MIT Sloan.
              </p>

              <div className="mt-8 space-y-5 text-base leading-8 text-slate-600">
                <p>
                  Greg has led businesses through sustained growth, operational
                  transformation, and multiple successful ownership transitions.
                  His perspective is grounded in operating reality, which is why
                  it resonates with CEOs who value practical judgment over
                  abstract recommendations.
                </p>
                <p>
                  He understands what it takes to lead during moments when
                  expectations rise, alignment matters more, and execution gaps
                  become more costly. That firsthand experience sits at the core
                  of the firm’s work.
                </p>
                <p>
                  Greg lives in Florida with his wife and three children. When
                  he is not driving his kids to and from activities, he enjoys
                  fishing, golf, and tennis.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="https://www.linkedin.com/in/greg-leidner-9a7136/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-white transition hover:bg-slate-800"
                >
                  <Linkedin className="h-4 w-4" />
                  View LinkedIn
                </a>

                <a
                  href="mailto:greg@lighthousepointadv.com"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-3 text-slate-900 transition hover:bg-slate-100"
                >
                  <Mail className="h-4 w-4" />
                  Email Greg
                </a>
              </div>
            </div>
</div>
</section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
          <div className="rounded-2xl border border-slate-200 p-10 transition duration-200 hover:shadow-sm">
            <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
            <p className="mt-3 max-w-2xl text-slate-600">
              If you are a CEO looking to improve performance, strengthen execution, or navigate a period of meaningful change, Lighthouse Point Advisors would be glad to start a conversation.
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
        <section id="contact" className="mx-auto max-w-7xl px-6 py-24">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-900 text-white shadow-sm">
            <div className="grid gap-10 px-8 py-12 md:grid-cols-[1.1fr_0.9fr] md:px-12 md:py-14">
              <div data-reveal>
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">
                  Contact
                </div>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight">
                  Start a thoughtful, confidential conversation.
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                  If you are a CEO or leadership team navigating performance
                  pressure, organizational change, growth complexity, or an
                  ownership transition, Lighthouse Point Advisors would welcome
                  the opportunity to connect.
                </p>
              </div>

              <div data-reveal className="md:justify-self-end">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">
                    Direct Contact
                  </div>

                  <a
                    href="mailto:greg@lighthousepointadv.com"
                    className="mt-5 block text-xl font-medium text-white underline-offset-4 hover:underline"
                  >
                    greg@lighthousepointadv.com
                  </a>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href="mailto:greg@lighthousepointadv.com"
                      className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-medium text-slate-900 transition hover:bg-slate-100"
                    >
                      Email Greg
                      <ArrowRight className="h-4 w-4" />
                    </a>

                    <a
                      href="https://www.linkedin.com/in/greg-leidner-9a7136/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-white transition hover:bg-white/10"
                    >
                      View LinkedIn
                    </a>
                  </div>
                </div>
              </div>
</div>
</div>
</section>
