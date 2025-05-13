"use client";

import { motion } from "framer-motion";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function HeroVideo() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch((error) => {
          console.error("Video play failed:", error);
          setIsPlaying(false);
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleVideoLoaded = () => {
    setIsLoaded(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="relative rounded-xl overflow-hidden shadow-2xl mt-12 bg-background"
      style={{ minHeight: "300px" }}
    >
      {/* Loading placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-background-light animate-pulse flex items-center justify-center">
          <div className="text-text-light">Loading video...</div>
        </div>
      )}

      {/* Video */}
      <video
        ref={videoRef}
        src="/showcase.mp4" // Ensure this path is correct and accessible
        autoPlay
        loop
        muted={isMuted}
        playsInline
        onLoadedData={handleVideoLoaded}
        className="w-full h-auto block"
      />

      {/* Video controls overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
        <div className="flex items-center justify-between">
          <button
            onClick={togglePlay}
            className="bg-primary-light/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-primary-light/30 transition-colors"
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>

          <button
            onClick={toggleMute}
            className="bg-primary-light/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-primary-light/30 transition-colors"
          >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
        </div>
      </div>

      {/* Video overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-light/10 via-transparent to-secondary-light/10 pointer-events-none"></div>
    </motion.div>
  );
}
