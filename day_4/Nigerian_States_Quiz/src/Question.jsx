function Question({ question, selected, setSelected }) {
  return (
    <div>
      <h2>{question.question}</h2>
      {question.options.map((option, index) => (
        <div key={index}>
          <input
            type="radio"
            value={option}
            checked={selected === option}
            onChange={(e) => setSelected(e.target.value)}
          />
          {option}
        </div>
      ))}
    </div>
  );
}

export default Question;
