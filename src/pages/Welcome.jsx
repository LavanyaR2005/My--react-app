import { Link } from "react-router-dom";

function Welcome() {
return ( <div className="welcome-page">


  <div className="welcome-overlay">

    <h1 className="welcome-title">
      🎓 Alumni Vibes
    </h1>

    <h2 className="welcome-subtitle">
      Connect • Learn • Grow
    </h2>

    <p className="welcome-text">
      Connecting Students, Alumni,
      Mentors and Recruiters on one
      powerful networking platform.
    </p>

    <div className="welcome-stats">

      <div>
        <h3>15K+</h3>
        <p>Alumni</p>
      </div>

      <div>
        <h3>500+</h3>
        <p>Companies</p>
      </div>

      <div>
        <h3>250+</h3>
        <p>Mentors</p>
      </div>

    </div>

    <Link to="/showcase">
      <button className="get-started-btn">
        🚀 Get Started
      </button>
    </Link>

  </div>

</div>


);
}

export default Welcome;
