import React from 'react';
import { WardrobeUploader } from '../components/WardrobeUploader';
import { WardrobeItem } from '../components/WardrobeItem';
export function WardrobePage({
  wardrobe,
  addToWardrobe
}) {
  return <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Wardrobe</h2>
      <WardrobeUploader addToWardrobe={addToWardrobe} />
      <div className="mt-10">
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          Your Items ({wardrobe.length})
        </h3>
        {wardrobe.length === 0 ? <div className="bg-white rounded-xl shadow-md p-10 text-center">
            <p className="text-gray-500 mb-4">Your wardrobe is empty</p>
            <p className="text-gray-500 text-sm">
              Add items above to get started
            </p>
          </div> : <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {wardrobe.map(item => <WardrobeItem key={item.id} item={item} />)}
          </div>}
      </div>
    </div>;
}