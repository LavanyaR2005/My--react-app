import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import FeaturedAlumni from "../components/FeaturedAlumni";
import Events from "../components/Events";
import Jobs from "../components/Jobs";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import SuccessStories from "../components/SuccessStories";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <FeaturedAlumni />
      <Events />
      <Jobs />
      <SuccessStories />
      <Testimonials />
      <Footer />
    </>
  );
}

export default Home;