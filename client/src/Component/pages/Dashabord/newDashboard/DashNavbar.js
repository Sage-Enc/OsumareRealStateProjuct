import React from "react";
import { MenuTwo } from "../../../multiuse/menu-items/Menuproduct";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import "../../CssFile/dashboard/dashboardTwo.css";
const DashNavbar = () => {
  return (
    <div className="dashNavbar">
      <div className="dashnav">
        <div className="dashnave">
          <ul className="flex items-center gap-4">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Wishlist</a>
            </li>
            <li>
              <a href="">blog</a>
            </li>
            <li>
              <a href="">Dashboard</a>
            </li>
          </ul>
        </div>
        <div className="buttons">
          <div className="dash_refer">
            <a href="">Refer and earn</a>
          </div>
          <div className="dash_buttton">
            <Link to="/postMian">
              <button className="btn" id="btn">
                Post Properties
              </button>
            </Link>
          </div>

          <button
            type="button"
            className="rounded-fully flex text-sm rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="user-dropmenu"
            data-dropdown-placement="bottom"
          >
            <span className="sr-only">Open user menu</span>
            <FaUser id="nav_icon_user" />
          </button>
          <div className="dropdowns hidden" id="user-dropmenu">
            <div className="down">
              <div className="nav-menu-bar">
                {MenuTwo.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      <Link className={item.cName} to={item.url}>
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </div>
              <ul className="text-whir color-black">
                <li>
                  <a
                    href="/miniDrawer"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Earnings
                  </a>
                </li>
                <li>
                  <a
                    href="./register"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    id="login"
                  >
                    Signup / Login
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashNavbar;
