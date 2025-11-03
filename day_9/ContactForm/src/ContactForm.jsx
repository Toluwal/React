import { useState } from "react";

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const isValid =
    form.name &&
    /\S+@\S+\.\S+/.test(form.email) &&
    form.phone &&
    form.subject &&
    form.message;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) setSubmitted(true);
  };

  return (
    <div>
      <h2>📧 Contact Us</h2>
      {submitted ? (
        <p>Message Sent!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} />
          <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
          <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} />
          <input name="subject" placeholder="Subject" value={form.subject} onChange={handleChange} />
          <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} />
          <button type="submit" disabled={!isValid}>Send Message</button>
        </form>
      )}
    </div>
  );
}

export default ContactForm;
