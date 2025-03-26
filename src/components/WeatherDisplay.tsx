import React from 'react';
import { CloudSunIcon, CloudRainIcon, SunIcon, CloudSnowIcon } from 'lucide-react';
export function WeatherDisplay({
  weather
}) {
  const getWeatherIcon = () => {
    switch (weather.condition) {
      case 'sunny':
        return <SunIcon className="h-8 w-8 text-yellow-500" />;
      case 'rainy':
        return <CloudRainIcon className="h-8 w-8 text-blue-500" />;
      case 'cloudy':
        return <CloudSunIcon className="h-8 w-8 text-gray-500" />;
      case 'snowy':
        return <CloudSnowIcon className="h-8 w-8 text-blue-300" />;
      default:
        return <CloudSunIcon className="h-8 w-8 text-gray-500" />;
    }
  };
  return <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex items-center">
        {getWeatherIcon()}
        <div className="ml-3">
          <div className="text-lg font-medium text-gray-900">
            {weather.temperature}°
          </div>
          <div className="text-sm text-gray-500 capitalize">
            {weather.condition}
          </div>
        </div>
      </div>
    </div>;
}