export default function TrackOrderPage() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="max-w-xl mx-auto">
        <h1 className="text-5xl font-bold text-emerald-700 mb-8">
          Track Your Order
        </h1>

        <input
          type="text"
          placeholder="Enter Order Number (e.g. RME-1001)"
          className="w-full border rounded-xl p-4 mb-6"
        />

        <button className="bg-emerald-700 text-white px-8 py-4 rounded-xl">
          Track Order
        </button>
      </div>
    </main>
  );
}