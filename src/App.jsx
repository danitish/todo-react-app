import "./App.css";
import Todos from "./components/Todos";
import Input from "./components/Input";
import useTodos from "./hooks/useTodos";
import Header from "./components/Header";

function App() {
  const {
    addTodo,
    removeTodo,
    todos,
    removeAll,
    handleIsComplete,
    removeFinished,
  } = useTodos();

  return (
    <div className="app">
      <Header />
      <Input addTodo={addTodo} />
      <Todos
        todos={todos}
        removeTodo={removeTodo}
        removeAll={removeAll}
        onIsComplete={handleIsComplete}
        onRemoveComplete={removeFinished}
      />
    </div>
  );
}

export default App;
