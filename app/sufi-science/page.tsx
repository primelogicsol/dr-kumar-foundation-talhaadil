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
                  <h3 className="font-serif text-xl font-bold mb-4">Bridging Generations</h3>
                  <p>
                    Connecting new-generation scientists—physicists, neuroscientists, ecologists, and healers—with Sufi seekers and mystics. They exchange perspectives to explore how traditional wisdom and contemporary research can address humanity’s deepest questions and future challenges with shared vision.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-bold mb-4">Collaborative Inquiry</h3>
                  <p>
                    Through symposia, workshops, and digital journals, seekers and scientists share insights and co-develop new models of understanding. This emphasizes open dialogue, respect for diverse methods, and collective creativity to deepen global spiritual-scientific exploration.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-bold mb-4">Applied Research</h3>
                  <p>
                    Studies focus on consciousness, healing, ecology, quantum physics, and social transformation as lived practices. Collaboration integrates spiritual principles with scientific tools to promote practical outcomes in healing, sustainability, and collective renewal.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-bold mb-4">Knowledge Exchange</h3>
                  <p>
                    Sufi experiential wisdom is translated for modern researchers, while scientific tools gain spiritual grounding. This mutual learning bridges cultures and disciplines, fostering a future where science and spirituality evolve collaboratively.
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
                Founded as a hub for bridging spiritual wisdom and scientific inquiry, the Sufi Science Center brings together
                scientists, healers, and seekers to co-create knowledge. It explores consciousness, healing, ecology, and quantum
                research through symposia, workshops, and collaborative projects.
              </p>
              <p className="mb-4">
                Established in 2005 in Berkeley, California, the Sufi Science Center serves as the primary research and
                educational hub for the integration of Dr. Kumar's teachings with scientific inquiry. The center brings together
                scientists, healthcare professionals, spiritual practitioners, and scholars from various disciplines.
              </p>
              <p className="mb-4">
                The center hosts regular symposia, workshops, and research projects exploring the intersection of consciousness,
                healing, and environmental science. It also maintains a library of Dr. Kumar's teachings and publishes research
                findings through its journal and online platforms.
              </p>
              <p>
                The center supports young scientists and Sufi seekers in dialogue, offering opportunities for research,
                publications, and experimental inquiry. By fostering cross-disciplinary collaboration, SSC ensures knowledge is
                both academically rigorous and spiritually grounded. Through global partnerships with universities, research
                institutions, and community organizations, the Sufi Science Center transforms mystical insight into practical
                solutions for human well-being, environmental balance, and deeper understanding of consciousness.
              </p>
            </div>

            <div>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-bold mb-4">Center Activities</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-emerald-600/20 flex items-center justify-center shrink-0 mt-0.5">
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
                          className="text-emerald-600"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                      </div>
                      <div>Research Projects</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-emerald-600/20 flex items-center justify-center shrink-0 mt-0.5">
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
                          className="text-emerald-600"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                      </div>
                      <div>Educational Workshops</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-emerald-600/20 flex items-center justify-center shrink-0 mt-0.5">
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
                          className="text-emerald-600"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                      </div>
                      <div>Scientific Symposia</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-emerald-600/20 flex items-center justify-center shrink-0 mt-0.5">
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
                          className="text-emerald-600"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                      </div>
                      <div>Healing Clinics</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-emerald-600/20 flex items-center justify-center shrink-0 mt-0.5">
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
                          className="text-emerald-600"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                      </div>
                      <div>Publication of Research</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-emerald-600/20 flex items-center justify-center shrink-0 mt-0.5">
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
                          className="text-emerald-600"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                      </div>
                      <div>Community Meditation</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-emerald-600/20 flex items-center justify-center shrink-0 mt-0.5">
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
                          className="text-emerald-600"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                      </div>
                      <div>Dialog Series</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-emerald-600/20 flex items-center justify-center shrink-0 mt-0.5">
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
                          className="text-emerald-600"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                      </div>
                      <div>Hard Talk</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-emerald-600/20 flex items-center justify-center shrink-0 mt-0.5">
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
                          className="text-emerald-600"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                      </div>
                      <div>Sufi Professions</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-emerald-600/20 flex items-center justify-center shrink-0 mt-0.5">
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
                          className="text-emerald-600"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                      </div>
                      <div>Inspiring Interviews</div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <div className="mt-6">
                <Button className="w-full bg-emerald-600 hover:bg-emerald-800 text-black" asChild>
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
            <Card className="h-full transition-all hover:shadow-md">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Journal of Sufi Science Center"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-bold mb-2">Dialog Series</h3>
                <p className="text-sm text-muted-foreground mb-4">

                  Dive into timeless commentaries, Sufi manuscripts, and contemporary reflections merging wisdom with modern inquiry.


                </p>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://sufisciencecenter.info/academy/dialogseries" target="_blank" rel="noopener noreferrer">
                    Submit Your Paper <ChevronRight className="ml-1 h-3 w-3" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="h-full transition-all hover:shadow-md">
              <div className="relative h-48">
                <Image
                  src="/DrSufipic1_11zon.webp?height=400&width=600"
                  alt="Books on Sufi Science Center"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-bold mb-2">Hard Talk</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Explore sacred diagrams, cosmic maps, and interactive infographics that visualize mystical concepts in scientifically resonant design.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://sufisciencecenter.info/academy/hardtalk" target="_blank" rel="noopener noreferrer">
                    View Publications <ChevronRight className="ml-1 h-3 w-3" />
                  </a>
                </Button>
              </CardContent>
            </Card>



            <Card className="h-full transition-all hover:shadow-md">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Inspiring Interviews"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-bold mb-2">Inspiring Interview</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  In this inspiring series, you’ll meet individuals whose lives have been radically reshaped and changed by the essence of Sufism.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://sufisciencecenter.info/academy/inspiringinterview" target="_blank" rel="noopener noreferrer">
                    Apply for Interview <ChevronRight className="ml-1 h-3 w-3" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold mb-6">Upcoming Events</h2>
            <div className="mb-8">

              <p className="text-base mb-4">
                Join us for the Sufi Science Center Symposium, an international gathering uniting scientists, healers, and Sufi seekers. The event explores consciousness, healing, ecology, and quantum research, fostering dialogue and collaboration across disciplines and spiritual traditions.
              </p>

            </div>
            <Button className="bg-emerald-600 hover:bg-emerald-800 text-black" asChild>
              <Link href="https://sufisciencecenter.info/submissionportal" target="_blank">
                Register <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
