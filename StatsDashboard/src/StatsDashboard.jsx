import React from "react";
import { ShoppingCart, Users, DollarSign, BarChart3 } from "lucide-react";

function StatsDashboard() {
  const stats = [
    {
      title: "Sales",
      value: "₦250,000",
      change: "+12%",
      color: "bg-green-100",
      icon: <DollarSign className="text-green-600" size={28} />,
    },
    {
      title: "Orders",
      value: "1,200",
      change: "+8%",
      color: "bg-blue-100",
      icon: <ShoppingCart className="text-blue-600" size={28} />,
    },
    {
      title: "Customers",
      value: "950",
      change: "+5%",
      color: "bg-yellow-100",
      icon: <Users className="text-yellow-600" size={28} />,
    },
    {
      title: "Revenue",
      value: "₦1.5M",
      change: "+15%",
      color: "bg-purple-100",
      icon: <BarChart3 className="text-purple-600" size={28} />,
    },
  ];

  return (
    <div>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
          {stats.map((item, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl shadow-md ${item.color} transition-transform transform hover:-translate-y-2`}
            >
              <div className="flex items-center justify-between mb-4">
                {item.icon}
                <span className="text-sm text-gray-600">{item.change}</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">{item.value}</h2>
              <p className="text-gray-600 mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StatsDashboard;
