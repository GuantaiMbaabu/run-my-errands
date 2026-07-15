export default function PlaceOrderPage() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-5xl font-bold text-emerald-700 mb-10">
          Place an Order
        </h1>

        <form className="space-y-5">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border rounded-xl p-4"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border rounded-xl p-4"
          />

          <input
            type="text"
            placeholder="County"
            className="w-full border rounded-xl p-4"
          />

          <input
            type="text"
            placeholder="Estate / Area"
            className="w-full border rounded-xl p-4"
          />

          <input
            type="text"
            placeholder="Plot / House Number"
            className="w-full border rounded-xl p-4"
          />

          <textarea
            rows={6}
            placeholder="Shopping List (one item per line)"
            className="w-full border rounded-xl p-4"
          />

          <button
            className="bg-yellow-400 px-8 py-4 rounded-xl font-bold"
          >
            Continue
          </button>

        </form>

      </div>
    </main>
  );
}