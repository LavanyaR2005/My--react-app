import { useState } from "react";
import { useNavigate } from "react-router-dom";

function EditProfile() {

  const navigate = useNavigate();

  const currentUser =
    JSON.parse(localStorage.getItem("currentUser"));

  const [form, setForm] = useState(currentUser || {});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleImageUpload = (e) => {

    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setForm({
        ...form,
        profileImage: reader.result
      });
    };

    reader.readAsDataURL(file);
  };

  const handleSave = () => {

    let users =
      JSON.parse(localStorage.getItem("users")) || [];

    users = users.map((user) =>
      user.email === currentUser.email
        ? form
        : user
    );

    localStorage.setItem(
      "users",
      JSON.stringify(users)
    );

    localStorage.setItem(
      "currentUser",
      JSON.stringify(form)
    );

    alert("Profile Updated Successfully");

    navigate("/profile");
  };

  return (
    <div className="auth-container">

      <div className="auth-box register-box">

        <h1>Edit Profile</h1>

        <div
          style={{
            textAlign: "center",
            marginBottom: "20px"
          }}
        >

          <img
            src={
              form.profileImage ||
              "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            }
            alt="profile"
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "4px solid #0a66c2"
            }}
          />

          <br />
          <br />

          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
          />

        </div>

        <input
          name="name"
          value={form.name || ""}
          onChange={handleChange}
          placeholder="Full Name"
        />

        <input
          name="company"
          value={form.company || ""}
          onChange={handleChange}
          placeholder="Company"
        />

        <input
          name="role"
          value={form.role || ""}
          onChange={handleChange}
          placeholder="Role"
        />

        <input
          name="college"
          value={form.college || ""}
          onChange={handleChange}
          placeholder="College"
        />

        <input
          name="department"
          value={form.department || ""}
          onChange={handleChange}
          placeholder="Department"
        />

        <input
          name="graduationYear"
          value={form.graduationYear || ""}
          onChange={handleChange}
          placeholder="Graduation Year"
        />

        <input
          name="location"
          value={form.location || ""}
          onChange={handleChange}
          placeholder="Location"
        />

        <input
          name="skills"
          value={form.skills || ""}
          onChange={handleChange}
          placeholder="Skills (React, Java, Node.js)"
        />

        <textarea
          name="bio"
          rows="4"
          value={form.bio || ""}
          onChange={handleChange}
          placeholder="Tell us about yourself..."
        />

        <input
name="resume"
value={form.resume || ""}
onChange={handleChange}
placeholder="Paste Resume Link (Google Drive)"
/>

        <button onClick={handleSave}>
          Save Changes
        </button>

        <div className="form-group">

  <label>
    Resume Link
  </label>




</div>


      </div>

    </div>
  );
}

export default EditProfile;