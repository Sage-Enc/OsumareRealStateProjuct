import React from "react";
import "./ReferManage.css";
import { FaArrowLeft, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TbBuildingBank } from "react-icons/tb";
import ReferManageOptions from "./ReferManageOptions";

function ReferManage() {
  return (
    <div className="ReferManagePage">
      <div className="ReferCardTop">
        <div className="ReferCardTop-Left">
          <div className="ReferBackBtn">
            <button>
              <FaArrowLeft />
            </button>
          </div>
          <div className="ReferTitle">
            <h2>Refer Partner</h2>
          </div>
        </div>
      </div>

      <div className="ReferPartnerTopSection">
        <div className="ReferPartnerUser">
          <div className="UserImage">
            <img src="userimg.jpg" alt="user-image" />
          </div>
          <div className="UserName">
            <p>Tabish Khan</p>
          </div>
          <div className="ButtonOptions">
            <button className="MakeACall">
              <FaPhoneAlt /> Make A Call
            </button>
            <button className="Email">
              <MdEmail /> Email
            </button>
          </div>
        </div>
        <div className="UserBankDetailForm">
          <h1><TbBuildingBank /> Bank Account Details</h1>
          <div className="UserBankData">
            <p>Union Bank of India</p>
            <br />
            <p>Tabish Khan</p>
            <br />
            <p>8520852074196346</p>
            <br />
            <p>UBIN025846</p>
            <br />
            <p>Rampur Uttar Pradesh</p>
          </div>
        </div>
      </div>
      <ReferManageOptions />
    </div>
  );
}

export default ReferManage;
