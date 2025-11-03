function AnswerFeedback({ isCorrect, correctAnswer, onNext }) {
  return (
    <div>
      <p>{isCorrect ? "✅ Correct!" : `❌ Wrong! Correct: ${correctAnswer}`}</p>
      <button onClick={onNext}>Next Question</button>
    </div>
  );
}

export default AnswerFeedback;
