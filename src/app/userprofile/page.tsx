'use client'

import { useState } from 'react'
import ProfileSide from "@/components/ProfileSide"

export default function UserProfilePage() {
    const [form, setForm] = useState({
    username: '',
    name: '',
    email: '',
    phone: '',
    gender: '',
    dob: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <>
    <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-7xl mx-auto flex gap-8">

        {/* Side bar */}
        <div className='w-64'>
            <ProfileSide/>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-white p-8 rounded shadow-sm">
        <h1 className="text-xl text-black font-semibold mb-6">Profile</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm text-black font-medium mb-1">Username</label>
            <input
              name="username"
              value={form.username}
              disabled
              className="w-full border text-black px-3 py-2 rounded bg-gray-100 text-gray-500"
            />
          </div>

          <div>
            <label className="block text-sm text-black font-medium mb-1">Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border text-black px-3 py-2 rounded"
            />
          </div>

          <div>
            <label className="block text-sm text-black font-medium mb-1">Email</label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border text-black px-3 py-2 rounded"
            />
          </div>

          <div>
            <label className="block text-sm text-black font-medium mb-1">Phon Number</label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full border text-black text-blacktext-black px-3 py-2 rounded"
            />
          </div>

          <div>
            <label className="block text-black text-sm font-medium mb-1">Gender</label>
            <select
              name="gender"
              value={form.gender}
              onChange={handleChange}
              className="w-full border text-black px-3 py-2 rounded"
            >
              <option value="">Select</option>
              <option value="male">Man</option>
              <option value="female">Women</option>
              <option value="other">Others</option>
            </select>
          </div>

          <div>
            <label className="block text-black text-sm font-medium mb-1">Date of birth</label>
            <input
              type="date"
              name="dob"
              value={form.dob}
              onChange={handleChange}
              className="w-full text-black border px-3 py-2 rounded"
            />
          </div>
        </div>

        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Confirm
        </button>
      </div>
    </div>
    </div>
    </>
  )
}
