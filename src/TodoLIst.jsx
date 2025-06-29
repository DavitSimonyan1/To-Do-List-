import TodoItem from "./TodoItem";

export default function TodoList({ tasks, onDelete, onEdit }) {
  return (
    <ul className="ul">
      {tasks.map((t, i) => (
        <TodoItem
          key={t.id}
          task={t}
          onDelete={() => onDelete(i)}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
}
