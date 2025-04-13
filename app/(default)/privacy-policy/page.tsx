import Link from "next/link";

export const metadata = {
  title: "Privacy Policy - Kytzo",
  description: "Learn about Kytzo's privacy policy and how we protect your personal data.",
};

export default function PrivacyPolicy() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="pt-32 pb-12 md:pt-40 md:pb-20">
        {/* Page header */}
        <div className="mx-auto max-w-3xl pb-8 text-center md:pb-12">
          <h1 className="h1 mb-4">Privacy Policy for kytzo.com</h1>
          <p className="text-gray-400">Last Updated: April 13, 2025</p>
        </div>

        {/* Content */}
        <div className="mx-auto max-w-3xl">
          <div className="space-y-8">
            {/* Introduction */}
            <div>
              <h2 className="h3 mb-4">Introduction</h2>
              <p>
                Welcome to kytzo.com ("Company," "we," "our," or "us"). We value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, kytzo.com (the "Site"), or use our services. Please read this policy carefully. If you do not agree with the terms of this policy, please do not access the Site.
              </p>
              <p className="mt-4">
                If you have any questions or concerns about this policy, contact us at{" "}
                <a href="mailto:privacy@kytzo.com" className="text-indigo-500 hover:text-indigo-400">
                  privacy@kytzo.com
                </a>.
              </p>
            </div>

            {/* Information We Collect */}
            <div>
              <h2 className="h3 mb-4">Information We Collect</h2>
              <p className="mb-4">We may collect the following types of information:</p>
              <ul className="list-inside list-disc space-y-2">
                <li><strong>Personal Information:</strong> Name, email address, phone number, billing address, and payment details.</li>
                <li><strong>Technical Data:</strong> IP address, browser type, operating system, and other device identifiers.</li>
                <li><strong>Usage Data:</strong> Pages visited, time spent on the Site, and other analytics.</li>
                <li><strong>Cookies and Tracking Technologies:</strong> Information collected through cookies or similar technologies (see our Cookie Policy for details).</li>
              </ul>
            </div>

            {/* How We Use Your Information */}
            <div>
              <h2 className="h3 mb-4">How We Use Your Information</h2>
              <p className="mb-4">We use the information we collect for purposes such as:</p>
              <ul className="list-inside list-disc space-y-2">
                <li>Providing and improving our services.</li>
                <li>Processing transactions and sending order confirmations.</li>
                <li>Communicating with you regarding updates or promotional offers (with your consent).</li>
                <li>Ensuring security and preventing fraud.</li>
                <li>Complying with legal obligations.</li>
              </ul>
            </div>

            {/* Sharing Your Information */}
            <div>
              <h2 className="h3 mb-4">Sharing Your Information</h2>
              <p className="mb-4">We may share your information with:</p>
              <ul className="list-inside list-disc space-y-2">
                <li><strong>Service Providers:</strong> Third parties who assist in providing services (e.g., payment processors or analytics tools).</li>
                <li><strong>Legal Authorities:</strong> When required by law or to protect our rights.</li>
                <li><strong>Advertising Partners:</strong> To deliver personalized ads (only with your consent).</li>
              </ul>
              <p className="mt-4">We do not sell your personal information to third parties.</p>
            </div>

            {/* Your Rights */}
            <div>
              <h2 className="h3 mb-4">Your Rights</h2>
              <p className="mb-4">Depending on your location, you may have the following rights under applicable data protection laws:</p>
              <ul className="list-inside list-disc space-y-2">
                <li>Access your personal data.</li>
                <li>Request correction or deletion of your data.</li>
                <li>Withdraw consent for data processing.</li>
                <li>Opt-out of marketing communications.</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, email us at{" "}
                <a href="mailto:privacy@kytzo.com" className="text-indigo-500 hover:text-indigo-400">
                  privacy@kytzo.com
                </a>.
              </p>
            </div>

            {/* Data Retention */}
            <div>
              <h2 className="h3 mb-4">Data Retention</h2>
              <p>
                We retain personal data only as long as necessary to fulfill the purposes outlined in this policy unless a longer retention period is required by law.
              </p>
            </div>

            {/* Cookies and Tracking Technologies */}
            <div>
              <h2 className="h3 mb-4">Cookies and Tracking Technologies</h2>
              <p>
                Our Site uses cookies to enhance user experience and analyze website performance. You can manage cookie preferences through your browser settings or opt-out of non-essential cookies via our Cookie Management Tool.
              </p>
            </div>

            {/* Children's Privacy */}
            <div>
              <h2 className="h3 mb-4">Children's Privacy</h2>
              <p>
                Our Site is not intended for children under 13 years of age. We do not knowingly collect personal information from children. If you believe we have collected data from a child under 13, please contact us immediately.
              </p>
            </div>

            {/* Security Measures */}
            <div>
              <h2 className="h3 mb-4">Security Measures</h2>
              <p>
                We implement industry-standard security measures such as encryption and firewalls to protect your personal data. However, no method of transmission over the internet is completely secure.
              </p>
            </div>

            {/* Changes to This Privacy Policy */}
            <div>
              <h2 className="h3 mb-4">Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last Updated" date. Please review it periodically.
              </p>
            </div>

            {/* Contact Us */}
            <div>
              <h2 className="h3 mb-4">Contact Us</h2>
              <p>If you have any questions about this Privacy Policy or how we handle your data, please contact us at:</p>
              <p className="mt-4">
                Email:{" "}
                <a href="mailto:claudio@kytzo.com" className="text-indigo-500 hover:text-indigo-400">
                  claudio@kytzo.com
                </a>
              </p>
              <p>Address: 3744 N Prairie Grass Dr, Lehi UT 84043</p>
              <p className="mt-4">
                This privacy policy ensures compliance with major regulations like GDPR, CCPA, and other global standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 