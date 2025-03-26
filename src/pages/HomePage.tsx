import React from 'react';
import { CloudSunIcon, CalendarIcon, TrendingUpIcon } from 'lucide-react';
export function HomePage() {
  return <div className="max-w-7xl mx-auto px-4 py-8">
      <section className="mb-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Welcome to StyleAI
        </h2>
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <p className="text-lg text-gray-600 mb-4">
            Upload your wardrobe and get AI-powered outfit suggestions based on:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center p-4 bg-indigo-50 rounded-lg">
              <CloudSunIcon className="h-8 w-8 text-indigo-600 mr-3" />
              <span className="text-gray-700">Weather conditions</span>
            </div>
            <div className="flex items-center p-4 bg-indigo-50 rounded-lg">
              <CalendarIcon className="h-8 w-8 text-indigo-600 mr-3" />
              <span className="text-gray-700">Upcoming events</span>
            </div>
            <div className="flex items-center p-4 bg-indigo-50 rounded-lg">
              <TrendingUpIcon className="h-8 w-8 text-indigo-600 mr-3" />
              <span className="text-gray-700">Fashion trends</span>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-10">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">How it works</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-5">
            <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <span className="text-indigo-600 font-bold text-lg">1</span>
            </div>
            <h4 className="font-bold text-lg mb-2">Upload your wardrobe</h4>
            <p className="text-gray-600">
              Add photos of your clothing items to build your digital wardrobe.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-5">
            <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <span className="text-indigo-600 font-bold text-lg">2</span>
            </div>
            <h4 className="font-bold text-lg mb-2">Set your preferences</h4>
            <p className="text-gray-600">
              Tell us about the weather, events, and your style preferences.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-5">
            <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <span className="text-indigo-600 font-bold text-lg">3</span>
            </div>
            <h4 className="font-bold text-lg mb-2">Get AI suggestions</h4>
            <p className="text-gray-600">
              Receive personalized outfit recommendations based on your
              wardrobe.
            </p>
          </div>
        </div>
      </section>
    </div>;
}