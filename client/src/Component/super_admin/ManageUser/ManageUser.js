import React from 'react'
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import '../../pages/CssFile/super_admin/manageuser/manageuser.css'
import ApprovalHomeUserCard from "../Home/ApprovalHomeUserCard"

const ManageUser = () => {
  return (
    <div className="manageuser">
      <div className="userpro">
        <h4>User Profiles</h4>
        <div className="dropdown_tab">
          <a
            className="tab_dorpdown_tab btn-secondary dropdown-toggle"
            href="/"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Active
            <MdOutlineKeyboardArrowDown />
          </a>
          <ul className="dropdown-menu " aria-labelledby="dropdownMenuLink">
            <li>
              <Link
                className="dropdown-item"
                to="/approval/adminmain/adminapro"
              >
                Offline
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
      <ApprovalHomeUserCard />
      </div>
    </div>
  );
}

export default ManageUser