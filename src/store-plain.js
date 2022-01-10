import { applyMiddleware, combineReducers, createStore } from "redux";
import produce from "immer";
import thunk from "redux-thunk";

export function getTodoApi() {
  return async (dispatch) => {
    // Yay! Can invoke sync or async actions with `dispatch`
    const result = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await result.json();

    dispatch({ type: "GET", data });
  };
}

const initState = { todo: [{ id: 1, title: "todo satu" }] };

const todoReducer = produce((state = initState, action) => {
  switch (action.type) {
    case "ADD":
      state.todo.push({ id: 2, title: "Hello Word" });
      return state;
    case "GET":
      state.todo = action.data;
      return state;
    default:
      return state;
  }
});

const initStateHello = { hello: [{ id: 1, title: "hello satu" }] };

const helloReducer = produce((state = initStateHello, action) => {
  switch (action.type) {
    case "ADD":
      state.hello.push({ id: 2, title: "Hello Word" });
      return state;
    default:
      return state;
  }
});

const reducer = combineReducers({
  todo: todoReducer,
  hello: helloReducer
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
