import React from "react";

function BtnComponent(props) {
  const color = "white";
  return (
    <div>
      {props.status === 0 ? (
        <button className="" data-aos="fade-up" onClick={props.start}>
          Start
        </button>
      ) : (
        <div>
          <h3 data-aos="fade-up" style={{ color: color }}>
            ππ΄πΌπΈπ½π³π΄π
          </h3>
        </div>
      )}
    </div>
  );
}

export default BtnComponent;
