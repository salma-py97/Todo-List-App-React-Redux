import { createSlice } from "@reduxjs/toolkit";
import TodoItem from "../../components/TodoItem";


export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todoList: []
  },
  reducers: {
    saveTodo: (state, action) => {
      state.todoList.push(action.payload)
    },
    setCheck: (state, action) => {
      state.todoList.map(todo => {
        if (action.payload === todo.id) {
          todo.done = !todo.done
        }
      })
    }
  }
})

// Action creators are generated for each case reducer function

export const {saveTodo, removeTodo, setCheck} = todoSlice.actions

export default todoSlice.reducer