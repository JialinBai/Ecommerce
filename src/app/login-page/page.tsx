'use client';
import { useRouter } from 'next/navigation';

export default function login() {
  const router = useRouter();
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded shadow">
        <h1 className="text-2xl mb-6 text-black text-center">Sign In</h1>
        {/* You can use your actual LoginForm component here */}
        <form>
          <input
            type="text"
            placeholder="Username"
            className="w-full text-black border p-2 mb-4 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full text-black border p-2 mb-6 rounded"
          />

          <div className="flex gap-4 mt-4">
            <button
              type="button"
              onClick={() => router.push('/')}
              className="flex-1 bg-gray-400 hover:bg-red-500 text-white py-2 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 bg-blue-600 text-white py-2 rounded"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
