
'use client';

import { useState, useEffect } from 'react';

interface LoadingScreenProps {
  isLoading: boolean;
}

export default function LoadingScreen({ isLoading }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isLoading) return;
    
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [isLoading]);

  if (!isLoading) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-white via-gray-50 to-amber-50 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="mb-8">
          <img 
            src="https://static.readdy.ai/image/0190a5f87890c318d7e8388d26802538/72f3df1b7bd4b1a9280d8c6d471b2f81.png"
            alt="Yaka & Co Logo"
            className="w-24 h-24 mx-auto mb-4 animate-pulse"
          />
          <h1 className="font-['Pacifico'] text-3xl text-amber-600 mb-2">Yaka & Co.</h1>
          <p className="text-gray-600 text-lg">Dijital Dünyada Prestijinizi Yükseltin</p>
        </div>
        
        <div className="w-64 mx-auto">
          <div className="bg-gray-200 rounded-full h-2 mb-4 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-amber-400 to-amber-600 h-2 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-gray-500 text-sm">Yükleniyor... {progress}%</p>
        </div>
      </div>
    </div>
  );
}
