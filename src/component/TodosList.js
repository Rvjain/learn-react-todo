import React from 'react';
import TodoListHeader from './TodoListHeader';
import TodoListItem from './TodoListItem';
import _ from 'lodash';
export default class TodosList extends React.Component{



    renderItem(){
        const props = _.omit(this.props, 'todos');
        return _.map(this.props.todos, (todos, index) => <TodoListItem key={index} {...todos} {...props} />);
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