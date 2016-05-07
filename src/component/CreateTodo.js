import React from 'react';
import _ from 'lodash';

const error = '';
export default class CreateTodo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error
        };
    }
    render(){
        return (
            <div>
                <form onSubmit={this.handleCreate.bind(this)}>
                    <input type="text" placeholder="Please add something to add to todo" ref="todoInput"/>
                    <button>Add Todo</button>
                    {this.renderError()}
                </form>
            </div>
        )
    }

    getStyles(){
        return {
            error: {
                color:'RED'
            }
        }
    }

    renderError(){
        return (<p style={this.getStyles().error}>{this.state.error}</p>)
    }

    handleCreate(event){
        event.preventDefault();
        const input = this.refs.todoInput.value;
        const validateInput = this.validateInput(input);
        if(validateInput === null){
            this.props.addTodo(this.refs.todoInput.value);
            this.refs.todoInput.value = '';
            this.setState({error: ''});
        }else{
            this.setState({error: validateInput});
        }
    }

    validateInput(task){
        if(!task){
            return 'Please provide an input for task';
        }else if(_.find(this.props.todos, todo => todo.task === task)){
            return 'Task already added';
        }else{
            return null;
        }
    }
}