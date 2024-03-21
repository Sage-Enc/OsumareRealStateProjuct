import React from 'react'
import "../Approval/superadmin.css"
import { FaArrowLeft } from "react-icons/fa";
import Usercard from './usercard'
import { Link } from "react-router-dom";

function enquiries() {
  return (
    <div className="EnquiryPage">
      <div className="CardTop">
        <div className="CardTop-Left">
          <Link to="/approval/adminmain/adminapro">
            <div className="enquiryBtn">
              <button >
                <FaArrowLeft />
              </button>
            </div>
          </Link>
          <div className="enquiryTitle">
            <h2>Enquiries</h2>
          </div>
        </div>
        <div className="CardTop-Right">
          <h5>Select</h5>
          <div className="SelectForm">
            <form action="">
              <select name="" id="">
                <option value="Relivance">Relivance</option>
                <option value="HighToLow">High To Low</option>
                <option value="LowToHigh">Low To High</option>
                <option value="Popularity">Popularity</option>
              </select>
            </form>
          </div>
        </div>
      </div>
      <Usercard />
      <Usercard />
      <Usercard />
      <Usercard />
      <Usercard />
      <Usercard />
      <Usercard />
      <Usercard />
      <Usercard />
    </div>
  );
}

export default enquiries;