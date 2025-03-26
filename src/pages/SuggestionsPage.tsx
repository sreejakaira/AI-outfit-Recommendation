import React, { useEffect, useState } from 'react';
import { WeatherDisplay } from '../components/WeatherDisplay';
import { EventSelector } from '../components/EventSelector';
import { OutfitSuggestion } from '../components/OutfitSuggestion';
export function SuggestionsPage({
  wardrobe
}) {
  const [selectedEvent, setSelectedEvent] = useState('casual');
  const [weather, setWeather] = useState({
    temperature: 72,
    condition: 'sunny'
  });
  const [suggestions, setSuggestions] = useState([]);
  // Simulate AI generating suggestions based on wardrobe, weather, and event
  useEffect(() => {
    if (wardrobe.length > 0) {
      // This would typically be an API call to get AI suggestions
      // For now, we'll generate some mock suggestions
      const mockSuggestions = generateMockSuggestions();
      setSuggestions(mockSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [wardrobe, weather, selectedEvent]);
  const generateMockSuggestions = () => {
    if (wardrobe.length === 0) return [];
    // Create a simple outfit with available items
    const tops = wardrobe.filter(item => item.category === 'top');
    const bottoms = wardrobe.filter(item => item.category === 'bottom');
    const shoes = wardrobe.filter(item => item.category === 'shoes');
    const outerwear = wardrobe.filter(item => item.category === 'outerwear');
    const suggestions = [];
    // Only generate suggestions if we have at least some clothing items
    if (tops.length > 0 || bottoms.length > 0) {
      const outfitItems = [];
      // Add a top if available
      if (tops.length > 0) {
        outfitItems.push(tops[Math.floor(Math.random() * tops.length)]);
      }
      // Add bottoms if available
      if (bottoms.length > 0) {
        outfitItems.push(bottoms[Math.floor(Math.random() * bottoms.length)]);
      }
      // Add shoes if available
      if (shoes.length > 0) {
        outfitItems.push(shoes[Math.floor(Math.random() * shoes.length)]);
      }
      // Add outerwear if it's cold and available
      if (weather.temperature < 65 && outerwear.length > 0) {
        outfitItems.push(outerwear[Math.floor(Math.random() * outerwear.length)]);
      }
      // Only add the suggestion if we have at least 2 items
      if (outfitItems.length >= 1) {
        suggestions.push({
          id: 1,
          items: outfitItems,
          description: `Perfect ${selectedEvent} outfit for ${weather.condition} weather at ${weather.temperature}°F.`
        });
      }
    }
    return suggestions;
  };
  const handleWeatherChange = condition => {
    const weatherOptions = {
      sunny: {
        temperature: 78,
        condition: 'sunny'
      },
      cloudy: {
        temperature: 65,
        condition: 'cloudy'
      },
      rainy: {
        temperature: 60,
        condition: 'rainy'
      },
      snowy: {
        temperature: 30,
        condition: 'snowy'
      }
    };
    setWeather(weatherOptions[condition] || weatherOptions.sunny);
  };
  return <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Outfit Suggestions
      </h2>
      {wardrobe.length === 0 ? <div className="bg-white rounded-xl shadow-md p-10 text-center">
          <p className="text-gray-500 mb-4">Add items to your wardrobe first</p>
          <p className="text-gray-500 text-sm">
            Once you've added some clothing items, we'll suggest outfits for you
          </p>
        </div> : <>
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-800 mb-3">
                Weather
              </h3>
              <div className="flex flex-wrap gap-3">
                <button className={`px-4 py-2 rounded-md ${weather.condition === 'sunny' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'}`} onClick={() => handleWeatherChange('sunny')}>
                  Sunny (78°)
                </button>
                <button className={`px-4 py-2 rounded-md ${weather.condition === 'cloudy' ? 'bg-gray-200 text-gray-800' : 'bg-gray-100 text-gray-800'}`} onClick={() => handleWeatherChange('cloudy')}>
                  Cloudy (65°)
                </button>
                <button className={`px-4 py-2 rounded-md ${weather.condition === 'rainy' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`} onClick={() => handleWeatherChange('rainy')}>
                  Rainy (60°)
                </button>
                <button className={`px-4 py-2 rounded-md ${weather.condition === 'snowy' ? 'bg-blue-50 text-blue-800' : 'bg-gray-100 text-gray-800'}`} onClick={() => handleWeatherChange('snowy')}>
                  Snowy (30°)
                </button>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-3">
                Event Type
              </h3>
              <EventSelector selectedEvent={selectedEvent} setSelectedEvent={setSelectedEvent} />
            </div>
          </div>
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-xl font-bold text-gray-800">AI Suggestions</h3>
            <WeatherDisplay weather={weather} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {suggestions.length > 0 ? suggestions.map((outfit, index) => <OutfitSuggestion key={outfit.id} outfit={outfit} title={`Suggestion ${index + 1}`} />) : <div className="bg-white rounded-xl shadow-md p-10 text-center col-span-full">
                <p className="text-gray-500">No outfit suggestions available</p>
                <p className="text-gray-500 text-sm mt-2">
                  Try adding more items to your wardrobe
                </p>
              </div>}
          </div>
        </>}
    </div>;
}