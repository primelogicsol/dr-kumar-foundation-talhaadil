import Link from "next/link"
import Image from "next/image"

export default function SiteFooter() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12 border-t">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logo123.png"
                alt="Dr. Kumar Foundation Logo"
                width={200}
                height={200}
              />
            </div>
            <p className="text-muted-foreground max-w-xs">
              The global voice of Dr. Ghulam Mohammad Kumar (Qalandar-e-Kashmir), dedicated to spreading his teachings
              of healing, peace, and spiritual awakening.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-medium mb-3">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-muted-foreground hover:text-foreground">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/his-life" className="text-muted-foreground hover:text-foreground">
                    His Life
                  </Link>
                </li>
                <li>
                  <Link href="/teachings" className="text-muted-foreground hover:text-foreground">
                    Teachings
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="text-muted-foreground hover:text-foreground">
                    Legacy & Projects
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-3">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/sufi-science" className="text-muted-foreground hover:text-foreground">
                    Sufi Science Center
                  </Link>
                </li>
                <li>
                  <Link href="/media-library" className="text-muted-foreground hover:text-foreground">
                    SufiPulse Media
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-3">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center">
           <div className="flex flex-col gap-2">
            <p className="text-gray-500 text-sm">
              © 2025 Dr Kumar Foundation. A project of <a href="http://sufipulse.com" target="_blank" className="text-emerald-600 hover:underline">SufiPulse</a> & <a href="https://sufisciencecenter.info/" target="_blank" className="text-emerald-600 hover:underline">Sufi Science Center USA</a>.
            </p>
            <p className="text-gray-500 text-sm">
              Website designed, developed & maintained by <a href="https://primelogicsol.com" target="_blank" className="text-emerald-600 hover:underline">Prime Logic Solutions USA</a>
            </p>
          </div>
          
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
            <Link href="/statement-of-purpose" className="text-sm text-muted-foreground hover:text-foreground">
              Statement of Purpose
            </Link>
          </div>
        </div>

       
      </div>
    </footer>
  )
}
