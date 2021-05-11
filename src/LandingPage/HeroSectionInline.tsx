
import clsx from "clsx";
import React from "react";

export default function HeroSection() {
  return (
    <div className="bg-primary overflow-hidden relative">
      <div className="container zrelative z-10 mx-auto px-8">
        <div className="relative py-20 z-10">
          <div className="text-5xl font-bold text-white mb-2 filter drop-shadow-lg">Production Ready UI Boilerplate</div>
          <div className="text-6xl font-bold text-primary filter drop-shadow-lg">Crafted with TailwindCSS</div>
        </div>
        <div className="absolute top-1/2 left-1/2 grid grid-cols-2 gap-4 transform">
          <div className="h-auto rounded-lg filter drop-shadow-lg ml-auto transform -translate-y-0 w-60">
            <img src="/assets/images/signin.png" />
          </div>
          <div className="h-auto rounded-lg filter drop-shadow-lg transform -translate-y-8">
           <img src="/assets/images/preview1.png"/>
          </div>
        </div>
      </div>
    </div>
  )
}