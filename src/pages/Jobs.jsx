import { useState } from "react";

function Jobs() {

const [search, setSearch] = useState("");

const jobs =
JSON.parse(localStorage.getItem("jobs")) || [];

const applyJob = (job) => {


const currentUser =
  JSON.parse(localStorage.getItem("currentUser"));

if (!currentUser) {
  alert("Please Login First");
  return;
}

let applications =
  JSON.parse(
    localStorage.getItem("jobApplications")
  ) || [];

applications.push({
  applicantName: currentUser.name,
  applicantEmail: currentUser.email,
  jobTitle: job.title,
  company: job.company,
  status: "Applied",
  appliedDate:
    new Date().toLocaleDateString()
});

localStorage.setItem(
  "jobApplications",
  JSON.stringify(applications)
);

alert(
  "Job Application Submitted Successfully"
);


};

const filteredJobs = jobs.filter(
(job) =>
job.title
?.toLowerCase()
.includes(search.toLowerCase()) ||
job.company
?.toLowerCase()
.includes(search.toLowerCase()) ||
job.location
?.toLowerCase()
.includes(search.toLowerCase())
);

return ( <div className="jobs-page">
  <div style={{ marginBottom: "20px" }}>
  <button
    onClick={() =>
      window.location.href = "/referral"
    }
    className="apply-btn"
  >
    🏆 Referral Portal
  </button>
</div>



  <div className="jobs-header">

    <h1>💼 Job Opportunities</h1>

    <input
      type="text"
      placeholder="Search Jobs..."
      value={search}
      onChange={(e) =>
        setSearch(e.target.value)
      }
    />

  </div>

  <div className="jobs-grid">

    {filteredJobs.length > 0 ? (

      filteredJobs.map((job, index) => (

        <div
          className="job-card"
          key={index}
        >

          <h2>{job.title}</h2>

          <p>
            🏢 {job.company}
          </p>

          <p>
            📍 {job.location}
          </p>

          <p>
            💰 {job.salary}
          </p>

          <p>
            {job.description?.length > 80
              ? job.description.substring(
                  0,
                  80
                ) + "..."
              : job.description}
          </p>

          <button
            onClick={() =>
              applyJob(job)
            }
          >
            Apply Now
          </button>

        </div>

      ))

    ) : (

      <h2>
        No Jobs Posted Yet
      </h2>

    )}

  </div>

</div>


);
}

export default Jobs;
