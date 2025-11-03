function CelsiusInput({ value, onTemperatureChange }) {
  const handleChange = (e) => {
    onTemperatureChange(Number(e.target.value));
  };

  return (
    <div>
      <label>
        Celsius:
        <input
          type="number"
          value={value}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}

export default CelsiusInput;
