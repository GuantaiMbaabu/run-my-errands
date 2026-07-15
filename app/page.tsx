import { FaShoppingBasket, FaMapMarkerAlt, FaTruck } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-emerald-700 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <h1 className="text-3xl font-bold text-white">
            Run <span className="text-yellow-400">My Errands</span>
          </h1>

          <div className="hidden md:flex gap-8 text-white font-medium">
            <a href="#">Home</a>
            <a href="#">Services</a>
            <a href="#">How It Works</a>
            <a href="#">Track Order</a>
            <a href="#">Contact</a>
          </div>

          <button className="bg-yellow-400 text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellow-300">
            Place Order
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-r from-emerald-700 to-emerald-500 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
              We Run Your <span className="text-yellow-300">Errands</span>
            </h2>

            <p className="mt-6 text-lg">
              Groceries, pharmacy pickups, market shopping,
              parcel collection and everyday errands delivered
              straight to your doorstep.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold hover:bg-yellow-300">
                Place an Order
              </button>

              <button className="border border-white px-8 py-4 rounded-xl hover:bg-white hover:text-emerald-700">
                Track Order
              </button>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 text-gray-800">
            <h3 className="text-2xl font-bold mb-6 text-emerald-700">
              Why Choose Us?
            </h3>

            <div className="space-y-5">

              <div className="flex gap-4">
                <FaShoppingBasket className="text-emerald-600 text-3xl" />
                <div>
                  <h4 className="font-bold">Personal Shopping</h4>
                  <p>Buy exactly what you need from your preferred stores.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <FaMapMarkerAlt className="text-emerald-600 text-3xl" />
                <div>
                  <h4 className="font-bold">Doorstep Delivery</h4>
                  <p>Fast and reliable delivery to your location.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <FaTruck className="text-emerald-600 text-3xl" />
                <div>
                  <h4 className="font-bold">Reliable Service</h4>
                  <p>Your time matters. We handle the errands for you.</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
    </main>
  );
}