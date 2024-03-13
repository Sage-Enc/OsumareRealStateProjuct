import React from "react";
import { TbBuildingEstate, TbNetwork } from "react-icons/tb";
import { BiDollarCircle } from "react-icons/bi";
import { RiGuideLine, Ri24HoursFill } from "react-icons/ri";
import { WiTime12 } from "react-icons/wi";
import { MdOutlineSecurity } from "react-icons/md";
import "./CardInform.css";
const FrontContent = () => {
  return (
    <div className="FrontContent">
      <div className="front">
        <div className="front_one">
          <div className="front_one_start">
            <div className="front_one_text">
              <h1>
                Why Buy From Us: Your Gateway to Premium Real Estate Excellence
              </h1>
            </div>
            <div className="front_para">
              <p>
                Lorem ipsum dolor sit amet consectetur. Fermentum risus non
                vivamus tortor tortor. Congue dictum amet etiam ut ac dui. Sit
                egestas laoreet phasellus suspendisse tincidunt enim mauris.
                Interdum at aliquam duis ullamcorper in consectetur.
              </p>
            </div>
          </div>
        </div>
        <div className="front_two">
          <div className="front_two_one">
            <div className="front_two_start">
              <div className="front_two_card flex items-center">
                <h5>
                  <TbBuildingEstate id="tab_icon" />
                  Curated Property Matching
                </h5>
                <h5>
                  <TbNetwork id="tab_icon" />
                  Direct Seller Connection
                </h5>
                <h5 className="referAnd">
                  <BiDollarCircle id="tab_icon" />
                  Refer and earn
                </h5>
              </div>
            </div>
            <div className="front_two_start_two">
              <div className="front_two_card_two flex items-center">
                <h5>
                  <RiGuideLine id="tab_icon" />
                  Negotiation Support and Guidance
                </h5>
                <h5>
                  <WiTime12 id="tab_icon" />
                  Real Time Market Data Insights
                </h5>
              </div>
            </div>
            <div className="front_two_start_three">
              <div className="front_two_card_three flex items-center">
                <h5>
                  <Ri24HoursFill id="tab_icon" />
                  24/7 Customer Support
                </h5>
                <h5>
                  <MdOutlineSecurity id="tab_icon" />
                  Secure Transaction Management
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontContent;
