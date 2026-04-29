import React from "react";
import gregPhoto from "./greg.jpeg";
import { ArrowRight, ChevronRight } from "lucide-react";

export default function LighthousePointAdvisorsSite() {
  React.useEffect(() => {
    document.title = "Lighthouse Point Advisors | Strategic Advisory";

    const existingScript = document.querySelector(
      'script[src="https://www.googletagmanager.com/gtag/js?id=G-6YC2WXL1S3"]'
    );

    if (!existingScript) {
      const script1 = document.createElement("script");
      script1.async = true;
      script1.src =
        "https://www.googletagmanager.com/gtag/js?id=G-6YC2WXL1S3";
      document.head.appendChild(script1);

      const script2 = document.createElement("script");
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-6YC2WXL1S3');
      `;
      document.head.appendChild(script2);
    }
  }, []);

  const ceoMoments = [
    "Performance has plateaued and needs to improve",
    "The business is scaling but systems and structure have not kept up",
    "Leadership teams need to operate at a higher level",
    "Preparing for a transaction or evaluating long-term strategic options",
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">

      {/* HERO */}
      <section className="relative bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')] bg-cover bg-center px-6 py-28">
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-5xl text-white">
          <div className="text-xs uppercase tracking-widest text-white/80">
            STRATEGIC ADVISORY SERVICES FOR CEOS AND LEADERSHIP TEAMS
          </div>

          <h1 className="mt-6 text-5xl font-semibold leading-tight">
            Practical advisory for leaders facing moments that shape enterprise value.
          </h1>

          <p className="mt-6 text-lg text-white/90 max-w-3xl">
            Lighthouse Point Advisors helps CEOs drive growth in top and bottom line through enhanced strategic clarity, strengthened execution discipline, succession planning, and proactive ownership transitions.
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="px-6 py-20 bg-slate-50">
        <div className="max-w-5xl">
          <h2 className="text-3xl font-semibold">About</h2>
          <p className="mt-6 text-slate-700 leading-8">
            Lighthouse Point Advisors works with CEOs and leadership teams looking to materially improve the trajectory of their business.
          </p>
        </div>
      </section>

      {/* WHO WE HELP */}
      <section className="px-6 py-16">
        <div className="max-w-4xl">
          <div className="text-sm uppercase tracking-widest text-slate-500">
            Who we help
          </div>

          <p className="mt-3 text-slate-600">
            Built for owners, CEOs, and leadership teams facing meaningful change.
          </p>

          <div className="mt-6 space-y-3 text-slate-600">
            {ceoMoments.map((item, i) => (
              <div key={i} className="flex gap-2">
                <ChevronRight className="h-4 w-4 mt-1" />
                <div>{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="px-6 py-20 bg-slate-50">
        <div className="max-w-6xl grid md:grid-cols-2 gap-10 items-start">
          
          <img
            src={gregPhoto}
            alt="Greg"
            className="w-full h-[26rem] object-cover object-top rounded-2xl"
          />

          <div>
            <h2 className="text-3xl font-semibold">Meet Greg</h2>

            <p className="mt-6 text-slate-600 leading-8">
              Founder, Lighthouse Point Advisors. Former CEO, United Pipe & Steel.
            </p>

            {/* SELECTED EXPERIENCE */}
            <div className="mt-10">
              <div className="text-sm uppercase tracking-widest text-slate-500">
                Selected Experience
              </div>

              <div className="mt-4 text-lg font-semibold">
                Led a national industrial distribution platform over two decades
              </div>

              <div className="mt-4 space-y-2 text-slate-600">
                <div>265 employees across multiple locations</div>
                <div>60+ tractors & trailers</div>
                <div>4M+ miles driven annually</div>
                <div>$50M to $500M+ revenue growth</div>
                <div>&gt;$50M working capital improvement</div>
                <div>&gt;$9M synergies captured</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="px-6 py-20">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="mt-4 text-slate-600">
            greg@lighthousepointadv.com
          </p>
        </div>
      </section>

    </div>
  );
}
