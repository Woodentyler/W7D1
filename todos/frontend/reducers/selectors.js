
const allTodos = (state) => {
  let todos = Object.keys(state.todos);
  todos = todos.map((todo) => {
    return state.todos[todo];
  });
  return todos;
};

export default allTodos;
window.allTodos = allTodos;
