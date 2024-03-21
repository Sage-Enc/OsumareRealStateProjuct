import React from "react";
import { FaArrowLeft } from "react-icons/fa6";

function approval() {
  return (
    <div className="ApprovalPage">
      <div className="topControl">
        <FaArrowLeft />
        <p className="backBtnName">Back</p>
      </div>
      <div className="propertyOwnerDetails">
        <h2 className="propertyOwner">Property Owner</h2>
      </div>
    </div>
  );
}

export default approval;
