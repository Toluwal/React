function TodoList({ todos, onToggle, onDelete }) {
  if (todos.length === 0) {
    return <p>No tasks to show.</p>;
  }

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              cursor: "pointer",
            }}
            onClick={() => onToggle(todo.id)}
          >
            {todo.completed ? "☑" : "☐"} {todo.text}
          </span>
          <button onClick={() => onDelete(todo.id)}>❌</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
