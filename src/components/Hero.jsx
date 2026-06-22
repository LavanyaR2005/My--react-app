import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Hero() {

const navigate = useNavigate();

return ( <section className="hero">


  <motion.h1
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    Connect • Learn • Grow
  </motion.h1>

  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.5 }}
  >
    The Ultimate Alumni Networking Platform
  </motion.p>

  <div className="hero-buttons">

    <button
      className="primary-btn"
      onClick={() => navigate("/alumni")}
    >
      Explore Alumni
    </button>

    <button
      className="secondary-btn"
      onClick={() => navigate("/register")}
    >
      Join Community
    </button>

  </div>

</section>


);
}

export default Hero;
