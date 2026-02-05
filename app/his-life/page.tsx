import Image from "next/image"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Timeline from "@/components/timeline"
import PageHeader from "@/components/page-header"

export const metadata = {
  title: "His Life | Dr. Kumar Foundation",
  description:
    "The life journey of Dr. Ghulam Mohammad Kumar (Qalandar-e-Kashmir), from birth to global spiritual influence.",
}

export default function HisLifePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <PageHeader
        title="The Life of Dr. Ghulam Mohammad Kumar"
        subtitle="A Journey from Medicine to Mysticism"
        backgroundImage="/placeholder.svg?height=1080&width=1920"
      />

      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="font-serif text-3xl font-bold mb-6">Early Life & Background</h2>
              <p className="mb-4 text-lg">
                Born in 1957 in Ganderbal, Kashmir, Dr. Ghulam Mohammad Kumar came from a well-respected family with a lineage of scholars, healers, and seekers. From an early age, he displayed a deep sensitivity to the natural world and an unusual curiosity about spiritual matters. His contemplative nature and compassion for people and animals were early signs of the path he would later walk.
              </p>
              <p className="mb-4 text-lg">
                His formal education led him to medicine, where he excelled as a physician. After completing his MBBS in 1981 at the age of 24, he joined the government medical service, providing healthcare to remote villages across Kashmir. Known for his generosity, he treated patients regardless of their ability to pay, earning a reputation for both skill and kindness.
              </p>
              <p className="mb-6 text-lg">
                Yet even while serving as a doctor, Dr. Kumar felt an inner pull toward questions that medicine alone could not answer

 the deeper roots of suffering, healing, and the mystery of existence. This inner tension quietly prepared him for a profound transformation.
              </p>

              <h2 className="font-serif text-3xl font-bold mb-6 mt-12">The Spiritual Awakening</h2>
              <div className="flex flex-col md:flex-row gap-8 mb-8">
                <div className="md:w-1/2">
                  <p className="mb-4 text-lg">
                    In 1975, at the age of 18, Dr. Kumar underwent what he later described as a “shattering of the self.” While visiting a remote mountain village, he encountered an elderly mystic who spoke of the limitations of physical medicine and the deeper dimensions of human suffering.
                  </p>
                  <p className="text-lg">
                    This meeting marked a turning point. In the months that followed, he experienced intense dreams, inner visions, and altered states of consciousness that defied his medical understanding. What began as a private unease soon unfolded into a spiritual crisis

 a call that would eventually lead him away from conventional practice and into the path of mysticism.
                  </p>
                </div>
                <div className="md:w-1/2 relative aspect-[4/3]">
                  <Image
                    src="/lab.webp"
                    alt="The mountains of Kashmir where Dr. Kumar experienced his spiritual awakening"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-bold mb-4">Key Life Events</h3>
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <div className="font-bold min-w-[60px]">1957</div>
                      <div>Born in Ganderbal, Kashmir, India</div>
                    </li>
                    <li className="flex gap-3">
                      <div className="font-bold min-w-[60px]">1975</div>
                      <div>Spiritual awakening and crisis</div>
                    </li>
                    <li className="flex gap-3">
                      <div className="font-bold min-w-[60px]">1981</div>
                      <div>Completed medical education (MBBS)</div>
                    </li>
                    <li className="flex gap-3">
                      <div className="font-bold min-w-[60px]">1983</div>
                      <div>Abandoned medical practice</div>
                    </li>
                    <li className="flex gap-3">
                      <div className="font-bold min-w-[60px]">1983-97</div>
                      <div>14 years in silence in Ganderbal</div>
                    </li>
                    <li className="flex gap-3">
                      <div className="font-bold min-w-[60px]">1998</div>
                      <div>Return as a Qalandar</div>
                    </li>
                    <li className="flex gap-3">
                      <div className="font-bold min-w-[60px]">
                        1999-{new Date().getFullYear() - 2000}
                      </div>
                      <div>Started teaching and healing</div>
                    </li>

                    <li className="flex gap-3">
                      <div className="font-bold min-w-[60px]">2022</div>
                      <div>Established Sufi Science Center (USA)</div>
                    </li>
                    <li className="flex gap-3">
                      <div className="font-bold min-w-[60px]">2024</div>
                      <div>Established Sufi Pulse</div>
                    </li>
                    <li className="flex gap-3">
                      <div className="font-bold min-w-[60px]">2025</div>
                      <div>Established Dr. Kumar Foundation (USA)</div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mt-6 shadow-md rounded-2xl border border-gray-200">
                <CardContent className="p-6">
                  <h3 className="font-serif text-2xl font-semibold text-emerald-600 mb-4">
                    In Devotion and Continuity
                  </h3>
                  <blockquote className="italic text-lg leading-relaxed text-gray-700 border-l-4 border-emerald-600 pl-4">
                    “This work is not history, but a living bridge. As his disciple, I have tried to carry Dr. Kumar’s light into the language of our times, so new seekers may walk the same path of silence and awakening.”
                  </blockquote>
                  <p className="mt-4 text-right font-medium text-emerald-600">
                   

 Disciple <span className="font-semibold">Dr Zarf-e-Noori</span>
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">The Saint's Journey</h2>
          <Timeline />
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl font-bold mb-6">14 Years in Silence</h2>
            <div className="relative aspect-video mb-8">
              <Image
                src="/16-silence.png"
                alt="The jungle of Ganderbal where Dr. Kumar spent 14 years in silence"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <p className="mb-4 text-lg">
              In 1983, Dr. Kumar made the radical decision to abandon his medical practice and all material possessions. He retreated into the dense forests of Ganderbal, where he would spend the next 14 years in almost complete silence and solitude.
            </p>
            <p className="mb-4 text-lg">
              During this period, he lived with the barest essentials, often exposed to the elements, with little food or shelter. Villagers who occasionally encountered him described a man who seemed to exist between worlds

 sometimes unaware of his surroundings, yet radiating an unusual peace and light.
            </p>
            <p className="mb-4 text-lg">
              This phase represented the Fana stage of his spiritual journey

 the annihilation of the ego and dissolution of the separate self. In Sufi tradition, Fana is the necessary precursor to Baqa, or subsistence in the Divine. Those who knew him before and after this retreat often remarked that it was as if the physician had died in the forest, and a mystic had emerged.
            </p>

            <h2 className="font-serif text-3xl font-bold mb-6 mt-12">Return as a Qalandar</h2>
            <p className="mb-4 text-lg">
            In 1998, Dr. Kumar emerged from the forest profoundly transformed. He no longer identified himself as a doctor or by his former professional identity. Instead, he returned as a Qalandar, a mystic who stands beyond formal labels, religious display, and social convention, rooted in a continuous state of presence with the Divine.
            </p>
            <p className="mb-4 text-lg">
              
