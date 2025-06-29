import { useState } from "react";

export default function TodoItem({ task, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(task.text);

  const handleEdit = () => {
    if (isEditing) {
      onEdit(task.id, text);
    }
    setIsEditing(!isEditing);
  };

  return (
    <li>
      {isEditing ? (
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      ) : (
        <span className="task-text">{task.text}</span>
      )}

      <button className="delete" onClick={onDelete}>
        Delete
      </button>
      <button className="delete" onClick={handleEdit}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
}
