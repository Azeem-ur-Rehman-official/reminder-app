import React, { useState } from "react";
import DisplayComponent from "./DisplayComponent";
import BtnComponent from "./BtnComponent";

function ControlerComponent(props) {
  const [time, setTime] = useState({
    s: 0,
    m: props.M,
    t: props.T,
  });
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);

  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 1000));
  };

  var updatedS = time.s,
    updatedM = time.m,
    updateT = time.t;

  const run = () => {
    if (updatedS === 0) {
      if (updatedM != 0) {
        updatedM--;
        updatedS = 60;
      } else stop();
    }

    updatedS--;
    updateT--;
    return setTime({ s: updatedS, m: updatedM, t: updateT });
  };

  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  };

  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ s: 0, m: props.M });
  };

  const resume = () => start();

  return (
    <div className="main-section">
      <div className="clock-holder">
        <div className="stopwatch">
          <DisplayComponent time={time} t2={props.T} />
          <BtnComponent
            status={status}
            resume={resume}
            reset={reset}
            stop={stop}
            start={start}
          />
        </div>
      </div>
    </div>
  );
}

export default ControlerComponent;
