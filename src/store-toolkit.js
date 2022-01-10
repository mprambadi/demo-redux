import {
  createSlice,
  configureStore,
  createAsyncThunk
} from "@reduxjs/toolkit";

export const getTodoApi = createAsyncThunk("todos/getTodoApi", async () => {
  // Yay! Can invoke sync or async actions with `dispatch`

  const result = await fetch("https://jsonplaceholder.typicode.com/posts");
  return await result.json();
});

const initialState = {
  todo: [],
  status: "idle",
  error: null
};

const todoReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    ADD(state, action) {
      state.todo.push({ id: 2, title: "Hello Word" });
      return state;
    }
  },
  extraReducers(builder) {
    builder.addCase(getTodoApi.fulfilled, (state, action) => {
      console.log(action.payload, "HERER");
      // state.todo.push(action.payload);
    });
  }
});

const initStateHello = { hello: [{ id: 1, title: "hello satu" }] };

const helloReducer = createSlice({
  name: "hello",
  initialState: initStateHello,
  reducers: {
    ADD(state, action) {
      state.hello.push({ id: 2, title: "Hello Word" });
      return state;
    }
  }
});

const store = configureStore({
  reducer: {
    todos: todoReducer.reducer,
    hello: helloReducer.reducer
  }
});

export default store;
