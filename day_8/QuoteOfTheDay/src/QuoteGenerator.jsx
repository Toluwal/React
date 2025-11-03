import { useState, useEffect } from "react";

function QuoteGenerator() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);

  const fetchQuote = () => {
    setLoading(true);
    fetch("https://zenquotes.io/api/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data[0]);
        setLoading(false);
        setCount((c) => c + 1);
      })
      .catch(() => setLoading(false));
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div>
      <h2>Daily Inspiration</h2>
      {loading && <p>Loading...</p>}
      {!loading && quote && (
        <div>
          <p>"{quote.q}"</p>
          <p>- {quote.a}</p>
          <p>Length: {quote.q.length} characters</p>
          <p>Quotes viewed: {count}</p>
        </div>
      )}
      <button onClick={fetchQuote}>New Quote</button>
    </div>
  );
}

export default QuoteGenerator;
