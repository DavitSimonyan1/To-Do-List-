import { useCallback, useState } from "react";
import "./App.css";
import Input from "./Input";
import Button from "./Button";
import TodoList from "./TodoLIst";

function App() {
  const [todo, setTodo] = useState("");
  const [task, setTask] = useState([]);

  const addTodo = useCallback(() => {
    if (todo.trim() === "") return;
    setTask((prev) => [...prev, { id: Date.now(), text: todo.trim() }]);
    setTodo("");
  }, [todo]);

  const deleted = useCallback((id) => {
    setTask((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const edit = useCallback((id, newText) => {
    setTask((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  }, []);

  return (
    <div className="container">
      <h1>To Do List</h1>
      <div className="flex">
        <Input
          className="inp"
          type="text"
          value={todo}
          setValue={setTodo}
          onEnter={addTodo}
        />
        <Button onClick={addTodo} />
      </div>
      {task.length > 0 && <h2>Task List</h2>}

      <TodoList tasks={task} onDelete={deleted} onEdit={edit} />
    </div>
  );
}

export default App;
