import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Components/Register";
import { ToastContainer } from "react-toastify";
import Login from "./Components/Login";
import ForgotPassword from "./Components/ForgotPassword";
import ResetPassword from "./Components/ResetPassword";
import VerifyRandomString from "./Components/VerifyRandomString";
import Navbar from "./Components/Navbar";
import UserActivation from "./Components/UserActivation";
import BlogHome from "./Components/BlogHome";
import CreateStory from "./Components/CreateStory";
import EditStory from "./Components/EditStory";
import Info from "./Components/Info";
import ViewStory from "./Components/ViewStory";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Info />} />
        <Route path="/home" element={<BlogHome />} />
        <Route path="/createStory" element={<CreateStory />} />
        <Route path="/story/:storyId" element={<ViewStory />} />
        <Route path="/editStory/:storyId" element={<EditStory />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/activate/:activationToken" element={<UserActivation />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route
          path="/verifyRandomString/:randomString"
          element={<VerifyRandomString />}
        />
        <Route
          path="/resetPassword/:randomString"
          element={<ResetPassword />}
        />
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
