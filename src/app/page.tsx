import React from 'react';
import FeatureSidebar from '../components/featurebar';
import {
  FaBolt,
  FaShoppingCart,
  FaMoneyBillWave,
  FaShippingFast,
  FaTags,
} from 'react-icons/fa';
import { BsTruck } from 'react-icons/bs';
const products = [
  { id: 1, name: 'Cream', description: 'Soothing skin cream.', image: '/cream.jpg' },
  { id: 2, name: 'Juice', description: 'Fresh orange juice.', image: '/juice.jpg' },
  { id: 3, name: 'Shoes', description: 'Stylish running shoes.', image: '/shoes.jpg' },
];

const categories = [
  { name: 'Electronic', icon: <FaBolt size={24} /> },
  { name: 'Supermarket', icon: <FaShoppingCart size={24} /> },
  { name: 'Code', icon: <FaMoneyBillWave size={24} /> },
  { name: 'Brand', icon: <FaTags size={24} /> },
  { name: 'Free Shipping', icon: <BsTruck size={24} /> },
];

export default function Home() {
  return (
    <>

      {/* Background Video */}
      <div className="relative min-h-screen overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/background.mp4" type="video/mp4" />
        </video>

      <div className="flex min-h-screen">
        <aside className="w-56 bg-white/90 border-r px-4 py-6 z-10">
          <FeatureSidebar />
        </aside>


        {/* Page Content */}
        <main className="relative z-10 text-black backdrop-blur-sm backdrop-brightness-90 flex flex-col w-full">

          <div className="flex-grow">
            {/* Category Icons */}
            <section className="bg-white/80 py-6 border-b">
              <div className="max-w-7xl mx-auto grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 text-center text-sm">
                {categories.map((item, index) => (
                  <div key={index} className="flex flex-col items-center space-y-1 hover:text-blue-600 transition">
                    <div className="text-blue-600">{item.icon}</div>
                    <div>{item.name}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Featured Products */}
            <section className="container mx-auto py-12 px-6">
              <h2 className="text-3xl font-semibold mb-6">On Sales Product</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <div key={product.id} className="bg-white/90 border border-gray-200 p-4 rounded-lg hover:shadow">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover mb-4 rounded"
                    />
                    <h3 className="text-lg font-medium mb-2">{product.name}</h3>
                    <p className="text-gray-700 mb-4">{product.description}</p>
                    <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
    </>
  );
}
