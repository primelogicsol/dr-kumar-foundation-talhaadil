import { Leaf, Globe, Brain, BookOpen, DotIcon as Dove, RouteIcon as Path ,Feather} from "lucide-react"
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
        return <Leaf className="h-6 w-6 text-emerald-600" />
      case "globe":
        return <Globe className="h-6 w-6 text-emerald-600" />
      case "brain":
        return <Brain className="h-6 w-6 text-emerald-600" />
      case "book":
        return <BookOpen className="h-6 w-6 text-emerald-600" />
      case "dove":
        return <Feather className="h-6 w-6 text-emerald-600" />;
      case "path":
        return <Path className="h-6 w-6 text-emerald-600" />
      default:
        return <Leaf className="h-6 w-6 text-emerald-600" />
    }
  }

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardContent className="p-6">
        <div className="h-12 w-12 rounded-full bg-emerald-600/20 flex items-center justify-center mb-4">{getIcon()}</div>
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}
