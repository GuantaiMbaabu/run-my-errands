"use client";

import { useState } from "react";

export default function PlaceOrderPage() {
  const [items, setItems] = useState([
    {
      item: "",
      quantity: "",
      shop: "",
      price: "",
    },
  ]);

  const addItem = () => {
    setItems([
      ...items,
      {
        item: "",
        quantity: "",
        shop: "",
        price: "",
      },
    ]);
  };

  return (
    <main className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-8">

        <h1 className="text-4xl font-bold text-emerald-700 mb-2">
          Place Your Order
        </h1>

        <p className="text-gray-600 mb-10">
          Fill in your details and shopping list below.
        </p>

        <div className="grid md:grid-cols-2 gap-6">

          <input
            type="text"
            placeholder="Full Name"
            className="border rounded-xl p-4"
          />

          <input
            type="text"
            placeholder="Phone Number"
            className="border rounded-xl p-4"
          />

          <input
            type="email"
            placeholder="Email (Optional)"
            className="border rounded-xl p-4"
          />

          <input
            type="text"
            placeholder="Delivery Address"
            className="border rounded-xl p-4"
          />

          <input
            type="text"
            placeholder="House / Apartment"
            className="border rounded-xl p-4"
          />

          <input
            type="text"
            placeholder="Nearest Landmark"
            className="border rounded-xl p-4"
          />

        </div>

        <div className="mt-8">

          <label className="font-semibold text-gray-700">
            Delivery Priority
          </label>

          <select className="border rounded-xl p-4 w-full mt-2">
            <option>Urgent (Within 1 Hour)</option>
            <option>Same Day</option>
            <option>Schedule for Later</option>
          </select>

        </div>

        <h2 className="text-2xl font-bold text-emerald-700 mt-12 mb-6">
          Shopping List
        </h2>

        {items.map((item, index) => (

          <div
            key={index}
            className="grid md:grid-cols-4 gap-4 mb-4"
          >

            <input
              placeholder="Item"
              className="border rounded-xl p-4"
            />

            <input
              placeholder="Quantity"
              className="border rounded-xl p-4"
            />

            <input
              placeholder="Preferred Shop"
              className="border rounded-xl p-4"
            />

            <input
              placeholder="Estimated Price"
              className="border rounded-xl p-4"
            />

          </div>

        ))}

        <button
          onClick={addItem}
          className="bg-yellow-400 hover:bg-yellow-300 px-6 py-3 rounded-xl font-bold mt-4"
        >
          + Add Another Item
        </button>

        <div className="mt-10">

          <label className="font-semibold text-gray-700">
            Additional Instructions
          </label>
          <textarea
            rows={5}
            placeholder="Example: Buy ripe bananas. If unavailable, buy apples instead."
            className="border rounded-xl w-full mt-2 p-4"
          />

        </div>

        <button
          className="mt-10 w-full bg-emerald-700 hover:bg-emerald-800 text-white py-5 rounded-xl text-xl font-bold"
        >
          Submit My Order
        </button>

      </div>
    </main>
  );
}