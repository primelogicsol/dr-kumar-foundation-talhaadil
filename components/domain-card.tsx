import { Leaf, Globe, Brain, BookOpen, DotIcon as Dove, RouteIcon as Path } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface DomainCardProps {
  icon: string
  title: string
  description: string
}

export default function DomainCard({ icon, title, description }: DomainCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "leaf":
        return <Leaf className="h-6 w-6 text-[#E6C67C]" />
      case "globe":
        return <Globe className="h-6 w-6 text-[#E6C67C]" />
      case "brain":
        return <Brain className="h-6 w-6 text-[#E6C67C]" />
      case "book":
        return <BookOpen className="h-6 w-6 text-[#E6C67C]" />
      case "dove":
        return <Dove className="h-6 w-6 text-[#E6C67C]" />
      case "path":
        return <Path className="h-6 w-6 text-[#E6C67C]" />
      default:
        return <Leaf className="h-6 w-6 text-[#E6C67C]" />
    }
  }

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardContent className="p-6">
        <div className="h-12 w-12 rounded-full bg-[#E6C67C]/20 flex items-center justify-center mb-4">{getIcon()}</div>
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}
