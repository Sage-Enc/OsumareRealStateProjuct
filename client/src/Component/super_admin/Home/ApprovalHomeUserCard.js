import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";

import "../../pages/CssFile/super_admin/Home/users.css";

function ApprovalHomeUserCard(prop) {
    const [Active, setActive] = useState(prop.Acti);
    const myStyle = Active ? { color: "#057755" } : { color: "#9B0F1A" };
  return (
    <div className="home-user-main-container">
        <div className="home-user-data">
          <div className="home-user-img-container">
            <img
              src="/userimg.jpg"
              alt="User Image"
              className="home-user-img"
            />
          </div>
          <div className="home-user-name">Tabish Khan</div>
          <div className="home-user-active" style={myStyle}>
            {Active ? "Active" : "Offline"}
          </div>
          <div className="home-user-email">
            <p>tabish@gmail.com</p>
          </div>
          <div className="home-user-button-container">
            <button className="DeleteAccount-Btn">
              <MdDelete />
              Delete Account
            </button>
            <button className="EditProfle-Btn">Edit Profile</button>
          </div>
        </div>
      </div>
  )
}

export default ApprovalHomeUserCard