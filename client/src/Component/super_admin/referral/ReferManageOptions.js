import React from "react";
import './ReferManage.css'
import { Link } from "react-router-dom";

function ReferManageOptions() {
  return (
    <div className="ReferManageOptions">
      <div className="OptionContainer">
        <div><Link>Pending Payment</Link></div>
        <div><Link>Reward History</Link></div>
      </div>
    </div>
  );
}

export default ReferManageOptions;
