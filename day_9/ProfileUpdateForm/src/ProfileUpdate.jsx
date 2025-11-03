import { useState } from "react";

function ProfileUpdate() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    bio: "",
    location: "",
    gender: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const isValid =
    form.username.length >= 3 &&
    /\S+@\S+\.\S+/.test(form.email) &&
    form.bio &&
    form.location &&
    form.gender;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) setSubmitted(true);
  };

  return (
    <div>
      <h2>👤 Update Profile</h2>
      {submitted ? (
        <p>Profile Updated!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input name="username" placeholder="Username" value={form.username} onChange={handleChange} />
          <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
          <textarea name="bio" placeholder="Bio" value={form.bio} onChange={handleChange} />
          <select name="location" value={form.location} onChange={handleChange}>
            <option value="">Select City</option>
            <option value="Lagos">Lagos</option>
            <option value="Abuja">Abuja</option>
            <option value="Port Harcourt">Port Harcourt</option>
            <option value="Kano">Kano</option>
            <option value="Other">Other</option>
          </select>
          <div>
            <label>
              <input type="radio" name="gender" value="Male" onChange={handleChange} />
              Male
            </label>
            <label>
              <input type="radio" name="gender" value="Female" onChange={handleChange} />
              Female
            </label>
          </div>
          <button type="submit" disabled={!isValid}>Update Profile</button>
        </form>
      )}
    </div>
  );
}

export default ProfileUpdate;
