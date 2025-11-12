import React from "react";

function PricingTable() {
  const plans = [
    {
      title: "Basic",
      price: "₦5,000/month",
      features: ["1 user", "Basic support", "Access to updates"],
      popular: false,
    },
    {
      title: "Pro",
      price: "₦15,000/month",
      features: ["5 users", "Priority support", "Premium updates"],
      popular: true,
    },
    {
      title: "Enterprise",
      price: "₦50,000/month",
      features: ["Unlimited users", "Dedicated support", "Custom solutions"],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h2 className="text-2xl font-bold text-green-700 text-center mb-8">
        Pricing Plans
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-2xl shadow-md p-6 text-center transition-transform ${
              plan.popular
                ? "bg-green-700 text-white scale-105"
                : "bg-white text-gray-800"
            }`}
          >
            <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
            <p className="text-xl font-semibold mb-4">{plan.price}</p>
            <ul className="space-y-2 mb-4">
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button
              className={`px-4 py-2 rounded-lg font-semibold ${
                plan.popular ? "bg-white text-green-700" : "bg-green-700 text-white"
              }`}
            >
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PricingTable;
