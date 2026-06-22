function Mentorship() {

const mentors =
JSON.parse(localStorage.getItem("users")) || [];

const currentUser =
JSON.parse(localStorage.getItem("currentUser"));

const requestMentorship = (mentor) => {


if (!currentUser) {
  alert("Please Login First");
  return;
}

if (currentUser.email === mentor.email) {
  alert("You cannot request yourself");
  return;
}

let requests =
  JSON.parse(
    localStorage.getItem("mentorshipRequests")
  ) || [];

requests.push({
  studentName: currentUser.name,
  studentEmail: currentUser.email,
  mentorName: mentor.name,
  mentorEmail: mentor.email,
  mentorCompany: mentor.company,
  status: "Pending"
});

localStorage.setItem(
  "mentorshipRequests",
  JSON.stringify(requests)
);

alert(
  `Mentorship request sent to ${mentor.name}`
);


};

return ( <div className="mentorship-page">


  <div className="mentorship-header">

    <h1>
      🎓 Mentorship Portal
    </h1>

    <p>
      Connect with experienced alumni and get
      career guidance, interview preparation,
      resume reviews and industry insights.
    </p>

  </div>

  <div className="mentor-grid">

    {mentors.length > 0 ? (

      mentors.map((mentor, index) => (

        <div
          className="mentor-card"
          key={index}
        >

          <img
            src={
              mentor.profileImage ||
              "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            }
            alt={mentor.name}
          />

          <h3>{mentor.name}</h3>

          <p>
            💼 {mentor.role || "Professional"}
          </p>

          <p>
            🏢 {mentor.company || "Company"}
          </p>

          <p>
            📍 {mentor.location}
          </p>

          <button
            onClick={() =>
              requestMentorship(mentor)
            }
          >
            Request Mentorship
          </button>

        </div>

      ))

    ) : (

      <h3>No Mentors Available</h3>

    )}

  </div>

</div>


);
}

export default Mentorship;
