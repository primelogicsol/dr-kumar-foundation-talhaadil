import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import QuoteCarousel from "@/components/quote-carousel"
import PageHeader from "@/components/page-header"
import { Card, CardContent } from "@/components/ui/card"


export default function TeachingsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <PageHeader
        title="Teachings of Dr. Kumar"
        subtitle="Sainthood – Fana & Baqa"
        backgroundImage="/placeholder.svg?height=1080&width=1920"
      />

      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-lg mb-8">
              The sacred philosophy of Dr. Kumar explores the profound concepts of Fana (annihilation of the self), Baqa
              (subsistence in the Divine), and the Qalandari path of spiritual freedom. His teachings transcend religious
              boundaries, guiding seekers toward divine presence and self-healing.
            </p>
            <QuoteCarousel />
          </div>

          <Tabs defaultValue="fana" className="max-w-4xl mx-auto">
            <TabsList className="flex flex-col md:grid md:grid-cols-3 mb-10 bg-transparent rounded-lg p-1">
              <TabsTrigger value="fana" className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white rounded-md py-2">Fana & Baqa</TabsTrigger>
              <TabsTrigger value="qalandari" className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white rounded-md py-2">Qalandari Path</TabsTrigger>
              <TabsTrigger value="healing" className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white rounded-md py-2">Divine Healing</TabsTrigger>
            </TabsList>

            <TabsContent value="fana" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="font-serif text-3xl font-bold mb-4">The Concept of Fana</h2>
                  <p className="mb-4">
                    Fana, often translated as “annihilation” or “dissolution,” is a central theme in Dr. Kumar’s teachings.
                    It refers to the dissolution of the ego or separate self-identity, allowing one’s true nature to shine
                    forth.
                  </p>
                  <p>
                    Dr. Kumar emphasized that Fana is not about destruction of the self, but the loss of the illusion of
                    separateness. What we call “I” is merely a bundle of thoughts, memories, and conditioned patterns

 not
                    our essential being. To pass through Fana is to see through this illusion and recognize the deeper
                    reality of existence.
                  </p>
                </div>
                <div className="relative aspect-square">
                  <Image
                    src="/Drpic1_11zon.webp?height=600&width=600"
                    alt="Visual representation of Fana - spiritual dissolution"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1 relative aspect-square">
                  <Image
                    src="/Drpic4_11zon.webp?height=600&width=600"
                    alt="Visual representation of Baqa - subsistence in the Divine"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <h2 className="font-serif text-3xl font-bold mb-4">The State of Baqa</h2>
                  <p className="mb-4">
                    Baqa, meaning “subsistence” or “permanence,” follows Fana on the spiritual path. After the false self
                    dissolves, what remains is Baqa

 abiding in and as the Divine presence.
                  </p>
                  <p>
                    In this state, one continues to live and act in the world, but from a radically transformed center of
                    being. Actions no longer arise from fear, desire, or self-interest, but flow naturally from the Divine
                    working through the individual. In his later life, Dr. Kumar embodied Baqa, becoming an instrument of
                    healing, peace, and awakening.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
                <h3 className="font-serif text-xl font-bold mb-4">The Journey from Fana to Baqa</h3>
                <p className="mb-4">
                  Dr. Kumar described the passage from Fana to Baqa as a process of “dying before death.” His 14 years in
                  the forests of Ganderbal were the living expression of this journey

 a complete surrender of his
                  identity, possessions, relationships, and even his medical knowledge.
                </p>
                <p>
                  He taught that this journey is open to everyone, though it may unfold differently for each person. For
                  some, it may come through disciplined spiritual practice; for others, through the challenges and
                  sufferings of life. The essential step is the willingness to let go of who we think we are, so that we
                  may discover who we truly are.
                </p>
              </div>

              <div className="text-center mt-8">
                <Button className="bg-emerald-600 hover:bg-emerald-800 text-black" asChild>
                  <Link href="https://sufisciencecenter.info/beginyourjourney">
                    Start Sufism Journey <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="qalandari" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="font-serif text-3xl font-bold mb-4">The Qalandari Path</h2>
                  <p className="mb-4">
                    After his emergence from 14 years of silence, Dr. Kumar was recognized as a Qalandar

 a type of Sufi
                    mystic who has transcended religious formalities and social conventions, living in a state of freedom
                    and divine intoxication.
                  </p>
                  <p>
                    The Qalandari path is marked by its rejection of external labels and identities, focusing instead on
                    the direct experience of the Divine. Qalandars have historically been known for their unconventional
                    ways and disregard for social norms, embodying spiritual freedom in its purest form.
                  </p>
                </div>
                <div className="relative aspect-square">
                  <Image
                    src="/Drpic6_11zon.webp?height=600&width=600"
                    alt="Representation of the Qalandari path"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
                <h3 className="font-serif text-xl font-bold mb-4">Beyond Religious Boundaries</h3>
                <p className="mb-4">
                  Dr. Kumar taught that the essence of all religions is the same: the recognition of our divine nature and
                  the cultivation of love and compassion. He welcomed people of all faiths

 and those of no faith


                  seeing differences as merely different languages pointing to the same truth.
                </p>
                <p>
                  While rooted in the Sufi tradition, his teachings also drew upon Vedanta, Buddhism, and mystical
                  Christianity. He emphasized that the path to truth is not found in dogma but in direct experience and
                  the purification of the heart.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1 relative aspect-square">
                  <Image
                    src="/Drpic5_11zon.webp?height=600&width=600"
                    alt="Representation of presence and awareness"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <h2 className="font-serif text-3xl font-bold mb-4">Presence and Awareness</h2>
                  <p className="mb-4">
                    At the heart of Dr. Kumar’s teaching was the practice of presence

 being fully awake in the moment,
                    free from the mind’s restless movement between past and future. For him, spirituality was not something
                    to be done occasionally but a way of being in every breath.
                  </p>
                  <p>
                    This presence was not just a practice but the essence of life itself. In his words: “When you are
                    fully present, the Divine is also fully present, for the Divine is never absent

 only our awareness
                    is.”
                  </p>
                </div>
              </div>

              <div className="text-center mt-8">
                <Button className="bg-emerald-600 hover:bg-emerald-800 text-black" asChild>
                  <Link href="https://sufisciencecenter.info/corelearningpaths">
                    Beginner's Checklist <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="healing" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="font-serif text-3xl font-bold mb-4">Divine Healing</h2>
                  <p className="mb-4">
                    Though Dr. Kumar abandoned conventional medical practice, he became known as a profound healer. His
                    approach to healing was radically different from medicine: he taught that all healing flows from the
                    Divine, and that the healer is merely a channel or instrument.
                  </p>
                  <p>
                    His healing work often required no physical touch or intervention. Many reported being healed simply by
                    sitting in his presence or through his silent gaze. Dr. Kumar explained that this was possible because
                    illness, at its root, is not merely physical but a manifestation of separation from our true nature.
                  </p>
                </div>
                <div className="relative aspect-square">
                  <Image
                    src="/Drpic3_11zon.webp?height=600&width=600"
                    alt="Representation of Divine Healing"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
                <h3 className="font-serif text-xl font-bold mb-4">The Root of Illness</h3>
                <p className="mb-4">
                  Dr. Kumar taught that many physical illnesses have spiritual roots. He described disease as the body’s
                  way of signaling that something is out of harmony with our essential nature. This misalignment could
                  arise from unresolved emotions, mental stress, broken relationships, or disconnection from the Divine.
                </p>
                <p>
                  While he respected conventional medicine, he saw it as treating symptoms rather than causes. True
                  healing, he taught, involves recognizing and resolving the deeper energetic and spiritual imbalances
                  that eventually manifest in the body.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1 relative aspect-square">
                  <Image
                    src="/Drpic2_11zon.webp?height=600&width=600"
                    alt="Self-healing practices"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <h2 className="font-serif text-3xl font-bold mb-4">Self-Healing Practices</h2>
                  <p className="mb-4">
                    Dr. Kumar also emphasized that every person carries within them an innate capacity for self-healing. He
                    introduced simple practices to awaken this capacity

 including heart-centered breathing,
                    visualization, and meditation.
                  </p>
                  <p>
                    One of his core teachings was that healing arises in a state of surrender and trust. When fear,
                    resistance, and attachment are released, the body’s natural intelligence is free to restore balance and
                    wellbeing. In this way, healing is not imposed from outside but emerges from the alignment of body,
                    mind, and spirit with the Divine.
                  </p>
                </div>
              </div>

              <div className="text-center mt-8">
                <Button className="bg-emerald-600 hover:bg-emerald-800 text-black" asChild>
                  <Link href="https://sufisciencecenter.info/leadership&teaching">
                    Personalized Teaching <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">Related Resources</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a href="https://sufisciencecenter.info/beginyourjourney" className="block">
              <div className="group relative rounded-lg bg-white dark:bg-gray-800 p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="font-serif text-xl font-bold mb-2 text-gray-900 dark:text-white">Start Your Sufism Journey</h3>
                <p className="text-gray-600 dark:text-gray-300">Awaken your heart, embrace silence, begin the timeless path.</p>
              </div>
            </a>

            <a href="https://sufisciencecenter.info/corelearningpaths" className="block">
              <div className="group relative rounded-lg bg-white dark:bg-gray-800 p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="font-serif text-xl font-bold mb-2 text-gray-900 dark:text-white">Beginner's Checklist</h3>
                <p className="text-gray-600 dark:text-gray-300">Practical steps guiding seekers toward presence, wisdom, and awakening.</p>
              </div>
            </a>

            <a href="https://sufisciencecenter.info/leadership&teaching" className="block">
              <div className="group relative rounded-lg bg-white dark:bg-gray-800 p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="font-serif text-xl font-bold mb-2 text-gray-900 dark:text-white">Personalized Path Assessment</h3>
                <p className="text-gray-600 dark:text-gray-300">Discover your unique path, guided by Sufi wisdom.</p>
              </div>
            </a>
          </div>
        </div>

      </section>   </div>
  )
}