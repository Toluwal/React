function RGBSlider({ label, value, onValueChange }) {
  return (
    <div style={{ margin: "1rem 0" }}>
      <label>
        {label}: [{value}]
        <input
          type="range"
          min="0"
          max="255"
          value={value}
          onChange={(e) => onValueChange(e.target.value)}
          style={{ width: "300px", marginLeft: "10px" }}
        />
      </label>
    </div>
  );
}

export default RGBSlider;
