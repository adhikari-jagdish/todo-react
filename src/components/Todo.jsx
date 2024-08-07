import Header from "./Header";
import Form from "./Form";
import TodoList from "./TodoList";
import { useState } from "react";

export default function Todo() {
  const [todoList, setTodoList] = useState([]);
  return (
    <div>
      <Header />
      <Form todoList={todoList} setTodoList={setTodoList} />
      <TodoList todoList={todoList} />
    </div>
  );
}
