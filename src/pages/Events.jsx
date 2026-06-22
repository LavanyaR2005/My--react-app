import { useState } from "react";

function Events() {

  const [search, setSearch] = useState("");

  const events =
    JSON.parse(localStorage.getItem("events")) || [];

  const currentUser =
    JSON.parse(localStorage.getItem("currentUser"));

  const filteredEvents = events.filter((event) =>
    event.title?.toLowerCase().includes(search.toLowerCase()) ||
    event.location?.toLowerCase().includes(search.toLowerCase())
  );

  const registerEvent = (eventData) => {

    if (!currentUser) {
      alert("Please login first");
      return;
    }

    let registrations =
      JSON.parse(
        localStorage.getItem("eventRegistrations")
      ) || [];

    const alreadyRegistered =
      registrations.find(
        (r) =>
          r.email === currentUser.email &&
          r.title === eventData.title
      );

    if (alreadyRegistered) {
      alert("You already registered for this event");
      return;
    }

    registrations.push({
      name: currentUser.name,
      email: currentUser.email,
      title: eventData.title,
      date: eventData.date,
      location: eventData.location
    });

    localStorage.setItem(
      "eventRegistrations",
      JSON.stringify(registrations)
    );

    alert("Successfully Registered!");
  };

  return (
    <div className="events-page">

      <div className="events-header">

        <h1>Upcoming Events</h1>

        <p>
          Discover alumni meetups, workshops,
          networking sessions and career events.
        </p>

        <input
          type="text"
          placeholder="Search by Event Name or Location"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

      </div>

      <div className="events-grid">

        {filteredEvents.length > 0 ? (

          filteredEvents.map((event, index) => (

            <div
              className="event-card"
              key={index}
            >

              <h2>{event.title}</h2>

              <p>
                📅 {event.date}
              </p>

              <p>
                📍 {event.location}
              </p>

              <p>
                {event.description}
              </p>

              <button
                onClick={() =>
                  registerEvent(event)
                }
              >
                Register Event
              </button>

            </div>

          ))

        ) : (

          <div
            style={{
              textAlign: "center",
              width: "100%"
            }}
          >
            <h2>No Events Available</h2>
          </div>

        )}

      </div>

    </div>
  );
}

export default Events;