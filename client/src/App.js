import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Component/pages/home/Home";
import Navbar from "./Component/multiuse/navbar/Navbar";
import Footer from "./Component/multiuse/footer/Footer";
import Register from "./Component/login/Registretion/Register";
import Login from "./Component/login/Login/Login";
import CardInform from "./Component/multiuse/cardInformation/CardInform";
import Wishlist from "./Component/pages/wishlist/Wishlist";
import Dashboard from "./Component/pages/Dashabord/Dashboard";
import HorizontalNonLinearStepper from "./Component/PostProperty.js/PostFour";
import PostMain from "./Component/PostProperty.js/PostMain";
import StepContext from "./Component/PostProperty.js/StepContext";
import SliderDash from "./Component/pages/Dashabord/newDashboard/SliderDash";
import DashHome from "./Component/pages/Dashabord/newDashboard/DashHome";
import DashAbout from "./Component/pages/Dashabord/newDashboard/DashAbout";
import DashCon from "./Component/pages/Dashabord/newDashboard/DashCon";
import DashNavbar from "./Component/pages/Dashabord/newDashboard/DashNavbar";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                {" "}
                <Navbar />
                <Home />
                <Footer />{" "}
              </>
            }
          />
          <Route
            path="/blog"
            element={
              <>
                {" "}
                <Navbar />
                <HorizontalNonLinearStepper />
                <Footer />{" "}
              </>
            }
          />
          <Route
            path="/cardinform"
            element={
              <>
                {" "}
                <Navbar />
                <CardInform />
                <Footer />{" "}
              </>
            }
          />
          <Route
            path="/wishlist"
            element={
              <>
                {" "}
                <Navbar />
                <Wishlist />
                <Footer />{" "}
              </>
            }
          />
          <Route
            path="/basicTabs"
            element={
              <>
                {" "}
                <Navbar />
                <Dashboard />
                <Footer />
              </>
            }
          />
          <Route
            path="/register"
            element={
              <>
                <Register />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          />
          <Route
            path="/postMian"
            element={
              <StepContext>
                {" "}
                <PostMain />
              </StepContext>
            }
          />

          <Route
            path="/sliderdash/*"
            element={
              <>
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                  }}
                >
                  <div className="dash_main_one">
                    <SliderDash />
                  </div>
                  <div className="dash_main_two">
                    <Routes>
                      <Route
                        path="dashabout"
                        element={
                          <>
                            <DashNavbar />
                            <DashHome />
                            <DashAbout />
                          </>
                        }
                      />
                      <Route
                        path="dashhome"
                        element={
                          <>
                            <DashNavbar />
                            <DashHome />
                            <DashCon />
                          </>
                        }
                      />
                      <Route
                        path="dashcon"
                        element={
                          <>
                            <DashNavbar />
                            <DashHome />
                            <DashCon />
                          </>
                        }
                      />
                    </Routes>
                  </div>
                </div>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
