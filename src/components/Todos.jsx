import React from 'react'; // Importing React
import { useSelector, useDispatch } from 'react-redux'; // Importing Redux hooks for state management
import { removeTodo} from '../features/todo/todoSlice'; // Importing actions from todoSlice

function Todos() {
  // Retrieving the list of todos from the Redux store using useSelector
  const todos = useSelector((state) => state.todos); // we have only one state that is 'todos'

  // Getting the dispatch function to dispatch actions
  const dispatch = useDispatch();

  return (
    <>
    
      <div>Todos</div>

      {/* List of todos */}
      
      <ul className="list-none">
        {/* Mapping through the todos array to render each todo */}
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id} // Setting a unique key for each list item
          >
            {/* Displaying the todo text */}
            <div className="text-white">{todo.text}</div>

            {/* Button to delete a todo */}
            <button
              onClick={() => dispatch(removeTodo(todo.id))} // Dispatching the removeTodo action with the todo ID as payload
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
