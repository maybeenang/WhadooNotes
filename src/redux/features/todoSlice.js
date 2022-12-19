import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    userId: null,
    todo: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todo = action.payload;
    },
    deleteTodo: (state, action) => {
      state.todo = action.payload;
    },
    getTodo: (state, action) => {
      state.todo = action.payload;
    },
  },
});

export const { addTodo, deleteTodo, getTodo } = todoSlice.actions;

export default todoSlice.reducer;
