import React from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import "./app.less";
import Main from "./main/Main";

const App = () => {
  const dispath = useDispatch()

  return (
    <BrowserRouter>
      <div className="container">
        <Route path="/" element={<Main />}/>
      </div>
    </BrowserRouter>
  )
};

export default App