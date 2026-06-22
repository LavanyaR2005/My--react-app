// import { useState } from "react";
// import { loginUser } from "../utils/auth";
// import { useNavigate } from "react-router-dom";

// function Login() {
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = () => {
//     const res = loginUser(email, password);

//     alert(res.message);

//     if (res.success) {
//       navigate("/profile");
//     }
//   };

//   return (
//     <div className="auth-container">
//       <div className="auth-box">

//         <h1>Welcome Back</h1>
//         <p>Login to Alumni Vibes</p>

//         <input
//           type="email"
//           placeholder="Email Address"
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <button onClick={handleLogin}>
//           Login
//         </button>

//       </div>
//     </div>
//   );
// }

// export default Login;

import { useState } from "react";
import { loginUser } from "../utils/auth";
import { useNavigate, Link } from "react-router-dom";

function Login() {

const navigate = useNavigate();

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleLogin = () => {


if (!email || !password) {
  alert("Please fill all fields");
  return;
}

const res =
  loginUser(email, password);

alert(res.message);

if (res.success) {
  navigate("/home");
}


};

return ( <div className="auth-container">


  <div className="auth-box">

    <h1>🎓 Welcome Back</h1>

    <p>
      Login to Alumni Vibes and
      connect with alumni worldwide.
    </p>

    <input
      type="email"
      placeholder="Email Address"
      value={email}
      onChange={(e) =>
        setEmail(e.target.value)
      }
    />

    <input
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e) =>
        setPassword(e.target.value)
      }
    />

    <button
      onClick={handleLogin}
    >
      Login
    </button>

    <p
      style={{
        marginTop: "15px"
      }}
    >
      Don't have an account?
      {" "}
      <Link to="/register">
        Register Here
      </Link>
    </p>

  </div>

</div>

);
}

export default Login;
