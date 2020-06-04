import React from "react";

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            task: ""
        };
    }

    handleChanges = e => {
        console.log(e.target.value);
        this.setState({task: e.target.value});
    };

    submitItem = e => {
        // console.log(e);
        e.preventDefault();
        e.stopPropagation();
        this.props.addTodo(e, this.state.task)
    }

    
    render() {
        return(
            <form>
                <input
                    type = "text"
                    value = {this.state.task}
                    name = "task"
                    onChange = {this.handleChanges}
                />
                <button onClick = {this.submitItem}>Add</button>
            </form>
        )
    };
}

export default TodoForm;