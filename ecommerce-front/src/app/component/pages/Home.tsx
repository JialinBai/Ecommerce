import React from 'react'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <header className="p-6 border-b border-gray-200">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">JustCommerce</h1>
          <nav className="space-x-4">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/products" className="hover:underline">Products</Link>
            <Link href="/cart" className="hover:underline">Cart</Link>
          </nav>
        </div>
      </header>

      <section className="container mx-auto py-12 px-6">
        <h2 className="text-3xl font-semibold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((id) => (
            <div key={id} className="border border-gray-200 p-4 rounded-lg hover:shadow">
              <div className="bg-gray-100 h-48 mb-4" />
              <h3 className="text-lg font-medium mb-2">Product {id}</h3>
              <p className="text-gray-700 mb-4">Simple description for product {id}.</p>
              <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>
      
      <footer className="p-6 border-t border-gray-200 text-center">
        <p className="text-sm text-gray-600">&copy; 2025 JustCommerce. All rights reserved.</p>
      </footer>
    </main>
  )
}
