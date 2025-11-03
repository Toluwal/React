function FahrenheitInput({ value, onTemperatureChange }) {
  const handleChange = (e) => {
    onTemperatureChange(Number(e.target.value));
  };

  return (
    <div>
      <label>
        Fahrenheit:
        <input
          type="number"
          value={value}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}

export default FahrenheitInput;
