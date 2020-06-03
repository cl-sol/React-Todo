import React from 'react';
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const quehaceres = [
  {
    task: "clean room",
    id: 1,
    completed: false
  },
  {
    task: "wash day",
    id: 2,
    completed: false
  },
  {
    task: "practice roller skating",
    id: 3,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
