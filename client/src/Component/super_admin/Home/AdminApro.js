import React from 'react'
import "../../pages/CssFile/super_admin/Home/adminapro.css";
import { TiLocation } from "react-icons/ti";
import { BiSolidShow } from "react-icons/bi";
import { IoEyeSharp } from "react-icons/io5";
import { RiDragDropLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

const AdminApro = () => {
    return (
      <div className="smamm_pagi_one1">
        <div className="smalles_pagi_card_start1 flex ">
          <div className="smalles_pagi_img overflow-hidden">
            <img src="/propertyImg.jpg" alt="Image-Name"  />
          </div>
          <div className="smalles_pagi_inform">
            <div className="smalles_pagi_inform_one">
              <div className="smalles_next flex relative">
                <h1>South Delhi Luxuries Home</h1>
                <div className="smalles_next_one_one">
                  <Link to={"/approval/enquiries"} className="smalles_next_one">
                    <div className="smalles_next_one_check">
                      <h5 className="flex items-center gap-3">
                        24
                        <RiDragDropLine />
                      </h5>
                      <p>Enquiries</p>
                    </div>
                  </Link>
                  <div className="smalles_next_two">
                    <div className="smalles_next_one_check">
                      <h5 className="flex items-center gap-3">
                        89
                        <BiSolidShow />
                      </h5>
                      <p>Views </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="smalles_card_pagi_icons">
              <span className="flex items-center ">
                <TiLocation className="smalles_card_pagi_icons_icon" /> GK I,
                New Delhi
              </span>
            </div>
            <div className="smalles_card_price">
              <div className="price">
                <h4>price</h4>
              </div>
              <div className="smalles_card_pagi_btns flex justify-center">
                <div className="first_button">
                  <button>Delete</button>
                </div>
                <div className="second_button">
                  <button className="flex items-center">
                    <IoEyeSharp />
                    View Leads
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default AdminApro;