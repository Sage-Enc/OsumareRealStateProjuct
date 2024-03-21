import React from "react";
import { TiLocation } from "react-icons/ti";
import { BiSolidShow } from "react-icons/bi";
import { IoEyeSharp } from "react-icons/io5";
import { RiDragDropLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import "../../pages/CssFile/super_admin/refer/refermain.css";

const Refermain = () => {
  return (
    <div className="refermain">
      <div className="refername">
        <div className="refertext">
          <h4>Refer leads</h4>
        </div>
        <div className="refer-drp-btn"></div>
      </div>
        <div className="smamm_pagi_refer">
          <div className="smalles_pagi_card_refer flex ">
            <div className="smalles_pagi_img">
              <img src="" alt="nice" />
            </div>
            <div className="smalles_pagi_inform">
              <div className="smalles_pagi_inform_one">
                <div className="smalles_next flex relative">
                  <h1>South Delhi Luxuries Home</h1>
                  <div className="smalles_next_one_one">
                    <div className="smalles_next_one">
                      <Link
                        to="/approval/enquiries"
                        className="flex items-center gap-3"
                      >
                        <div className="smalles_next_one_check">
                          <RiDragDropLine />
                          24
                          <p>Enquiries</p>
                        </div>
                      </Link>
                    </div>
                    <div className="smalles_next_two">
                      <div className="smalles_next_one_check">
                        <h5 className="flex items-center gap-3">
                          <BiSolidShow />
                          89
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
                <div className="smalles_card_pagi_btns flex items-center justify-end">
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
          <div className="referbydetail">
            <div className="refertext">
              <h5>Refered By </h5>
            </div>
            <div className="user-data-refer">
              <div className="user-img-refer">
                <img src="" alt="User Image" className="user-img" />
                <div className="user-name-refer">Tabish Khan</div>
              </div>
              <div className="refer-num">
                <p>+918266947784</p>
              </div>
              <div className="user-email-refer">
                <p>tabish@gmail.com</p>
              </div>
              <div className="button-container-refer">
                <div className="Email-btn">
                  <button>
                    <MdEmail />
                    Email
                  </button>
                </div>
                <div className="call-btn">
                  <button>
                    <IoMdCall id="call-btn" />
                    Make a call
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="smamm_pagi_refer">
          <div className="smalles_pagi_card_refer flex ">
            <div className="smalles_pagi_img">
              <img src="" alt="nice" />
            </div>
            <div className="smalles_pagi_inform">
              <div className="smalles_pagi_inform_one">
                <div className="smalles_next flex relative">
                  <h1>South Delhi Luxuries Home</h1>
                  <div className="smalles_next_one_one">
                    <div className="smalles_next_one">
                      <Link
                        to="/approval/enquiries"
                        className="flex items-center gap-3"
                      >
                        <div className="smalles_next_one_check">
                          <RiDragDropLine />
                          24
                          <p>Enquiries</p>
                        </div>
                      </Link>
                    </div>
                    <div className="smalles_next_two">
                      <div className="smalles_next_one_check">
                        <h5 className="flex items-center gap-3">
                          <BiSolidShow />
                          89
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
                <div className="smalles_card_pagi_btns flex items-center justify-end">
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
          <div className="referbydetail">
            <div className="refertext">
              <h5>Refered By </h5>
            </div>
            <div className="user-data-refer">
              <div className="user-img-refer">
                <img src="" alt="User Image" className="user-img" />
                <div className="user-name-refer">Tabish Khan</div>
              </div>
              <div className="refer-num">
                <p>+918266947784</p>
              </div>
              <div className="user-email-refer">
                <p>tabish@gmail.com</p>
              </div>
              <div className="button-container-refer">
                <div className="Email-btn">
                  <button>
                    <MdEmail />
                    Email
                  </button>
                </div>
                <div className="call-btn">
                  <button>
                    <IoMdCall id="call-btn" />
                    Make a call
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Refermain;
