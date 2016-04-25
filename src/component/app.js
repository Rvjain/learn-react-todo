import React from 'react';
import TodosList from './TodosList';

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
                <TodosList todos = {this.state.todos}/>
            </div>
        )
    }
}