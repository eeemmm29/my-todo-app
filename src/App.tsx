import { useState, useEffect } from "react";
import Todo from "./components/Todo";
import "./App.css";

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // Save todos to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Add other functions like addTodo, editTodo, etc.

  return (
    <div className="app">
      <Todo heading="TO DO" />
    </div>
  );
}

export default App;
