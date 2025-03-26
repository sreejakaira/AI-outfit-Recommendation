import React from 'react';
export function WardrobeItem({
  item
}) {
  return <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="h-40 bg-gray-100">
        <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
      </div>
      <div className="p-4">
        <h4 className="font-medium text-gray-800 mb-1">{item.name}</h4>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500 capitalize">{item.category}</span>
          {item.color && <span className="text-gray-500">{item.color}</span>}
        </div>
      </div>
    </div>;
}