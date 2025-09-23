import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import PageHeader from "@/components/page-header"

export const metadata = {
  title: "Get Involved | Dr. Kumar Foundation",
  description: "Discover ways to support and participate in the Dr. Kumar Foundation's mission and activities.",
}

export default function GetInvolvedPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <PageHeader
        title="Get Involved"
        subtitle="Join Us in Continuing Dr. Kumar's Mission"
        backgroundImage="/placeholder.svg?height=1080&width=1920"
      />

      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-lg mb-8">
              There are many ways to support and participate in the work of the Dr. Kumar Foundation. Whether through
              volunteering, sharing your skills, or joining our spiritual community, your contribution makes a
              difference.
            </p>
            <p className="text-xl font-serif italic">
              💖 "Send your Zikr. Send your Breath. We don't want donations, we want Divine Intent."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Link href="/get-involved/share-story" className="block">
              <Card className="h-full transition-all hover:shadow-md">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Share Your Story"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardContent className="p-6 flex flex-col">
                  <div className="h-12 w-12 rounded-full bg-emerald-600/20 flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-emerald-600"
                    >
                      <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                      <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium mb-2">Share Your Story</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">
                    Submit stories or artwork inspired by Dr. Kumar and his teachings. Your experiences can inspire
                    others on their spiritual journey.
                  </p>
                  <Button variant="outline" className="mt-auto bg-transparent">
                    Submit Your Story <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/get-involved/volunteer" className="block">
              <Card className="h-full transition-all hover:shadow-md">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Volunteer"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardContent className="p-6 flex flex-col">
                  <div className="h-12 w-12 rounded-full bg-emerald-600/20 flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-emerald-600"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium mb-2">Volunteer</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">
                    Join our efforts in healing, ecology, or music initiatives around the world. We welcome volunteers
                    with diverse skills and backgrounds.
                  </p>
                  <Button variant="outline" className="mt-auto bg-transparent">
                    Become a Volunteer <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/get-involved/zikr-circles" className="block">
              <Card className="h-full transition-all hover:shadow-md">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Join Zikr Circles"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardContent className="p-6 flex flex-col">
                  <div className="h-12 w-12 rounded-full bg-emerald-600/20 flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-emerald-600"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                      <path d="M2 12h20" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium mb-2">Join Zikr Circles</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">
                    Connect with global zikr groups and participate in collective spiritual practice. Experience the
                    transformative power of communal remembrance.
                  </p>
                  <Button variant="outline" className="mt-auto bg-transparent">
                    Find a Circle <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-serif text-2xl font-bold mb-4">More Ways to Contribute</h3>
                <ul className="space-y-4">
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
                    <div>
                      <h4 className="font-medium">Host a Study Group</h4>
                      <p className="text-sm text-muted-foreground">
                        Organize local gatherings to study and discuss Dr. Kumar's teachings
                      </p>
                    </div>
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
                    <div>
                      <h4 className="font-medium">Translate Materials</h4>
                      <p className="text-sm text-muted-foreground">
                        Help make Dr. Kumar's teachings accessible in different languages
                      </p>
                    </div>
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
                    <div>
                      <h4 className="font-medium">Participate in Research</h4>
                      <p className="text-sm text-muted-foreground">
                        Join studies exploring the effects of spiritual practices on wellbeing
                      </p>
                    </div>
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
                    <div>
                      <h4 className="font-medium">Organize Events</h4>
                      <p className="text-sm text-muted-foreground">
                        Help coordinate workshops, retreats, and community gatherings
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-serif text-2xl font-bold mb-4">Professional Skills Needed</h3>
                <p className="mb-4">
                  We welcome professionals who can contribute their expertise to support our mission. If you have skills
                  in any of the following areas, we'd love to hear from you:
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded text-center">Web Development</div>
                  <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded text-center">Graphic Design</div>
                  <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded text-center">Video Production</div>
                  <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded text-center">Grant Writing</div>
                  <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded text-center">Research</div>
                  <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded text-center">Translation</div>
                  <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded text-center">Event Planning</div>
                  <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded text-center">Healthcare</div>
                </div>
                <div className="mt-4">
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-800 text-black" asChild>
                    <Link href="/get-involved/professional">Offer Professional Support</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-center mb-8">Upcoming Volunteer Opportunities</h2>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between gap-4">
                    <div>
                      <h3 className="font-serif text-xl font-bold mb-2">Water Protection Initiative</h3>
                      <p className="text-muted-foreground mb-2">
                        Join our team working to preserve and protect sacred water sources in Kashmir.
                      </p>
                      <div className="flex items-center gap-2 text-sm">
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
                          <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                          <line x1="16" x2="16" y1="2" y2="6" />
                          <line x1="8" x2="8" y1="2" y2="6" />
                          <line x1="3" x2="21" y1="10" y2="10" />
                        </svg>
                        <span>June 15 - August 30, 2025</span>
                      </div>
                    </div>
                    <Button className="bg-emerald-600 hover:bg-emerald-800 text-black shrink-0" asChild>
                      <Link href="/get-involved/water-protection">Apply Now</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between gap-4">
                    <div>
                      <h3 className="font-serif text-xl font-bold mb-2">Healing Workshop Assistants</h3>
                      <p className="text-muted-foreground mb-2">
                        Support our healing workshops by helping with organization and participant care.
                      </p>
                      <div className="flex items-center gap-2 text-sm">
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
                          <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                          <line x1="16" x2="16" y1="2" y2="6" />
                          <line x1="8" x2="8" y1="2" y2="6" />
                          <line x1="3" x2="21" y1="10" y2="10" />
                        </svg>
                        <span>Monthly Workshops</span>
                      </div>
                    </div>
                    <Button className="bg-emerald-600 hover:bg-emerald-800 text-black shrink-0" asChild>
                      <Link href="/get-involved/healing-workshops">Apply Now</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between gap-4">
                    <div>
                      <h3 className="font-serif text-xl font-bold mb-2">Media Library Archivists</h3>
                      <p className="text-muted-foreground mb-2">
                        Help digitize and catalog rare recordings and writings of Dr. Kumar.
                      </p>
                      <div className="flex items-center gap-2 text-sm">
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
                          <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                          <line x1="16" x2="16" y1="2" y2="6" />
                          <line x1="8" x2="8" y1="2" y2="6" />
                          <line x1="3" x2="21" y1="10" y2="10" />
                        </svg>
                        <span>Ongoing Project</span>
                      </div>
                    </div>
                    <Button className="bg-emerald-600 hover:bg-emerald-800 text-black shrink-0" asChild>
                      <Link href="/get-involved/media-archiving">Apply Now</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold mb-6">Contact Our Volunteer Coordinator</h2>
            <p className="text-lg mb-8">
              Have questions about how you can get involved? Our volunteer coordinator is here to help you find the
              perfect way to contribute based on your interests, skills, and availability.
            </p>
            <Button className="bg-emerald-600 hover:bg-emerald-800 text-black" asChild>
              <Link href="/contact?department=volunteer">
                Contact Coordinator <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
