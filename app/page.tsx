"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaShoppingBasket,
  FaMapMarkerAlt,
  FaTruck,
  FaBars,
} from "react-icons/fa";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main className="min-h-screen bg-white">

      {/* Navigation */}
      <nav className="bg-emerald-700 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

          <Link href="/">
  <Image
  src="/logo.png"
  alt="Run My Errands"
  width={150}
  height={50}
  priority
/>
</Link>

          {/* Desktop Menu */}
<div className="hidden md:flex gap-8 text-white font-medium items-center">
  <Link href="/">Home</Link>
  <Link href="/about">About</Link>
  <Link href="/place-order">Place Order</Link>
  <Link href="/track-order">Track Order</Link>
  <Link href="/contact">Contact</Link>

  <Link
    href="/place-order"
    className="bg-yellow-400 text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellow-300"
  >
    Place Order
  </Link>
</div>

{/* Mobile Menu Button */}
<button
  onClick={() => setMenuOpen(!menuOpen)}
  className="md:hidden text-white text-3xl"
>
  <FaBars />
</button>
        </div>
      </nav>
      {menuOpen && (
  <div className="md:hidden bg-emerald-700 text-white px-6 py-4 space-y-4">
    <Link href="/" className="block" onClick={() => setMenuOpen(false)}>
      Home
    </Link>

    <Link href="/about" className="block" onClick={() => setMenuOpen(false)}>
      About
    </Link>

    <Link href="/place-order" className="block" onClick={() => setMenuOpen(false)}>
      Place Order
    </Link>

    <Link href="/track-order" className="block" onClick={() => setMenuOpen(false)}>
      Track Order
    </Link>

    <Link href="/contact" className="block" onClick={() => setMenuOpen(false)}>
      Contact
    </Link>
  </div>
)}

      {/* Hero */}
      <section className="bg-gradient-to-r from-emerald-700 to-emerald-500 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">

          <div>

            <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
              We Run Your <span className="text-yellow-300">Errands</span>
            </h2>

            <p className="mt-6 text-lg leading-8">
              Groceries, pharmacy pickups, market shopping,
              parcel collection and everyday errands delivered
              straight to your doorstep.
            </p>

            <div className="mt-10 flex gap-4">

              <Link
                href="/place-order"
                className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold hover:bg-yellow-300"
              >
                Place an Order
              </Link>

              <Link
                href="/track-order"
                className="border border-white px-8 py-4 rounded-xl hover:bg-white hover:text-emerald-700"
              >
                Track Order
              </Link>

            </div>

          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 text-gray-800">

            <h3 className="text-2xl font-bold mb-8 text-emerald-700">
              Why Choose Us?
            </h3>

            <div className="space-y-6">

              <div className="flex gap-4">

                <FaShoppingBasket className="text-emerald-600 text-3xl" />

                <div>
                  <h4 className="font-bold text-lg">
                    Personal Shopping
                  </h4>

                  <p>
                    Buy exactly what you need from your preferred stores.
                  </p>
                </div>

              </div>

              <div className="flex gap-4">

                <FaMapMarkerAlt className="text-emerald-600 text-3xl" />

                <div>
                  <h4 className="font-bold text-lg">
                    Doorstep Delivery
                  </h4>

                  <p>
                    Fast and reliable delivery to your home or office.
                  </p>
                </div>

              </div>

              <div className="flex gap-4">

                <FaTruck className="text-emerald-600 text-3xl" />

                <div>
                  <h4 className="font-bold text-lg">
                    Reliable Service
                  </h4>

                  <p>
                    We save you time by handling your errands professionally.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}