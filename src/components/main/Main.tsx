import { useState } from "react";

import styles from "./styles.module.css";

import Title from "../title/Title";
import TodoList from "../todo_list/TodoList";
import TodoForm from "../todo_form/TodoForm";
import Search from "../search/Search";

export default function Main() {
  const [search, setSearch] = useState("");
  return (
    <main className={styles.main}>
      <Title>Lista de Tarefas</Title>
      <Search
        search={search}
        handleSearch={(event) => setSearch(event.target.value)}
      />
      <TodoList search={search} />
      <TodoForm />
    </main>
  );
}
