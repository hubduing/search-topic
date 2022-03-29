import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./app.less";
import {setCount} from '../reducers/reposReducer';

const App = () => {
  const dispath = useDispatch()
  const count = useSelector(state => state.repos.count)

  function onCountClick() {
    dispath(setCount(5))
  }

  return (
    <div className="app">
      <button onClick={() => onCountClick() }>COUNT</button>
      <div>{count}</div>
    </div>
  )
};

export default App