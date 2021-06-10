import React, { useState } from "react";
import ControlerComponent from "./ControlerComponent";
import "./Style/Reminder.css";

const Reminder = () => {
  const [Value, setValue] = useState(false);

  const [total, setTotal] = useState("");

  const [Min, setMin] = useState("");

  function PassValues() {
    setTotal(Min * 60);
    setValue(true);
  }

  return (
    <div className="container">
      <h2 className="mainHeading">ⓈⒺⓉ ⓎⓄⓊⓇ ⒶⓁⒶⓇⓂ</h2>

      {Value == true ? (
        <ControlerComponent T={total} M={Min} />
      ) : (
        <div>
          <div data-aos="slide-left" className="inputField">
            <input
              type="Number"
              placeholder="Minuts..."
              value={Min}
              onChange={(e) => setMin(e.target.value)}
            />
          </div>
          <button data-aos="slide-right" onClick={PassValues}>
            𝗦𝗘𝗧
          </button>
        </div>
      )}
    </div>
  );
};

export default Reminder;
