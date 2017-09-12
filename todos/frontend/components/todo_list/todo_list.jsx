import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {

  render() {
    return(
      <div>
        <ul>
          {
            this.props.todos.map((todo) => {
              return (
                // <li key = {todo.id}>{todo.body}</li>
                <TodoListItem
                  key = {todo.id}
                  todo = {todo}
                  removeTodo = {this.props.removeTodo}
                  updateTodo = {this.props.updateTodo}/>
              );
            })
          }
        </ul>
        <TodoForm receiveTodo = {this.props.receiveTodo} />
      </div>
    );
  }
}
export default TodoList;
