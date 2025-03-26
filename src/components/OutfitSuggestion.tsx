import React from 'react';
export function OutfitSuggestion({
  outfit,
  title
}) {
  return <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-4 bg-indigo-50 border-b border-indigo-100">
        <h4 className="font-medium text-indigo-800">{title}</h4>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-2 gap-3">
          {outfit.items.map((item, index) => <div key={index} className="bg-gray-50 rounded-md overflow-hidden">
              <div className="h-32 bg-white">
                <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
              </div>
              <div className="p-2">
                <p className="text-xs text-gray-600 truncate">{item.name}</p>
              </div>
            </div>)}
        </div>
        <div className="mt-4 pt-3 border-t border-gray-100">
          <p className="text-sm text-gray-600">{outfit.description}</p>
        </div>
      </div>
    </div>;
}