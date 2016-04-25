import React from 'react';
import TodoListHeader from './TodoListHeader';
import TodoListItem from './TodoListItem';
import _ from 'lodash';
export default class TodosList extends React.Component{

    renderItem(){
        return _.map(this.props.todos, (todos, index) => <TodoListItem key={index} {...todos} />);
    }

    render(){
        return (
            <table>
                <TodoListHeader />
                <tbody>
                    {this.renderItem()}
                </tbody>
            </table>
        )
    }
}