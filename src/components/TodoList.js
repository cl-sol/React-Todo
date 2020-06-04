// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

const TodoList = props => {
    return(
        <div className = "todo-list">
            {props.todo.map(todo => (
            <Todo key = {todo.id} todo = {todo} toggleItem = {props.toggleItem} />
            ))}
            <button onClick = {props.clearTodo}>Clear Task</button>
        </div>
    )
}

export default TodoList;