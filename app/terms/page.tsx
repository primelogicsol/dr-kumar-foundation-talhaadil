import Head from 'next/head';
import { Mail, Globe, MapPin } from 'lucide-react';

export default function TermsOfService() {
  return (
    <>
      <Head>
        <title>Terms of Service - Dr. Kumar Foundation USA</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charset="UTF-8" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" />
      </Head>
      <div className="bg-white text-gray-900 min-h-screen font-['Inter']">
        <header className="bg-emerald-600 text-white py-6 text-center">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-2">Terms of Service</h1>
            <p className="text-sm xs:text-base sm:text-lg opacity-90">Effective Date: January 2025</p>
          </div>
        </header>

        <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 xs:py-10 sm:py-12">
          <section className="mb-8 xs:mb-10">
            <div className="border border-gray-200 rounded-lg p-4 xs:p-6 bg-gray-50">
              <p className="text-sm xs:text-base sm:text-lg text-gray-900 max-w-3xl text-left">
                Welcome to the website of Dr. Kumar Foundation USA (“the Foundation,” “we,” “our,” or “us”). By accessing or using our website, programs, or services, you agree to comply with and be bound by these Terms of Service. Please read them carefully.
              </p>
            </div>
          </section>

          <section className="mb-8 xs:mb-10">
            <h2 className="text-xl xs:text-2xl sm:text-3xl font-semibold text-emerald-600 mb-3 xs:mb-4 text-left">1. Purpose of the Foundation</h2>
            <div className="border border-gray-200 rounded-lg p-4 xs:p-6 bg-gray-50">
              <p className="text-sm xs:text-base sm:text-lg text-gray-900 max-w-3xl text-left">
                Dr. Kumar Foundation USA is a non-profit organization dedicated to spreading the teachings of Dr. Ghulam Mohammad Kumar (Qalandar-e-Kashmir) on healing, peace, and spiritual awakening. All services, programs, and online resources are provided to support our educational, cultural, and charitable mission.
              </p>
            </div>
          </section>

          <section className="mb-8 xs:mb-10">
            <h2 className="text-xl xs:text-2xl sm:text-3xl font-semibold text-emerald-600 mb-3 xs:mb-4 text-left">2. Use of Our Website and Services</h2>
            <div className="border border-gray-200 rounded-lg p-4 xs:p-6 bg-gray-50">
              <ul className="list-disc pl-5 xs:pl-6 text-sm xs:text-base sm:text-lg text-gray-900 max-w-3xl text-left">
                <li className="mb-2">You agree to use our website and services only for lawful, non-commercial purposes consistent with the Foundation’s mission.</li>
                <li className="mb-2">You may not misuse our content, attempt unauthorized access, or disrupt the website’s functionality.</li>
                <li>We reserve the right to restrict or terminate access for users who violate these Terms.</li>
              </ul>
            </div>
          </section>

          <section className="mb-8 xs:mb-10">
            <h2 className="text-xl xs:text-2xl sm:text-3xl font-semibold text-emerald-600 mb-3 xs:mb-4 text-left">3. Intellectual Property</h2>
            <div className="border border-gray-200 rounded-lg p-4 xs:p-6 bg-gray-50">
              <ul className="list-disc pl-5 xs:pl-6 text-sm xs:text-base sm:text-lg text-gray-900 max-w-3xl text-left">
                <li className="mb-2">All website content, including text, images, audio, video, and digital materials, are the property of Dr. Kumar Foundation USA unless otherwise credited.</li>
                <li className="mb-2">Content may not be copied, distributed, modified, or used for commercial purposes without prior written consent.</li>
                <li>You may share content for personal, educational, or non-commercial use with proper attribution.</li>
              </ul>
            </div>
          </section>

          <section className="mb-8 xs:mb-10">
            <h2 className="text-xl xs:text-2xl sm:text-3xl font-semibold text-emerald-600 mb-3 xs:mb-4 text-left">4. Donations & Contributions</h2>
            <div className="border border-gray-200 rounded-lg p-4 xs:p-6 bg-gray-50">
              <ul className="list-disc pl-5 xs:pl-6 text-sm xs:text-base sm:text-lg text-gray-900 max-w-3xl text-left">
                <li className="mb-2">All donations and financial contributions in support of our mission are processed and managed by the Sufi Science Center, a sister concern of Dr. Kumar Foundation USA.</li>
                <li className="mb-2">Donations are voluntary and non-refundable.</li>
                <li className="mb-2">Receipts for tax purposes are issued in accordance with U.S. law, through the Sufi Science Center.</li>
                <li>Donor information is handled according to the Privacy Policy of the Sufi Science Center.</li>
              </ul>
            </div>
          </section>

          <section className="mb-8 xs:mb-10">
            <h2 className="text-xl xs:text-2xl sm:text-3xl font-semibold text-emerald-600 mb-3 xs:mb-4 text-left">5. Events, Programs, and Participation</h2>
            <div className="border border-gray-200 rounded-lg p-4 xs:p-6 bg-gray-50">
              <ul className="list-disc pl-5 xs:pl-6 text-sm xs:text-base sm:text-lg text-gray-900 max-w-3xl text-left">
                <li className="mb-2">Registration may be required for certain workshops, symposia, or events.</li>
                <li className="mb-2">The Foundation reserves the right to modify, cancel, or reschedule events as needed.</li>
                <li>Participants are expected to respect the spiritual, educational, and cultural values of the Foundation.</li>
              </ul>
            </div>
          </section>

          <section className="mb-8 xs:mb-10">
            <h2 className="text-xl xs:text-2xl sm:text-3xl font-semibold text-emerald-600 mb-3 xs:mb-4 text-left">6. External Links</h2>
            <div className="border border-gray-200 rounded-lg p-4 xs:p-6 bg-gray-50">
              <p className="text-sm xs:text-base sm:text-lg text-gray-900 max-w-3xl text-left">
                Our website may contain links to third-party websites (e.g., YouTube, partner organizations). We are not responsible for the content, practices, or policies of external sites.
              </p>
            </div>
          </section>

          <section className="mb-8 xs:mb-10">
            <h2 className="text-xl xs:text-2xl sm:text-3xl font-semibold text-emerald-600 mb-3 xs:mb-4 text-left">7. Limitation of Liability</h2>
            <div className="border border-gray-200 rounded-lg p-4 xs:p-6 bg-gray-50">
              <ul className="list-disc pl-5 xs:pl-6 text-sm xs:text-base sm:text-lg text-gray-900 max-w-3xl text-left">
                <li className="mb-2">The Foundation provides its resources “as is,” without guarantees of accuracy, reliability, or completeness.</li>
                <li>We are not liable for any damages resulting from the use or inability to use our website, events, or publications.</li>
              </ul>
            </div>
          </section>

          <section className="mb-8 xs:mb-10">
            <h2 className="text-xl xs:text-2xl sm:text-3xl font-semibold text-emerald-600 mb-3 xs:mb-4 text-left">8. Indemnification</h2>
            <div className="border border-gray-200 rounded-lg p-4 xs:p-6 bg-gray-50">
              <p className="text-sm xs:text-base sm:text-lg text-gray-900 max-w-3xl text-left">
                By using our services, you agree to indemnify and hold harmless Dr. Kumar Foundation USA, its directors, staff, and volunteers from any claims, liabilities, or expenses arising from your misuse of the website or violation of these Terms.
              </p>
            </div>
          </section>

          <section className="mb-8 xs:mb-10">
            <h2 className="text-xl xs:text-2xl sm:text-3xl font-semibold text-emerald-600 mb-3 xs:mb-4 text-left">9. Changes to These Terms</h2>
            <div className="border border-gray-200 rounded-lg p-4 xs:p-6 bg-gray-50">
              <p className="text-sm xs:text-base sm:text-lg text-gray-900 max-w-3xl text-left">
                We may update these Terms of Service periodically. Continued use of the website after changes are posted constitutes acceptance of the revised Terms.
              </p>
            </div>
          </section>

          <section className="mb-8 xs:mb-10">
            <h2 className="text-xl xs:text-2xl sm:text-3xl font-semibold text-emerald-600 mb-3 xs:mb-4 text-left">10. Governing Law</h2>
            <div className="border border-gray-200 rounded-lg p-4 xs:p-6 bg-gray-50">
              <p className="text-sm xs:text-base sm:text-lg text-gray-900 max-w-3xl text-left">
                These Terms are governed by the laws of the United States and the State of [Insert State of Registration], without regard to conflict of law principles.
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


          <section>
            <div className="border border-gray-200 rounded-lg p-4 xs:p-6 bg-gray-50">
              <p className="text-left text-emerald-600 italic text-sm xs:text-base sm:text-lg max-w-3xl">
                By using this website and participating in our programs, you agree to honor the spirit of the Foundation: awakening, service, and respect for human dignity.
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