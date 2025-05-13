import Link from "next/link";

export const metadata = {
  title: "Pitch Deck - Kytzo",
  description: "Kytzo company pitch deck, May 2025.",
};

export default function PitchDeck() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="pt-32 pb-12 md:pt-40 md:pb-20">
        {/* Page header */}
        <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
          <h1 className="h1 mb-4">Pitch Deck <span className="text-base text-gray-400">(May 2025)</span></h1>
          <p className="text-xl text-gray-400">
            Explore Kytzo's vision, solutions, and business opportunity.
          </p>
        </div>
        <div className="mx-auto max-w-3xl">
          {/* Slide 1 — Title */}
          <div className="mb-8">
            <h3 className="h4 mb-2">Kytzo</h3>
            <p className="text-lg text-indigo-200/80 mb-1">Simplify Processes · Automate Solutions · Increase Revenue</p>
          </div>
          {/* Slide 2 — The Problem */}
          <div className="mb-8">
            <h4 className="font-semibold text-indigo-300 mb-2">The Problem</h4>
            <ul className="list-disc list-inside space-y-1 text-indigo-200/80">
              <li>Repetitive manual tasks drain hours and morale.</li>
              <li>Disconnected systems slow follow‑ups and lose revenue.</li>
              <li>Error‑prone data entry creates costly mistakes.</li>
              <li>SMEs lack in‑house AI expertise to fix it quickly.</li>
            </ul>
          </div>
          {/* Slide 3 — Our Solution */}
          <div className="mb-8">
            <h4 className="font-semibold text-indigo-300 mb-2">Our Solution</h4>
            <p className="mb-2">End‑to‑end, cloud‑native AI automation that plugs straight into your stack:</p>
            <ol className="list-decimal list-inside space-y-1 text-indigo-200/80">
              <li><strong>Custom AI Development</strong> — Chatbots & RAG apps powered by OpenAI, Claude, Gemini.</li>
              <li><strong>Workflow Automation</strong> — n8n & MCP workflows that integrate 400+ services.</li>
              <li><strong>Autonomous Agents</strong> — Task‑oriented AI agents that think, decide, and act.</li>
            </ol>
          </div>
          {/* Slide 4 — Product / Services */}
          <div className="mb-8">
            <h4 className="font-semibold text-indigo-300 mb-2">Product / Services</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm text-indigo-200/80 border border-indigo-400/20">
                <thead>
                  <tr className="bg-gray-800/40">
                    <th className="px-4 py-2 text-left font-semibold">Pillar</th>
                    <th className="px-4 py-2 text-left font-semibold">What You Get</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-indigo-400/10">
                    <td className="px-4 py-2 align-top font-semibold">AI Development</td>
                    <td className="px-4 py-2">
                      <ul className="list-disc list-inside">
                        <li>Custom chatbots</li>
                        <li>Retrieval‑Augmented Generation (RAG)</li>
                        <li>Process automation APIs</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="border-t border-indigo-400/10">
                    <td className="px-4 py-2 align-top font-semibold">Automation</td>
                    <td className="px-4 py-2">
                      <ul className="list-disc list-inside">
                        <li>n8n workflow design</li>
                        <li>MCP cloud integration</li>
                        <li>Scalable system bridges</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="border-t border-indigo-400/10">
                    <td className="px-4 py-2 align-top font-semibold">Agents</td>
                    <td className="px-4 py-2">
                      <ul className="list-disc list-inside">
                        <li>Autonomous task agents</li>
                        <li>Decision‑support bots</li>
                        <li>Continuous improvement loops</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* Slide 5 — Market Opportunity */}
          <div className="mb-8">
            <h4 className="font-semibold text-indigo-300 mb-2">Market Opportunity</h4>
            <ul className="list-disc list-inside space-y-1 text-indigo-200/80">
              <li><strong>$25 B</strong> global AI automation TAM in 2025, CAGR &gt; 22 %.</li>
              <li>Only <strong>15 %</strong> of SMB workflows automated today.</li>
              <li>Early adopters report <strong>30‑50 %</strong> cost savings and faster growth.</li>
            </ul>
          </div>
          {/* Slide 6 — Business Model */}
          <div className="mb-8">
            <h4 className="font-semibold text-indigo-300 mb-2">Business Model</h4>
            <ul className="list-disc list-inside space-y-1 text-indigo-200/80">
              <li><strong>Project Fees</strong> for design & build (avg. $25–150 k per engagement).</li>
              <li><strong>Recurring Subscriptions</strong> for hosting, support, & AI agent orchestration (ARR $12 k+ per client).</li>
              <li><strong>Training & Advisory</strong> upsells for enterprise roll‑outs.</li>
            </ul>
          </div>
          {/* Slide 7 — Traction & Social Proof */}
          <div className="mb-8">
            <h4 className="font-semibold text-indigo-300 mb-2">Traction & Social Proof</h4>
            <ul className="list-disc list-inside space-y-1 text-indigo-200/80">
              <li><strong>3 years</strong> shipping AI solutions; <strong>dozens</strong> of happy clients.</li>
              <li><em>“Claudio has been an exceptional extension of our engineering team.”</em> — CEO, <strong>Ellis</strong></li>
              <li>Top‑earning developer on <strong>Replit Bounties</strong>.</li>
              <li>Clients include fintech, ed‑tech, and SaaS scale‑ups.</li>
            </ul>
          </div>
          {/* Slide 8 — Competitive Edge */}
          <div className="mb-8">
            <h4 className="font-semibold text-indigo-300 mb-2">Competitive Edge</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm text-indigo-200/80 border border-indigo-400/20">
                <thead>
                  <tr className="bg-gray-800/40">
                    <th className="px-4 py-2 text-left font-semibold">Kytzo</th>
                    <th className="px-4 py-2 text-left font-semibold">CrewAI</th>
                    <th className="px-4 py-2 text-left font-semibold">Zapier / Make</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-indigo-400/10">
                    <td className="px-4 py-2 align-top">Custom LLM & agent expertise</td>
                    <td className="px-4 py-2 align-top">Focused on autonomous agents only</td>
                    <td className="px-4 py-2 align-top">No native AI, rule‑based</td>
                  </tr>
                  <tr className="border-t border-indigo-400/10">
                    <td className="px-4 py-2 align-top">Full‑stack cloud, DevOps, security</td>
                    <td className="px-4 py-2 align-top">Limited infra help</td>
                    <td className="px-4 py-2 align-top">DIY, non‑technical users</td>
                  </tr>
                  <tr className="border-t border-indigo-400/10">
                    <td className="px-4 py-2 align-top">Bespoke onboarding & support</td>
                    <td className="px-4 py-2 align-top">Community‑led</td>
                    <td className="px-4 py-2 align-top">Self‑serve</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* Slide 9 — Team */}
          <div className="mb-8">
            <h4 className="font-semibold text-indigo-300 mb-2">Team</h4>
            <ul className="list-disc list-inside space-y-1 text-indigo-200/80">
              <li><strong>Claudio Canales</strong> — Founder & Lead Engineer<br />15  + yrs DevOps & AI, AWS/GCP/Azure certified, Top 1 % Replit bounty hunter</li>
              <li><strong>Fawzi Chibah</strong> — Senior Engineer<br />Full‑stack & system architecture, scalable cloud apps</li>
              <li>Supported by a network of specialist contractors in data, design, and growth.</li>
            </ul>
          </div>
          {/* Slide 10 — Roadmap */}
          <div className="mb-8">
            <h4 className="font-semibold text-indigo-300 mb-2">Roadmap</h4>
            <ol className="list-decimal list-inside space-y-1 text-indigo-200/80">
              <li><strong>Q3 2025</strong> — Launch Kytzo Agent Hub (multi‑agent SaaS).</li>
              <li><strong>Q4 2025</strong> — Pre‑built industry blueprints (Fintech, e‑Commerce, EdTech).</li>
              <li><strong>2026</strong> — Expand to LATAM & North America partner network.</li>
            </ol>
          </div>
          {/* Slide 11 — The Ask */}
          <div className="mb-8">
            <h4 className="font-semibold text-indigo-300 mb-2">The Ask</h4>
            <ul className="list-disc list-inside space-y-1 text-indigo-200/80">
              <li>Pilot customers ready to automate 3–5 key workflows.</li>
              <li>Strategic partners in cloud & AI tooling.</li>
              <li>Seed investment to accelerate Agent Hub (<span className="font-semibold">$750 k</span>).</li>
            </ul>
            <div className="mt-4 space-y-2">
              <p>Contact: <a href="mailto:claudio@kytzo.com" className="text-indigo-500 hover:text-indigo-400">claudio@kytzo.com</a></p>
              <p className="mt-2">Let's build smarter, together.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 