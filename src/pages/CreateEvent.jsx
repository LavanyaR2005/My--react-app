import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateEvent() {

  const navigate = useNavigate();

  const [event, setEvent] = useState({
    title: "",
    date: "",
    location: "",
    description: ""
  });

  const handleChange = (e) => {
    setEvent({
      ...event,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {

    if (
      !event.title ||
      !event.date ||
      !event.location
    ) {
      alert("Please fill all fields");
      return;
    }

    let events =
      JSON.parse(localStorage.getItem("events")) || [];

    events.push(event);

    localStorage.setItem(
      "events",
      JSON.stringify(events)
    );

    alert("Event Created Successfully");

    navigate("/events");
  };

  return (
    <div className="auth-container">

      <div className="auth-box">

        <h1>Create Event</h1>

        <input
          name="title"
          placeholder="Event Name"
          onChange={handleChange}
        />

        <input
          type="date"
          name="date"
          onChange={handleChange}
        />

        <input
          name="location"
          placeholder="Location"
          onChange={handleChange}
        />

        <textarea
          name="description"
          rows="4"
          placeholder="Event Description"
          onChange={handleChange}
        />

        <button onClick={handleSubmit}>
          Create Event
        </button>

      </div>

    </div>
  );
}

export default CreateEvent;