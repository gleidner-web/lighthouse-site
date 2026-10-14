import React from "react";
import { ArrowRight, ChevronRight, Mail } from "lucide-react";
import lighthouseLogo from "./lighthouse-logo.png";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/moejnkrb";

// Optional tag from personal links, e.g. /assessment?r=darren
const REF = (() => {
  try {
    const r = new URLSearchParams(window.location.search).get("r") || "";
    return r.replace(/[^\w.-]/g, "").slice(0, 40);
  } catch {
    return "";
  }
})();

const QUESTIONS = [
  {
    dimension: "Owner Dependence",
    text: "If you (and any co-owners) took a 30-day vacation with no phone, what would happen?",
    options: [
      { label: "Nothing, it would run exactly the same", points: 4 },
      { label: "Mostly fine, a few decisions would wait", points: 3 },
      { label: "Some real problems would surface", points: 2 },
      { label: "It would be a real scramble", points: 1 },
    ],
  },
  {
    dimension: "Owner Dependence",
    text: "Who holds the relationships with your top five customers?",
    options: [
      { label: "A dedicated account manager for each, not me", points: 4 },
      { label: "A mix of me and other people", points: 3 },
      { label: "Mostly me", points: 2 },
      { label: "Entirely me", points: 1 },
    ],
  },
  {
    dimension: "Revenue Quality",
    text: "What share of revenue comes from your single largest customer?",
    options: [
      { label: "Under 10%", points: 4 },
      { label: "10% to 20%", points: 3 },
      { label: "20% to 35%", points: 2 },
      { label: "Over 35%", points: 1 },
    ],
  },
  {
    dimension: "Revenue Quality",
    text: "How would you describe your typical customer relationship?",
    options: [
      { label: "Long-term, contracted or highly recurring", points: 4 },
      { label: "Repeat business, no contract", points: 3 },
      { label: "Mostly transactional", points: 2 },
      { label: "Largely one-off, project based", points: 1 },
    ],
  },
  {
    dimension: "Team Depth",
    text: "If you had to replace your #2 person tomorrow, how long before the business felt normal again?",
    options: [
      { label: "No disruption, multiple people could step up", points: 4 },
      { label: "A few weeks of adjustment", points: 3 },
      { label: "A few months", points: 2 },
      { label: "I don't have a real #2", points: 1 },
    ],
  },
  {
    dimension: "Team Depth",
    text: "Do your key managers have real decision-making authority, or do most things come back to you?",
    options: [
      { label: "They decide, I'm rarely needed", points: 4 },
      { label: "They decide most things", points: 3 },
      { label: "They decide small things", points: 2 },
      { label: "Nearly everything comes back to me", points: 1 },
    ],
  },
  {
    dimension: "Financial Cleanliness",
    text: "How confident are you that your financials would hold up to a buyer's scrutiny, with no surprises?",
    options: [
      { label: "Very, we're audit or review-level clean", points: 4 },
      { label: "Fairly, maybe a few fixable items", points: 3 },
      { label: "Not very, there are things I'd need to clean up", points: 2 },
      { label: "Not confident at all", points: 1 },
    ],
  },
  {
    dimension: "Financial Cleanliness",
    text: "Do you have a clear, current view of margin by customer or product line?",
    options: [
      { label: "Yes, regularly reviewed", points: 4 },
      { label: "Roughly, not formalized", points: 3 },
      { label: "Only at the company level", points: 2 },
      { label: "Not really", points: 1 },
    ],
  },
  {
    dimension: "Growth Trajectory",
    text: "Over the last three years, where has your growth mostly come from?",
    options: [
      { label: "Growing relationships with existing customers", points: 4 },
      { label: "Winning new customers", points: 4 },
      { label: "A mix of organic growth and buying other companies", points: 3 },
      { label: "Flat or declining", points: 1 },
    ],
  },
  {
    dimension: "Growth Trajectory",
    text: "Do you have visibility into your pipeline beyond the current quarter?",
    options: [
      { label: "Yes, a real pipeline process", points: 4 },
      { label: "Roughly", points: 3 },
      { label: "Not really, we react as it comes", points: 2 },
      { label: "No", points: 1 },
    ],
  },
];

const DIMENSION_NOTES = {
  "Owner Dependence":
    "Buyers discount businesses where the owners personally hold the key relationships and know-how. This is also one of the more fixable things, given enough runway.",
  "Revenue Quality":
    "Concentrated or transactional revenue reads as risk to a buyer, even when the business itself is healthy.",
  "Team Depth":
    "A management layer that can run the business without you is one of the clearest value drivers buyers look for.",
  "Financial Cleanliness":
    "Clean, well-documented financials are the difference between a smooth process and one that gets retraded in diligence.",
  "Growth Trajectory":
    "Steady, visible, organic growth is worth more to a buyer than growth that's hard to explain or forecast.",
};

