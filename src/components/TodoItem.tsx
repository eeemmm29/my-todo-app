interface TodoTextProps {
  item: string;
  index: number;
}

interface TodoItemProps {
  item: string;
  index: number;
  handleRemoveBtnClick: (index: number) => void;
  handleEditBtnClick: (index: number) => void;
}

const TodoText = ({ item, index }: TodoTextProps) => {
  const checkboxId = "checkbox" + index.toString();
  return (
    <div className="todo-text">
      <input
        className="form-check-input me-1"
        type="checkbox"
        value=""
        id={checkboxId}
      />
      <label className="form-check-label" htmlFor={checkboxId}>
        {item}
      </label>
    </div>
  );
};

const TodoItem = ({
  item,
  index,
  handleRemoveBtnClick,
  handleEditBtnClick,
}: TodoItemProps) => {
  return (
    <li className="list-group-item todo-item">
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
    </li>
  );
};

export default TodoItem;
