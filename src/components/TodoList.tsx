import TodoItem from "./TodoItem";

interface TodoListProps {
  items: string[];
  handleEditItem: (index: number) => void;
  handleRemoveItem: (index: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  items,
  handleEditItem,
  handleRemoveItem,
}) => {
  return (
    <ul className="list-group todo-list">
      {items.map((item, index) => (
        <TodoItem
          item={item}
          index={index}
          key={index}
          handleEditBtnClick={() => handleEditItem(index)}
          handleRemoveBtnClick={() => handleRemoveItem(index)}
        />
      ))}
    </ul>
  );
};

export default TodoList;
