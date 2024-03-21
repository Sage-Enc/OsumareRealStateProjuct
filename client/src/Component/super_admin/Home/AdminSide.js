import React, { useState } from "react";
import { IoHome } from "react-icons/io5";
import { AiFillEdit } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { IoShareSocialSharp } from "react-icons/io5";
import { FcApproval } from "react-icons/fc";
import { Link } from "react-router-dom";
import { RiLogoutCircleRLine } from "react-icons/ri";
import "../../pages/CssFile/super_admin/Home/admin_side.css";

const AdminSide = () => {
    return (
      <>
        <div className="aside">
          <div className="section">
            <div className="admin_profile">
              <div className="admin_img">
                <img src="" alt="" />
              </div>
              <p>Admin</p>
              <hr />
            </div>

            <div className="Dash_section">
              <h5>Dashboards</h5>
              <Link to="/approval/adminmain/adminapro">
                <div className="home-btn">
                  <button>
                    <IoHome id="home-btn" />
                    Home
                  </button>
                </div>
              </Link>
              <Link to="/approval/approvelist">
                <div className="approve-btn">
                  <button>
                    <FcApproval id="approve-btn" />
                    Approvals List
                  </button>
                </div>
              </Link>
            </div>
            <div className="General_section">
              <h5>General</h5>
              <Link to="/editprofile/admin">
                <div className="edit-btn">
                  <button>
                    <AiFillEdit id="edit-btn" />
                    Edit profile
                  </button>
                </div>
              </Link>
              <Link to="/manageuser/user">
                <div className="manage-btn">
                  <button>
                    <FaUser id="manage-btn" />
                    Manage Users
                  </button>
                </div>
              </Link>
              <Link to="/refersection/refermain">
                <div className="refer-btn">
                  <button>
                    <IoShareSocialSharp id="refer-btn" />
                    Refer Manage
                  </button>
                </div>
              </Link>
            </div>
            <div className="setting_section">
              <h5>Setting</h5>
              <Link to="/approval/adminmain">
                <div className="logout-btn">
                  <button>
                    <RiLogoutCircleRLine id="logout-btn" />
                    Logout
                  </button>
                </div>
              </Link>
            </div>
          </div>
          <div className="bottom-text">
            <div className="logo">
              <img src="" alt="" />
            </div>
            <div className="bottom-text1">
              <p>Myspace India</p>
            </div>
          </div>
        </div>
      </>
    );
  }

export default AdminSide;
