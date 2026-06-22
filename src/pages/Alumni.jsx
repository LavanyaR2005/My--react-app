import { useState } from "react";

function Alumni() {

const [search, setSearch] = useState("");

const alumni =
JSON.parse(localStorage.getItem("users")) || [];

// CONNECTION REQUEST
const sendConnectionRequest = (person) => {


const currentUser =
  JSON.parse(localStorage.getItem("currentUser"));

if (!currentUser) {
  alert("Please Login First");
  return;
}

if (currentUser.email === person.email) {
  alert("Cannot connect with yourself");
  return;
}

let requests =
  JSON.parse(
    localStorage.getItem("connectionRequests")
  ) || [];

requests.push({
  senderName: currentUser.name,
  senderEmail: currentUser.email,
  receiverName: person.name,
  receiverEmail: person.email,
  status: "Pending"
});

localStorage.setItem(
  "connectionRequests",
  JSON.stringify(requests)
);

alert(
  `Connection Request Sent to ${person.name}`
);


};

// MENTORSHIP REQUEST
const requestMentorship = (mentor) => {


const currentUser =
  JSON.parse(localStorage.getItem("currentUser"));

if (!currentUser) {
  alert("Please Login First");
  return;
}

if (currentUser.name === mentor.name) {
  alert("You cannot send request to yourself");
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
  mentorCompany: mentor.company,
  status: "Pending"
});

localStorage.setItem(
  "mentorshipRequests",
  JSON.stringify(requests)
);

alert(`Request sent to ${mentor.name}`);


};

// PRIVATE CHAT
const openChat = (person) => {


localStorage.setItem(
  "selectedChatUser",
  JSON.stringify(person)
);

window.location.href = "/chat";


};

const keyword =
search.toLowerCase().trim();

const filteredAlumni =
alumni.filter((person) => {


  return (
    person.name?.toLowerCase().includes(keyword) ||
    person.company?.toLowerCase().includes(keyword) ||
    person.department?.toLowerCase().includes(keyword) ||
    person.college?.toLowerCase().includes(keyword) ||
    person.location?.toLowerCase().includes(keyword) ||
    person.graduationYear?.toString().includes(keyword)
  );

});


return ( <div className="alumni-page">

```
  <div className="alumni-header">

    <h1>Alumni Directory</h1>

    <p>
      Connect with alumni from different companies and departments
    </p>

    <input
      type="text"
      placeholder="Search by Name, Company, Department..."
      value={search}
      onChange={(e) =>
        setSearch(e.target.value)
      }
    />

  </div>

  <div className="alumni-grid">

    {filteredAlumni.length > 0 ? (

      filteredAlumni.map((person, index) => (

        <div
          className="alumni-directory-card"
          key={index}
        >

          <img
            src={
              person.profileImage ||
              "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            }
            alt={person.name}
          />

          <h3>{person.name}</h3>

          <p>💼 {person.role || "Alumni Member"}</p>

          <p>🏢 {person.company || "Open To Work"}</p>

          <p>🎓 {person.college}</p>

          <p>📚 {person.department}</p>

          <p>🎓 Class of {person.graduationYear}</p>

          <p>📍 {person.location}</p>

          <div className="alumni-buttons">

            <button
              onClick={() =>
                sendConnectionRequest(person)
              }
            >
              Connect
            </button>

            <button
              onClick={() =>
                openChat(person)
              }
            >
              Message
            </button>

            <button
              onClick={() =>
                requestMentorship(person)
              }
            >
              Request Mentorship
            </button>

          </div>

        </div>

      ))

    ) : (

      <div className="no-results">

        <h2>No Alumni Found 😔</h2>

        <p>
          Register more users and try again.
        </p>

      </div>

    )}

  </div>

</div>


);
}

export default Alumni;
