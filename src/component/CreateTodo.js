import React from 'react';

export default class CreateTodo extends React.Component{

    render(){
        return (
            <div>
                <form>
                    <input type="text" placeholder="Please add something to add to todo"/>
                    <button>Add Todo</button>
                </form>
            </div>
        )
    }
}