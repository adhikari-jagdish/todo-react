import { useState } from "react";
import styles from "../components/form.module.css";

export default function Form({ todoList, setTodoList }) {
  const [todo, setTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setTodoList([...todoList, todo]);
    setTodo("");
  }

  return (
    <form className={styles.todoForm} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <input
          className={styles.formInput}
          type="text"
          placeholder="Enter Todo Item..."
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />

        <button className={styles.button} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
