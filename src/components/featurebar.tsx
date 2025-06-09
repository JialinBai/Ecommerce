'use client';
import React from 'react';

const categories = [
  'ทั้งหมด',
  'อุปกรณ์อิเล็กทรอนิกส์',
  'เครื่องใช้ไฟฟ้า',
  'สินค้าแฟชั่น',
  'ของเล่น & เกม',
  'ของใช้ในบ้าน',
  'สุขภาพ & ความงาม',
];

export default function FeatureSidebar() {
  return (
    <nav className="text-sm font-medium space-y-2">
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
