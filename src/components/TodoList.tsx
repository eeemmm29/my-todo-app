import TodoItem from "./TodoItem";

interface TodoItemData {
  text: string;
  timestamp: string;
}

interface TodoListProps {
  items: TodoItemData[];
  editingIndex: number | null;
  editingValue: string;
  handleEditItem: (index: number) => void;
  handleEditChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleEditSubmit: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  saveEdit: () => void;
  cancelEdit: () => void;
  handleRemoveItem: (index: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  items,
  editingIndex,
  editingValue,
  handleEditItem,
  handleEditChange,
  handleEditSubmit,
  saveEdit,
  cancelEdit,
  handleRemoveItem,
}) => {
  return (
    <ul className="list-group todo-list">
      {items.map((item, index) => (
        <TodoItem
          item={item}
          index={index}
          key={index}
          isEditing={editingIndex === index}
          editingValue={editingValue}
          handleEditBtnClick={() => handleEditItem(index)}
          handleEditChange={handleEditChange}
          handleEditSubmit={handleEditSubmit}
          saveEdit={saveEdit}
          cancelEdit={cancelEdit}
          handleRemoveBtnClick={() => handleRemoveItem(index)}
        />
      ))}
    </ul>
  );
};

export default TodoList;
