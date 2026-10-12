import React from "react";
import { ArrowRight, Lock } from "lucide-react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xnpjboba";

const SHARED_PASSWORD = "LHPADV";

const SECTIONS = [
  {
    dimension: "Revenue Quality",
    fields: [
      { name: "rq_top3", label: "What percentage of revenue comes from your top 3 customers? Top 10?" },
      { name: "rq_tenure", label: "How would you describe the tenure of your top 10 customers?" },
      { name: "rq_recurring", label: "What share of revenue is contracted or highly recurring versus transactional?" },
    ],
  },
  {
    dimension: "Margin Profile",
    fields: [
      { name: "mp_margins", label: "What have gross margin and EBITDA margin been for each of the last three years?" },
      { name: "mp_trend", label: "Trending up, down, or flat, and why?" },
      { name: "mp_defensible", label: "How defensible are your margins against competitors?" },
    ],
  },
  {
    dimension: "Working Capital",
    fields: [
      { name: "wc_turns", label: "Current inventory turns?" },
      { name: "wc_ar", label: "Average AR days outstanding?" },
      { name: "wc_pct", label: "Working capital as a percentage of revenue?" },
    ],
  },
  {
    dimension: "Owner Dependence",
    fields: [
      { name: "od_relationships", label: "Which customer or vendor relationships are tied specifically to you personally?" },
      { name: "od_absence", label: "If you were unavailable for 30 days, what breaks? For 6 months?" },
      { name: "od_signoff", label: "What decisions currently require your personal sign-off?" },
    ],
  },
  {
    dimension: "Team Depth",
    fields: [
      { name: "td_leaders", label: "Who are your key leaders, and what's each one's tenure?" },
      { name: "td_stay", label: "Which would you expect to stay under new ownership?" },
      { name: "td_number2", label: "Is there a clear #2 with real authority today?" },
    ],
  },
  {
    dimension: "Systems and Processes",
    fields: [
      { name: "sp_systems", label: "What ERP and CRM are you running?" },
      { name: "sp_standard", label: "How standardized are reporting and KPIs across the business?" },
      { name: "sp_manual", label: "Where do you rely most on manual processes or one person's institutional knowledge?" },
    ],
  },
  {
    dimension: "Growth Trajectory",
    fields: [
      { name: "gt_growth", label: "Revenue growth over the last 3 to 5 years, organic versus acquired?" },
      { name: "gt_pipeline", label: "Forward visibility into pipeline beyond the current quarter?" },
      { name: "gt_share", label: "Estimated share of your addressable market?" },
    ],
  },
  {
    dimension: "Market Position",
    fields: [
      { name: "mkt_competitors", label: "Your two or three biggest competitors, and how do you win or lose against them?" },
      { name: "mkt_moat", label: "What's genuinely hard for a competitor to replicate?" },
      { name: "mkt_suppliers", label: "How concentrated are your supplier relationships?" },
    ],
  },
  {
    dimension: "Financial Cleanliness",
    fields: [
      { name: "fc_prepared", label: "Reviewed, audited, or internally prepared only?" },
      { name: "fc_addbacks", label: "What add-backs would you expect toward a normalized EBITDA?" },
      { name: "fc_confidence", label: "How confident are you those would hold up under a buyer's quality of earnings review?" },
    ],
  },
  {
    dimension: "Ownership Structure",
    fields: [
      { name: "os_equity", label: "How many owners, and how is equity split?" },
      { name: "os_minority", label: "Any minority owners, family, or outside investors?" },
      { name: "os_buysell", label: "Is there a buy-sell agreement, and when was it last updated?" },
    ],
  },
];

function PasswordGate({ onUnlock }) {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (value.trim().toUpperCase() === SHARED_PASSWORD) {
      onUnlock();
    } else {
      setError(true);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-6">
      <div className="w-full max-w-sm">
        <div className="mb-6 flex items-center gap-2 text-slate-400">
          <Lock className="h-5 w-5" />
          <span className="text-sm font-semibold uppercase tracking-[0.18em]">
            Private
          </span>
        </div>
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
          Readiness Intake
        </h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          This is prep material for an active engagement. Enter the password
          Greg gave you.
        </p>
        <form onSubmit={handleSubmit} className="mt-6">
          <input
            type="password"
            autoFocus
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              setError(false);
            }}
            placeholder="Password"
            className="w-full rounded-2xl border border-slate-200 px-5 py-3.5 text-slate-900 outline-none transition focus:border-slate-900"
          />
          {error && (
            <p className="mt-2 text-sm text-red-600">
              That's not quite it, try again.
            </p>
          )}
          <button
            type="submit"
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3.5 font-medium text-white transition hover:bg-slate-800"
          >
            Continue
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default function ReadinessIntake() {
  const [unlocked, setUnlocked] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);
  const [submitError, setSubmitError] = React.useState(false);
  const [name, setName] = React.useState("");
  const [company, setCompany] = React.useState("");

  React.useEffect(() => {
    document.title = "Readiness Intake | Lighthouse Point Advisors";
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);
    return () => document.head.removeChild(meta);
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError(false);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.target),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setSubmitError(true);
      }
    } catch (err) {
      setSubmitError(true);
    } finally {
      setSubmitting(false);
    }
  }

  if (!unlocked) {
    return <PasswordGate onUnlock={() => setUnlocked(true)} />;
  }

  if (submitted) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white px-6">
        <div className="max-w-sm text-center">
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
            Thanks, got it.
          </h1>
          <p className="mt-3 text-base leading-7 text-slate-600">
            I'll review this before we talk. See you soon.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-10 border-b border-slate-200/80 bg-white/95 backdrop-blur">
        <div className="mx-auto max-w-3xl px-6 py-5">
          <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Readiness Intake
          </div>
          <h1 className="mt-1 text-xl font-semibold tracking-tight text-slate-900">
            Pre-work for our conversation
          </h1>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-12">
        <p className="mb-10 text-base leading-7 text-slate-600">
          Answer what you can, in as much or as little detail as you have handy.
          Estimates are fine, this isn't meant to take hours. Anything you skip,
          we'll just cover live.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-10 grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              name="name"
              required
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-2xl border border-slate-200 px-5 py-3.5 text-slate-900 outline-none transition focus:border-slate-900"
            />
            <input
              type="text"
              name="company"
              required
              placeholder="Company name"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="w-full rounded-2xl border border-slate-200 px-5 py-3.5 text-slate-900 outline-none transition focus:border-slate-900"
            />
          </div>

          <div className="space-y-10">
            {SECTIONS.map((section) => (
              <div
                key={section.dimension}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <h2 className="text-lg font-semibold tracking-tight text-slate-900">
                  {section.dimension}
                </h2>
                <div className="mt-5 space-y-5">
                  {section.fields.map((field) => (
                    <div key={field.name}>
                      <label
                        htmlFor={field.name}
                        className="block text-sm leading-6 text-slate-700"
                      >
                        {field.label}
                      </label>
                      <textarea
                        id={field.name}
                        name={field.name}
                        rows={2}
                        className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-900"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="mt-10 inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-4 font-medium text-white transition hover:bg-slate-800 disabled:opacity-60 sm:w-auto"
          >
            {submitting ? "Sending..." : "Send to Greg"}
            <ArrowRight className="h-4 w-4" />
          </button>
          {submitError && (
            <p className="mt-3 text-sm text-red-600">
              Something went wrong, mind trying again, or email what you have to{" "}
              <a href="mailto:greg@lighthousepointadv.com" className="underline">
                greg@lighthousepointadv.com
              </a>
              ?
            </p>
          )}
        </form>
      </main>
    </div>
  );
}
