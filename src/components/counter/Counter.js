import React from "react";
import "./Counter.css"
import { useDispatch, useSelector } from "react-redux";
import { arttir, azalt, sifirla } from "../../redux/actions/counterActions";
const Counter = () => {

  const { text, sayac } = useSelector((state) => state.counterReducer);

  const dispatch=useDispatch()
  return (
    <div className="app">
      <h2 className="counter-header">Counter With Redux</h2>
      <h2>{sayac}</h2>
      <h2>{text} </h2>
      <div>
        <button className="counter-button positive" onClick={()=>dispatch(arttir())}>ARTTIR</button>
        <button className="counter-button "onClick={()=>dispatch(sifirla())}>RESET</button>
        <button className="counter-button negative"onClick={()=>dispatch(azalt())}>AZALT</button>
      </div>
    </div>
  );
};

export default Counter;
