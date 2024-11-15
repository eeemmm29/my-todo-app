import { useState, ReactNode } from "react";
import TodoList from "./TodoList";
import "./styles.css";

interface Props {
  heading: string;
}

interface SubmitButtonProps {
  children: ReactNode;
  color?: "primary" | "secondary" | "danger";
}

interface TodoFromProps {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputValue: string;
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
}: TodoFromProps) => {
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
  const [items, setItems] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission behavior

    if (inputValue.trim()) {
      setItems([...items, inputValue.trim()]);
      setInputValue(""); // Clear the input field after submission
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleEditItem = (index: number) => {
    console.log(index);
  };

  const handleRemoveItem = (index: number) => {
    setItems((items) => items.filter((_, i) => i !== index));
  };

  return (
    <>
      <h1>{heading}</h1>
      <div className="card" style={{ width: "50%" }}>
        <div className="todo-card">
          <TodoForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            inputValue={inputValue}
          />
          <TodoList
            items={items}
            handleEditItem={handleEditItem}
            handleRemoveItem={handleRemoveItem}
          />
        </div>
      </div>
    </>
  );
};

export default Todo;
