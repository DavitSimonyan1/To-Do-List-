import TodoItem from "./TodoItem";
import { memo } from "react";

function TodoList({ tasks, onDelete, onEdit }) {
  return (
    <ul className="ul">
      {tasks.map((t) => (
        <TodoItem
          key={t.id}
          task={t}
          onDelete={() => onDelete(t.id)}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
}

export default memo(TodoList);
