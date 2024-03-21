import React from 'react'
import { AiFillEdit } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { TiLocation } from "react-icons/ti";
import { Link } from "react-router-dom";

const ApprovalCancel = () => {
  return (
    <>
    <div className="smamm_pagi_one1">
        <div className="smalles_pagi_card_start1 flex ">
          <div className="smalles_pagi_img">
            <img src="" alt="nice" />
          </div>
          <div className="smalles_pagi_inform">
            <div className="smalles_pagi_inform_one">
              <div className="smalles_next flex relative">
                <h1>South Delhi Luxuries Home</h1>
                <div className="smalles_next_one_one">
                  <div className="approved_text">
                    <h6>Cancelled</h6>
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
                <div className="first_button1">
                  <button>
                    <FaUser />
                    Contact Owner
                  </button>
                </div>
                <Link to="/approval/approvelist">
                  <div className="second_button1">
                    <button>
                      <AiFillEdit id="approve-btn" />
                      Open to approve
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ApprovalCancel;