import React from "react";
import { location } from "../menu-items/Menuproduct";

const Location = () => {
  return (
    <div className="Location">
      <div className="location_main">
        {location.map((items, index) => {
          return (
            <div className="location_start">
              <h5>{items.loca}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Location;
