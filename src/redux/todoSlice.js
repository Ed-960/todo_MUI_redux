import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
   name: 'todos',
   initialState: {
      todos: []
   },
   reducers: {
      addTodo(state, action) {
         state.todos.push({
            id: new Date().toISOString(),
            text: action.payload.inputText,
            important: false,
            done: false
         })
      },
      onDelete(state, action) {
         state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
      },
      onDone(state, action) {
         const isDone = state.todos.find(todo => todo.id === action.payload.id);
         isDone.done = !isDone.done;
      },
      onImportant(state, action) {
         const isImportant = state.todos.find(todo => todo.id === action.payload.id);
         isImportant.important = !isImportant.important;
      },
      onEdit(state, action) {
         const { id, editedInputText } = action.payload;
         const existingTodo = state.todos.find(todo => todo.id === id);
         if (existingTodo) {
            existingTodo.text = editedInputText;
         }
      }
   }
});

export const { addTodo, onDelete, onDone, onImportant, onEdit } = todoSlice.actions;
export default todoSlice.reducer;