import styles from "../components/todolist.module.css";

export default function TodoItem({ item }) {
  return (
    <div className={styles.list}>
      <div className={styles.itemText}>
        {" "}
        {item}{" "}
        <span>
          <button className={styles.deleteButton}>X</button>
        </span>
      </div>
    </div>
  );
}
