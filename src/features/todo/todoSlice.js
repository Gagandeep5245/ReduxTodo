import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {

    todos: [{id: 1, text: "hello world"}] // we define a initial state for our todo our first todo will be "hello world", we can leave it blank also..
}

export const todoSlice = createSlice({  // we create a todoSlice with the help of createSlice method in redux-toolkit


    name: 'todo',
    initialState,
    reducers: {          // reducers are functions which is used for changing state with the help of actions 
        addTodo: (state, action) => {// addTodo is a action , it will create a todo , 
            const todo = {

                id: nanoid(), // nanoid is a library , it will give unique id for my each todo
                text: action.payload//The text of the todo is derived from action.payload, which contains the data passed during the dispatch.
            }
            state.todos.push(todo) //state.todos.push(todo) adds the new todo object to the todos array.
           
        },
        removeTodo: (state, action) =>{//removeTodo is an action that is dispatched with the ID of the todo item to be removed as the payload.

            state.todos = state.todos.filter((todo) => todo.id !== action.payload)//The filter() method creates a new array by excluding the todo item where todo.id === action.payload. The result is reassigned to state.todos.

        },
       
    }
})


export const {addTodo, removeTodo ,updateTodo} = todoSlice.actions

export default todoSlice.reducer