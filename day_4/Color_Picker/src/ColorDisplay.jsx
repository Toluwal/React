function ColorDisplay({ rgb, hex }) {
  const { r, g, b } = rgb;
  const boxStyle = {
    width: "150px",
    height: "150px",
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
    border: "1px solid #333",
    marginTop: "1rem",
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(hex);
    alert(`Copied: ${hex}`);
  };

  return (
    <div>
      <p>RGB: ({r}, {g}, {b})</p>
      <p>HEX: {hex}</p>
      <button onClick={handleCopy}>Copy Hex</button>
      <div style={boxStyle}></div>
    </div>
  );
}

export default ColorDisplay;