He reentered society without possessions, without a fixed residence, and without any desire to be known. He spoke rarely, and only when necessary. Yet people were drawn to him. Those who spent time in his presence often described an unexpected stillness, a deep inner clarity, and moments of healing that arose without instruction, ritual, or explanation.
            </p>
            <p className="mb-8 text-lg">
            This period marked the quiet beginning of his wider influence. Seekers from different walks of life and faith traditions began approaching him, not as a teacher in the conventional sense, but as a presence that revealed what was already within them.
            </p>

            <h2 className="font-serif text-3xl font-bold mb-6 mt-12">Global Reach</h2>
            <p className="mb-4 text-lg">
            By the late 2010s and into 2019, Dr. Kumar’s presence had extended far beyond Kashmir. Invited by devotees, he traveled internationally, carrying his way of being to Europe, North America, and Australia. His message remained uncompromisingly simple: true healing arises not from effort but from stillness, not from accumulation but from surrender, not from knowledge but from the dissolution of the one who claims to know.
            </p>
            <h2 className="font-serif text-3xl font-bold mb-6 mt-12">Institutional Emergence</h2>
            <p className="mb-4 text-lg">
            In 2022, the Sufi Science Center was established in Virginia and California as a living bridge between inner realization and scientific inquiry. The Center became a space for exploring consciousness, healing practices, and environmental responsibility, not as belief systems, but as lived inquiry informed by direct experience.
            </p>
            <h2 className="font-serif text-3xl font-bold mb-6 mt-12">A Living Path</h2>
            <p className="mb-4 text-lg">
            From 2020 onward, the work entered a quieter, more inward phase. Public travel reduced, but the depth of transmission continued through presence, guidance, and the unfolding work of the Sufi Science Center and related initiatives. Dr. Kumar remains alive, embodying the paradox at the heart of his path: a healer without medicine, a teacher beyond words, a mystic who lives simultaneously in silence and in light.
            </p>
            <h2 className="font-serif text-3xl font-bold mb-6 mt-12">Living Legacy</h2>
            <p className="mb-8 text-lg">
              
Today, his influence continues to grow, not as a closed chapter, but as an ongoing movement of awareness. Through students, research initiatives, and lived practice, his journey reflects a simple truth: the deepest transformation does not come from power, identity, or possession, but from returning to what was never absent
            </p>

            <div className="flex justify-center mt-12">
              <Button asChild>
                <Link href="/">
                  <ChevronLeft className="mr-2 h-4 w-4" /> Back to Home
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
