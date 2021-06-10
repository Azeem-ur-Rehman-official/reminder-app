import React, { useEffect } from "react";
import Header from "./Components/Header";
import Reminder from "./Components/Reminder";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
function App() {
  return (
    <div className="App">
      <Header />
      <Reminder />
    </div>
  );
}

export default App;
