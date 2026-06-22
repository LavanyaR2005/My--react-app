function Events() {

const events =
JSON.parse(localStorage.getItem("events")) || [];

const registerEvent = (event) => {


const currentUser =
  JSON.parse(localStorage.getItem("currentUser"));

if (!currentUser) {
  alert("Please Login First");
  return;
}

let registrations =
  JSON.parse(
    localStorage.getItem("eventRegistrations")
  ) || [];

registrations.push({
  title: event.title,
  date: event.date,
  location: event.location,
  email: currentUser.email
});

localStorage.setItem(
  "eventRegistrations",
  JSON.stringify(registrations)
);

alert("Event Registered Successfully");


};

return ( <section className="section">


  <h2 className="section-title">
    📅 Upcoming Events
  </h2>

  <div className="events-grid">

    {events.length > 0 ? (

      events.map((event, index) => (

        <div
          className="event-card"
          key={index}
        >

          <img
            src={
              event.image ||
              "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200"
            }
            alt={event.title}
          />

          <div className="event-content">

            <h3>{event.title}</h3>

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
              Register Now
            </button>

          </div>

        </div>

      ))

    ) : (

      <h3>No Events Available</h3>

    )}

  </div>

</section>


);
}

export default Events;
