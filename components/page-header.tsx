import Image from "next/image"
import FloatingParticles from "./floating-particles"
interface PageHeaderProps {
  title: string
  subtitle?: string
  backgroundImage: string
}

export default function PageHeader({ title, subtitle, backgroundImage }: PageHeaderProps) {
  return (
    <div className="relative h-[50vh] min-h-[300px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
         <FloatingParticles />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      <div className="container relative z-10 text-center text-white">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{title}</h1>
        {subtitle && <p className="text-xl md:text-2xl max-w-3xl mx-auto">{subtitle}</p>}
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </div>
  )
}