function scoreToTier(score) {
  if (score >= 32) {
    return {
      label: "Ready Now",
      note: "On paper, your business shows the traits buyers look for. The real question is whether you want to be ready, not whether you could be.",
    };
  }
  if (score >= 21) {
    return {
      label: "Ready in 12 to 18 Months",
      note: "You're not far off. A focused year of closing a few specific gaps would meaningfully change how a buyer sees this business.",
    };
  }
  return {
    label: "Longer-Term Work Needed",
    note: "Nothing here is unusual, most owner-run businesses land here. The gap is real, and real gaps take real time to close, which is exactly why it's worth knowing now.",
  };
}

export default function Assessment() {
  const [step, setStep] = React.useState(0);
  const [answers, setAnswers] = React.useState({});
  const [email, setEmail] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);
  const [submitError, setSubmitError] = React.useState(false);

  React.useEffect(() => {
    document.title = "Business Health Scorecard | Lighthouse Point Advisors";
  }, []);

  const total = QUESTIONS.length;
  const answeredCount = Object.keys(answers).length;
  const done = answeredCount === total;

  const dimensionScores = React.useMemo(() => {
    const scores = {};
    QUESTIONS.forEach((q, i) => {
      if (answers[i] == null) return;
      const pts = q.options[answers[i]].points;
      scores[q.dimension] = (scores[q.dimension] || { total: 0, max: 0 });
      scores[q.dimension].total += pts;
      scores[q.dimension].max += 4;
    });
    return scores;
  }, [answers]);

  const overallScore = Object.values(dimensionScores).reduce(
    (sum, d) => sum + d.total,
    0
  );

  const sortedDimensions = React.useMemo(() => {
    return Object.entries(dimensionScores)
      .map(([name, d]) => ({ name, pct: d.total / d.max }))
      .sort((a, b) => a.pct - b.pct);
  }, [dimensionScores]);

  const weakest = sortedDimensions.slice(0, 2);
  const tier = scoreToTier(overallScore);

  const answerFields = QUESTIONS.map((q, i) => [
    `q${i + 1}_${q.dimension.replace(/\s+/g, "_").toLowerCase()}`,
    `${q.text} -- ${
      answers[i] != null ? q.options[answers[i]].label : "Not answered"
    }`,
  ]);

  // Record every completed scorecard, even if the visitor never leaves an email.
  const autoSent = React.useRef(false);
  React.useEffect(() => {
    if (!done || autoSent.current) return;
    autoSent.current = true;
    const data = new FormData();
    data.append(
      "_subject",
      `Scorecard completed (${REF || "anonymous"}): ${tier.label}, ${overallScore}/40`
    );
    data.append("submission_type", "Completed, no email (automatic)");
    data.append("ref", REF || "none");
    data.append("result", tier.label);
    data.append("score", `${overallScore} / 40`);
    answerFields.forEach(([name, value]) => data.append(name, value));
    fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: data,
    }).catch(() => {});
  }, [done]);

  function selectAnswer(qIndex, optIndex) {
    setAnswers((prev) => ({ ...prev, [qIndex]: optIndex }));
    if (step < total - 1) {
      setTimeout(() => setStep((s) => Math.min(s + 1, total - 1)), 200);
    }
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

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-200/80 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
          <a href="/" className="flex items-center gap-2">
            <img
              src={lighthouseLogo}
              alt="Lighthouse Point Advisors"
              className="h-9 w-auto"
            />
          </a>
          <a
            href="/"
            className="text-sm text-slate-500 transition hover:text-slate-900"
          >
            Back to site
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-16">
        {!done && (
          <>
            <div className="mb-10">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Business Health Scorecard
              </div>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
                How healthy is your business, really?
              </h1>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Two minutes, ten questions. This looks at your business through the
                same lens a buyer, lender, or new partner would, which turns out to
                be one of the more honest ways to measure real health, whether
                you're thinking about a sale, planning to hand it to family, or just
                want a clear picture of where things stand. No company name or
                financials required to get your score.
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-500">
                {REF
                  ? "When you finish, your answers come straight to me. Since I sent you this link personally, I'll know they're yours."
                  : "When you finish, your answers come straight to me so I can see how owners are scoring. Your name, company, and email don't, unless you choose to add them."}
              </p>
            </div>

            <div className="mb-8 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-[#caa55b] transition-all duration-300"
                style={{ width: `${(answeredCount / total) * 100}%` }}
              />
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                {QUESTIONS[step].dimension} &middot; Question {step + 1} of {total}
              </div>
              <h2 className="mt-4 text-xl font-medium leading-8 text-slate-900">
                {QUESTIONS[step].text}
              </h2>

              <div className="mt-7 space-y-3">
                {QUESTIONS[step].options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => selectAnswer(step, i)}
                    className={`flex w-full items-center justify-between gap-3 rounded-2xl border px-5 py-4 text-left text-slate-700 transition hover:border-slate-900 hover:bg-slate-50 ${
                      answers[step] === i
                        ? "border-slate-900 bg-slate-50"
                        : "border-slate-200"
                    }`}
                  >
                    <span>{opt.label}</span>
                    <ChevronRight className="h-4 w-4 shrink-0 text-slate-400" />
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between text-sm text-slate-500">
              <button
                onClick={() => setStep((s) => Math.max(0, s - 1))}
                disabled={step === 0}
                className="disabled:opacity-0"
              >
                Back
              </button>
              <span>
                {answeredCount} of {total} answered
              </span>
            </div>
          </>
        )}

        {done && (
          <div data-reveal>
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Your Result
            </div>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              {tier.label}
            </h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
              {tier.note}
            </p>

            <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-8">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Where to look first
              </div>
              <div className="mt-5 space-y-5">
                {weakest.map((d) => (
                  <div key={d.name} className="flex gap-3">
                    <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-slate-400" />
                    <div>
                      <div className="font-semibold text-slate-900">{d.name}</div>
                      <div className="mt-1 text-sm leading-6 text-slate-600">
                        {DIMENSION_NOTES[d.name]}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-500">
              {REF
                ? "Your answers have come to me. Since I sent you this link personally, I'll know they're yours."
                : "Your answers have come to me anonymously. Your name, company, and email don't, unless you add them below."}
            </p>

            {!submitted ? (
              <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Want a Personal Read?
                </div>
                <p className="mt-3 text-base leading-7 text-slate-600">
                  Send your results to me and I'll look them over myself. Add your
                  email if you'd like a short note back on what I'd look at first
                  for a business like yours. No obligation, and no mailing list.
                </p>
                <form onSubmit={handleSubmit} className="mt-6 space-y-3">
                  <input
                    type="hidden"
                    name="_subject"
                    value={`Scorecard shared (${REF || "no link tag"}): ${tier.label}, ${overallScore}/40`}
                  />
                  <input type="hidden" name="submission_type" value="Sent by visitor" />
                  <input type="hidden" name="ref" value={REF || "none"} />
                  <input type="hidden" name="result" value={tier.label} />
                  <input type="hidden" name="score" value={`${overallScore} / 40`} />
                  {answerFields.map(([name, value]) => (
                    <input key={name} type="hidden" name={name} value={value} />
                  ))}
                  <input
                    type="text"
                    name="company"
                    placeholder="Company name (optional)"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full rounded-2xl border border-slate-200 px-5 py-3.5 text-slate-900 outline-none transition focus:border-slate-900"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address (optional)"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-2xl border border-slate-200 px-5 py-3.5 text-slate-900 outline-none transition focus:border-slate-900"
                  />
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3.5 font-medium text-white transition hover:bg-slate-800 disabled:opacity-60"
                  >
                    {submitting ? "Sending..." : "Send My Results to Greg"}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  {submitError && (
                    <p className="text-sm text-red-600">
                      Something went wrong, mind trying again, or just email{" "}
                      <a href="mailto:greg@lighthousepointadv.com" className="underline">
                        greg@lighthousepointadv.com
                      </a>{" "}
                      directly?
                    </p>
                  )}
                </form>
              </div>
            ) : (
              <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-900 p-8 text-white shadow-sm">
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">
                  Thanks
                </div>
                <p className="mt-3 text-lg leading-7">
                  {email
                    ? "Got it. I'll read through your answers myself and follow up directly, usually within a day or two."
                    : "Got it, thanks. I'll read through your answers myself. If you'd like to talk them through, just email me."}
                </p>
                <a
                  href="mailto:greg@lighthousepointadv.com"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-medium text-slate-900 transition hover:bg-slate-100"
                >
                  <Mail className="h-4 w-4" />
                  Email Greg Directly
                </a>
              </div>
            )}

            <button
              onClick={() => {
                setAnswers({});
                setStep(0);
                setSubmitted(false);
                autoSent.current = false;
              }}
              className="mt-8 text-sm text-slate-400 transition hover:text-slate-600"
            >
              Start over
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
