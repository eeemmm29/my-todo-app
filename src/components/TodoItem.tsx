interface TodoTextProps {
  item: {
    text: string;
    timestamp: string;
  };
  index: number;
}

interface TodoItemProps {
  item: {
    text: string;
    timestamp: string;
  };
  index: number;
  isEditing: boolean;
  editingValue: string;
  handleRemoveBtnClick: (index: number) => void;
  handleEditBtnClick: (index: number) => void;
  handleEditChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleEditSubmit: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  saveEdit: () => void;
  cancelEdit: () => void;
}

const TodoText = ({ item, index }: TodoTextProps) => {
  const checkboxId = "checkbox" + index.toString();
  return (
    <>
      <div className="todo-text">
        <input
          className="form-check-input me-1"
          type="checkbox"
          value=""
          id={checkboxId}
        />
        <label className="form-check-label" htmlFor={checkboxId}>
          {item.text}
        </label>
      </div>
      <small>{item.timestamp}</small>
    </>
  );
};

const TodoItem = ({
  item,
  index,
  isEditing,
  editingValue,
  handleRemoveBtnClick,
  handleEditBtnClick,
  handleEditChange,
  handleEditSubmit,
  saveEdit,
  cancelEdit,
}: TodoItemProps) => {
  return (
    <li className="list-group-item todo-item">
      {isEditing ? (
        <>
          <input
            type="text"
            className="todo-text"
            value={editingValue}
            onChange={handleEditChange}
            onKeyDown={handleEditSubmit}
            autoFocus
          />
          <button type="button" className="btn btn-success" onClick={saveEdit}>
            Save
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={cancelEdit}
          >
            Cancel
          </button>
        </>
      ) : (
        <>
          <TodoText item={item} index={index} />

          <button
            type="button"
            className="btn btn-light"
            onClick={() => handleEditBtnClick(index)}
          >
            Edit
          </button>

          <button
            type="button"
            className="btn btn-danger"
            onClick={() => handleRemoveBtnClick(index)}
          >
            Remove
          </button>
        </>
      )}
    </li>
  );
};

export default TodoItem;
