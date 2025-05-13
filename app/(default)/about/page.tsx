import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About Us - Kytzo",
  description: "Learn about Kytzo's mission, values, and the team behind our innovative solutions.",
};

export default function About() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="pt-32 pb-12 md:pt-40 md:pb-20">
        {/* Page header */}
        <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
          <h1 className="h1 mb-4">About Kytzo</h1>
          <p className="text-xl text-gray-400">
            We're on a mission to make technology accessible and empowering for everyone.
          </p>
        </div>

        {/* Content */}
        <div className="mx-auto max-w-3xl">
          <div className="space-y-8">
            {/* Our Story */}
            <div>
              <h2 className="h3 mb-4">Our Story</h2>
              <p className="mb-4">
                Founded in 2023, Kytzo began with a simple vision: to create technology solutions that actually solve real-world problems. 
                Our founders recognized that in a world filled with complex software, many people were being left behind.
              </p>
              <p>
                What started as a small team passionate about accessible technology has grown into a company dedicated to 
                building intuitive, powerful tools that empower users of all technical backgrounds.
              </p>
            </div>

            {/* Our Mission */}
            <div>
              <h2 className="h3 mb-4">Our Mission</h2>
              <p>
                At Kytzo, we believe that technology should work for everyone. Our mission is to create software that's not just powerful, 
                but also intuitive and accessible. We're committed to breaking down barriers and ensuring that our solutions 
                empower users rather than confuse them.
              </p>
            </div>

            {/* Our Values */}
            <div>
              <h2 className="h3 mb-4">Our Values</h2>
              <ul className="list-inside list-disc space-y-2">
                <li><strong>Accessibility</strong> - We design with everyone in mind, regardless of technical expertise.</li>
                <li><strong>Innovation</strong> - We're constantly exploring new ways to solve problems more effectively.</li>
                <li><strong>Transparency</strong> - We believe in open communication with our users and within our team.</li>
                <li><strong>Quality</strong> - We're committed to excellence in everything we build.</li>
                <li><strong>Community</strong> - We value the input and feedback from our diverse user community.</li>
              </ul>
            </div>

            {/* Team */}
            <div>
              <h2 className="h3 mb-4">Our Team</h2>
              <p className="mb-4">
                Behind Kytzo is a diverse team of designers, developers, and problem solvers united by a shared passion. 
                We bring together different perspectives, experiences, and skills to create products that truly resonate with our users.
              </p>
              <p>
                We're always looking for talented individuals who share our vision. Check out our 
                <Link href="#0" className="text-indigo-500 hover:text-indigo-400 ml-1">
                  careers page
                </Link> to join our team.
              </p>
            </div>

            <div>
              <h2 className="h3 mb-4">Pitch Deck <span className="text-base text-gray-400">(May 2025)</span></h2>
              {/* Slide 1 — Title */}
              <div className="mb-8">
                <h3 className="h4 mb-2">Kytzo</h3>
                <p className="text-lg text-indigo-200/80 mb-1">Simplify Processes · Automate Solutions · Increase Revenue</p>
                <a href="https://www.kytzo.com" className="text-indigo-500 hover:text-indigo-400" target="_blank" rel="noopener noreferrer">www.kytzo.com</a>
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
                  <li><strong>Claudio Canales</strong> — Founder & Lead Engineer<br />15 + yrs DevOps & AI, AWS/GCP/Azure certified, Top 1 % Replit bounty hunter</li>
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
                  <p><a href="https://www.kytzo.com/#contact" className="text-indigo-500 hover:text-indigo-400" target="_blank" rel="noopener noreferrer">Book a call</a></p>
                  <p className="mt-2">Let's build smarter, together.</p>
                </div>
              </div>
            </div>

            {/* Get In Touch */}
            <div>
              <h2 className="h3 mb-4">Get In Touch</h2>
              <p>
                We'd love to hear from you! Whether you have questions, feedback, or just want to say hello, 
                don't hesitate to reach out at 
                <a href="mailto:hello@kytzo.com" className="text-indigo-500 hover:text-indigo-400 ml-1">
                  hello@kytzo.com
                </a>
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 rounded-lg bg-gray-800 p-8 text-center">
            <h3 className="h4 mb-2">Ready to experience Kytzo?</h3>
            <p className="mb-6 text-gray-400">
              Try our solutions and see how we can help you achieve your goals.
            </p>
            <div>
              <Link href="/" className="btn bg-indigo-500 text-white hover:bg-indigo-600">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 