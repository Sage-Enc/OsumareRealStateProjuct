import { React, useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import "../../pages/CssFile/super_admin/Approvallist/Approvalmain.css";
import ApprovalTabs from "./ApprovalTabs";

const ApprovalMain = () => {
    // const [activeTab, setActiveTab] = useState("tab1");
    // const handleTabClick = (tab) => {
    //   setActiveTab(tab);
    // };

    const [selectedComponent, setSelectedComponent] = useState('Approved Properties'); // Initial selected value

    const handleComponentChange = (componentName) => {
      setSelectedComponent(componentName);
    };
  return (
    <div className="refermain">
      <div className="refername">
        <div className="refertext">
          <h4>Approval Lists</h4>
        </div>
        {/*  */}
        <div className="select_section">
      <div className="dropdown_tabs">
        <h5>Select</h5>
        <div className="dropdown_tab">
          <a
            className="tab_dorpdown_tab btn-secondary dropdown-toggle"
            href="/" // Remove unnecessary href attribute
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {selectedComponent} <MdOutlineKeyboardArrowDown />
          </a>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <li>
              <Link
                className="dropdown-item"
                to="/approval/adminmain/adminapro"
                onClick={() => handleComponentChange('Approved Properties')}
              >
                Approved Properties
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item"
                to="/approval/adminmain/approval"
                onClick={() => handleComponentChange('Approval Request')}
              >
                Approval Request
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item"
                to="/approval/adminmain/user"
                onClick={() => handleComponentChange('Users')}
              >
                Users
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
        {/* <div className="refertext2">
          <h3>Select</h3>
          <div className="dropdown_tab">
            <a
              className="tab_dorpdown_tab btn-secondary dropdown-toggle"
              href="/"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Recent
              <MdOutlineKeyboardArrowDown />
            </a>
            <ul className="dropdown-menu " aria-labelledby="dropdownMenuLink">
              <li>
                <Link
                  className="dropdown-item"
                  to="/approval/adminmain/adminapro"
                >
                  Approved Properties
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="/approval/adminmain/approval"
                >
                  Approval Request
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/approval/adminmain/user">
                  Users
                </Link>
              </li>
            </ul>
          </div>
        </div> */}
      </div>
<ApprovalTabs />
    </div>
  );
};

export default ApprovalMain;
