'use client';

import React from 'react';
import { Play, Volume2, Settings, Maximize } from 'lucide-react';

const VideoPlayer: React.FC = () => {
  return (
    <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden">
      {/* Video thumbnail or actual video would be here */}
      <img
        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
        alt="Video thumbnail"
        className="w-full h-full object-cover"
      />

      {/* Play overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/20">
        <button className="h-16 w-16 bg-white/90 rounded-full flex items-center justify-center">
          <Play className="h-8 w-8 text-primary ml-1" fill="currentColor" />
        </button>
      </div>

      {/* Video controls */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
        {/* Progress bar */}
        <div className="relative w-full h-1 bg-white/30 rounded mb-3 group cursor-pointer">
          <div className="absolute left-0 top-0 bottom-0 w-1/4 bg-primary rounded"></div>
          {/* Current time indicator */}
          <div className="absolute top-1/2 -translate-y-1/2 left-1/4 h-3 w-3 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>

        {/* Controls row */}
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <button className="text-white">
              <Play className="h-5 w-5" />
            </button>
            <div className="flex items-center space-x-2">
              <button className="text-white">
                <Volume2 className="h-5 w-5" />
              </button>
              <div className="w-16 h-1 bg-white/30 rounded">
                <div className="h-full w-1/2 bg-white rounded"></div>
              </div>
            </div>
            <div className="text-white text-sm">1:25 / 9:15</div>
          </div>

          <div className="flex items-center space-x-3">
            <button className="text-white">
              <Settings className="h-5 w-5" />
            </button>
            <button className="text-white">
              <Maximize className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
