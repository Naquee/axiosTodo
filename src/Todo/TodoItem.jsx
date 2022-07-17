function TodoItem({ handleDelete, title, id, status, handleToggle }) {
  return (
    <div style={{ display: "flex", gap: "2rem", marginBottom: ".5rem" }}>
      <div>{id}</div>
      <div>{title}</div>
      <button onClick={() => handleToggle(id, !status)}>
        {status ? "DONE" : "NOT DONE"}
      </button>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </div>
  );
}
export default TodoItem;
