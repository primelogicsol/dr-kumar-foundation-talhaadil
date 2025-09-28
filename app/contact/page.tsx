'use client'
import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import PageHeader from "@/components/page-header"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    }

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Failed to send message")
      }

      setSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unexpected error occurred")
    } finally {
      setLoading(false)
    }
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
                    className="h-5 w-5 mt-0.5 text-emerald-600"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <div className="max-w-full break-words overflow-hidden">
                    <h4 className="font-medium text-sm sm:text-base">Email</h4>
                    <p className="text-muted-foreground text-sm sm:text-base break-all">
                      contact@dkf.sufisciencecenter.info
                    </p>
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
                    className="h-5 w-5 mt-0.5 text-emerald-600"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <div>
                    <h4 className="font-medium">Address</h4>
                    <p className="text-muted-foreground">
                      Sufi Science Center
                      <br />
                      One Loudoun
                      <br />
                      Loudon, Virginia 20147, USA
                    </p>
                  </div>
                </div>
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

                  {error && (
                    <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg text-red-600 dark:text-red-400">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" name="name" placeholder="Your name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" type="email" placeholder="Your email" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" name="subject" placeholder="Subject of your message" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" name="message" placeholder="Your message" className="min-h-[150px]" required />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-800 text-black"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">
            Our Global Offices
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="font-serif text-xl font-bold mb-2">Headquarters</h3>
              <p className="text-muted-foreground mb-4">
                Virginia USA
                
              
              </p>
              <p className="text-sm">
                
                <span className="font-medium">Email:</span>{" "}
                <a
                  href="mailto:usa@dkf.sufisciencecenter.info"
                  className="break-all text-blue-600 dark:text-blue-400"
                >
                  contact_us@dkf.sufisciencecenter.info
                </a>
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="font-serif text-xl font-bold mb-2">Asia Region</h3>
              <p className="text-muted-foreground mb-4">
                Kashmir India
                
              </p>
              <p className="text-sm">
               
                <span className="font-medium">Email:</span>{" "}
                <a
                  href="mailto:kashmir_india@drkumarfoundation.org"
                  className="break-all text-blue-600 dark:text-blue-400"
                >
                  contact_asia@drkumarfoundation.org
                </a>
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="font-serif text-xl font-bold mb-2">European Region</h3>
              <p className="text-muted-foreground mb-4">
                London UK
              </p>
              <p className="text-sm">
               
                <span className="font-medium">Email:</span>{" "}
                <a
                  href="mailto:europe@drkumarfoundation.org"
                  className="break-all text-blue-600 dark:text-blue-400"
                >
                  contact_europe@drkumarfoundation.org
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}