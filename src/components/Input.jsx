import { useState } from "react";

function Input({ addTodo }) {
  const [todoInp, setTodoInp] = useState("");

  return (
    <div className="input mt-4 mb-5">
      <div className="input-group mb-3 container-lg">
        <input
          type="text"
          className="form-control"
          placeholder="I need to..."
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          value={todoInp}
          onChange={(e) => setTodoInp(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              addTodo(todoInp);
              setTodoInp("");
            }
          }}
        />
        <button
          className="btn btn-outline-primary"
          type="button"
          id="button-addon2"
          onClick={() => {
            addTodo(todoInp);
            setTodoInp("");
          }}
        >
          Add Todo
        </button>
      </div>
    </div>
  );
}

export default Input;
