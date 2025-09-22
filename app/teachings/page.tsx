import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import QuoteCarousel from "@/components/quote-carousel"
import PageHeader from "@/components/page-header"

export const metadata = {
  title: "Teachings | Dr. Kumar Foundation",
  description:
    "Explore the spiritual teachings and philosophy of Dr. Ghulam Mohammad Kumar on Fana, Baqa, and the Qalandari path.",
}

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
              The sacred philosophy of Dr. Kumar explores the profound concepts of Fana (annihilation of the self) and
              the Qalandari path of spiritual enlightenment. His teachings transcend religious boundaries while honoring
              the essence of all spiritual traditions.
            </p>
            <QuoteCarousel />
          </div>

          <Tabs defaultValue="fana" className="max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="fana">Fana & Baqa</TabsTrigger>
              <TabsTrigger value="qalandari">Qalandari Path</TabsTrigger>
              <TabsTrigger value="healing">Divine Healing</TabsTrigger>
            </TabsList>

            <TabsContent value="fana" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="font-serif text-3xl font-bold mb-4">The Concept of Fana</h2>
                  <p className="mb-4">
                    Fana, often translated as "annihilation" or "dissolution," is a central concept in Dr. Kumar's
                    teachings. It refers to the dissolution of the ego or separate self-identity, allowing for the
                    emergence of one's true nature.
                  </p>
                  <p>
                    Dr. Kumar taught that Fana is not about losing oneself, but rather about losing the illusion of a
                    separate self. It is the recognition that what we call "I" is merely a collection of thoughts,
                    memories, and conditioned patterns—not our essential nature.
                  </p>
                </div>
                <div className="relative aspect-square">
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    alt="Visual representation of Fana - spiritual dissolution"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1 relative aspect-square">
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    alt="Visual representation of Baqa - subsistence in the Divine"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <h2 className="font-serif text-3xl font-bold mb-4">The State of Baqa</h2>
                  <p className="mb-4">
                    Baqa, meaning "subsistence" or "permanence," follows Fana in the spiritual journey. After the
                    dissolution of the false self, what remains is Baqa—living in and as the Divine presence.
                  </p>
                  <p>
                    In this state, one continues to function in the world but from a radically different center of
                    being. Actions flow not from personal desire or fear, but from the Divine will working through the
                    individual. Dr. Kumar embodied this state in his later life, becoming an instrument of healing and
                    awakening.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
                <h3 className="font-serif text-xl font-bold mb-4">The Journey from Fana to Baqa</h3>
                <p className="mb-4">
                  Dr. Kumar described the journey from Fana to Baqa as a process of "dying before death." His own 14
                  years in the forests of Ganderbal represented this process—a complete surrender of his former
                  identity, possessions, relationships, and even his medical knowledge.
                </p>
                <p>
                  He taught that this journey is available to everyone, though it may take different forms. For some, it
                  might involve formal spiritual practices; for others, it might come through life's challenges and
                  sufferings. The essential element is the willingness to let go of who we think we are to discover who
                  we truly are.
                </p>
              </div>

              <div className="text-center mt-8">
                <Button className="bg-[#E6C67C] hover:bg-[#D4B46A] text-black" asChild>
                  <Link href="/media-library?category=fana-baqa">
                    Explore Teachings on Fana & Baqa <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="qalandari" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="font-serif text-3xl font-bold mb-4">The Qalandari Path</h2>
                  <p className="mb-4">
                    After his emergence from 14 years of silence, Dr. Kumar was recognized as a Qalandar—a type of Sufi
                    mystic who has transcended religious formalities and social conventions, living in a state of
                    complete freedom and divine intoxication.
                  </p>
                  <p>
                    The Qalandari path is characterized by its rejection of external religious identities and focus on
                    direct experience of the Divine. Qalandars historically have been known for their unconventional
                    behavior and disregard for social norms, embodying spiritual freedom in its purest form.
                  </p>
                </div>
                <div className="relative aspect-square">
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    alt="Representation of the Qalandari path"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
                <h3 className="font-serif text-xl font-bold mb-4">Beyond Religious Boundaries</h3>
                <p className="mb-4">
                  Dr. Kumar taught that the essence of all religions is the same—the recognition of our divine nature
                  and the cultivation of love and compassion. He welcomed people of all faiths and no faith, seeing
                  religious differences as merely different languages describing the same reality.
                </p>
                <p>
                  While his teachings were rooted in the Sufi tradition, he drew freely from other spiritual traditions,
                  including Vedanta, Buddhism, and mystical Christianity. He emphasized that the path to truth is not
                  through adherence to dogma but through direct experience and the purification of the heart.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1 relative aspect-square">
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    alt="Representation of presence and awareness"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <h2 className="font-serif text-3xl font-bold mb-4">Presence and Awareness</h2>
                  <p className="mb-4">
                    Central to Dr. Kumar's teaching was the practice of presence—being fully aware in the present
                    moment, free from the mind's constant movement between past and future. He taught that true
                    spiritual practice is not something we do occasionally but a way of being in every moment.
                  </p>
                  <p>
                    This practice of presence was not just a means to an end but the very essence of spiritual life. In
                    his words: "When you are fully present, the Divine is also fully present, for the Divine is never
                    absent—only our awareness is."
                  </p>
                </div>
              </div>

              <div className="text-center mt-8">
                <Button className="bg-[#E6C67C] hover:bg-[#D4B46A] text-black" asChild>
                  <Link href="/domains/qalandari">
                    Learn More About the Qalandari Path <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="healing" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="font-serif text-3xl font-bold mb-4">Divine Healing</h2>
                  <p className="mb-4">
                    Despite abandoning his medical practice, Dr. Kumar became known as a profound healer. However, his
                    approach to healing was radically different from conventional medicine. He taught that all healing
                    comes from the Divine and that the healer is merely a channel or instrument.
                  </p>
                  <p>
                    Dr. Kumar's healing work often involved no physical touch or intervention. Many reported being
                    healed simply by being in his presence or through his silent gaze. He explained that this was
                    possible because illness, at its root, is a manifestation of separation from our true nature.
                  </p>
                </div>
                <div className="relative aspect-square">
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    alt="Representation of Divine Healing"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
                <h3 className="font-serif text-xl font-bold mb-4">The Root of Illness</h3>
                <p className="mb-4">
                  Dr. Kumar taught that physical illness often has spiritual roots. He saw disease as the body's way of
                  communicating that something is out of alignment with our true nature. This misalignment could be in
                  our thoughts, emotions, relationships, or connection to the Divine.
                </p>
                <p>
                  He did not dismiss conventional medicine but saw it as addressing symptoms rather than root causes.
                  True healing, he taught, involves recognizing and resolving the underlying spiritual or energetic
                  imbalances that manifest as physical symptoms.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1 relative aspect-square">
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    alt="Self-healing practices"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <h2 className="font-serif text-3xl font-bold mb-4">Self-Healing Practices</h2>
                  <p className="mb-4">
                    Dr. Kumar taught that each person has the innate capacity for self-healing. He offered simple
                    practices to activate this capacity, including specific forms of breathing, visualization, and
                    meditation on the heart center.
                  </p>
                  <p>
                    One of his core teachings was that healing happens in a state of deep surrender and trust. When we
                    let go of our fear, resistance, and attachment to specific outcomes, we create the conditions for
                    the body's natural healing intelligence to function optimally.
                  </p>
                </div>
              </div>

              <div className="text-center mt-8">
                <Button className="bg-[#E6C67C] hover:bg-[#D4B46A] text-black" asChild>
                  <Link href="/domains/healing">
                    Explore Divine Healing Practices <ChevronRight className="ml-2 h-4 w-4" />
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
            <Link href="/media-library?category=teachings" className="block">
              <div className="group relative overflow-hidden rounded-lg aspect-[3/4]">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="Books and publications on Dr. Kumar's teachings"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="font-serif text-xl font-bold mb-2">Publications</h3>
                    <p>Books and written teachings from Dr. Kumar and his students</p>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/media-library?category=audio" className="block">
              <div className="group relative overflow-hidden rounded-lg aspect-[3/4]">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="Audio recordings of Dr. Kumar's teachings"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="font-serif text-xl font-bold mb-2">Audio Teachings</h3>
                    <p>Recorded talks, guided meditations, and spiritual music</p>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/events" className="block">
              <div className="group relative overflow-hidden rounded-lg aspect-[3/4]">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="Workshops and retreats based on Dr. Kumar's teachings"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="font-serif text-xl font-bold mb-2">Workshops & Retreats</h3>
                    <p>Experiential learning opportunities with Dr. Kumar's students</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
