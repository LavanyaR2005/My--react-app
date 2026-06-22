import { useState } from "react";

function Referral() {

const [company, setCompany] = useState("");
const [jobRole, setJobRole] = useState("");

const currentUser =
JSON.parse(localStorage.getItem("currentUser"));

const [referrals, setReferrals] = useState(
JSON.parse(localStorage.getItem("referrals")) || []
);

const postReferral = () => {


if (!company || !jobRole) {
  alert("Fill all fields");
  return;
}

const newReferral = {
  company,
  jobRole,
  postedBy: currentUser?.name || "Anonymous",
  date: new Date().toLocaleDateString(),
  status: "Open"
};

const updatedReferrals = [
  newReferral,
  ...referrals
];

localStorage.setItem(
  "referrals",
  JSON.stringify(updatedReferrals)
);

setReferrals(updatedReferrals);

alert("Referral Posted Successfully");

setCompany("");
setJobRole("");


};

const requestReferral = (referral) => {


if (!currentUser) {
  alert("Please Login First");
  return;
}

const requests =
  JSON.parse(
    localStorage.getItem("referralRequests")
  ) || [];

requests.push({
  studentName: currentUser.name,
  studentEmail: currentUser.email,
  company: referral.company,
  jobRole: referral.jobRole,
  postedBy: referral.postedBy,
  status: "Pending"
});

localStorage.setItem(
  "referralRequests",
  JSON.stringify(requests)
);

alert("Referral Request Sent");


};

return (


<div className="referral-page">

  <div className="referral-card">

    <h1>🏆 Referral Portal</h1>

    <p>
      Help students and alumni connect through
      company referrals and career opportunities.
    </p>

    <input
      type="text"
      placeholder="Company Name"
      value={company}
      onChange={(e) =>
        setCompany(e.target.value)
      }
    />

    <input
      type="text"
      placeholder="Job Role"
      value={jobRole}
      onChange={(e) =>
        setJobRole(e.target.value)
      }
    />

    <button onClick={postReferral}>
      🚀 Post Referral
    </button>

  </div>

  <div className="referral-list">

    <h2>
      Available Referrals
    </h2>

    {referrals.length > 0 ? (

      referrals.map(
        (referral, index) => (

          <div
            key={index}
            className="referral-item"
          >

            <h3>
              {referral.jobRole}
            </h3>

            <p>
              🏢 {referral.company}
            </p>

            <p>
              👤 Posted By:
              {" "}
              {referral.postedBy}
            </p>

            <p>
              📅 {referral.date}
            </p>

            <span
              className="referral-status"
            >
              {referral.status}
            </span>

            <button
              className="request-btn"
              onClick={() =>
                requestReferral(referral)
              }
            >
              Request Referral
            </button>

          </div>

        )
      )

    ) : (

      <p>
        No referrals posted yet.
      </p>

    )}

  </div>

</div>


);
}

export default Referral;
