"use client"

import * as React from "react"
import { Globe } from "lucide-react"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

export default function LanguageToggle() {
  const [language, setLanguage] = React.useState("English")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Globe className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLanguage("English")}>English</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("Urdu")}>Urdu</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("Kashmiri")}>Kashmiri</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
