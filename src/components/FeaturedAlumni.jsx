function FeaturedAlumni() {

const alumni =
JSON.parse(localStorage.getItem("users")) || [];

const featuredAlumni =
alumni.slice(0, 3);

return ( <section className="section">


  <h2>🌟 Featured Alumni</h2>

  <div className="featured-grid">

    {featuredAlumni.length > 0 ? (

      featuredAlumni.map((person, index) => (

        <div
          className="featured-card"
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

          <p>
            💼 {person.role || "Alumni"}
          </p>

          <p>
            🏢 {person.company || "Open To Work"}
          </p>

          <p>
            🎓 {person.graduationYear}
          </p>

        </div>

      ))

    ) : (

      <p>No Alumni Available</p>

    )}

  </div>

</section>


);
}

export default FeaturedAlumni;
