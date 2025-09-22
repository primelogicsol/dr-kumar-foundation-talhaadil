"use client"

export default function WorldMap() {
  return (
    <div className="relative">
      <div className="relative aspect-[2/1] overflow-hidden rounded-lg mb-6">
        <video
          src="/videos/dr-kumar.mp4"
          autoPlay
          loop
          muted
          className="object-cover w-full h-full"
        />
      </div>

      <div className="text-center text-sm text-muted-foreground">
        Video showcasing Dr. Kumar's global impact.
      </div>
    </div>
  )
}