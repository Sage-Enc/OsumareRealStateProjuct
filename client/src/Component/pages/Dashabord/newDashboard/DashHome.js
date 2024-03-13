import React, { useState } from "react";
import { IoChevronUp, IoChevronDown } from "react-icons/io5";
import { Link } from "react-router-dom";
import Tabish from "../../../assests/Avtar- tabish.png";
import { dashDrop } from "../../../multiuse/menu-items/Menuproduct";
const DashHome = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <>
      <div className="dashhome ">
        <div className="dash_info">
          <div className="dash_info_search">
            <div className="dash_search">
              <input type="text" name="" id="" placeholder="Search" />
              <div className="dah_btn_info">
                <button>Search</button>
              </div>
            </div>
            <div className="dash_search">
              <div className="dsh">
                <button>Select</button>
              </div>
              <div className="dsh_two">
                <div className="dash_drop dropdown">
                  <a
                    href="/"
                    className="tab_dorpdown_tab btn-secondary dropdown-toggle flex items-center gap-1"
                    role="button"
                    id="dropdownMenuLink"
                    data-bs-toggle="dropdown"
                    onClick={toggleDropdown}
                    aria-expanded="false"
                  >
                    recent
                    {isDropdownOpen ? <IoChevronUp /> : <IoChevronDown />}
                  </a>
                  <ul
                    aria-labelledby="dropdownMenuLink"
                    className="dropdown-menu"
                  >
                    {dashDrop.map((items, i) => (
                      <li key={i}>
                        <Link to={items.url} className="dropdown-item">
                          {items.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="dash_information">
            <div className="dash_infor flex items-center gap-2">
              <div className="dash_img_imp">
                <img src={Tabish} alt="jpg" />
              </div>
              <div className="dash_inp_text">
                <h1>Hi, Tabish khan</h1>
                <p>Welcome to your dashboard</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashHome;
