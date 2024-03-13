import React from "react";
import "../../CssFile/dashboard/sliderdash.css";
import { Link } from "react-router-dom";
import Logo from "../../../assests/myspace.png";
import {
  dashUser,
  dashUserone,
  dashUsertwo,
} from "../../../multiuse/menu-items/Menuproduct";
const SliderDash = () => {
  return (
    <div className="main_normal">
      <div className="normal">
        <div className="first_tital">
          <img src={Logo} alt="" />
          <h3>MySpace India</h3>
        </div>
        <div className="nor_start">
          {dashUser.map((items, i) => {
            return (
              <>
                <div className="nor_text" key={i}>
                  <div className="nor_text_start">
                    <h4 className="hhhh">{items.title}</h4>
                  </div>
                  <div className="ul">
                    <ul>
                      <li className="nav_item">
                        <Link to={items.url} className="nav_link">
                          {items.icon}
                          <span className="">{items.text}</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="nor_start">
          {dashUserone.map((items, i) => {
            return (
              <>
                <div className="nor_text" key={i}>
                  <div className="nor_text_start">
                    <h4 className="hhhh">{items.title}</h4>
                  </div>
                  <div className="ul">
                    <ul>
                      <li className="nav_item">
                        <Link to={items.url} className="nav_link">
                          {items.icon}
                          <span className="">{items.text}</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="nor_start">
          {dashUsertwo.map((items, i) => {
            return (
              <>
                <div className="nor_text" key={i}>
                  <div className="nor_text_start">
                    <h4 className="hhhh">{items.title}</h4>
                  </div>
                  <div className="ul">
                    <ul>
                      <li className="nav_item">
                        <Link to={items.url} className="nav_link">
                          {items.icon}
                          <span className="">{items.text}</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SliderDash;
