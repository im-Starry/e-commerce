import React from "react";
import { Routes, Route } from "react-router-dom";
import ItemA from "./components/ItemA";
import ItemB from "./components/ItemB";
import ItemC from "./components/ItemC";
import ItemD from "./components/ItemD";
import ItemE from "./components/ItemE";
import ItemF from "./components/ItemF";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <div className="d-flex flex-column h-100">
        <div className="container">
          <Navbar />
          <div className="d-flex flex-wrap justify-content-xxl-between">
            <ItemA />
            <ItemB />
            <ItemC />
            <ItemD />
            <ItemE />
            <ItemF />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
