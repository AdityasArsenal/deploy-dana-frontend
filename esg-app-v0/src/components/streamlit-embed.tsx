"use client"

import { useState, useEffect } from "react"

export default function StreamlitEmbed() {
  const [isLoading, setIsLoading] = useState(true)
  const [streamlitUrl, setStreamlitUrl] = useState("")

  // Initialize the Streamlit URL after component mounts
  useEffect(() => {
    // Set the URL after a short delay to ensure component is fully mounted
    const timer = setTimeout(() => {
      setStreamlitUrl(process.env.NEXT_PUBLIC_STREAMLIT_URL || "http://localhost:8000/chat")
      // Force a rerender after setting the URL
      setIsLoading(true)
      
      // Give some time for iframe to start loading
      setTimeout(() => {
        setIsLoading(false)
      }, 500)
    }, 100)
    
    return () => clearTimeout(timer)
  }, [])

  // Handle iframe load event
  const handleIframeLoad = () => {
    setIsLoading(false)
  }

  return (
    <div className="w-full h-[650px] bg-background relative rounded-lg overflow-hidden shadow-xl border border-border">
      {streamlitUrl && (
        <iframe 
          src={streamlitUrl}
          width="100%"
          height="100%"
          frameBorder="0"
          allow="camera; microphone; autoplay; encrypted-media; fullscreen; display-capture"
          className={`transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}
          onLoad={handleIframeLoad}
        />
      )}

      {isLoading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-card">
          <div className="mb-4 w-16 h-16 relative">
            <div className="absolute w-full h-full border-4 border-primary/30 rounded-full"></div>
            <div className="absolute w-full h-full border-t-4 border-primary rounded-full animate-spin"></div>
          </div>
          <div className="text-muted-foreground">Loading ESG Consultant...</div>
        </div>
      )}
    </div>
  )
}