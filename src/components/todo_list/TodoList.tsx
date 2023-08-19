import styles from "./styles.module.css";

import Todo from "../todo/Todo";

import { useTodosStore } from "../../store/use_todos_store/useTodosStore";

export default function TodoList({ search }: { search: string }) {
  const {
    state: { todos },
  } = useTodosStore();

  return (
    <ul className={styles.todo_list}>
      {todos
        .filter((todo) =>
          todo.text.toLowerCase().includes(search.toLowerCase())
        )
        .map((todo) => (
          <Todo
            id={todo.id}
            text={todo.text}
            category={todo.category}
            isCompleted={todo.isCompleted}
            key={todo.id}
          />
        ))}
    </ul>
  );
}
