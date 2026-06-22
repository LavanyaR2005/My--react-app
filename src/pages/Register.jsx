import { useState } from "react";
import { registerUser } from "../utils/auth";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    college: "",
    department: "",
    graduationYear: "",
    company: "",
    role: "",
    location: "",
    skills: "",
    bio: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (
      !form.name ||
      !form.email ||
      !form.password ||
      !form.college
    ) {
      alert("Please fill all required fields");
      return;
    }

    const res = registerUser(form);

    alert(res.message);

    if (res.success) {
      navigate("/login");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box register-box">

        <h1>Join Alumni Vibes</h1>
        <p>Create Your Alumni Profile</p>

        <input
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
        />

        <input
          name="email"
          type="email"
          placeholder="Email Address"
          onChange={handleChange}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <input
          name="college"
          placeholder="College Name"
          onChange={handleChange}
        />

        <input
          name="department"
          placeholder="Department"
          onChange={handleChange}
        />

        <input
          name="graduationYear"
          placeholder="Graduation Year"
          onChange={handleChange}
        />

        <input
          name="company"
          placeholder="Current Company"
          onChange={handleChange}
        />

        <input
          name="role"
          placeholder="Current Role"
          onChange={handleChange}
        />

        <input
          name="location"
          placeholder="Location"
          onChange={handleChange}
        />

        <input
          name="skills"
          placeholder="Skills (React, Java, Node.js)"
          onChange={handleChange}
        />

        <textarea
          name="bio"
          placeholder="Tell us about yourself..."
          rows="4"
          onChange={handleChange}
        ></textarea>

        <button onClick={handleSubmit}>
          Create Account
        </button>

      </div>
    </div>
  );
}

export default Register;