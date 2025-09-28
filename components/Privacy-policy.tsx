import Head from 'next/head';
import { Mail, Globe, MapPin } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - Dr. Kumar Foundation USA</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charset="UTF-8" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" />
      </Head>
      <div className="bg-white text-gray-900 min-h-screen font-['Inter']">
        <header className="bg-emerald-600 text-white py-6 text-center">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-2">Privacy Policy</h1>
            <p className="text-sm xs:text-base sm:text-lg opacity-90">Effective Date: January 2025</p>
          </div>
        </header>

        <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 xs:py-10 sm:py-12">
          <section className="mb-8 xs:mb-10">
            <div className="border border-gray-200 rounded-lg p-4 xs:p-6 bg-gray-50">
              <p className="text-sm xs:text-base sm:text-lg text-gray-900 max-w-3xl text-left">
                Dr. Kumar Foundation USA (“we,” “our,” or “the Foundation”) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you interact with our websites, programs, and online platforms.
              </p>
            </div>
          </section>

          <section className="mb-8 xs:mb-10">
            <h2 className="text-xl xs:text-2xl sm:text-3xl font-semibold text-emerald-600 mb-3 xs:mb-4 text-left">1. Information We Collect</h2>
            <div className="border border-gray-200 rounded-lg p-4 xs:p-6 bg-gray-50">
              <div className="text-sm xs:text-base sm:text-lg text-gray-900 max-w-3xl text-left">
                <p>We may collect the following types of information:</p>
                <ul className="list-disc pl-5 xs:pl-6 mt-2">
                  <li className="mb-2"><strong>Personal Information:</strong> Name, email address, phone number, or other details you voluntarily provide through forms, donations, or subscriptions.</li>
                  <li className="mb-2"><strong>Non-Personal Information:</strong> Browser type, device information, IP address, and site usage statistics collected automatically.</li>
                  <li><strong>Program Participation Data:</strong> Information you provide when registering for events, workshops, or volunteer activities.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8 xs:mb-10">
            <h2 className="text-xl xs:text-2xl sm:text-3xl font-semibold text-emerald-600 mb-3 xs:mb-4 text-left">2. How We Use Your Information</h2>
            <div className="border border-gray-200 rounded-lg p-4 xs:p-6 bg-gray-50">
              <div className="text-sm xs:text-base sm:text-lg text-gray-900 max-w-3xl text-left">
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-5 xs:pl-6 mt-2">
                  <li className="mb-2">Communicate with you about events, programs, and initiatives.</li>
                  <li className="mb-2">Manage donations, volunteer participation, and subscriptions.</li>
                  <li className="mb-2">Improve our website, services, and outreach.</li>
                  <li className="mb-2">Share updates on research, publications, and community initiatives.</li>
                  <li>Comply with applicable legal or regulatory requirements.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8 xs:mb-10">
            <h2 className="text-xl xs:text-2xl sm:text-3xl font-semibold text-emerald-600 mb-3 xs:mb-4 text-left">3. Sharing of Information</h2>
            <div className="border border-gray-200 rounded-lg p-4 xs:p-6 bg-gray-50">
              <div className="text-sm xs:text-base sm:text-lg text-gray-900 max-w-3xl text-left">
                <p>We respect your privacy. We do not sell, trade, or rent your personal information. Your information may be shared only with:</p>
                <ul className="list-disc pl-5 xs:pl-6 mt-2">
                  <li className="mb-2"><strong>Service Providers:</strong> Trusted vendors who support our operations (e.g., email services, payment processors).</li>
                  <li><strong>Legal Authorities:</strong> When required by law or to protect the Foundation’s rights and safety.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8 xs:mb-10">
            <h2 className="text-xl xs:text-2xl sm:text-3xl font-semibold text-emerald-600 mb-3 xs:mb-4 text-left">4. Cookies & Tracking Technologies</h2>
            <div className="border border-gray-200 rounded-lg p-4 xs:p-6 bg-gray-50">
              <p className="text-sm xs:text-base sm:text-lg text-gray-900 max-w-3xl text-left">
                Our website may use cookies to improve user experience, analyze trends, and gather demographic information. You may disable cookies through your browser settings, though some features of the site may not function properly.
              </p>
            </div>
          </section>

          <section className="mb-8 xs:mb-10">
            <h2 className="text-xl xs:text-2xl sm:text-3xl font-semibold text-emerald-600 mb-3 xs:mb-4 text-left">5. Data Security</h2>
            <div className="border border-gray-200 rounded-lg p-4 xs:p-6 bg-gray-50">
              <p className="text-sm xs:text-base sm:text-lg text-gray-900 max-w-3xl text-left">
                We use industry-standard practices to protect your information. However, no electronic storage or transmission is completely secure, and we cannot guarantee absolute security.
              </p>
            </div>
          </section>

          <section className="mb-8 xs:mb-10">
            <h2 className="text-xl xs:text-2xl sm:text-3xl font-semibold text-emerald-600 mb-3 xs:mb-4 text-left">6. Children’s Privacy</h2>
            <div className="border border-gray-200 rounded-lg p-4 xs:p-6 bg-gray-50">
              <p className="text-sm xs:text-base sm:text-lg text-gray-900 max-w-3xl text-left">
                Our website and programs are not directed toward children under 13. We do not knowingly collect personal information from children.
              </p>
            </div>
          </section>

          <section className="mb-8 xs:mb-10">
            <h2 className="text-xl xs:text-2xl sm:text-3xl font-semibold text-emerald-600 mb-3 xs:mb-4 text-left">7. International Visitors</h2>
            <div className="border border-gray-200 rounded-lg p-4 xs:p-6 bg-gray-50">
              <p className="text-sm xs:text-base sm:text-lg text-gray-900 max-w-3xl text-left">
                As a U.S.-based foundation, all data collected is processed under U.S. privacy laws. If you are accessing our site from outside the U.S., you consent to the transfer and processing of your information in the United States.
              </p>
            </div>
          </section>

          <section className="mb-8 xs:mb-10">
            <h2 className="text-xl xs:text-2xl sm:text-3xl font-semibold text-emerald-600 mb-3 xs:mb-4 text-left">8. Your Rights</h2>
            <div className="border border-gray-200 rounded-lg p-4 xs:p-6 bg-gray-50">
              <div className="text-sm xs:text-base sm:text-lg text-gray-900 max-w-3xl text-left">
                <p>Depending on your jurisdiction, you may have the right to:</p>
                <ul className="list-disc pl-5 xs:pl-6 mt-2">
                  <li className="mb-2">Access the personal data we hold about you.</li>
                  <li className="mb-2">Request corrections or updates.</li>
                  <li className="mb-2">Request deletion of your information, subject to legal requirements.</li>
                  <li>Opt-out of communications at any time by clicking “unsubscribe” in our emails or contacting us directly.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8 xs:mb-10">
            <h2 className="text-xl xs:text-2xl sm:text-3xl font-semibold text-emerald-600 mb-3 xs:mb-4 text-left">9. Changes to this Policy</h2>
            <div className="border border-gray-200 rounded-lg p-4 xs:p-6 bg-gray-50">
              <p className="text-sm xs:text-base sm:text-lg text-gray-900 max-w-3xl text-left">
                We may update this Privacy Policy periodically. The “Effective Date” above reflects the most recent update. Please review this page regularly to stay informed.
              </p>
            </div>
          </section>
          <section className="bg-gray-900 text-white p-4 xs:p-6 rounded-lg mt-6 xs:mt-8">
            <h2 className="text-lg xs:text-xl sm:text-2xl font-semibold text-white mb-3 xs:mb-4 text-left break-words">
              11. Contact Us
            </h2>

            <div className="border border-gray-200 rounded-lg p-4 xs:p-6 bg-gray-800">
              <div className="text-sm xs:text-base sm:text-lg opacity-90 text-left space-y-3">

                <p>If you have questions about these Terms of Service, please contact us:</p>

                <p className="flex flex-wrap items-center text-sm sm:text-base">
                  <Globe className="mr-2 shrink-0" size={20} />
                  <strong>Phone:</strong>
                  <a
                    href="tel:+19166990091"
                    className="text-emerald-600 hover:underline ml-1 break-all"
                  >
                    +1 (916) 699 0091
                  </a>
                </p>

                <p className="flex flex-wrap items-center text-sm sm:text-base">
                  <Mail className="mr-2 shrink-0" size={20} />
                  <strong>Email:</strong>
                  <a
                    href="mailto:contact@dkf.sufisciencecenter.info"
                    className="text-emerald-600 hover:underline ml-1 break-all"
                  >
                    contact@dkf.sufisciencecenter.info
                  </a>
                </p>

                <p className="flex flex-wrap items-start text-sm sm:text-base">
                  <MapPin className="mr-2 shrink-0 mt-1" size={20} />
                  <strong>Address:</strong>
                  <span className="ml-1 break-words">
                    Sufi Science Center, One Loudoun, Loudon, Virginia 20147, USA
                  </span>
                </p>

              </div>
            </div>
          </section>

          <section className="mb-8 xs:mb-10">
            <div className="border border-gray-200 rounded-lg p-4 xs:p-6 bg-gray-50">
              <p className="text-left text-emerald-600 italic text-sm xs:text-base sm:text-lg max-w-3xl">
                At Dr. Kumar Foundation USA, your trust is sacred. We handle your data with the same care and respect with which we share Dr. Kumar’s teachings

                with integrity, transparency, and responsibility.
              </p>
            </div>
          </section>
        </main>

        <footer className="bg-emerald-600 text-white text-center py-3 xs:py-4">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <p className="text-xs xs:text-sm sm:text-base">&copy; 2025 Dr. Kumar Foundation USA. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}