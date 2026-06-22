import { Link } from "react-router-dom";

function Navbar() {

  const user = JSON.parse(
    localStorage.getItem("currentUser")
  );

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    window.location.reload();
  };

  return (
    <nav className="navbar">

      <div className="logo">
        Alumni Vibes
      </div>

      <ul className="nav-links">

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/alumni">Alumni</Link>
        </li>

        <li>
          <Link to="/events">Events</Link>
        </li>

        <li>
          <Link to="/create-event">
            Create Event
          </Link>
        </li>

        <li>
          <Link to="/jobs">
            Jobs
          </Link>
        </li>

        <li>
          <Link to="/post-job">
            Post Job
          </Link>
        </li>

        <li>
          <Link to="/mentorship">
            Mentorship
          </Link>
        </li>

        <li>
            <Link to="/feed">
             Feed
            </Link>
        </li>

        <li>
  <Link to="/notifications">
    Notifications
  </Link>
</li>

        <li>
          <Link to="/contact">
            Contact
          </Link>
        </li>

        <li>
          <Link to="/login">
            Login
          </Link>
        </li>

        <li>
          <Link to="/register">
            Register
          </Link>
        </li>

        <li>
           <Link to="/chat">
            Chat
           </Link>
        </li>

        {user && (
          <>
            <li>
              <Link to="/profile">
                Profile
              </Link>
            </li>

            <li>
              <button
                className="logout-btn"
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          </>
        )}

      </ul>

     
      {!user && (
  <Link
    to="/register"
    className="join-btn"
  >
    Join Now
  </Link>
)}
      

    </nav>
  );
}

export default Navbar;