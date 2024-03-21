import React, { useState } from "react";
import { RiEdit2Fill } from "react-icons/ri";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import "../../pages/CssFile/super_admin/editprofile/editadmin.css";

const AdminPass = () => {
  const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
  };
  const [user, setUser] = useState({
    password: ""
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
            <div className="toggle-passwordAdmin" onClick={togglePasswordVisibility}>
              {showPassword ? <MdVisibility /> : <MdVisibilityOff />}
            </div>
          </div>
        </div>
        <div className="admin-edit-btn">
          <button>
            <RiEdit2Fill />
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminPass;
