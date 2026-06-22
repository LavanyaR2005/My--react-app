import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Alumni from "./pages/Alumni";
import Events from "./pages/Events";
import Jobs from "./pages/Jobs";
import Mentorship from "./pages/Mentorship";
import Contact from "./pages/Contact";
import Login from "./pages/login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import PostJob from "./pages/PostJob";
import EditProfile from "./pages/EditProfile";
import CreateEvent from "./pages/CreateEvent";
import Notifications from "./pages/Notifications";
import Feed from "./pages/Feed";
import Chat from "./pages/Chat";
import Referral from "./pages/Referral";
import Welcome from "./pages/Welcome";
import FeatureShowcase from "./pages/FeatureShowcase";



function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/alumni" element={<Alumni />} />
      <Route path="/events" element={<Events />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/mentorship" element={<Mentorship />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />}/>
      <Route
          path="/profile"
          element={
          <ProtectedRoute>
          <Profile />
          </ProtectedRoute>
          }
      />
      <Route path="/post-job" element={<PostJob />} />
      <Route
         path="/edit-profile"
         element={<EditProfile />}
      />

      <Route
       path="/create-event"
       element={<CreateEvent />}
      />

      <Route
        path="/notifications"
        element={<Notifications />}
      />

      <Route
  path="/Feed"
  element={<Feed />}
/>

<Route path="/chat" element={<Chat />} />

<Route
  path="/referral"
  element={<Referral />}
/>

<Route
path="/"
element={<Welcome />}
/>

<Route
path="/showcase"
element={<FeatureShowcase />}
/>


    </Routes>
    
  );
}

export default App;