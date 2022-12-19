import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    userId: null,
    notes: [],
  },
  reducers: {
    addNote: (state, action) => {
      state.notes = action.payload;
    },
    deleteNote: (state, action) => {
      state.notes = action.payload;
    },
    getNote: (state, action) => {
      state.notes = action.payload;
    },
  },
});

export const { addNote, deleteNote, getNote } = notesSlice.actions;

export default notesSlice.reducer;
