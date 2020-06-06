import React, {Component} from 'react';
import './AddTaskForm.css';

class AddTaskForm extends Component {
    constructor(props) {
        super(props);
        this.taskInput = React.createRef();
    }

    addTask(event) {
        event.preventDefault();
        this.props.onAdd({
            title: this.taskInput.current.value,
            isComplete: false
        });
        event.target.reset();
    }

    render() {
        return (
            <form onSubmit={this.addTask.bind(this)}>
                <input
                    ref={this.taskInput}
                    placeholder={"Your Task..."}
                />
                <button>Add</button>
            </form>
        );
    }
}

export default AddTaskForm;