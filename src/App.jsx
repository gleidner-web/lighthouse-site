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

  return (
    <div className="min-h-screen bg-white text-slate-900">

      <main>

        <section id="founder" className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2">

            <div>
              <h2 className="text-3xl font-semibold tracking-tight">Greg Leidner</h2>
              <p className="mt-4 text-slate-600">
                Founder, Lighthouse Point Advisors. Former CEO, United Pipe &amp; Steel | Former BCG Consultant | MBA, MIT Sloan.
              </p>
            </div>

            <div>
              <div className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Selected Experience
              </div>

              <div className="space-y-3 text-slate-700">

                {/* Main statement (not a bullet) */}
                <div className="text-lg font-semibold text-slate-900 leading-snug">
                  Led a national industrial distribution platform over two decades
                </div>

                {/* Sub bullets */}
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
        </section>

      </main>
    </div>
  );
}
