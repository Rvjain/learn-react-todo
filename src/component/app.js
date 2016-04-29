import React from 'react';
import TodosList from './TodosList';
import CreateTodo from './CreateTodo';
const todos = [
    {
        task:'make react app',
        isCompleted:true
    },
    {
        task:'make react app 2',
        isCompleted:false
    }
]

export default class App extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            todos
        };
    }

    render(){
        return (
            <div>
                <h1>React TODOs List</h1>
                <CreateTodo addTodo = {this.addTodo.bind(this)}/>
                <TodosList todos = {this.state.todos}  onTaskClick = {this.onTaskClick.bind(this)} saveTask={this.saveTask.bind(this)}/>
            </div>
        )
    }

    addTodo(task){
        this.state.todos.push({task, isCompleted:false});
        this.setState({todos: this.state.todos});
    }

    onTaskClick(task){
        const foundTodo = _.find(this.state.todos, todo => todo.task === task);
        foundTodo.isCompleted = !foundTodo.isCompleted;
        this.setState({todos : this.state.todos});
    }

    saveTask(oldTask, newTask){
        const oldTodo = _.find(this.state.todos, todo => todo.task === oldTask);
        oldTodo.task = newTask;
        this.setState({todos : this.state.todos});
    }
}