function Profile() {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  const myApplications =
(
JSON.parse(
localStorage.getItem("jobApplications")
) || []
).filter(
(app) =>
app.applicantEmail === user?.email
);

  
  if (!user) {
    return (
      <div style={{ padding: "50px", textAlign: "center" }}>
        <h1>Please Login First</h1>
      </div>
    );
  }

  const mentorshipRequests =
  JSON.parse(localStorage.getItem("mentorshipRequests")) || [];

// Requests where YOU are the mentor
const receivedRequests = mentorshipRequests.filter(
  (req) => req.mentorName === user.name &&
    req.studentEmail !== user.email
);

// Requests YOU sent
const sentRequests = mentorshipRequests.filter(
  (req) => req.studentEmail === user.email &&
    req.mentorName !== user.name
);

const updateRequestStatus = (index, newStatus) => {

  let requests =
    JSON.parse(localStorage.getItem("mentorshipRequests")) || [];

  const request = requests[index];

  requests[index].status = newStatus;

  localStorage.setItem(
    "mentorshipRequests",
    JSON.stringify(requests)
  );

  let notifications =
    JSON.parse(localStorage.getItem("notifications")) || [];

  notifications.push({
    email: request.studentEmail,
    message:
      `${request.mentorName} ${newStatus.toLowerCase()} your mentorship request`
  });

  localStorage.setItem(
    "notifications",
    JSON.stringify(notifications)
  );

  window.location.reload();
};

  const registeredEvents =
  (JSON.parse(localStorage.getItem("eventRegistrations")) || [])
  .filter((event) => event.email === user?.email);

  if (!user) {
    return (
      <div style={{ padding: "50px", textAlign: "center" }}>
        <h1>Please Login First</h1>
      </div>
    );
  }


  const myReferralRequests =
(
JSON.parse(
localStorage.getItem("referralRequests")
) || []
).filter(
(req) =>
req.studentEmail === user?.email
);

<h2>
  Referral Count:
  {myReferralRequests.length}
</h2>

  return (
    <div className="profile-page">

      {/* COVER BANNER */}
      <div className="cover-banner">
        <img
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1400"
          alt="banner"
        />
      </div>

      {/* PROFILE HEADER */}
      <div className="profile-header">

        <img
            className="profile-photo"
            src={
               user.profileImage ||
               "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              } 
            alt="profile"
          />

        <div className="profile-info">
          <h1>{user.name}</h1>

          <h3>{user.role || "Full Stack Developer"}</h3>

          <p>🏢 {user.company || "Open To Work"}</p>

          <p>🎓 {user.college}</p>

          <p>📚 {user.department}</p>

          <p>📍 {user.location}</p>

          {user.resume && (
  <p>
    <a
      href={user.resume}
      target="_blank"
      rel="noreferrer"
    >
      📄 View Resume
    </a>
  </p>
)}

          <div className="action-buttons">
              <div className="action-buttons">

<button
onClick={() =>
window.location.href="/edit-profile"
}

>


Edit Profile


  </button>

<button
onClick={() =>
window.location.href="/chat"
}

>


Open Chat


  </button>

<button
onClick={() =>
window.location.href="/referral"
}

>

Referral Portal


  </button>

</div>

</div>
        </div>

      </div>

      {/* STATS */}

      <div className="stats-row">

        <div className="stat-card">
          <h2>500+</h2>
          <p>Connections</p>
        </div>

        <div className="stat-card">
          <h2>24</h2>
          <p>Referrals</p>
        </div>

        <div className="stat-card">
          <h2>18</h2>
          <p>Events</p>
        </div>

        <div className="stat-card">
          <h2>12</h2>
          <p>Mentorships</p>
        </div>

      </div>

      {/* DASHBOARD */}

      <div className="dashboard-grid">

        {/* LEFT COLUMN */}

        <div>

          <div className="section-card">
            <h2>About</h2>

            <p>
              {user.bio ||
                "Passionate professional interested in networking and career growth."}
            </p>
          </div>

          <div className="section-card">
            <h2>Education</h2>

            <p><strong>{user.college}</strong></p>

            <p>{user.department}</p>

            <p>Class of {user.graduationYear}</p>
          </div>

          <div className="section-card">
            <h2>Skills</h2>

            <div className="skills">

              {user.skills &&
                user.skills.split(",").map((skill, index) => (
                  <span key={index}>
                    {skill.trim()}
                  </span>
                ))}

            </div>
          </div>

        </div>

        {/* CENTER COLUMN */}

        <div>

          <div className="section-card">
            <h2>Recent Activity</h2>

            <div className="activity-item">
              🚀 Attended Alumni Tech Summit
            </div>

            <div className="activity-item">
              💼 Shared Software Engineer Referral
            </div>

            <div className="activity-item">
              🎓 Mentored Students
            </div>

            <div className="activity-item">
              ⭐ Received Community Badge
            </div>
          </div>

          <div className="section-card">
            <h2>Professional Experience</h2>

            <h3>{user.role}</h3>

            <p>{user.company}</p>

            <ul>
              <li>Worked on scalable web applications.</li>
              <li>Collaborated with development teams.</li>
              <li>Improved application performance.</li>
            </ul>
          </div>

        </div>

        {/* RIGHT COLUMN */}

        <div>

          <div className="section-card">
            <h2>Recommended Alumni</h2>

            <div className="alumni-card">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt=""
              />

              <div>
                <h4>Rahul Sharma</h4>
                <p>TCS</p>
              </div>
            </div>

            <div className="alumni-card">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt=""
              />

              <div>
                <h4>Priya Nair</h4>
                <p>Accenture</p>
              </div>
            </div>

            <div className="alumni-card">
              <img
                src="https://randomuser.me/api/portraits/men/75.jpg"
                alt=""
              />

              <div>
                <h4>Arun Kumar</h4>
                <p>Zoho</p>
              </div>
            </div>

          </div>

          <div className="section-card">
            <h2>Upcoming Events</h2>

            <p>📅 Alumni Meet 2026</p>

            <p>📅 Career Guidance Session</p>

            <p>📅 Startup Networking Event</p>
          </div>

          <div className="section-card">

  <h2>My Registered Events</h2>

  {registeredEvents.length > 0 ? (

    registeredEvents.map((event, index) => (

      <div
        key={index}
        className="activity-item"
      >

        <h4>{event.title}</h4>

        <p>📅 {event.date}</p>

        <p>📍 {event.location}</p>

      </div>

    ))

  ) : (

    <p>No registered events yet.</p>

  )}

</div>

<div className="section-card">
  <h2>Mentorship Requests</h2>

  <h4>Received Requests</h4>

  <h4>Received Requests</h4>

{receivedRequests.length > 0 ? (

  receivedRequests.map((req) => {

    const originalIndex = mentorshipRequests.findIndex(
      (r) =>
        r.studentEmail === req.studentEmail &&
        r.mentorName === req.mentorName
    );

    return (

      <div
        key={originalIndex}
        className="activity-item"
      >

        <p>
          <strong>{req.studentName}</strong>
        </p>

        <p>
          Status: {req.status}
        </p>

        {req.status === "Pending" && (
          <>
            <button
              onClick={() =>
                updateRequestStatus(
                  originalIndex,
                  "Accepted"
                )
              }
            >
              Accept
            </button>

            <button
              onClick={() =>
                updateRequestStatus(
                  originalIndex,
                  "Rejected"
                )
              }
            >
              Reject
            </button>
          </>
        )}

      </div>

    );

  })

) : (

  <p>No received requests</p>

)}

  <hr />

  <h4>Sent Requests</h4>

  {sentRequests.length > 0 ? (
    sentRequests.map((req, index) => (
      <div key={index} className="activity-item">
        <p><strong>{req.mentorName}</strong></p>
        <p>Status: {req.status}</p>
      </div>
    ))
  ) : (
    <p>No sent requests</p>
  )}
</div>



          <div className="section-card">

  <h2>💼 My Job Applications</h2>

  

{myApplications.length > 0 ? (


myApplications.map((app, index) => (

  <div
    key={index}
    className="activity-item"
  >

    <h4>
      {app.jobTitle}
    </h4>

    <p>
      🏢 {app.company}
    </p>

    <p>
      📅 {app.appliedDate}
    </p>

    <p>
      Status: {app.status}
    </p>

    

  </div>
  

))


) : (


<p>
  No applications yet.
</p>

)}

</div>
<div className="section-card">

  <h2>🏆 My Referral Requests</h2>

{myReferralRequests.length > 0 ? (


myReferralRequests.map((req, index) => (

  <div
    key={index}
    className="activity-item"
  >

    <h4>
      {req.jobRole}
    </h4>

    <p>
      🏢 {req.company}
    </p>

    <p>
      👤 {req.postedBy}
    </p>

    <p>
      Status: {req.status}
    </p>

  </div>

))


) : (


<p>
  No referral requests yet.
</p>


)}

</div>

            <h2>Achievements</h2>

            <p>🏆 Top Mentor</p>

            <p>⭐ Alumni Ambassador</p>

            <p>🚀 Innovation Award</p>

            <p>🎖 Community Star</p>
          </div>

        </div>

      </div>

    

  );
}

export default Profile;