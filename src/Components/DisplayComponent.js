import React, { useState } from "react";
import Alarm from "./Alarm";

function DisplayComponent(props) {
  const [Check, setCheck] = useState(false);
  var color;
  var Half = props.t2 / 2,
    byThird = props.t2 / 3;
  function checkColor() {
    if (Half < props.time.t) {
      color = "green";
    } else if (props.time.t <= Half && props.time.t > byThird) {
      color = "yellow";
    } else if (props.time.t <= byThird && props.time.t > 0) {
      color = "red";
    }
    if (props.time.t === 0) {
      color = "black";
    }
    if (props.time.t < 0) {
      setCheck(true);
    }
  }
  return (
    <div data-aos="flip-up" className="display">
      {Check == false ? (
        <div>
          <h3 style={{ color: "white" }}>𝕋𝕠𝕕𝕒𝕪 𝔸𝕝𝕒𝕣𝕞</h3>
          <div className="color">{checkColor()}</div>
          <div className="show" style={{ color: color }}>
            <span>
              {props.time.m >= 10 ? props.time.m : "0" + props.time.m}
            </span>

            <span>
              {props.time.s >= 10 ? props.time.s : "0" + props.time.s}
            </span>
          </div>
        </div>
      ) : (
        <Alarm />
      )}
    </div>
  );
}

export default DisplayComponent;
