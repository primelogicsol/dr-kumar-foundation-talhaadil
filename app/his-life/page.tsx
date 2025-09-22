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
                Born in 1935 in a small village near Srinagar, Kashmir, Dr. Ghulam Mohammad Kumar came from a
                well-respected family with a lineage of scholars and healers. From an early age, he displayed an unusual
                sensitivity to the natural world and a deep curiosity about spiritual matters.
              </p>
              <p className="mb-4 text-lg">
                His formal education led him to medicine, where he excelled as a physician. After completing his medical
                training, he served in government medical service, bringing healthcare to remote villages across
                Kashmir. During these years, he was known for his compassionate approach and willingness to treat anyone
                in need, regardless of their ability to pay.
              </p>
              <p className="mb-6 text-lg">
                However, throughout his medical practice, Dr. Kumar felt an increasing pull toward deeper spiritual
                questions that conventional medicine could not address. This internal conflict would eventually lead to
                a profound transformation in his life's direction.
              </p>

              <h2 className="font-serif text-3xl font-bold mb-6 mt-12">The Spiritual Awakening</h2>
              <div className="flex flex-col md:flex-row gap-8 mb-8">
                <div className="md:w-1/2">
                  <p className="mb-4 text-lg">
                    In 1968, at the age of 33, Dr. Kumar experienced what he would later describe as a "shattering of
                    the self." While treating patients in a remote mountain village, he encountered an elderly mystic
                    who spoke to him about the limitations of physical healing and the deeper nature of human suffering.
                  </p>
                  <p className="text-lg">
                    This encounter triggered a profound spiritual crisis for Dr. Kumar. He began to question the
                    fundamental nature of healing and his role as a physician. Over the following months, he experienced
                    intense dreams, visions, and states of consciousness that he could not explain through his medical
                    training.
                  </p>
                </div>
                <div className="md:w-1/2 relative aspect-[4/3]">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
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
                      <div>Born in Ganderbal Kashmir, India</div>
                    </li>
                    <li className="flex gap-3">
                      <div className="font-bold min-w-[60px]">1975</div>
                      <div>Spiritual awakening and crisis</div>
                    </li>
                    <li className="flex gap-3">
                      <div className="font-bold min-w-[60px]">1981</div>
                      <div>Completed medical education</div>
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
                      <div className="font-bold min-w-[60px]">1999-till today</div>
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
                  <p className="mt-4 text-right font-medium text-gray-600">
                    — Disciple <span className="font-semibold">Dr Zarf-e-Noori</span>
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
                src="/14-silence.png"
                alt="The jungle of Ganderbal where Dr. Kumar spent 14 years in silence"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <p className="mb-4 text-lg">
              In 1970, Dr. Kumar made the radical decision to abandon his medical practice and material possessions. He
              retreated to the dense forests of Ganderbal, where he would spend the next 14 years in almost complete
              silence and solitude.
            </p>
            <p className="mb-4 text-lg">
              During this period, he lived in the most basic conditions, often exposed to the elements, with minimal
              food and shelter. Local villagers who occasionally encountered him reported that he seemed to exist in a
              state between worlds, sometimes appearing unaware of his physical surroundings while radiating an unusual
              peace and light.
            </p>
            <p className="mb-4 text-lg">
              This period represented the Fana phase of his spiritual journey—the annihilation of the ego and
              dissolution of the separate self. According to Sufi tradition, Fana is the necessary precursor to Baqa, or
              subsistence in the Divine.
            </p>
            <p className="mb-8 text-lg">
              Those who knew him before and after this period describe two entirely different people—as if the doctor
              had died in the forest, and someone else had emerged.
            </p>

            <h2 className="font-serif text-3xl font-bold mb-6 mt-12">Return as a Qalandar</h2>
            <p className="mb-4 text-lg">
              In 1984, Dr. Kumar emerged from the forest transformed. He no longer identified himself as a doctor or by
              his former name. He had become what in the Sufi tradition is known as a Qalandar—a mystic who has
              transcended religious formalities and social conventions, existing in a state of perpetual presence with
              the Divine.
            </p>
            <p className="mb-4 text-lg">
              He returned to society but lived very differently. He owned no possessions, had no fixed abode, and spoke
              only when necessary. Yet people were drawn to his presence. Those who spent time with him reported
              experiences of profound peace, spontaneous healing, and insights into their deepest questions—often
              without him saying a word.
            </p>
            <p className="mb-8 text-lg">
              This period marked the beginning of his wider influence, as people from all walks of life and religious
              backgrounds began to seek him out for guidance and healing.
            </p>

            <h2 className="font-serif text-3xl font-bold mb-6 mt-12">Global Influence</h2>
            <p className="mb-4 text-lg">
              By the late 1990s, Dr. Kumar's reputation had spread beyond Kashmir. Invited by devotees, he began to
              travel internationally, bringing his unique presence and teachings to Europe, North America, and
              Australia.
            </p>
            <p className="mb-4 text-lg">
              In 2005, the Sufi Science Center was established in Berkeley, California, to integrate his spiritual
              insights with scientific research. The center became a hub for exploring consciousness, healing practices,
              and environmental sustainability through the lens of his teachings.
            </p>
            <p className="mb-4 text-lg">
              Until his passing from physical form in 2012, Dr. Kumar continued to embody the paradox at the heart of
              his teaching: that true healing comes not from doing but from being, not from acquisition but from
              surrender, not from knowledge but from the dissolution of the knower.
            </p>
            <p className="mb-8 text-lg">
              Today, his influence continues to grow through the work of his students, the Dr. Kumar Foundation, and the
              countless lives transformed by his presence and teachings.
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
