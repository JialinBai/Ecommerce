'use client';
import React from 'react';

const categories = [
  'All',
  'Electronic Devices',
  'Electronic',
  'Fashion',
  'Toys & Games',
  'Furniture',
  'Health % Beauty',
];

export default function FeatureSidebar() {
  return (
    <nav className="text-sm text-black font-medium space-y-2">
      {categories.map((category, index) => (
        <div
          key={index}
          className="pl-2 py-2 cursor-pointer hover:text-blue-600 border-l-2 border-transparent hover:border-blue-600 transition"
        >
          {category}
        </div>
      ))}
    </nav>
  );
}
