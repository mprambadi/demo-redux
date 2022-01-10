import { useDispatch, useSelector, useStore } from "react-redux";
import { getTodoApi } from "./store-toolkit";
import "./styles.css";

export default function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo);
  const store = useStore();

  return (
    <div className="App">
      {JSON.stringify(todos)}
      <h1>Hello CodeSandbox</h1>

      {JSON.stringify(store.getState())}
      <h2>Start editing to see some magic happen!</h2>

      <button onClick={() => dispatch({ type: "ADD" })}> Add Todo </button>
      <button onClick={() => dispatch(getTodoApi())}> GET DATA Todo </button>
    </div>
  );
}
