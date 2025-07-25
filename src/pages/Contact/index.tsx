import React, { useState } from "react";
import styles from "./index.module.css";

const ContactForm: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [showPopUp, setshowPopUp] = useState(false);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", form);
    setshowPopUp(true);
    setForm({ name: "", email: "", message: "" });
    // add email to the contact submission
  };

  return (
    <div className={styles.contactContainer}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.title}>Contact Us</h2>

        <label>
          Full Name
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
          />
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
          />
        </label>

        <label>
          Message
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            placeholder="Write your message here..."
            required
          />
        </label>
        <button type="submit">Submit</button>
        {showPopUp && (
          <div className={styles.popup}>
            <button
              className={styles.close}
              onClick={() => setshowPopUp(false)}
              type="button"
            >
              x
            </button>
            <p>Thank you! We'll be in touch soon.</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
