import React from "react";
import img from "./Images/Alarm.gif";

import "./Style/Alarm.css";

const Alarm = (props) => {
  return (
    <div flip-up className="Alarm">
      <img src={img} width="250px" alt="alram gif" />
    </div>
  );
};

export default Alarm;
