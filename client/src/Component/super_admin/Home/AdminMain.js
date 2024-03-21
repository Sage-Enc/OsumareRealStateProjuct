import React, {useState} from "react";
import { Link } from "react-router-dom";
import "../../pages/CssFile/super_admin/Home/adminhome.css";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const AdminMain = () => {
  const [selectedComponent, setSelectedComponent] = useState('Approved Properties'); // Initial selected value

  const handleComponentChange = (componentName) => {
    setSelectedComponent(componentName);
  };
  return (
    <>
      <div className="admin_main">
        <div className="overview">
          <h4>Overview</h4>
        </div>
        <div className="overview_section">
          <div className="approve_pro">
            <div className="prop-text">
              <h4> 1000 Properties</h4>
              <h5>Approved Properties</h5>
              <h6>Overall</h6>
            </div>
          </div>
          <div className="approve_req">
            <div className="req-text">
              <h4>78 Properties</h4>
              <h5>Approval Request</h5>
              <h6>In last 2 days</h6>
            </div>
          </div>
          <div className="user_added">
            <div className=" add-text">
              <h4>8 Users added</h4>
              <h5>Approved Properties</h5>
              <h6>4 Active</h6>
            </div>
          </div>
          <div className="enquiries">
            <div className="enq-text">
              <h4>100 Enquiries</h4>
              <h5>Approved Properties</h5>
              <h6>In last 24 Hours</h6>
            </div>
          </div>
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
        {/* <div className="select_section">
          <div className="dropdown_tabs">
            <h5>Select</h5>
            <div className="dropdown_tab">
              <a
                className="tab_dorpdown_tab btn-secondary dropdown-toggle"
                href="/"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Approved Properties
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
                  <Link
                    className="dropdown-item"
                    to="/approval/adminmain/user"
                  >
                    Users
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};
export default AdminMain;
