"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, Volume2, VolumeX, SkipBack, SkipForward } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"

interface MediaPlayerProps {
  type: "audio" | "video"
  src: string
  poster?: string
}

export default function MediaPlayer({ type, src, poster }: MediaPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [volume, setVolume] = useState(1)
  const [isMuted, setIsMuted] = useState(false)
  const mediaRef = useRef<HTMLVideoElement | HTMLAudioElement>(null)

  useEffect(() => {
    const media = mediaRef.current
    if (!media) return

    const setAudioData = () => {
      setDuration(media.duration)
    }

    const setAudioTime = () => {
      setCurrentTime(media.currentTime)
    }

    media.addEventListener("loadedmetadata", setAudioData)
    media.addEventListener("timeupdate", setAudioTime)

    return () => {
      media.removeEventListener("loadedmetadata", setAudioData)
      media.removeEventListener("timeupdate", setAudioTime)
    }
  }, [])

  const togglePlay = () => {
    const media = mediaRef.current
    if (!media) return

    if (isPlaying) {
      media.pause()
    } else {
      media.play()
    }
    setIsPlaying(!isPlaying)
  }

  const handleTimeChange = (value: number[]) => {
    const media = mediaRef.current
    if (!media) return

    media.currentTime = value[0]
    setCurrentTime(value[0])
  }

  const handleVolumeChange = (value: number[]) => {
    const media = mediaRef.current
    if (!media) return

    const newVolume = value[0]
    setVolume(newVolume)
    media.volume = newVolume
    setIsMuted(newVolume === 0)
  }

  const toggleMute = () => {
    const media = mediaRef.current
    if (!media) return

    if (isMuted) {
      media.volume = volume || 1
      setIsMuted(false)
    } else {
      media.volume = 0
      setIsMuted(true)
    }
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
  }

  const skipBackward = () => {
    const media = mediaRef.current
    if (!media) return
    media.currentTime = Math.max(0, media.currentTime - 10)
  }

  const skipForward = () => {
    const media = mediaRef.current
    if (!media) return
    media.currentTime = Math.min(duration, media.currentTime + 10)
  }

  return (
    <div className="rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
      {type === "video" ? (
        <div className="relative aspect-video">
          <video
            ref={mediaRef as React.RefObject<HTMLVideoElement>}
            src={src}
            poster={poster}
            className="w-full h-full"
          />
        </div>
      ) : (
        <div className="relative p-6 flex items-center justify-center">
          <div className="w-24 h-24 rounded-full bg-[#E6C67C]/20 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-[#E6C67C]"
            >
              <path d="M9 18V5l12-2v13" />
              <circle cx="6" cy="18" r="3" />
              <circle cx="18" cy="16" r="3" />
            </svg>
          </div>
          <audio ref={mediaRef as React.RefObject<HTMLAudioElement>} src={src} />
        </div>
      )}

      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-sm">{formatTime(currentTime)}</span>
          <Slider
            value={[currentTime]}
            max={duration || 100}
            step={1}
            onValueChange={handleTimeChange}
            className="flex-1"
          />
          <span className="text-sm">{formatTime(duration)}</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={skipBackward}>
              <SkipBack className="h-5 w-5" />
              <span className="sr-only">Skip backward</span>
            </Button>
            <Button variant="ghost" size="icon" onClick={togglePlay}>
              {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
              <span className="sr-only">{isPlaying ? "Pause" : "Play"}</span>
            </Button>
            <Button variant="ghost" size="icon" onClick={skipForward}>
              <SkipForward className="h-5 w-5" />
              <span className="sr-only">Skip forward</span>
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={toggleMute}>
              {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
              <span className="sr-only">{isMuted ? "Unmute" : "Mute"}</span>
            </Button>
            <Slider
              value={[isMuted ? 0 : volume]}
              max={1}
              step={0.01}
              onValueChange={handleVolumeChange}
              className="w-24"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
