import { useState } from "react";
import InputField from "../InputField/InputField";
import "./ContactForm.css";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Message sent successfully!", form);

    alert(
      `Message sent successfully! \n
      Name: ${form.name} \n
      Email: ${form.email} \n
      Password: ${form.password}`
    );

    setForm({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h1>Contact Us</h1>
      <InputField
        label="Name"
        placeHolder="Name"
        id="name"
        type="text"
        value={form.name}
        onChange={(e) =>
          setForm((f) => {
            return { ...f, name: e.target.value };
          })
        }
      />
      <InputField
        label="Email"
        placeHolder="Email"
        id="email"
        type="email"
        value={form.email}
        onChange={(e) =>
          setForm((f) => {
            return { ...f, email: e.target.value };
          })
        }
      />
      <InputField
        label="Password"
        placeHolder="Password"
        id="placeholder"
        type="password"
        value={form.password}
        onChange={(e) =>
          setForm((f) => {
            return { ...f, password: e.target.value };
          })
        }
      />
      <button className="submit-button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
