import Head from 'next/head';

export default function StatementOfPurpose() {
  return (
    <>
      <Head>
        <title>Statement of Purpose - Dr. Kumar Foundation USA</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charset="UTF-8" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" />
      </Head>
      <div className="bg-white text-gray-900 min-h-screen">
        <header className="bg-emerald-600 text-white py-8 text-center">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h1 className="text-4xl sm:text-5xl font-bold mb-2">Statement of Purpose</h1>
            <p className="text-lg sm:text-xl opacity-90">Dr. Kumar Foundation USA</p>
          </div>
        </header>

        <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <section className="mb-10">
            <div className="border border-gray-200 rounded-lg p-6 bg-gray-50 flex justify-center">
              <p className="text-base sm:text-lg text-gray-900 max-w-3xl text-center">
                The Dr. Kumar Foundation USA is dedicated to carrying forward the life, vision, and teachings of Dr. Ghulam Mohammad Kumar (Qalandar-e-Kashmir). Rooted in his path of silence, service, and awakening, the Foundation exists to honor his legacy by nurturing projects that integrate spiritual wisdom, social responsibility, and global harmony.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-semibold text-emerald-600 mb-4 text-center">Our Purpose</h2>
            <div className="border border-gray-200 rounded-lg p-6 bg-gray-50 flex justify-center">
              <div className="text-base sm:text-lg text-gray-900 max-w-3xl text-left">
                <p>Our purpose is threefold:</p>
                <ul className="list-disc pl-6 mt-2">
                  <li className="mb-2">
                    <strong>1. Spiritual Awakening and Healing</strong><br />
                    To share practices that cultivate inner stillness, compassion, and holistic wellbeing, helping individuals rediscover balance of body, mind, and spirit.
                  </li>
                  <li className="mb-2">
                    <strong>2. Education and Knowledge</strong><br />
                    To create spaces—both physical and digital—where seekers, scholars, and new generations of scientists can engage with Sufi wisdom, fostering dialogue between science and spirituality.
                  </li>
                  <li>
                    <strong>3. Service and Social Responsibility</strong><br />
                    To empower communities through programs in ecology, cultural preservation, women’s empowerment, and interfaith harmony, ensuring Dr. Kumar’s vision continues to uplift humanity.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <div className="border border-gray-200 rounded-lg p-6 bg-gray-50 flex justify-center">
              <p className="text-base sm:text-lg text-gray-900 max-w-3xl text-center">
                The Foundation operates as a non-profit, non-political organization committed to peace, healing, and the preservation of Kashmiri Sufi heritage.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <div className="border border-gray-200 rounded-lg p-6 bg-gray-50 flex justify-center">
              <p className="text-base sm:text-lg text-gray-900 max-w-3xl text-center">
                All donations and contributions in support of this purpose are managed through our sister concern, the Sufi Science Center, ensuring transparency and continuity of service.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <div className="border border-gray-200 rounded-lg p-6 bg-gray-50 flex justify-center">
              <p className="text-center text-emerald-600 italic text-lg sm:text-xl max-w-3xl">
                ✨ At its heart, the Foundation seeks to be a beacon of light—connecting seekers worldwide with the timeless truth Dr. Kumar embodied: that healing comes not from possession or power, but from presence, surrender, and love.
              </p>
            </div>
          </section>

          <section className="bg-gray-900 text-white p-6 rounded-lg mt-8">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4 text-center">Contact Us</h2>
            <div className="border border-gray-200 rounded-lg p-6 bg-gray-800 flex justify-center">
              <div className="text-base sm:text-lg opacity-90 text-center">
                <p>If you have questions about our mission or programs, please contact us:</p>
                <p>📩 <strong>Email:</strong> <a href="mailto:info@drkumarfoundation.org" className="text-emerald-600 hover:underline">info@drkumarfoundation.org</a></p>
                <p>🌐 <strong>Website:</strong> <a href="http://www.drkumarfoundation.org" className="text-emerald-600 hover:underline">www.drkumarfoundation.org</a></p>
                <p>📍 <strong>Address:</strong> Dr. Kumar Foundation USA, [Insert Official Address]</p>
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-emerald-600 text-white text-center py-4">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <p className="text-sm sm:text-base">&copy; 2025 Dr. Kumar Foundation USA. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}