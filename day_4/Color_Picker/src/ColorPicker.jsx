import { useState } from "react";
import RGBSlider from "./RGBSlider";
import ColorDisplay from "./ColorDisplay";

function ColorPicker() {
  const [color, setColor] = useState({ r: 255, g: 100, b: 50 });

  const handleColorChange = (channel, value) => {
    setColor((prev) => ({ ...prev, [channel]: Number(value) }));
  };

  const toHex = (num) => num.toString(16).padStart(2, "0").toUpperCase();
  const hexColor = `#${toHex(color.r)}${toHex(color.g)}${toHex(color.b)}`;

  return (
    <div>
      <h1> Color Picker</h1>
      <RGBSlider
        label="Red"
        value={color.r}
        onValueChange={(value) => handleColorChange("r", value)}
      />
      <RGBSlider
        label="Green"
        value={color.g}
        onValueChange={(value) => handleColorChange("g", value)}
      />
      <RGBSlider
        label="Blue"
        value={color.b}
        onValueChange={(value) => handleColorChange("b", value)}
      />

      <ColorDisplay rgb={color} hex={hexColor} />
    </div>
  );
}

export default ColorPicker;
