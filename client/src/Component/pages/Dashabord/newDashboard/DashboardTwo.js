import React from "react";
import "../../CssFile/dashboard/dashboardTwo.css";
import DashNavbar from "./DashNavbar";
import tabish from "../../../assests/tabish.png";
const DashboardTwo = () => {
  return (
    <>
      <div className="DashboardTwo ">
        <DashNavbar />
        <div className="dash_start">
          <div className="dash_start_main">
            <div className="serch_dash">
              <div className="serch_op">
                <input type="text" placeholder="serch" />
                <div className="serch_dash_btn">
                  <button>Search</button>
                </div>
              </div>
              <div className="select_dash">
                <div className="select_btn">
                  <button>select</button>
                </div>
                <div className="drop_btn">
                  <button>Recent</button>
                </div>
              </div>
            </div>
            <div className="profile_dash">
              <div className="pro_dash">
                <div className="pro_img">
                  <img src={tabish} alt="" />
                </div>
                <div className="pro_text ">
                  <h1>HI, Tabish Khan</h1>
                  <p>Welcome to your dashboard</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardTwo;
