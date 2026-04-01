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
