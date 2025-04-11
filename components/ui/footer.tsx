import Logo from "./logo";
import Image from "next/image";
import Link from "next/link";
import FooterIllustration from "@/public/images/footer-illustration.svg";

export default function Footer() {
  return (
    <footer>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Footer illustration */}
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2"
          aria-hidden="true"
        >
          <Image
            className="max-w-none"
            src={FooterIllustration}
            width={1076}
            height={378}
            alt="Footer illustration"
          />
        </div>
        <div className="grid grid-cols-2 justify-between gap-12 py-8 sm:grid-rows-[auto_auto] md:grid-cols-3 md:grid-rows-[auto_auto] md:py-12 lg:grid-cols-[repeat(3,minmax(0,140px))_1fr] lg:grid-rows-1 xl:gap-20">
          {/* 1st block - Services */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/#services"
                >
                  AI Development
                </Link>
              </li>
              <li>
                <Link
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/#services"
                >
                  Lead Generation
                </Link>
              </li>
              <li>
                <Link
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/#services"
                >
                  CRM Automation
                </Link>
              </li>
              <li>
                <Link
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/#features"
                >
                  How We Work
                </Link>
              </li>
            </ul>
          </div>
          {/* 2nd block - Company */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/about"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/#testimonials"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/#contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {/* 3rd block - Resources */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/privacy"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/terms"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          {/* 4th block - Logo & Social */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1 lg:text-right">
            <div className="mb-3">
              <Logo />
            </div>
            <div className="text-sm">
              <p className="mb-3 text-indigo-200/65">
                © Kytzo.com {new Date().getFullYear()}
                <span className="text-gray-700 mx-2">·</span>
                <Link
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/terms"
                >
                  Terms
                </Link>
              </p>
              <ul className="inline-flex gap-1">
                <li>
                  <a
                    className="flex items-center justify-center text-indigo-500 transition hover:text-indigo-400"
                    href="https://twitter.com/kytzoai"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                  >
                    <svg
                      className="h-8 w-8 fill-current"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center justify-center text-indigo-500 transition hover:text-indigo-400"
                    href="https://linkedin.com/company/kytzo"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <svg
                      className="h-8 w-8 fill-current"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M23,32H9c-5,0-9-4-9-9V9c0-5,4-9,9-9h14c5,0,9,4,9,9v14C32,28,28,32,23,32z M12,8c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3S13.7,8,12,8z M10,13.4v12.3h4V13.4H10z M18,13.4c0,0-0.1,4.5,0,5.3h0c0-0.9,0.8-1.7,1.7-1.7c0,0,0,0,0,0h2.3c2.2,0,4-1.8,4-4v-5h-4v10c0,0.6-0.4,1-1,1h-1c-0.6,0-1-0.4-1-1v-10h-4v12.3h4v-7H18V13.4z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center justify-center text-indigo-500 transition hover:text-indigo-400"
                    href="https://github.com/kytzo"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Github"
                  >
                    <svg
                      className="h-8 w-8 fill-current"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
