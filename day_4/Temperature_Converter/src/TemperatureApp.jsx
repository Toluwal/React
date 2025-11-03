// import { useState } from "react";
// import CelsiusInput from "./CelsiusInput";
// import FahrenheitInput from "./FahrenheitInput";

// function TemperatureApp() {
//   const [temperature, setTemperature] = useState({
//     scale: "c",
//     value: ""
//   });

//   const handleCelsiusChange = (value) => {
//     setTemperature({ scale: "c", value });
//   };

//   const handleFahrenheitChange = (value) => {
//     setTemperature({ scale: "f", value });
//   };

//   const toFahrenheit = (celsius) => (celsius * 9) / 5 + 32;
//   const toCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;

//   const celsius =
//     temperature.scale === "f"
//       ? toCelsius(temperature.value)
//       : temperature.value;

//   const fahrenheit =
//     temperature.scale === "c"
//       ? toFahrenheit(temperature.value)
//       : temperature.value;

//   return (
//     <div>
//       <h1>Temperature Converter</h1>
//       <CelsiusInput value={celsius} onTemperatureChange={handleCelsiusChange} />
//       <FahrenheitInput
//         value={fahrenheit}
//         onTemperatureChange={handleFahrenheitChange}
//       />
//     </div>
//   );
// }

// export default TemperatureApp;
