'use client'

import { useState } from 'react'
import ProfileLayout from "@/components/profilelayout"

export default function UserPasswordSettingPage() {
    const [form, setForm] = useState({
    password: '',
    newpassword: '',
    retypenewpassword: '',
  })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

return (
    <>
        <ProfileLayout title="Password Setting">
        {/* Main Content */}
        <div className="flex-1 bg-white p-8 rounded shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm text-black font-medium mb-1">Old Password</label>
            <input
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full border text-black px-3 py-2 rounded "
            />
        </div>

        <div>
            <label className="block text-sm text-black font-medium mb-1">New Password</label>
            <input
              name="newpassword"
              value={form.newpassword}
              onChange={handleChange}
              className="w-full border text-black px-3 py-2 rounded"
            />
        </div>

        <div>
            <label className="block text-sm text-black font-medium mb-1">Confirm New Password</label>
            <input
              name="retypenewpassword"
              value={form.retypenewpassword}
              onChange={handleChange}
              className="w-full border text-black px-3 py-2 rounded"
            />
        </div>
        <button
        className="mt-6 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Confirm
        </button>
      </div>
      </div>
    </ProfileLayout>
    </>
    
  )
}
