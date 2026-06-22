import { useState } from "react";

function PostJob() {

  const [job, setJob] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    description: ""
  });

  const handleChange = (e) => {
    setJob({
      ...job,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {

    const jobs =
      JSON.parse(localStorage.getItem("jobs")) || [];

    jobs.push(job);

    localStorage.setItem(
      "jobs",
      JSON.stringify(jobs)
    );

    alert("Job Posted Successfully");

    setJob({
      title: "",
      company: "",
      location: "",
      salary: "",
      description: ""
    });
  };

  return (
    <div className="post-job-page">

      <div className="post-job-box">

        <h1>Post a Job</h1>

        <input
          name="title"
          placeholder="Job Title"
          value={job.title}
          onChange={handleChange}
        />

        <input
          name="company"
          placeholder="Company"
          value={job.company}
          onChange={handleChange}
        />

        <input
          name="location"
          placeholder="Location"
          value={job.location}
          onChange={handleChange}
        />

        <input
          name="salary"
          placeholder="Salary"
          value={job.salary}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Job Description"
          rows="5"
          value={job.description}
          onChange={handleChange}
        />

        <button onClick={handleSubmit}>
          Post Job
        </button>

      </div>

    </div>
  );
}

export default PostJob;