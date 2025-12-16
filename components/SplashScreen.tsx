
import React from 'react';
import { BookOpenIcon } from './icons';

interface SplashScreenProps {
  isVisible: boolean;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ isVisible }) => {
  return (
    <div
      className={`fixed inset-0 bg-black z-50 flex flex-col justify-center items-center transition-opacity duration-700 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      aria-hidden={!isVisible}
    >
      <div className="flex flex-col items-center animate-[fade-in_1.5s_ease-out]">
        <BookOpenIcon className="h-24 w-24 text-gray-400" />
        <h1 className="mt-6 text-5xl font-serif font-bold text-gray-300 tracking-wider">
          Bible Reader
        </h1>
        <p className="mt-3 text-lg text-gray-500 font-sans">
          Your daily companion for spiritual growth.
        </p>
        <div className="mt-12 w-8 h-8 border-2 border-gray-600 border-t-gray-300 rounded-full animate-spin"></div>
      </div>
    </div>
  );
};
