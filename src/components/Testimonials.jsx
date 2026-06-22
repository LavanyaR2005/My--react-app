function Testimonials() {

const reviews = [
{
name: "Karthik Kumar",
role: "Software Engineer",
company: "Infosys",
image:
"https://randomuser.me/api/portraits/men/32.jpg",
text:
"Alumni Vibes helped me connect with experienced mentors and secure my first job."
},


{
  name: "Priya Sharma",
  role: "Frontend Developer",
  company: "TCS",
  image:
    "https://randomuser.me/api/portraits/women/44.jpg",
  text:
    "I found internship opportunities and expanded my professional network through this platform."
},

{
  name: "Rahul Verma",
  role: "Cloud Engineer",
  company: "Wipro",
  image:
    "https://randomuser.me/api/portraits/men/75.jpg",
  text:
    "The alumni events and mentorship sessions were extremely helpful for my career growth."
}


];

return ( <section className="section">


  <h2>💬 Student Testimonials</h2>

  <div className="testimonial-grid">

    {reviews.map((review, index) => (

      <div
        className="testimonial-card"
        key={index}
      >

        <img
          src={review.image}
          alt={review.name}
        />

        <h3>{review.name}</h3>

        <p>
          💼 {review.role}
        </p>

        <p>
          🏢 {review.company}
        </p>

        <p>
          "{review.text}"
        </p>

      </div>

    ))}

  </div>

</section>


);
}

export default Testimonials;
