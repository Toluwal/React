import React from "react";

function ColorPaletteShowcase() {
  const colors = [
    { name: "Nigerian Green", hex: "#008751" },
    { name: "White", hex: "#FFFFFF" },
    { name: "Naija Green 50", hex: "#E6F4EC" },
    { name: "Naija Green 100", hex: "#CCEAD9" },
    { name: "Naija Green 200", hex: "#99D4B3" },
    { name: "Naija Green 300", hex: "#66BF8C" },
    { name: "Naija Green 400", hex: "#33A966" },
    { name: "Naija Green 500", hex: "#008751" },
    { name: "Naija Green 600", hex: "#007A49" },
    { name: "Naija Green 700", hex: "#00663E" },
    { name: "Naija Green 800", hex: "#005233" },
    { name: "Naija Green 900", hex: "#003E28" },
    { name: "Naija Green 950", hex: "#00291C" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h2 className="text-2xl font-bold mb-6 text-green-700 text-center">
        Nigerian Color Palette Showcase
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {colors.map((color, index) => (
          <div key={index} className="text-center">
            <div
              className="w-24 h-24 mx-auto rounded-lg shadow-md"
              style={{ backgroundColor: color.hex }}
            ></div>
            <p
              className={`mt-2 text-sm font-medium ${
                color.name.toLowerCase().includes("white")
                  ? "text-black"
                  : "text-gray-800"
              }`}
            >
              {color.name}
            </p>
            <p
              className={`text-xs ${
                color.name.toLowerCase().includes("white")
                  ? "text-gray-600"
                  : "text-gray-500"
              }`}
            >
              {color.hex}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ColorPaletteShowcase;
