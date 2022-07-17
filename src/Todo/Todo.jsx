import { useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import { addTodo, deleteTodo, getTodos, toggleTodoStatus } from "./api";
import TodoItem from "./TodoItem";

function Todo() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    handleGetTodos();
  }, []);

  function handleGetTodos() {
    setLoading(true);
    getTodos()
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(false);
      });
  }

  function handleAdd(title) {
    setLoading(true);
    addTodo({
      title,
      status: false
    }).then(() => {
      handleGetTodos();
    });
  }

  function handleToggle(id, newStatus) {
    setLoading(true);
    toggleTodoStatus({ id, newStatus }).then(() => handleGetTodos());
  }

  function handleDelete(id) {
    setLoading(true);
    deleteTodo(id).then(() => {
      handleGetTodos();
    });
  }

  return (
    <div>
      {loading && <div>...loading</div>}
      {error && <div>...error</div>}
      <AddTodo handleAdd={handleAdd} />
      <div>
        {data.map((item) => (
          <TodoItem
            key={item.id}
            title={item.title}
            id={item.id}
            status={item.status}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        ))}
      </div>
    </div>
  );
}
export default Todo;
