export default function login() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded shadow">
        <h1 className="text-2xl mb-6 text-center">Sign In</h1>
        {/* You can use your actual LoginForm component here */}
        <form>
          <input
            type="text"
            placeholder="Username"
            className="w-full border p-2 mb-4 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border p-2 mb-6 rounded"
          />
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
            Login
          </button>
        </form>
      </div>
    </main>
  );
}
