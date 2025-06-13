'use client'
import { FaUser, FaLock, FaBell, FaClipboardList, FaTicketAlt, FaWallet } from 'react-icons/fa'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function ProfileSide() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="w-64 h-full bg-white p-4 space-y-3 text-sm">
      <p className="font-bold text-black text-lg">jialinbai641</p>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-blue-600 font-medium"
      >
        <FaUser />
        My Account
      </button>

      {/* Only show dropdown after client mount to avoid hydration mismatch */}
      {mounted && isOpen && (
        <div className="ml-5 space-y-1">
          <Link href="/userprofile" className="block text-black">Profile</Link>
          <Link href="#" className="block text-black">Banks & Cards</Link>
          <Link href="#" className="block text-black">Addresses</Link>
          <Link href="#" className="block text-black">Change Password</Link>
          <Link href="#" className="block text-black">Privacy Settings</Link>
          <Link href="#" className="block text-black">Notification Settings</Link>
        </div>
      )}

      <div className="space-y-2">
        <Link href="#" className="flex items-center text-blue-600 gap-2">
          <FaClipboardList /> My Purchase
        </Link>
        <Link href="#" className="flex items-center text-blue-600 gap-2">
          <FaBell /> Notifications
        </Link>
        <Link href="#" className="flex items-center text-blue-600 gap-2">
          <FaTicketAlt /> My Vouchers
        </Link>
        <Link href="#" className="flex items-center text-blue-600 gap-2">
          <FaWallet /> My Shopee Coins
        </Link>
      </div>
    </div>
  )
}
