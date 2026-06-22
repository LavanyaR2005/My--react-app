function Stats() {

const users =
JSON.parse(localStorage.getItem("users")) || [];

const events =
JSON.parse(localStorage.getItem("events")) || [];

const jobs =
JSON.parse(localStorage.getItem("jobs")) || [];

const mentorshipRequests =
JSON.parse(
localStorage.getItem("mentorshipRequests")
) || [];

return ( <section className="stats">

```
  <div className="stat-card">
    <h2>{users.length}</h2>
    <p>Alumni</p>
  </div>

  <div className="stat-card">
    <h2>{jobs.length}</h2>
    <p>Jobs</p>
  </div>

  <div className="stat-card">
    <h2>{mentorshipRequests.length}</h2>
    <p>Mentorship Requests</p>
  </div>

  <div className="stat-card">
    <h2>{events.length}</h2>
    <p>Events</p>
  </div>

</section>


);
}

export default Stats;
