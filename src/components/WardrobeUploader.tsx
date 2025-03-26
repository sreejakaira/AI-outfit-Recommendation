import React, { useState } from 'react';
import { UploadIcon, XIcon } from 'lucide-react';
export function WardrobeUploader({
  addToWardrobe
}) {
  const [itemName, setItemName] = useState('');
  const [category, setCategory] = useState('top');
  const [color, setColor] = useState('');
  const [previewImage, setPreviewImage] = useState('');
  const handleImageChange = e => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = e => {
        setPreviewImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (itemName && category && previewImage) {
      addToWardrobe({
        id: Date.now(),
        name: itemName,
        category,
        color,
        image: previewImage
      });
      setItemName('');
      setCategory('top');
      setColor('');
      setPreviewImage('');
    }
  };
  return <div className="bg-white dark:bg-gray-800 rounded-xl shadow-soft transition-all duration-200 ease-in-out transform hover:shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
        Add New Item
      </h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Item Name
          </label>
          <input type="text" value={itemName} onChange={e => setItemName(e.target.value)} className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                     bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                     focus:ring-2 focus:ring-indigo-500 dark:focus:ring-purple-400
                     transition-colors duration-200" placeholder="E.g., Blue Oxford Shirt" required />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Category
            </label>
            <select value={category} onChange={e => setCategory(e.target.value)} className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                       bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                       focus:ring-2 focus:ring-indigo-500 dark:focus:ring-purple-400
                       transition-colors duration-200" required>
              <option value="top">Top</option>
              <option value="bottom">Bottom</option>
              <option value="outerwear">Outerwear</option>
              <option value="dress">Dress</option>
              <option value="shoes">Shoes</option>
              <option value="accessory">Accessory</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Color
            </label>
            <input type="text" value={color} onChange={e => setColor(e.target.value)} className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                       bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                       focus:ring-2 focus:ring-indigo-500 dark:focus:ring-purple-400
                       transition-colors duration-200" placeholder="E.g., Navy Blue" />
          </div>
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Image
          </label>
          {previewImage ? <div className="relative rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700 transition-all duration-200">
              <img src={previewImage} alt="Preview" className="w-full h-48 object-contain" />
              <button type="button" onClick={() => setPreviewImage('')} className="absolute top-2 right-2 p-1.5 rounded-full bg-white dark:bg-gray-800 
                         shadow-sm hover:shadow-md transition-all duration-200
                         text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                <XIcon className="h-4 w-4" />
              </button>
            </div> : <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6
                         transition-all duration-200 hover:border-indigo-500 dark:hover:border-purple-400">
              <div className="flex flex-col items-center">
                <UploadIcon className="h-10 w-10 text-gray-400 dark:text-gray-500 mb-3" />
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-4">
                  Click to upload or drag and drop
                </p>
                <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" id="image-upload" />
                <label htmlFor="image-upload" className="px-4 py-2 rounded-lg bg-indigo-600 dark:bg-purple-600 text-white 
                           hover:bg-indigo-700 dark:hover:bg-purple-700 transition-colors duration-200
                           cursor-pointer font-medium text-sm">
                  Select Image
                </label>
              </div>
            </div>}
        </div>
        <div className="flex justify-end">
          <button type="submit" disabled={!itemName || !category || !previewImage} className="px-6 py-2 rounded-lg bg-indigo-600 dark:bg-purple-600 text-white font-medium
                     hover:bg-indigo-700 dark:hover:bg-purple-700 
                     disabled:opacity-50 disabled:cursor-not-allowed
                     transition-all duration-200 transform hover:scale-105
                     focus:outline-none focus:ring-2 focus:ring-offset-2 
                     focus:ring-indigo-500 dark:focus:ring-purple-400">
            Add to Wardrobe
          </button>
        </div>
      </form>
    </div>;
}