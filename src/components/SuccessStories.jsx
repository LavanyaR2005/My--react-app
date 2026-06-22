function SuccessStories() {

const stories = [
{
name: "Anand Kumar",
company: "Google",
role: "Senior Software Engineer",
image:
"https://randomuser.me/api/portraits/men/32.jpg",
achievement:
"Started as a Computer Science student and now leads large-scale cloud projects at Google."
},


{
  name: "Divya Nair",
  company: "Microsoft",
  role: "Product Manager",
  image:
    "https://randomuser.me/api/portraits/women/44.jpg",
  achievement:
    "Built innovative enterprise products and manages a global product team at Microsoft."
},

{
  name: "Vignesh Kumar",
  company: "Amazon",
  role: "Cloud Architect",
  image:
    "https://randomuser.me/api/portraits/men/75.jpg",
  achievement:
    "Specialized in AWS solutions and successfully led cloud transformation projects."
}


];

return ( <section className="section">


  <h2>🏆 Alumni Success Stories</h2>

  <div className="success-grid">

    {stories.map((story, index) => (

      <div
        className="success-card"
        key={index}
      >

        <img
          src={story.image}
          alt={story.name}
          className="success-image"
        />

        <h3>{story.name}</h3>

        <p>
          💼 {story.role}
        </p>

        <p>
          🏢 {story.company}
        </p>

        <p>
          {story.achievement}
        </p>

      </div>

    ))}

  </div>

</section>


);
}

export default SuccessStories;
