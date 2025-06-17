'use client'

import React, { useEffect, useState } from 'react'
import ProfileSide from "@/components/ProfileSide"

type Purchase = {
  id: string
  product: string
  price: string
  status: string
  date: string
}

export default function MyPurchasePage() {
  const [purchases, setPurchases] = useState<Purchase[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPurchases() {
      try {
        setLoading(true)
        await new Promise((res) => setTimeout(res, 1000))
        setPurchases([]) // ready to hook to real DB
      } catch (err) {
        console.error('Failed to fetch purchases:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchPurchases()
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto flex gap-8">
        {/* Sidebar */}
        <div className="w-64">
          <ProfileSide />
        </div>

        {/* Main Content Card */}
        <div className="flex-1 bg-white rounded shadow px-8 py-6">
          <h1 className="text-2xl text-black font-semibold mb-6">My Purchases</h1>

          {loading ? (
            <p className="text-gray-500">Loading purchases...</p>
          ) : purchases.length === 0 ? (
            <p className="text-gray-500">You have no purchases yet.</p>
          ) : (
            <div className="space-y-4">
              {purchases.map((item) => (
                <div key={item.id} className="border p-4 rounded-lg shadow-sm hover:bg-gray-50">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-lg font-medium">{item.product}</p>
                      <p className="text-sm text-gray-500">{item.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-blue-600 font-semibold">{item.price}</p>
                      <p className={`text-sm font-medium ${
                        item.status === 'Delivered'
                          ? 'text-green-600'
                          : 'text-yellow-600'
                      }`}>
                        {item.status}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
