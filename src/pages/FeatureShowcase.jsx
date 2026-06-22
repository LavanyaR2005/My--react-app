import { Link } from "react-router-dom";

function FeatureShowcase() {

const features = [


{
  icon: "🎓",
  title: "Alumni Network",
  desc: "Connect with alumni working in top companies."
},

{
  icon: "💼",
  title: "Jobs & Referrals",
  desc: "Find opportunities shared by alumni."
},

{
  icon: "🤝",
  title: "Mentorship",
  desc: "Get guidance from experienced professionals."
},

{
  icon: "📅",
  title: "Events",
  desc: "Join webinars and alumni meetups."
},

{
  icon: "💬",
  title: "Community Feed",
  desc: "Share updates and achievements."
},

{
  icon: "🏆",
  title: "Success Stories",
  desc: "Get inspired by alumni journeys."
}


];

return ( <div className="showcase-page">


  <h1>
    Why Choose Alumni Vibes?
  </h1>

  <p className="showcase-subtitle">
    Everything you need to build your
    professional network.
  </p>

  <div className="feature-grid">

    {features.map((item, index) => (

      <div
        key={index}
        className="feature-card"
      >

        <div className="feature-icon">
          {item.icon}
        </div>

        <h2>{item.title}</h2>

        <p>{item.desc}</p>

      </div>

    ))}

  </div>

  <div className="testimonial-box">

    <h2>⭐⭐⭐⭐⭐</h2>

    <p>
      Alumni Vibes helped me connect
      with mentors and secure my
      first internship opportunity.
    </p>

    <h4>
      — Student Member
    </h4>

  </div>

  <div className="showcase-buttons">

    <Link to="/login">
      <button className="login-btn">
        Login
      </button>
    </Link>

    <Link to="/register">
      <button className="register-btn">
        Register
      </button>
    </Link>

  </div>

</div>

);
}

export default FeatureShowcase;
