import React from "react";
import { aminityOne } from "../menu-items/Menuproduct";

const Aminity = () => {
  return (
    <div className="Aminity">
      <div className="aminity_start">
        <div className="aminity_main">
          <div className="aminity_one">
            {aminityOne.map((items, i) => {
              return (
                <div className="aminity_start_one " key={i}>
                  <h1>
                    <span id="aminity_ico">{items.aminityIcon}</span>
                    {items.aminityText}
                  </h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aminity;
