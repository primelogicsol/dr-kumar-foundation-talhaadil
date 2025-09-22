"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import LanguageToggle from "@/components/language-toggle"
import ThemeToggle from "@/components/theme-toggle"

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  const navItems = [
    { name: "Home", path: "/" },
    { name: "His Life", path: "/his-life" },
    { name: "Teachings", path: "/teachings" },
    { name: "Legacy & Projects", path: "/projects" },
    { name: "Sufi Science Center", path: "/sufi-science" }, // Updated text
    { name: "SufiPulse Media", path: "/media-library" },
    { name: "Contact", path: "/contact" },
  ]
  
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/placehol.svg?height=40&width=40"
            alt="Dr. Kumar Foundation Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="font-serif text-xl font-medium">Dr. Kumar Foundation</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`text-sm font-medium transition-colors ${
                isActive(item.path) ? "text-primary" : "text-foreground/70 hover:text-foreground"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
         
          <Button
            variant="outline"
            size="icon"
            className="md:hidden bg-transparent"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Toggle menu</span>
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container py-4">
              <div className="flex justify-between items-center mb-4">
                <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Dr. Kumar Foundation Logo"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <span className="font-serif text-xl font-medium">Dr. Kumar Foundation</span>
                </Link>
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-transparent"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </div>
              <nav className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`text-lg font-medium py-2 ${
                      isActive(item.path) ? "text-primary" : "text-foreground/70"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
