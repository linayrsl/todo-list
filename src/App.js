import React, {Component} from 'react';
import './App.css';
import AddTaskForm from "./AddTaskForm/AddTaskForm";
import Task from "./Task/Task";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        };
    }

    addTask(task) {
        this.setState({
            tasks: [...this.state.tasks, task]
        }, () => this.saveToLocalStorage(this.state.tasks));
    }

    deleteTask(taskToDelete) {
        this.setState({
           tasks: this.state.tasks.filter((task) => task.title !== taskToDelete)
        }, () => this.saveToLocalStorage(this.state.tasks));
    }

    completeTask(taskToComplete) {
        console.log(taskToComplete);
        this.setState({tasks: this.state.tasks.map((task) => {
            if (task.title === taskToComplete) {
                task.isComplete = true;
            }
            return task;
        })}, () => this.saveToLocalStorage(this.state.tasks));
    }

    saveToLocalStorage(tasks) {
        let tasksJson = JSON.stringify(tasks);
        localStorage.setItem('listOfTasks', tasksJson);
    }

    exportFromLocalStorage() {
        let tasksJson = localStorage.getItem('listOfTasks');
        return tasksJson ? JSON.parse(tasksJson) : [];
    }

    componentDidMount() {
        this.setState({
            tasks: this.exportFromLocalStorage()
        });
    }

    render() {
        return (
            <div className={"App"}>
              <AddTaskForm onAdd={this.addTask.bind(this)} />
              <ul>
                  {this.state.tasks.map((task, index) => {
                      return <Task
                          key={index}
                          taskTitle={task.title}
                          taskComplete={task.isComplete}
                          onDelete={this.deleteTask.bind(this)}
                          onComplete={this.completeTask.bind(this)}/>})}
              </ul>
            </div>
        );
    }
}

export default App;
