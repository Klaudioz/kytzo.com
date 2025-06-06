import Image from "next/image";
import WorkflowsDiagram from "@/public/images/workflows-diagram.svg";

export default function Workflows() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Our Services
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              AI-Powered Solutions
            </h2>
            <p className="text-lg text-indigo-200/65">
              Intelligent automation solutions for modern businesses
            </p>
          </div>

          {/* Service categories */}
          <div className="grid gap-8 md:grid-cols-3 lg:gap-16">
            {/* 1st service */}
            <div className="rounded-lg border border-gray-800 bg-gray-800/20 p-6">
              <h3 className="mb-3 font-nacelle text-xl font-semibold text-gray-200">
                AI DEVELOPMENT
              </h3>
              <p className="mb-4 text-indigo-200/65">
                We craft intelligent solutions powered by OpenAI, Claude, and Gemini, deployed on AWS and Cloudflare infrastructure. Our cloud-native AI tools and custom chatbots leverage RAG and the latest in large language models, driving growth and enhancing communication.
              </p>
              <ul className="space-y-2 text-indigo-200/65">
                <li>• Custom AI Chatbots</li>
                <li>• RAG-Powered Solutions</li>
                <li>• Process Automation</li>
              </ul>
            </div>

            {/* 2nd service */}
            <div className="rounded-lg border border-gray-800 bg-gray-800/20 p-6">
              <h3 className="mb-3 font-nacelle text-xl font-semibold text-gray-200">
                AUTOMATION
              </h3>
              <p className="mb-4 text-indigo-200/65">
                We specialize in creating powerful automation workflows using n8n and MCP in the cloud. Our cloud-native solutions help you automate tasks, integrate systems, and create efficient workflows that scale seamlessly.
              </p>
              <ul className="space-y-2 text-indigo-200/65">
                <li>• n8n Workflow Automation</li>
                <li>• MCP Integration</li>
                <li>• System Integration</li>
              </ul>
            </div>

            {/* 3rd service */}
            <div className="rounded-lg border border-gray-800 bg-gray-800/20 p-6">
              <h3 className="mb-3 font-nacelle text-xl font-semibold text-gray-200">
                AGENTS
              </h3>
              <p className="mb-4 text-indigo-200/65">
                Our AI agents, built with OpenAI, Claude, and Gemini APIs, are designed to handle complex tasks and decision-making processes. These cloud-powered intelligent systems ensure reliable performance and global scalability.
              </p>
              <ul className="space-y-2 text-indigo-200/65">
                <li>• Autonomous AI Agents</li>
                <li>• Task Automation</li>
                <li>• Intelligent Decision Making</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
