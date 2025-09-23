import Image from "next/image"
import Link from "next/link"
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
                <h3 className="font-serif text-2xl font-bold mb-4">Sufi Science Center</h3>
                <p className="mb-4">
                  A visionary hub integrating mysticism with science. Hosting 12+ webinars and publishing 50+ digital
                  papers, programs explore consciousness, healing, and sustainability through dialogue with seekers,
                  scientists, and spiritual leaders.
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

          {/* Spiritual & Healing */}
          <h3 className="font-serif text-2xl font-bold text-center mb-8">Spiritual & Healing</h3>
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
                    Virtual workshops blending Sufi wisdom with wellness, serving 3,000+ seekers annually. Programs unite
                    body, mind, and spirit while supporting professionals and aspirants in self-care, compassion, and
                    holistic healing.
                  </p>
                  <Button variant="outline" className="mt-2 bg-transparent" asChild>
                    <a href="https://sufisciencecenter.info/" target="_blank" rel="noopener noreferrer">
                      Need support for healing initiatives? Visit SSC
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/projects/art-of-silence" className="block">
              <Card className="h-full transition-all hover:shadow-md">
                <div className="relative h-60">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Art of Silence"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-serif text-2xl font-bold mb-2">Art of Silence</h3>
                  <p className="mb-4">
                    Silent retreats and zikr circles envisioned for 1,200+ participants. Rooted in Kashmiri tradition,
                    these gatherings cultivate stillness, presence, and renewal, guiding seekers toward spiritual strength.
                  </p>
                  <Button variant="outline" className="mt-2 bg-transparent" asChild>
                    <a href="https://sufisciencecenter.info/" target="_blank" rel="noopener noreferrer">
                      Seeking funding for silent retreats? Visit SSC
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/projects/compassion-social-healing" className="block">
              <Card className="h-full transition-all hover:shadow-md">
                <div className="relative h-60">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Compassion & Social Healing"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-serif text-2xl font-bold mb-2">Compassion & Social Healing</h3>
                  <p className="mb-4">
                    Virtual programs addressing trauma and reconciliation for 2,000+ families. Guided by Sufi principles
                    of forgiveness and peace, initiatives foster resilience, restore trust, and heal wounds.
                  </p>
                  <Button variant="outline" className="mt-2 bg-transparent" asChild>
                    <a href="https://sufisciencecenter.info/" target="_blank" rel="noopener noreferrer">
                      Need assistance for community healing? Visit SSC
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/projects/meditation-centers" className="block">
              <Card className="h-full transition-all hover:shadow-md">
                <div className="relative h-60">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Meditation Centers"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-serif text-2xl font-bold mb-2">Meditation Centers</h3>
                  <p className="mb-4">
                    Plans for digital meditation hubs serving thousands worldwide. Programs offer mindfulness,
                    reflection, and inner clarity, creating accessible sanctuaries for seekers of all traditions.
                  </p>
                  <Button variant="outline" className="mt-2 bg-transparent" asChild>
                    <a href="https://sufisciencecenter.info/" target="_blank" rel="noopener noreferrer">
                      Want to create meditation spaces? Visit SSC
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </Link>
          </div>

          {/* Ecology & Protection */}
          <h3 className="font-serif text-2xl font-bold text-center mb-8">Ecology & Protection</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
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
                    Fifteen planned campaigns to safeguard Kashmir’s sacred rivers and lakes. Programs combine
                    eco-literacy, conservation, and spiritual reverence for water as life’s source.
                  </p>
                  <Button variant="outline" className="mt-2 bg-transparent" asChild>
                    <a href="https://sufisciencecenter.info/" target="_blank" rel="noopener noreferrer">
                      Need eco-project support? Visit SSC
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/projects/sacred-landscapes" className="block">
              <Card className="h-full transition-all hover:shadow-md">
                <div className="relative h-60">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Sacred Landscapes"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-serif text-2xl font-bold mb-2">Sacred Landscapes</h3>
                  <p className="mb-4">
                    Projects to digitally map and protect 50,000+ hectares of mountains, forests, and wetlands.
                    Initiatives inspire global ecological awareness with Sufi reverence for nature.
                  </p>
                  <Button variant="outline" className="mt-2 bg-transparent" asChild>
                    <a href="https://sufisciencecenter.info/" target="_blank" rel="noopener noreferrer">
                      Seeking partnership for sacred landscapes? Visit SSC
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/projects/environmental-education" className="block">
              <Card className="h-full transition-all hover:shadow-md">
                <div className="relative h-60">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Environmental Education"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-serif text-2xl font-bold mb-2">Environmental Education</h3>
                  <p className="mb-4">
                    Virtual eco-learning designed to train 10,000+ students annually. Programs combine science and
                    spiritual responsibility, teaching climate awareness and sustainability.
                  </p>
                  <Button variant="outline" className="mt-2 bg-transparent" asChild>
                    <a href="https://sufisciencecenter.info/" target="_blank" rel="noopener noreferrer">
                      Want to start environmental programs? Visit SSC
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/projects/sustainable-living" className="block">
              <Card className="h-full transition-all hover:shadow-md">
                <div className="relative h-60">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Sustainable Living Programs"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-serif text-2xl font-bold mb-2">Sustainable Living Programs</h3>
                  <p className="mb-4">
                    Initiatives promoting green housing, renewable energy, and ethical living across 30+ communities,
                    rooted in Sufi values of reverence for creation.
                  </p>
                  <Button variant="outline" className="mt-2 bg-transparent" asChild>
                    <a href="https://sufisciencecenter.info/" target="_blank" rel="noopener noreferrer">
                      Interested in eco-living initiatives? Visit SSC
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </Link>
          </div>

          {/* Music & Culture */}
          <h3 className="font-serif text-2xl font-bold text-center mb-8">Music & Culture</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Link href="https://sufipulse.com/" className="block" target="_blank" rel="noopener noreferrer">
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
                  <h3 className="font-serif text-2xl font-bold mb-2">SufiPulse (Sacred Music)</h3>
                  <p className="mb-4">
                    A global initiative hosting 200+ virtual concerts and workshops. Preserving Kashmiri Sufi traditions
                    while inspiring healing through rhythm, melody, and devotion.
                  </p>
                  <Button variant="outline" className="mt-2 bg-transparent" asChild>
                    <a href="https://sufipulse.com/" target="_blank" rel="noopener noreferrer">
                      Want to host SufiPulse? Visit SufiPulse
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/projects/craft-revival" className="block">
              <Card className="h-full transition-all hover:shadow-md">
                <div className="relative h-60">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Craft Revival & Devotion"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-serif text-2xl font-bold mb-2">Craft Revival & Devotion</h3>
                  <p className="mb-4">
                    Projects supporting 1,500 artisans through e-commerce. Reviving Kashmiri crafts as devotion and
                    livelihood, preserving heritage patterns for global audiences.
                  </p>
                  <Button variant="outline" className="mt-2 bg-transparent" asChild>
                    <a href="https://khcrf.org/" target="_blank" rel="noopener noreferrer">
                      Need craft project support? Visit KHRCF
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/projects/sacred-music-poetry" className="block">
              <Card className="h-full transition-all hover:shadow-md">
                <div className="relative h-60">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Sacred Music & Poetry Festivals"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-serif text-2xl font-bold mb-2">Sacred Music & Poetry Festivals</h3>
                  <p className="mb-4">
                    Envisioned 25+ global festivals celebrating Sufi poetry, qawwali, and sacred arts, uniting diverse
                    audiences to preserve Kashmiri cultural heritage.
                  </p>
                  <Button variant="outline" className="mt-2 bg-transparent" asChild>
                    <a href="https://sufipulse.com/" target="_blank" rel="noopener noreferrer">
                      Interested in partnerships? Visit SufiPulse
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/projects/sufi-wisdom-archive" className="block">
              <Card className="h-full transition-all hover:shadow-md">
                <div className="relative h-60">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Sufi Wisdom Archive"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-serif text-2xl font-bold mb-2">Sufi Wisdom Archive</h3>
                  <p className="mb-4">
                    Digitization projects preserving 5,000+ manuscripts, poems, and oral teachings, safeguarding
                    Kashmiri Sufi wisdom for scholars and seekers worldwide.
                  </p>
                  <Button variant="outline" className="mt-2 bg-transparent" asChild>
                    <a href="https://sufisciencecenter.info/" target="_blank" rel="noopener noreferrer">
                      Need archival support? Visit SSC
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </Link>
          </div>

          {/* Knowledge & Dialogue */}
          <h3 className="font-serif text-2xl font-bold text-center mb-8">Knowledge & Dialogue</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Link href="/projects/sufi-science-center" className="block">
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
                    A visionary hub integrating mysticism with science. Hosting 12+ webinars and publishing 50+ digital
                    papers, exploring consciousness, healing, and sustainability.
                  </p>
                  <Button variant="outline" className="mt-2 bg-transparent" asChild>
                    <a href="https://sufisciencecenter.info/" target="_blank" rel="noopener noreferrer">
                      Want collaboration or research support? Visit SSC
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/projects/interfaith-harmony" className="block">
              <Card className="h-full transition-all hover:shadow-md">
                <div className="relative h-60">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Interfaith Harmony"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-serif text-2xl font-bold mb-2">Interfaith Harmony</h3>
                  <p className="mb-4">
                    Virtual dialogues uniting seekers across faiths. Hosting 100+ global forums to foster respect,
                    understanding, and peace through shared values.
                  </p>
                  <Button variant="outline" className="mt-2 bg-transparent" asChild>
                    <a href="https://sufisciencecenter.info/" target="_blank" rel="noopener noreferrer">
                      Need support for interfaith work? Visit SSC
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/projects/global-sufi-fellowship" className="block">
              <Card className="h-full transition-all hover:shadow-md">
                <div className="relative h-60">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Global Sufi Fellowship"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-serif text-2xl font-bold mb-2">Global Sufi Fellowship</h3>
                  <p className="mb-4">
                    Training 400+ young leaders worldwide in spirituality, service, and peacebuilding, nurturing
                    intercultural dialogue and ethical leadership.
                  </p>
                  <Button variant="outline" className="mt-2 bg-transparent" asChild>
                    <a href="https://sufisciencecenter.info/" target="_blank" rel="noopener noreferrer">
                      Seeking fellowship funding? Visit SSC
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/projects/peace-dialogues" className="block">
              <Card className="h-full transition-all hover:shadow-md">
                <div className="relative h-60">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Peace Dialogues"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-serif text-2xl font-bold mb-2">Peace Dialogues</h3>
                  <p className="mb-4">
                    Planned virtual gatherings for 10,000+ participants worldwide, creating safe spaces for
                    reconciliation, compassion, and shared humanity.
                  </p>
                  <Button variant="outline" className="mt-2 bg-transparent" asChild>
                    <a href="https://sufisciencecenter.info/" target="_blank" rel="noopener noreferrer">
                      Need resources for peacebuilding? Visit SSC
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </Link>
          </div>

          {/* Additional Initiatives */}
          <div className="max-w-3xl mx-auto">
            <h3 className="font-serif text-2xl font-bold text-center mb-6">Additional Initiatives</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <Link href="/projects/heritage-preservation" className="block">
                <Card className="h-full transition-all hover:shadow-md">
                  <CardContent className="p-4">
                    <h4 className="font-medium mb-2">Heritage Preservation</h4>
                    <p className="text-sm text-muted-foreground">
                      Digital projects preserving 20+ shrines, manuscripts, and oral traditions for global access
                    </p>
                    <Button variant="outline" className="mt-2 bg-transparent text-sm" asChild>
                      <a href="https://sufisciencecenter.info/" target="_blank" rel="noopener noreferrer">
                        Need preservation assistance? Visit SSC
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/projects/womens-empowerment" className="block">
                <Card className="h-full transition-all hover:shadow-md">
                  <CardContent className="p-4">
                    <h4 className="font-medium mb-2">Women’s Empowerment</h4>
                    <p className="text-sm text-muted-foreground">
                      Empowering 1,000+ women artisans, healers, and seekers through training and e-commerce
                    </p>
                    <Button variant="outline" className="mt-2 bg-transparent text-sm" asChild>
                      <a href="https://sufisciencecenter.info/" target="_blank" rel="noopener noreferrer">
                        Want support for women’s programs? Visit SSC
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/projects/digital-learning-platforms" className="block">
                <Card className="h-full transition-all hover:shadow-md">
                  <CardContent className="p-4">
                    <h4 className="font-medium mb-2">Digital Learning Platforms</h4>
                    <p className="text-sm text-muted-foreground">
                      50+ online courses, podcasts, and apps sharing Dr. Kumar’s teachings worldwide
                    </p>
                    <Button variant="outline" className="mt-2 bg-transparent text-sm" asChild>
                      <a href="https://sufisciencecenter.info/" target="_blank" rel="noopener noreferrer">
                        Interested in e-learning partnerships? Visit SSC
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/projects/global-volunteer-network" className="block">
                <Card className="h-full transition-all hover:shadow-md">
                  <CardContent className="p-4">
                    <h4 className="font-medium mb-2">Global Volunteer Network</h4>
                    <p className="text-sm text-muted-foreground">
                      Building a 2,500-strong volunteer community for healing, ecology, and preservation
                    </p>
                    <Button variant="outline" className="mt-2 bg-transparent text-sm" asChild>
                      <a href="https://sufisciencecenter.info/" target="_blank" rel="noopener noreferrer">
                        Want to volunteer or contribute? Visit SSC
                      </a>
                    </Button>
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
              <a href="https://sufisciencecenter.info/collaboration" target="_blank" rel="noopener noreferrer">
                Ways to Collaborate With Us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}