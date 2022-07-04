import Todo from "./Todo";

function Todos({
  todos,
  removeTodo,
  removeAll,
  onIsComplete,
  onRemoveComplete,
}) {
  const numOfCompletedTodos = todos.filter((todo) => todo.isComplete).length;
  return (
    <div className="todos container-md">
      <div>
        {!todos.length ? (
          <h2>Go to the beach if you've got nothing to do</h2>
        ) : null}
      </div>
      {todos.length >= 1 ? (
        <div className="row justify-content-end mb-4">
          <span className="col-11 align-self-center">
            {numOfCompletedTodos}/{todos.length} Completed
          </span>
          <button
            title="One click = Remove Completed, Two clicks = Remove All"
            onClick={() => onRemoveComplete()}
            onDoubleClick={() => removeAll()}
            className="col-1 btn btn-warning"
          >
            <i className="bi bi-trash"></i>
          </button>
        </div>
      ) : null}
      <ul className="d-flex flex-column ">
        {todos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              title={todo.title}
              time={todo.createdAt}
              isComplete={todo.isComplete}
              remove={() => removeTodo(todo.id)}
              onIsComplete={(e) => onIsComplete(todo.id, e.target.checked)}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default Todos;
