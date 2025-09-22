"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import PageHeader from "@/components/page-header"

export default function ContactPage() {
  const [department, setDepartment] = useState("general")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, this would send the form data to a server
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <PageHeader
        title="Contact Us"
        subtitle="Connect with the Dr. Kumar Foundation"
        backgroundImage="/placeholder.svg?height=1080&width=1920"
      />

      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="mb-6">
                For inquiries about Dr. Kumar's teachings, foundation activities, or how to get involved, please reach
                out to us using the form or contact information provided.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-3">
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
                    className="h-5 w-5 mt-0.5 text-[#E6C67C]"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
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
                    className="h-5 w-5 mt-0.5 text-[#E6C67C]"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-muted-foreground">contact@drkumarfoundation.org</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
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
                    className="h-5 w-5 mt-0.5 text-[#E6C67C]"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <div>
                    <h4 className="font-medium">Address</h4>
                    <p className="text-muted-foreground">
                      Sufi Science Center
                      <br />
                      123 Serenity Lane
                      <br />
                      Berkeley, CA 94704, USA
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Map showing the location of the Dr. Kumar Foundation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div>
              {submitted ? (
                <div className="bg-green-50 dark:bg-green-900/20 p-8 rounded-lg text-center">
                  <div className="h-16 w-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-4">
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
                      className="h-8 w-8 text-green-600 dark:text-green-400"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-2xl font-bold mb-2">Message Sent</h3>
                  <p className="mb-6">
                    Thank you for reaching out to the Dr. Kumar Foundation. We have received your message and will
                    respond as soon as possible.
                  </p>
                  <Button onClick={() => setSubmitted(false)}>Send Another Message</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h2 className="font-serif text-3xl font-bold mb-6">Send a Message</h2>

                  <div className="space-y-2">
                    <Label htmlFor="department">Department</Label>
                    <Select defaultValue={department} onValueChange={setDepartment}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select department" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiries</SelectItem>
                        <SelectItem value="volunteer">Volunteer Coordination</SelectItem>
                        <SelectItem value="media">Media & Press</SelectItem>
                        <SelectItem value="events">Events & Programs</SelectItem>
                        <SelectItem value="research">Research & Publications</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Your name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Your email" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Subject of your message" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Your message" className="min-h-[150px]" required />
                  </div>

                  <div className="space-y-3">
                    <Label>How did you hear about us?</Label>
                    <RadioGroup defaultValue="website">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="website" id="website" />
                        <Label htmlFor="website" className="cursor-pointer">
                          Website
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="friend" id="friend" />
                        <Label htmlFor="friend" className="cursor-pointer">
                          Friend or Family
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="event" id="event" />
                        <Label htmlFor="event" className="cursor-pointer">
                          Event or Workshop
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="social" id="social" />
                        <Label htmlFor="social" className="cursor-pointer">
                          Social Media
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="other" id="other" />
                        <Label htmlFor="other" className="cursor-pointer">
                          Other
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <Button type="submit" className="w-full bg-[#E6C67C] hover:bg-[#D4B46A] text-black">
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">Our Global Offices</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="font-serif text-xl font-bold mb-2">USA Headquarters</h3>
              <p className="text-muted-foreground mb-4">
                Sufi Science Center
                <br />
                123 Serenity Lane
                <br />
                Berkeley, CA 94704
                <br />
                United States
              </p>
              <p className="text-sm">
                <span className="font-medium">Phone:</span> +1 (555) 123-4567
                <br />
                <span className="font-medium">Email:</span> usa@drkumarfoundation.org
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="font-serif text-xl font-bold mb-2">Kashmir Center</h3>
              <p className="text-muted-foreground mb-4">
                Dr. Kumar Memorial Center
                <br />
                45 Dal Lake Road
                <br />
                Srinagar, 190001
                <br />
                Kashmir, India
              </p>
              <p className="text-sm">
                <span className="font-medium">Phone:</span> +91 (555) 987-6543
                <br />
                <span className="font-medium">Email:</span> kashmir@drkumarfoundation.org
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="font-serif text-xl font-bold mb-2">European Office</h3>
              <p className="text-muted-foreground mb-4">
                Kumar Foundation Europe
                <br />
                27 Harmony Street
                <br />
                London, SW1A 1AA
                <br />
                United Kingdom
              </p>
              <p className="text-sm">
                <span className="font-medium">Phone:</span> +44 (20) 1234-5678
                <br />
                <span className="font-medium">Email:</span> europe@drkumarfoundation.org
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold mb-6">Join Our Newsletter</h2>
            <p className="text-lg mb-8">
              Stay updated on foundation activities, upcoming events, and new teachings from Dr. Kumar's archive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input placeholder="Your email address" className="flex-1" />
              <Button className="bg-[#E6C67C] hover:bg-[#D4B46A] text-black">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
