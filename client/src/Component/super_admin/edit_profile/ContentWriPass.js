import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import "../../pages/CssFile/super_admin/editprofile/editadmin.css";
import { FaChevronDown } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const ContentWriPass = () => {
    const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const [user, setUser] = useState({
    password: "",
  });
  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  return (
    <div className="admin-pro2">
      <div className="admin-pass">
        <div className="pass-sec">
          <div className="sec1">
            <input type="text" />
          </div>
          <div className="sec2">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="two"
              className="pass"
              placeholder="Password"
              value={user.password}
              onChange={handleInputs}
            />
            <div
              className="toggle-passwordAdmin"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <MdVisibility /> : <MdVisibilityOff />}
            </div>
          </div>
          <div className="sec3">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="two"
              className="pass"
              placeholder="Password"
              value={user.password}
              onChange={handleInputs}
            />
            <div
              className="toggle-passwordAdmin"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <MdVisibility /> : <MdVisibilityOff />}
            </div>
          </div>
          <div className="sec4">
            {/* <div className="dropdown_tab"> */}
              <a
                className="tab_dorpdown_tab dropdown-toggle"
                href="/"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="true"
              >
                Properties Management
                <FaChevronDown />
              </a>
              <ul className="dropdown-menu " aria-labelledby="dropdownMenuLink">
                <li>
                  <Link
                    className="dropdown-item"
                    to="/approval/adminmain/adminapro"
                  >
                    Full Access
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/approval/adminmain/approval"
                  >
                    Refer Management
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/approval/adminmain/user">
                    Properties Management
                  </Link>
                </li>
              </ul>
            {/* </div> */}
          </div>
        </div>
        <div className="admin-edit-btn1">
          <div className="Admin-delete-btn">
            <button>
              <MdDelete />
              Delete Account
            </button>
          </div>
          <div className="save-btn">
            <button>Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentWriPass;
