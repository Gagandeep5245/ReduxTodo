import React, { useState } from 'react'; // Importing React and useState for state management
import { useDispatch } from 'react-redux'; // Importing useDispatch to dispatch actions
import { addTodo } from '../features/todo/todoSlice'; // Importing the addTodo action from the todoSlice

const AddTodo = () => {
  // State to manage the input field value
  const [input, setInput] = useState('');
  
  // Using dispatch to send actions to the Redux store
  const dispatch = useDispatch();

  // Function to handle form submission
  const addTodoHandler = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    if (input.trim() !== '') { // Ensures the input is not empty before dispatching
      dispatch(addTodo(input)); // Dispatching the addTodo action with the input as payload
      setInput(''); // Resetting the input field after adding the todo
    }
  };

  return (
    <form 
      onSubmit={addTodoHandler} // Handling form submission
      className='space-x-3 mt-12' // Adding space between elements and top margin
    >
      {/* Input field for entering the todo */}
      <input
        type="text"
        className='bg-gray-800 rounded border 
        border-gray-700 focus:border-indigo-500
        focus:ring-2 focus:ring-indigo-900 text-base
        outline-none text-gray-100 py-1 px-3 leading-8
        transition-colors duration-200 ease-in-out'
        placeholder='Enter a Todo....' // Placeholder text for guidance
        value={input} // Setting the value to the state
        onChange={(e) => setInput(e.target.value)} // Updating state on user input
      />

      {/* Button to submit the form */}
      <button
        type='submit'
        className='text-white bg-indigo-500 border-0 py-2
        px-6 focus:outline-none hover:bg-indigo-600
        rounded text-lg'
      >
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
