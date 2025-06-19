'use client'

import React, { useEffect, useState } from 'react'
import ProfileLayout from "@/components/profilelayout"

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
        setPurchases([])
      } catch (err) {
        console.error('Failed to fetch purchases:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchPurchases()
  }, [])

  return (

        <ProfileLayout title="Purchase History">
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

        </ProfileLayout>
  )
}
