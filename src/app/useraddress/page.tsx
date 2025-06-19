'use client'

import { useState } from 'react'
import ProfileLayout from "@/components/profilelayout"

export default function UserAddressPage() {
  const [form, setForm] = useState({
    Address: '',
    Detail: '',
    City: '',
    Country: '',
    Province: '',
    Postcode: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <ProfileLayout title="Address">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm text-black font-medium mb-1">Address</label>
          <input
            name="Address"
            value={form.Address}
            onChange={handleChange}
            className="w-full border text-black px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block text-sm text-black font-medium mb-1">Detail</label>
          <input
            name="Detail"
            value={form.Detail}
            onChange={handleChange}
            className="w-full border text-black px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block text-sm text-black font-medium mb-1">City</label>
          <input
            name="City"
            value={form.City}
            onChange={handleChange}
            className="w-full border text-black px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block text-sm text-black font-medium mb-1">Country</label>
          <input
            name="Country"
            value={form.Country}
            onChange={handleChange}
            className="w-full border text-black px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block text-black text-sm font-medium mb-1">Province</label>
          <input
            name="Province"
            value={form.Province}
            onChange={handleChange}
            className="w-full border text-black px-3 py-2 rounded"
          >
          </input>
        </div>

        <div>
          <label className="block text-black text-sm font-medium mb-1">Post Code</label>
          <input
            name="Postcode"
            value={form.Postcode}
            onChange={handleChange}
            className="w-full text-black border px-3 py-2 rounded"
          />
        </div>
      </div>

      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Confirm
      </button>
    </ProfileLayout>
  )
}