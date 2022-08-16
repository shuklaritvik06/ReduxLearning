import { useSelector,useDispatch } from "react-redux";
import "./App.css";
import { actions } from "./store/index";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={()=>{dispatch(actions.increment())}}>+</button>
      <button onClick={()=>{dispatch(actions.decrement())}}>-</button>
      <button onClick={()=>{dispatch(actions.reset())}}>Reset</button>
      <button onClick={()=>{dispatch(actions.add(10))}}>Add 10</button>
    </>
  );
}

export default App;
