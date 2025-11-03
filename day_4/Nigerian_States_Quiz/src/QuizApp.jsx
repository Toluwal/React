import { useState } from "react";
import Question from "./Question";
import ScoreBoard from "./ScoreBoard";
import AnswerFeedback from "./AnswerFeedback";

const questions = [
  {
    question: "What is the capital of Lagos State?",
    options: ["Lagos Island", "Ikeja", "Victoria Island", "Lekki"],
    answer: "Ikeja",
  },
  {
    question: "What is the capital of Ogun State?",
    options: ["Abeokuta", "Ijebu-Ode", "Sango-Otta", "Shagamu"],
    answer: "Abeokuta",
  },
  {
    question: "What is the capital of Oyo State?",
    options: ["Ibadan", "Ogbomosho", "Iseyin", "Oyo"],
    answer: "Ibadan",
  },
  {
    question: "What is the capital of Kano State?",
    options: ["Kano", "Wudil", "Gaya", "Rano"],
    answer: "Kano",
  },
  {
    question: "What is the capital of Rivers State?",
    options: ["Port Harcourt", "Bonny", "Omoku", "Bori"],
    answer: "Port Harcourt",
  },
];

function QuizApp() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState("");
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleAnswer = () => {
    if (selected === questions[current].answer) {
      setScore(score + 1);
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
    setShowFeedback(true);
  };

  const nextQuestion = () => {
    setShowFeedback(false);
    setSelected("");
    setCurrent(current + 1);
  };

  if (current >= questions.length) {
    return <h1>Quiz Over! Final Score: {score}/{questions.length}</h1>;
  }

  return (
    <div>
      <h1>Nigerian States Quiz</h1>
      <ScoreBoard score={score} total={questions.length} />
      <Question
        question={questions[current]}
        selected={selected}
        setSelected={setSelected}
      />
      <button onClick={handleAnswer} disabled={!selected}>
        Submit Answer
      </button>
      {showFeedback && (
        <AnswerFeedback
          isCorrect={isCorrect}
          correctAnswer={questions[current].answer}
          onNext={nextQuestion}
        />
      )}
    </div>
  );
}

export default QuizApp;
