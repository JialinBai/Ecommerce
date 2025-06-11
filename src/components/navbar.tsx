'use client';
import Link from 'next/link';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import LoginPage from '@/app/login-page/page';

export default function Navbar() {
  return (
    <div className="w-full shadow bg-blue-600 text-white">
      {/* Top Utility Bar */}
      <div className="text-sm bg-blue-700 px-4 py-2 flex justify-end space-x-4">
        <Link href="#">Seller Centre</Link>
        <Link href="#">Help</Link>
        <Link href="#">Language</Link>
      </div>

      {/* Main Nav */}
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 py-3">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          JustCommerce
        </Link>

        {/* Search */}
        <div className="flex-1 mx-8 max-w-md">
            <form className="flex bg-white rounded overflow-hidden border">
                <input
                type="text"
                placeholder="Search products..."
                className="flex-grow px-4 py-2 text-black focus:outline-none"
                />
                <button
                type="submit"
                className="bg-blue-600 text-white px-4 hover:bg-blue-700 transition"
                >
                Search
                </button>
            </form>
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-6">
          <Link href="/cart" className="flex items-center space-x-1">
            <FaShoppingCart />
            <span>Cart</span>
          </Link>
          <Link href="/login-page" className="flex items-center space-x-1">
            <FaUser />
            <span>Login</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
