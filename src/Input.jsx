export default function Input({ value, setValue, onEnter }) {
  return (
    <input
      className="inp"
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onKeyDown={(e) => e.key === "Enter" && onEnter()}
      placeholder="Your task..."
    />
  );
}
