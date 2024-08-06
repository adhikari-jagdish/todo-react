import "../css/style.css";

export default function TodoItem({ item }) {
  return (
    <div>
      <h3 className="header">{item}</h3>
    </div>
  );
}
