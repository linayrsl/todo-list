import React, {Component} from 'react';
import './Task.css';

class Task extends Component {

    render() {
        return (
            <li style={{textDecorationLine: this.props.taskComplete? 'line-through' : ''}}>
                {this.props.taskTitle}
                <button onClick={() => this.props.onDelete(this.props.taskTitle)}>Delete</button>
                <button onClick={() => this.props.onComplete(this.props.taskTitle)}>Complete</button>
            </li>
        );
    }
}

export default Task;