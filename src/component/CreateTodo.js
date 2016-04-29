import React from 'react';

export default class CreateTodo extends React.Component{

    render(){
        return (
            <div>
                <form onSubmit={this.handleCreate.bind(this)}>
                    <input type="text" placeholder="Please add something to add to todo" ref="todoInput"/>
                    <button>Add Todo</button>
                </form>
            </div>
        )
    }

    handleCreate(event){
        event.preventDefault();
        this.props.addTodo(this.refs.todoInput.value);
        this.refs.todoInput.value = '';
    }
}