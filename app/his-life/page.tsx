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
                Yet even while serving as a doctor, Dr. Kumar felt an inner pull toward questions that medicine alone could not answer — the deeper roots of suffering, healing, and the mystery of existence. This inner tension quietly prepared him for a profound transformation.
              </p>

              <h2 className="font-serif text-3xl font-bold mb-6 mt-12">The Spiritual Awakening</h2>
              <div className="flex flex-col md:flex-row gap-8 mb-8">
                <div className="md:w-1/2">
                  <p className="mb-4 text-lg">
                    In 1975, at the age of 18, Dr. Kumar underwent what he later described as a “shattering of the self.” While visiting a remote mountain village, he encountered an elderly mystic who spoke of the limitations of physical medicine and the deeper dimensions of human suffering.
                  </p>
                  <p className="text-lg">
                    This meeting marked a turning point. In the months that followed, he experienced intense dreams, inner visions, and altered states of consciousness that defied his medical understanding. What began as a private unease soon unfolded into a spiritual crisis — a call that would eventually lead him away from conventional practice and into the path of mysticism.
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
              In 1983, Dr. Kumar made the radical decision to abandon his medical practice and all material possessions. He retreated into the dense forests of Ganderbal, where he would spend the next 14 years in almost complete silence and solitude.
            </p>
            <p className="mb-4 text-lg">
              During this period, he lived with the barest essentials, often exposed to the elements, with little food or shelter. Villagers who occasionally encountered him described a man who seemed to exist between worlds — sometimes unaware of his surroundings, yet radiating an unusual peace and light.
            </p>
            <p className="mb-4 text-lg">
              This phase represented the Fana stage of his spiritual journey — the annihilation of the ego and dissolution of the separate self. In Sufi tradition, Fana is the necessary precursor to Baqa, or subsistence in the Divine. Those who knew him before and after this retreat often remarked that it was as if the physician had died in the forest, and a mystic had emerged.
            </p>

            <h2 className="font-serif text-3xl font-bold mb-6 mt-12">Return as a Qalandar</h2>
            <p className="mb-4 text-lg">
              In 1998, Dr. Kumar emerged from the forest utterly transformed. He no longer identified himself as a doctor or by his former name. Instead, he lived as a Qalandar — a mystic who transcends religious formalities and social conventions, dwelling in a state of perpetual presence with the Divine.
            </p>
            <p className="mb-4 text-lg">
              He returned to society but lived with no possessions, no fixed abode, and spoke only when necessary. Yet people were drawn to him. Those who spent time in his presence reported experiences of profound peace, spontaneous healing, and answers to their deepest questions — often without him saying a word.
            </p>
            <p className="mb-8 text-lg">
              This marked the beginning of his wider influence, as seekers from every walk of life and faith tradition began to approach him for guidance and healing.
            </p>

            <h2 className="font-serif text-3xl font-bold mb-6 mt-12">Global Influence</h2>
            <p className="mb-4 text-lg">
              By the late 1990s, Dr. Kumar’s reputation had spread beyond Kashmir. Invited by devotees, he began traveling internationally, carrying his teachings to Europe, North America, and Australia. His message was simple yet transformative: true healing arises not from doing but from being, not from acquisition but from surrender, not from knowledge but from the dissolution of the knower.
            </p>
            <p className="mb-4 text-lg">
              In 2005, the Sufi Science Center was established in Berkeley, California, as a bridge between spiritual wisdom and scientific research. It became a hub for exploring consciousness, healing practices, and environmental sustainability through the lens of his insights.
            </p>
            <p className="mb-4 text-lg">
              Until his passing in 2012, Dr. Kumar embodied the paradox at the heart of his path — a healer without medicine, a teacher without words, a mystic who lived both in silence and in light.
            </p>

            <h2 className="font-serif text-3xl font-bold mb-6 mt-12">Living Legacy</h2>
            <p className="mb-8 text-lg">
              Today, his influence continues to expand through the work of his students, the initiatives of the Dr. Kumar Foundation, and the countless lives touched by his presence. His journey from medicine to mysticism endures as a reminder that the deepest transformations come not through power or possession, but through surrender to the Infinite.
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