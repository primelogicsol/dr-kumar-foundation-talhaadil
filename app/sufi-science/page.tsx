import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import PageHeader from "@/components/page-header"

export const metadata = {
  title: "Sufi Science Center | Dr. Kumar Foundation", // Updated title
  description:
    "Exploring the integration of spiritual wisdom and scientific understanding through Dr. Kumar's teachings at the Sufi Science Center.", // Updated description
}

export default function SufiSciencePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <PageHeader
        title="Sufi Science Center" // Updated title
        subtitle="Bridging Ancient Wisdom and Modern Research"
        backgroundImage="/placeholder.svg?height=1080&width=1920"
      />

      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-lg">
              The Sufi Science Center represents Dr. Kumar's vision of integrating spiritual wisdom with scientific
              inquiry. It seeks to bridge the gap between ancient mystical traditions and modern scientific research,
              creating a holistic approach to understanding consciousness, healing, and the nature of reality.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="font-serif text-3xl font-bold mb-6">What is the Sufi Science Center?</h2>{" "}
              {/* Updated text */}
              <p className="mb-4">
                The Sufi Science Center is not about proving spiritual concepts through scientific methods, nor is it
                about imposing mystical interpretations on scientific findings. Rather, it is a recognition that both
                science and spirituality are approaches to understanding reality, each with their own strengths and
                limitations.
              </p>
              <p className="mb-4">
                Dr. Kumar taught that the objective approach of science and the subjective approach of spiritual
                practice are complementary. When integrated, they offer a more complete understanding of human
                experience and the cosmos than either could provide alone.
              </p>
              <p>
                This approach is particularly relevant in fields such as consciousness studies, quantum physics,
                neuroscience, and healing, where the boundaries between observer and observed, mind and matter, become
                increasingly blurred.
              </p>
            </div>
            <div className="relative aspect-square">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Visual representation of Sufi Science Center" // Updated alt text
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-center mb-8">Key Areas of Research</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-bold mb-4">Consciousness Studies</h3>
                  <p>
                    Exploring the nature of awareness, the relationship between consciousness and the brain, and states
                    of consciousness described in mystical traditions. This includes research on meditation, non-dual
                    awareness, and the effects of spiritual practices on brain function.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-bold mb-4">Healing Research</h3>
                  <p>
                    Investigating the mechanisms of spiritual and energy healing, the role of intention in health
                    outcomes, and the relationship between spiritual well-being and physical health. This includes
                    studies on the physiological effects of practices taught by Dr. Kumar.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-bold mb-4">Environmental Science</h3>
                  <p>
                    Studying the interconnectedness of ecosystems and the impact of human consciousness on the
                    environment. This includes research on water quality, the effects of meditation on environmental
                    systems, and sustainable approaches to living in harmony with nature.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-bold mb-4">Quantum Physics & Mysticism</h3>
                  <p>
                    Exploring parallels between quantum physics concepts and mystical descriptions of reality. This
                    includes research on non-locality, entanglement, and the role of the observer in quantum systems,
                    and how these relate to Sufi concepts of unity and interconnectedness.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">The Sufi Science Center</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <div className="relative aspect-video mb-6">
                <Image
                  src="/placeholder.svg?height=720&width=1280"
                  alt="The Sufi Science Center in Berkeley, California"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <p className="mb-4">
                Established in 2005 in Berkeley, California, the Sufi Science Center serves as the primary research and
                educational hub for the integration of Dr. Kumar's teachings with scientific inquiry. The center brings
                together scientists, healthcare professionals, spiritual practitioners, and scholars from various
                disciplines.
              </p>
              <p className="mb-4">
                The center hosts regular symposia, workshops, and research projects exploring the intersection of
                consciousness, healing, and environmental science. It also maintains a library of Dr. Kumar's teachings
                and publishes research findings through its journal and online platforms.
              </p>
              <p>
                Through collaborations with universities, research institutions, and healthcare facilities, the Sufi
                Science Center works to bridge the gap between academic research and practical applications of
                integrated wisdom.
              </p>
            </div>

            <div>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-bold mb-4">Center Activities</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-[#E6C67C]/20 flex items-center justify-center shrink-0 mt-0.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-[#E6C67C]"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                      </div>
                      <div>Research Projects</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-[#E6C67C]/20 flex items-center justify-center shrink-0 mt-0.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-[#E6C67C]"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                      </div>
                      <div>Educational Workshops</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-[#E6C67C]/20 flex items-center justify-center shrink-0 mt-0.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-[#E6C67C]"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                      </div>
                      <div>Scientific Symposia</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-[#E6C67C]/20 flex items-center justify-center shrink-0 mt-0.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-[#E6C67C]"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                      </div>
                      <div>Healing Clinics</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-[#E6C67C]/20 flex items-center justify-center shrink-0 mt-0.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-[#E6C67C]"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                      </div>
                      <div>Publication of Research</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-[#E6C67C]/20 flex items-center justify-center shrink-0 mt-0.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-[#E6C67C]"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                      </div>
                      <div>Community Meditation</div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <div className="mt-6">
                <Button className="w-full bg-[#E6C67C] hover:bg-[#D4B46A] text-black" asChild>
                  <a href="https://sufisciencecenter.info/" target="_blank" rel="noopener noreferrer">
                    Visit Center Website <ChevronRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">Publications & Resources</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/publications/journal" className="block">
              <Card className="h-full transition-all hover:shadow-md">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Journal of Sufi Science Center" // Updated alt text
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-bold mb-2">Journal of Sufi Science Center</h3>{" "}
                  {/* Updated title */}
                  <p className="text-sm text-muted-foreground mb-4">
                    Peer-reviewed research at the intersection of spirituality and science
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <span>
                      Browse Journal <ChevronRight className="ml-1 h-3 w-3" />
                    </span>
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/publications/books" className="block">
              <Card className="h-full transition-all hover:shadow-md">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Books on Sufi Science Center" // Updated alt text
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-bold mb-2">Books & Publications</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Books, monographs, and articles exploring Dr. Kumar's scientific approach
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <span>
                      View Publications <ChevronRight className="ml-1 h-3 w-3" />
                    </span>
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/research/participate" className="block">
              <Card className="h-full transition-all hover:shadow-md">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Participate in Research"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-bold mb-2">Participate in Research</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Opportunities to contribute to ongoing studies and experiments
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <span>
                      Learn How <ChevronRight className="ml-1 h-3 w-3" />
                    </span>
                  </Button>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold mb-6">Upcoming Events</h2>
            <p className="text-lg mb-8">
              Join us for lectures, workshops, and symposia exploring the integration of spiritual wisdom and scientific
              research. Our events bring together researchers, practitioners, and seekers from diverse backgrounds.
            </p>
            <Button className="bg-[#E6C67C] hover:bg-[#D4B46A] text-black" asChild>
              <Link href="/events">
                View Event Calendar <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
