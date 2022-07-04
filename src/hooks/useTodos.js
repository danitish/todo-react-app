import { useState, useEffect } from "react";

function useTodos() {
  const [todos, setTodos] = useState(() => {
    const item = JSON.parse(localStorage.getItem("todos"));
    if (item) {
      localStorage.setItem("todos", JSON.stringify(item));
      return item;
    }
    return [];
  });

  const [startingId, setStartingId] = useState(0);

  const addTodo = (title) => {
    if (title) {
      setTodos((prev) => {
        return [
          ...prev,
          {
            id: startingId + 1,
            title: title,
            createdAt: new Date(),
            isComplete: false,
          },
        ];
      });
      setStartingId((id) => id + 1);
    }
    return;
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    if (todos.length) {
      setStartingId(todos[todos.length - 1].id);
    }
  }, [todos]);

  const removeTodo = (id) => {
    if (id) {
      setTodos((todos) => todos.filter((todo) => todo.id !== id));
    }
  };

  const removeAll = () => {
    setTodos([]);
    setStartingId(0);
  };

  const handleIsComplete = (id, newCompleteState) => {
    setTodos((currentArr) =>
      currentArr.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isComplete:
              typeof newCompleteState === "boolean"
                ? newCompleteState
                : !todo.isComplete,
          };
        }
        return todo;
      })
    );
  };

  const removeFinished = () => {
    setTodos((prevArr) => prevArr.filter((todo) => !todo.isComplete));
  };

  return {
    todos,
    addTodo,
    removeTodo,
    setTodos,
    removeAll,
    handleIsComplete,
    removeFinished,
  };
}

export default useTodos;
