import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import PageHeader from "@/components/page-header"
import WorldMap from "@/components/world-map"

export const metadata = {
  title: "Legacy & Projects | Dr. Kumar Foundation",
  description: "Explore the global legacy and ongoing projects of the Dr. Kumar Foundation.",
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <PageHeader
        title="Legacy & Projects"
        subtitle="Continuing Dr. Kumar's Mission Across the Globe"
        backgroundImage="/placeholder.svg?height=1080&width=1920"
      />

      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-lg">
              The Dr. Kumar Foundation continues the work and vision of Dr. Ghulam Mohammad Kumar through various
              projects and initiatives around the world. Our focus areas include healing, environmental stewardship,
              education, and spiritual awakening.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="font-serif text-3xl font-bold text-center mb-12">Our Global Presence</h2>
            <WorldMap />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-serif text-2xl font-bold mb-4">Testimonials</h3>
                <div className="space-y-4">
                  <blockquote className="border-l-4 border-[#E6C67C] pl-4 italic">
                    "Dr. Kumar's approach to healing changed my understanding of medicine forever. He showed us that
                    true healing comes from within."
                    <footer className="text-sm mt-2 font-medium">— Dr. Sarah Johnson, Neurologist</footer>
                  </blockquote>
                  <blockquote className="border-l-4 border-[#E6C67C] pl-4 italic">
                    "In his silence, I found answers to questions I had been asking my entire life. His presence was the
                    teaching."
                    <footer className="text-sm mt-2 font-medium">— Michael Chen, Spiritual Seeker</footer>
                  </blockquote>
                </div>
                <div className="mt-4">
                  <Button variant="outline" asChild>
                    <Link href="/testimonials">Read More Testimonials</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-serif text-2xl font-bold mb-4">Sufi Science Center (USA)</h3>
                <p className="mb-4">
                  The Sufi Science Center continues Dr. Kumar's legacy by integrating spiritual wisdom with scientific
                  research, focusing on consciousness studies, healing practices, and environmental sustainability.
                </p>
                <Button className="bg-[#E6C67C] hover:bg-[#D4B46A] text-black" asChild>
                  <a href="https://sufisciencecenter.info/" target="_blank" rel="noopener noreferrer">
                    Learn More About the Center
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">Our Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Link href="/projects/healing-programs" className="block">
              <Card className="h-full transition-all hover:shadow-md">
                <div className="relative h-60">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Healing Programs"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-serif text-2xl font-bold mb-2">Healing Programs</h3>
                  <p className="mb-4">
                    Continuing Dr. Kumar's healing work through workshops, retreats, and training programs for
                    healthcare professionals and spiritual seekers. Our healing programs integrate traditional wisdom
                    with modern approaches to wellbeing.
                  </p>
                  <Button variant="outline" className="mt-2 bg-transparent" asChild>
                    <span>
                      Learn More <ChevronRight className="ml-2 h-4 w-4" />
                    </span>
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/projects/water-protection" className="block">
              <Card className="h-full transition-all hover:shadow-md">
                <div className="relative h-60">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Water Protection"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-serif text-2xl font-bold mb-2">Water Protection</h3>
                  <p className="mb-4">
                    Dr. Kumar taught that water is sacred and essential to all life. Our water protection initiatives
                    focus on preserving the sacred waters of Kashmir and beyond through conservation efforts, education,
                    and spiritual practices honoring water.
                  </p>
                  <Button variant="outline" className="mt-2 bg-transparent" asChild>
                    <span>
                      Learn More <ChevronRight className="ml-2 h-4 w-4" />
                    </span>
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/projects/youth-rehabilitation" className="block">
              <Card className="h-full transition-all hover:shadow-md">
                <div className="relative h-60">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Youth Rehabilitation"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-serif text-2xl font-bold mb-2">Youth Rehabilitation</h3>
                  <p className="mb-4">
                    Our youth programs provide troubled young people with spiritual practices, mindfulness training, and
                    community support. These initiatives have shown remarkable success in helping youth overcome
                    addiction, trauma, and behavioral challenges.
                  </p>
                  <Button variant="outline" className="mt-2 bg-transparent" asChild>
                    <span>
                      Learn More <ChevronRight className="ml-2 h-4 w-4" />
                    </span>
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/projects/craft-revival" className="block">
              <Card className="h-full transition-all hover:shadow-md">
                <div className="relative h-60">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Craft Revival"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-serif text-2xl font-bold mb-2">Craft Revival</h3>
                  <p className="mb-4">
                    Dr. Kumar recognized the spiritual dimension of traditional crafts. Our craft revival projects
                    preserve and promote traditional Kashmiri arts and crafts, providing economic opportunities for
                    local artisans while maintaining cultural heritage.
                  </p>
                  <Button variant="outline" className="mt-2 bg-transparent" asChild>
                    <span>
                      Learn More <ChevronRight className="ml-2 h-4 w-4" />
                    </span>
                  </Button>
                </CardContent>
              </Card>
            </Link>

            {/* New SufiPulse Card */}
            <Link
              href="https://sb1zehdji4a-1jfn--5173--96435430.local-corp.webcontainer.io/"
              className="block"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card className="h-full transition-all hover:shadow-md">
                <div className="relative h-60">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="SufiPulse"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-serif text-2xl font-bold mb-2">SufiPulse</h3>
                  <p className="mb-4">
                    SufiPulse is a global initiative dedicated to spiritual expression through music, inspired by Dr.
                    Kumar's teachings on the power of sound and vibration for healing and awakening.
                  </p>
                  <Button variant="outline" className="mt-2 bg-transparent" asChild>
                    <span>
                      Visit SufiPulse <ChevronRight className="ml-2 h-4 w-4" />
                    </span>
                  </Button>
                </CardContent>
              </Card>
            </Link>

            {/* New Sufi Science Center Card */}
            <Link href="https://sufisciencecenter.info/" className="block" target="_blank" rel="noopener noreferrer">
              <Card className="h-full transition-all hover:shadow-md">
                <div className="relative h-60">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Sufi Science Center"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-serif text-2xl font-bold mb-2">Sufi Science Center</h3>
                  <p className="mb-4">
                    The Sufi Science Center integrates spiritual wisdom with scientific research, exploring
                    consciousness, healing, and environmental sustainability through Dr. Kumar's unique insights.
                  </p>
                  <Button variant="outline" className="mt-2 bg-transparent" asChild>
                    <span>
                      Visit Center Website <ChevronRight className="ml-2 h-4 w-4" />
                    </span>
                  </Button>
                </CardContent>
              </Card>
            </Link>
          </div>

          <div className="max-w-3xl mx-auto">
            <h3 className="font-serif text-2xl font-bold text-center mb-6">Additional Initiatives</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <Link href="/projects/environmental-education" className="block">
                <Card className="h-full transition-all hover:shadow-md">
                  <CardContent className="p-4">
                    <h4 className="font-medium mb-2">Environmental Education</h4>
                    <p className="text-sm text-muted-foreground">
                      Teaching ecological awareness and sustainable practices
                    </p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/projects/peace-dialogues" className="block">
                <Card className="h-full transition-all hover:shadow-md">
                  <CardContent className="p-4">
                    <h4 className="font-medium mb-2">Peace Dialogues</h4>
                    <p className="text-sm text-muted-foreground">
                      Interfaith conversations promoting understanding and harmony
                    </p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/projects/meditation-centers" className="block">
                <Card className="h-full transition-all hover:shadow-md">
                  <CardContent className="p-4">
                    <h4 className="font-medium mb-2">Meditation Centers</h4>
                    <p className="text-sm text-muted-foreground">
                      Establishing spaces for silence and contemplative practice
                    </p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/projects/scholarship-program" className="block">
                <Card className="h-full transition-all hover:shadow-md">
                  <CardContent className="p-4">
                    <h4 className="font-medium mb-2">Scholarship Program</h4>
                    <p className="text-sm text-muted-foreground">Supporting education for underprivileged students</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold mb-6">Get Involved</h2>
            <p className="text-lg mb-8">
              There are many ways to support and participate in the work of the Dr. Kumar Foundation. Whether through
              volunteering, sharing your skills, or joining our spiritual community, your contribution makes a
              difference.
            </p>
            <Button className="bg-[#E6C67C] hover:bg-[#D4B46A] text-black" asChild>
              <Link href="/get-involved">
                Ways to Support Our Mission <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
