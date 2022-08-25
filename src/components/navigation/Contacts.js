import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import emailicon from "../../assets/icons/mail-box.png";
import "./Contacts.css";

const Contacts = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setSuccess] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setFirstName("");
    setEmail("");
    setMessage("");

    emailjs
      .sendForm(
        "service_leyhtr5",
        "template_tha23ws",
        form.current,
        "VGt8PiRU6p8KqQoeK"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess((current) => !current);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="form-container">
      <div className="connect">
        <h1>Let's Connect!</h1>
        <img src={emailicon} alt="email" />
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          onChange={(event) => setFirstName(event.target.value)}
          value={firstName}
          required
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <textarea
          name="message"
          placeholder="What can I do for you?"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          required
        />
        <input type="submit" value="SEND MESSAGE" />
      </form>
      <div className="message">
        <div className={isSuccess ? "success" : "hide"}>
          Your Message Successfully Sent!
        </div>
      </div>
    </div>
  );
};

export default Contacts;
