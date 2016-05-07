import React from 'react';

export default class TodosListItem extends React.Component{
    constructor(props){
        super(props);

        this.state ={isEditing:false};
    }

    renderActions(){
        if(this.state.isEditing){
            return (
                <td>
                    <button onClick={this.onSaveClick.bind(this)}>Save</button>
                    <button onClick={this.onCancelClick.bind(this)}>Cancel</button>
                </td>
            );
        }

        return (
            <td>
                <button onClick={this.onEditClick.bind(this)}>Edit</button>
                <button onClick={this.onDeleteClick.bind(this)}>Delete</button>
            </td>
        );

    }

    renderTask(){
        const {task , isCompleted} = this.props;

        const taskStyle = {
            color: isCompleted ? 'green' : 'red',
            cursor: 'pointer'
        }

        if(this.state.isEditing){
            return (
                <td>
                   <form onSubmit={this.onSaveClick.bind(this)}>
                       <input type="text" defaultValue={task} ref="editInput"/>
                   </form>
                </td>
            )
        }

        return (
            <td onClick={this.props.onTaskClick.bind(this, task)} style={taskStyle}>{this.props.task}</td>
        )
    }

    render(){
        return (
            <tr>
                {this.renderTask()}
                {this.renderActions()}
            </tr>
        )
    }

    onEditClick(){
        this.setState({isEditing:true});
    }

    onCancelClick(){
        this.setState({isEditing: false});
    }

    onSaveClick(event){
        event.preventDefault();
        const oldTask = this.props.task;
        const newTask = this.refs.editInput.value;
        
        this.props.saveTask(oldTask, newTask);
        this.setState({isEditing:false});

    }

    onDeleteClick(event){
        event.preventDefault();
        const task = this.props.task;
        this.props.onDeleteTask(task);
    }


}