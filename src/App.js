import React from 'react';
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const todo = [
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
  
  constructor() {
    super();
    this.state = {
      todo
    };
  }

  toggleItem = todoId => {
    console.log(todoId);
    this.setState({
      todo: this.state.todo.map(todo => {
        if(todoId === todo.id) {
          return{
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    });
  };

  addTodo = (e, task) => {
    const newTodo = {
      task: task,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todo: [...this.state.todo, newTodo]
    });
  };

  clearTodo = () => {
    this.setState({
      todo: this.state.todo.filter(todo => !todo.completed)
    });
  };
  
  render() {
    return (
      <div className = "App">
        <div className = "header">
          <h1>To-Do:</h1>
          <TodoForm addTodo={this.addTodo} />
        </div>        
        <TodoList
          toggleItem={this.toggleItem}
          todo={this.state.todo}
          clearTodo={this.clearTodo}
        />
      </div>
    );
  }
}

export default App;
