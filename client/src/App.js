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
import ProfileUser from "./Component/profile/ProfileUser";
import AdminSide from "./Component/super_admin/Home/AdminSide";
import AdminSearch from "./Component/super_admin/Home/AdminSearch";
import AdminMain from "./Component/super_admin/Home/AdminMain";
import AdminApro from "./Component/super_admin/Home/AdminApro";
import Approval from "./Component/super_admin/Home/Approval";
import User from "./Component/super_admin/Home/User";
import Enquiries from "./Component/super_admin/Home/enquiries";
import Refermain from "./Component/super_admin/referral/Refermain";
import ManageUser from "./Component/super_admin/ManageUser/ManageUser";
import EditAdmin from "./Component/super_admin/edit_profile/EditAdmin";
import ApprovalMain from "./Component/super_admin/Approval/ApprovalMain";
import ApprovalCancel from "./Component/super_admin/Approval/ApprovalCancel";

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
            path="/profile"
            element={
              <>
                {" "}
                <Navbar />
                <ProfileUser />
                <Footer />
              </>
            }
          />
          <Route
            path="/approval/*"
            element={
              <>
                <div className="adminapp">
                  <div className="adminapp_first">
                    <AdminSide />
                  </div>
                  <div className="adminapp_sec">
                    <Routes>
                      <Route
                        path="adminmain/*"
                        element={
                          <>
                            <AdminSearch />
                            <AdminMain />
                            <Routes>
                              <Route path="adminapro" element={<AdminApro />} />
                              <Route path="approval" element={<Approval />} />
                              <Route path="user" element={<User />} />
                            </Routes>
                          </>
                        }
                      />
                      <Route
                        path="enquiries"
                        element={
                          <>
                            <AdminSearch />
                            <Enquiries />
                          </>
                        }
                      />
                      <Route
                        path="approvelist/*"
                        element={
                          <>
                            <AdminSearch />
                            <ApprovalMain />
                            <Routes>
                              <Route path="requests" element={<Approval />} />
                              <Route path="approved" element={<AdminApro />} />
                              <Route
                                path="cancellist"
                                element={<ApprovalCancel />}
                              />
                            </Routes>
                          </>
                        }
                      />
                    </Routes>
                  </div>
                </div>
              </>
            }
          />
          <Route
            path="/refersection/*"
            element={
              <>
                <div className="adminapp">
                  <div className="adminapp_first">
                    <AdminSide />
                  </div>
                  <div className="adminapp_sec">
                    <Routes>
                      <Route
                        path="refermain/*"
                        element={
                          <>
                            <AdminSearch />
                            <Refermain />
                          </>
                        }
                      />
                    </Routes>
                  </div>
                </div>
              </>
            }
          />
          <Route
            path="/editprofile/*"
            element={
              <>
                <div className="adminapp">
                  <div className="adminapp_first">
                    <AdminSide />
                  </div>
                  <div className="adminapp_sec">
                    <Routes>
                      <Route
                        path="admin/*"
                        element={
                          <>
                            <AdminSearch />
                            <EditAdmin />
                          </>
                        }
                      />
                    </Routes>
                  </div>
                </div>
              </>
            }
          />
          <Route
            path="/manageuser/*"
            element={
              <>
                <div className="adminapp">
                  <div className="adminapp_first">
                    <AdminSide />
                  </div>
                  <div className="adminapp_sec">
                    <Routes>
                      <Route
                        path="user/*"
                        element={
                          <>
                            <AdminSearch />
                            <ManageUser />
                          </>
                        }
                      />
                    </Routes>
                  </div>
                </div>
              </>
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
