import { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const emailError = !email ? "Email is required" : !/\S+@\S+\.\S+/.test(email) ? "Invalid email" : "";
  const passwordError = !password ? "Password is required" : password.length < 8 ? "Password must be at least 8 characters" : "";

  const isFormValid = !emailError && !passwordError;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) setSubmitted(true);
  };

  return (
    <div>
      <h2>Login</h2>
      {submitted ? (
        <p>Login Successful!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <p>{emailError}</p>}
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && <p>{passwordError}</p>}
          </div>

          <button type="submit" disabled={!isFormValid}>
            Login
          </button>
        </form>
      )}
    </div>
  );
}

export default LoginForm;
