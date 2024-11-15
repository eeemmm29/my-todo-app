import { useState, useEffect, ReactNode } from "react";
import TodoList from "./TodoList";
import "./styles.css";

interface Props {
  heading: string;
}

interface SubmitButtonProps {
  children: ReactNode;
  color?: "primary" | "secondary" | "danger";
}

interface TodoFormProps {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputValue: string;
}

interface TodoItem {
  text: string;
  timestamp: string;
}

const SubmitButton = ({ children, color = "primary" }: SubmitButtonProps) => {
  return (
    <button type="submit" className={"btn btn-" + color}>
      {children}
    </button>
  );
};

const TodoForm = ({
  handleSubmit,
  handleChange,
  inputValue,
}: TodoFormProps) => {
  return (
    <>
      Add your todos here
      <form onSubmit={handleSubmit}>
        <input
          name="query"
          type="text"
          value={inputValue}
          onChange={handleChange}
        />
        <SubmitButton>Add</SubmitButton>
      </form>
    </>
  );
};

const Todo = ({ heading }: Props) => {
  const [items, setItems] = useState<TodoItem[]>(() => {
    const savedItems = localStorage.getItem("todos");
    return savedItems ? JSON.parse(savedItems) : [];
  });
  const [inputValue, setInputValue] = useState<string>("");
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editingValue, setEditingValue] = useState<string>("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(items));
  }, [items]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission behavior

    if (inputValue.trim()) {
      const newItem: TodoItem = {
        text: inputValue.trim(),
        timestamp: new Date().toLocaleString(),
      };
      setItems([...items, newItem]);
      setInputValue(""); // Clear the input field after submission
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleEditItem = (index: number) => {
    setEditingIndex(index);
    setEditingValue(items[index].text);
  };

  const handleEditChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditingValue(event.target.value);
  };

  const saveEdit = () => {
    if (editingIndex !== null) {
      const updatedItems = [...items];
      updatedItems[editingIndex].text = editingValue.trim();
      setItems(updatedItems);
      setEditingIndex(null);
    }
  };

  const cancelEdit = () => {
    setEditingIndex(null);
  };

  const handleEditSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      saveEdit();
    }
  };

  const handleRemoveItem = (index: number) => {
    setItems((items) => items.filter((_, i) => i !== index));
  };

  return (
    <>
      <h1>{heading}</h1>
      <div className="card todo-card">
        <TodoForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          inputValue={inputValue}
        />
        <TodoList
          items={items}
          editingIndex={editingIndex}
          editingValue={editingValue}
          handleEditItem={handleEditItem}
          handleEditChange={handleEditChange}
          handleEditSubmit={handleEditSubmit}
          saveEdit={saveEdit}
          cancelEdit={cancelEdit}
          handleRemoveItem={handleRemoveItem}
        />
      </div>
    </>
  );
};

export default Todo;
