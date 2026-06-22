function Jobs() {

const jobs =
JSON.parse(localStorage.getItem("jobs")) || [];

const latestJobs =
jobs.slice(0, 3);

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
  jobTitle: job.title,
  company: job.company,
  applicantName: currentUser.name,
  applicantEmail: currentUser.email,
  appliedDate: new Date().toLocaleDateString(),
  status: "Applied"
});

localStorage.setItem(
  "jobApplications",
  JSON.stringify(applications)
);

alert("Job Application Submitted Successfully");


};

return ( <section className="section">


  <h2>💼 Latest Job Opportunities</h2>

  <div className="grid">

    {latestJobs.length > 0 ? (

      latestJobs.map((job, index) => (

        <div
          className="card"
          key={index}
        >

          <h3>
            {job.company}
          </h3>

          <p>
            {job.title}
          </p>

          <p>
            📍 {job.location}
          </p>

          <button
            className="apply-btn"
            onClick={() =>
              applyJob(job)
            }
          >
            Apply
          </button>

        </div>

      ))

    ) : (

      <h3>
        No Jobs Available
      </h3>

    )}

  </div>

</section>


);
}

export default Jobs;
