'use client'

import { useState } from 'react'
import ProfileSide from "@/components/ProfileSide"
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { format } from 'date-fns'

export default function UserProfilePage() {
    const [form, setForm] = useState({
    cardnumber: '',
    name: '',
    cvc: '',
    cardtype: '',
  })
    const [expiryDate, setExpiryDate] = useState<Date | null>(null)
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
        <h1 className="text-xl text-black font-semibold mb-6">Payment</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm text-black font-medium mb-1">Card Number</label>
            <input
              name="cardnumber"
              value={form.cardnumber}
              onChange={handleChange}
              className="w-full border text-black px-3 py-2 rounded "
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
            <label className="block text-sm text-black font-medium mb-1">CVC</label>
            <input
              name="cvc"
              value={form.cvc}
              onChange={handleChange}
              className="w-full border text-black px-3 py-2 rounded"
            />
        </div>

        <div>
            <label className="block text-black text-sm font-medium mb-1">Card Type</label>
            <select
              name="cardtype"
              value={form.cardtype}
              onChange={handleChange}
              className="w-full border text-black px-3 py-2 rounded"
            >
              <option value="">MasterCard</option>
              <option value="male">Visa</option>
              <option value="female">UCB</option>
            </select>
        </div>

        <div className="relative z-10">
        <DatePicker
            selected={expiryDate}
            onChange={(date) => setExpiryDate(date)}
            dateFormat="MM/yyyy"
            showMonthYearPicker
            placeholderText="Select month and year"
            className="w-full border text-black px-3 py-2 rounded"
        />
        </div>
        </div>

        <button
        className="mt-6 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Confirm
        </button>
      </div>
    </div>
    </div>
    </>
  )
}
