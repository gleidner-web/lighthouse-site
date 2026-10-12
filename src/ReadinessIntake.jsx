import React from "react";
import { ArrowRight, Lock, Check } from "lucide-react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xnpjboba";

const SHARED_PASSWORD = "LHPADV";

const SECTIONS = [
  {
    dimension: "Revenue Quality",
    fields: [
      { name: "rq_top3", label: "Revenue from top 3 customers", type: "number", suffix: "%" },
      { name: "rq_top10", label: "Revenue from top 10 customers", type: "number", suffix: "%" },
      {
        name: "rq_tenure",
        label: "Average tenure of top 10 customers",
        type: "select",
        options: ["Under 2 years", "2 to 5 years", "5 to 10 years", "Over 10 years"],
      },
      { name: "rq_recurring", label: "Revenue that's contracted or highly recurring", type: "number", suffix: "%" },
    ],
  },
  {
    dimension: "Margin Profile",
    fields: [
      { name: "mp_y1_gross", label: "Most recent year, gross margin", type: "number", suffix: "%" },
      { name: "mp_y1_ebitda", label: "Most recent year, EBITDA margin", type: "number", suffix: "%" },
      { name: "mp_y2_gross", label: "One year prior, gross margin", type: "number", suffix: "%" },
      { name: "mp_y2_ebitda", label: "One year prior, EBITDA margin", type: "number", suffix: "%" },
      { name: "mp_y3_gross", label: "Two years prior, gross margin", type: "number", suffix: "%" },
      { name: "mp_y3_ebitda", label: "Two years prior, EBITDA margin", type: "number", suffix: "%" },
      {
        name: "mp_trend",
        label: "Overall trend",
        type: "select",
        options: ["Improving", "Flat", "Declining", "Mixed"],
      },
      { name: "mp_trend_why", label: "Why, in a sentence", type: "textarea" },
      {
        name: "mp_defensible",
        label: "How defensible are your margins against competitors?",
        type: "select",
        options: ["Very defensible", "Somewhat defensible", "Not very defensible"],
      },
    ],
  },
  {
    dimension: "Working Capital",
    fields: [
      { name: "wc_turns", label: "Inventory turns", type: "number" },
      { name: "wc_ar", label: "Average AR days outstanding", type: "number", suffix: "days" },
      { name: "wc_pct", label: "Working capital as % of revenue", type: "number", suffix: "%" },
    ],
  },
  {
    dimension: "Owner Dependence",
    fields: [
      {
        name: "od_count",
        label: "Of your top 10 customer relationships, how many run primarily through you personally?",
        type: "number",
      },
      {
        name: "od_30day",
        label: "If you were unavailable 30 days",
        type: "select",
        options: ["Nothing would break", "Minor issues", "Real problems", "A real scramble"],
      },
      {
        name: "od_6month",
        label: "If you were unavailable 6 months",
        type: "select",
        options: ["Nothing would break", "Minor issues", "Real problems", "A real scramble"],
      },
      { name: "od_signoff", label: "What decisions require your personal sign-off?", type: "textarea" },
    ],
  },
  {
    dimension: "Team Depth",
    fields: [
      { name: "td_leaders", label: "Key leaders and tenure (name, years)", type: "textarea" },
      { name: "td_stay", label: "Which would you expect to stay under new ownership?", type: "textarea" },
      {
        name: "td_number2",
        label: "Is there a clear #2 with real authority today?",
        type: "select",
        options: ["Yes", "Somewhat", "No"],
      },
    ],
  },
  {
    dimension: "Systems and Processes",
    fields: [
      { name: "sp_erp", label: "ERP system", type: "text" },
      { name: "sp_crm", label: "CRM system", type: "text" },
      {
        name: "sp_standard",
        label: "How standardized are reporting and KPIs?",
        type: "select",
        options: ["Fully standardized", "Mostly standardized", "Somewhat", "Not standardized"],
      },
      {
        name: "sp_manual",
        label: "Where do you rely most on manual processes or one person's knowledge?",
        type: "textarea",
      },
    ],
  },
  {
    dimension: "Growth Trajectory",
    fields: [
      { name: "gt_growth_pct", label: "Total revenue growth, last 3 years", type: "number", suffix: "%" },
      {
        name: "gt_growth_source",
        label: "Mostly from",
        type: "select",
        options: ["Winning more business", "A mix of growth and acquisitions", "Mostly acquisitions", "Flat or declining"],
      },
      {
        name: "gt_pipeline",
        label: "Forward pipeline visibility",
        type: "select",
        options: ["Full quarter or more", "Partial visibility", "Little to none"],
      },
      { name: "gt_share", label: "Estimated share of addressable market", type: "number", suffix: "%" },
    ],
  },
  {
    dimension: "Market Position",
    fields: [
      { name: "mkt_competitors", label: "Two or three biggest competitors", type: "text" },
      { name: "mkt_winlose", label: "How do you typically win or lose against them?", type: "textarea" },
      { name: "mkt_moat", label: "What's genuinely hard for a competitor to replicate?", type: "textarea" },
      {
        name: "mkt_suppliers",
        label: "Supplier concentration",
        type: "select",
        options: ["Single supplier dependency", "A few key suppliers", "Well diversified"],
      },
    ],
  },
  {
    dimension: "Financial Cleanliness",
    fields: [
      {
        name: "fc_prepared",
        label: "Financials are",
        type: "select",
        options: ["Audited", "Reviewed", "Internally prepared only"],
      },
      { name: "fc_addbacks_amount", label: "Estimated annual add-backs", type: "number", suffix: "$" },
      { name: "fc_addbacks_what", label: "What are they?", type: "textarea" },
      {
        name: "fc_confidence",
        label: "Confidence they'd hold up under a buyer's quality of earnings review",
        type: "select",
        options: ["Very confident", "Somewhat confident", "Not very confident"],
      },
    ],
  },
  {
    dimension: "Ownership Structure",
    fields: [
      { name: "os_count", label: "Number of owners", type: "number" },
      { name: "os_split", label: "How equity is split", type: "text" },
      {
        name: "os_minority",
        label: "Minority owners, family, or outside investors?",
        type: "select",
        options: ["Yes", "No"],
      },
      {
        name: "os_buysell",
        label: "Buy-sell agreement in place?",
        type: "select",
        options: ["Yes, current", "Yes, outdated", "No"],
      },
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

function SelectField({ field, value, onChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      {field.options.map((opt) => {
        const selected = value === opt;
        return (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(opt)}
            className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm transition ${
              selected
                ? "border-slate-900 bg-slate-900 text-white"
                : "border-slate-200 text-slate-700 hover:border-slate-400"
            }`}
          >
            {selected && <Check className="h-3.5 w-3.5" />}
            {opt}
          </button>
        );
      })}
      <input type="hidden" name={field.name} value={value || ""} readOnly />
    </div>
  );
}

function Field({ field, value, onChange }) {
  if (field.type === "select") {
    return <SelectField field={field} value={value} onChange={onChange} />;
  }
  if (field.type === "textarea") {
    return (
      <textarea
        name={field.name}
        rows={2}
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-900"
      />
    );
  }
  // text or number
  return (
    <div className="flex items-center gap-2">
      <input
        type={field.type === "number" ? "number" : "text"}
        name={field.name}
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
        className="w-full max-w-[220px] rounded-2xl border border-slate-200 px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-slate-900"
      />
      {field.suffix && <span className="text-sm text-slate-400">{field.suffix}</span>}
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
  const [answers, setAnswers] = React.useState({});

  React.useEffect(() => {
    document.title = "Readiness Intake | Lighthouse Point Advisors";
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);
    return () => document.head.removeChild(meta);
  }, []);

  function setAnswer(name, value) {
    setAnswers((prev) => ({ ...prev, [name]: value }));
  }

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
          Best estimates are fine throughout, this isn't an audit. Click where you
          can, type where you need to. Anything you skip, we'll just cover live.
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
                      <label className="mb-2 block text-sm leading-6 text-slate-700">
                        {field.label}
                      </label>
                      <Field
                        field={field}
                        value={answers[field.name]}
                        onChange={(v) => setAnswer(field.name, v)}
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
