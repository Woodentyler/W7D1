import React from 'react';

class TodoListItem extends React.Component {
  render() {
    return(
      <li>{this.props.todo.title}
        <button onClick = { this.props.removeTodo.bind(this, this.props.todo) }>Delete</button>
        <button onClick = { this.props.updateTodo.bind(this, this.props.todo) }>Delete</button>
      </li>
    );
  }
}

export default TodoListItem;
