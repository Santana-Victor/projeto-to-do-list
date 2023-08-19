import { useState, FormEvent } from "react";

import styles from "./styles.module.css";

import Subtitle from "../subitle/Subtitle";
import Input from "../input/Input";
import Select from "../select/Select";

import { useTodosStore } from "../../store/use_todos_store/useTodosStore";

export default function TodoForm() {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");
  const {
    actions: { addTodo },
  } = useTodosStore();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!value || !category) return;
    addTodo({
      id: Math.floor(Math.random() * 1_000_000_000),
      text: value,
      category: category,
      isCompleted: false,
    });
    setValue("");
    setCategory("");
  };

  return (
    <div className={styles.todo_form}>
      <Subtitle>Criar Tarefa:</Subtitle>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input
          type={"text"}
          placeHolder={"Digite o título da tarefa"}
          value={value}
          handleChange={(event) => setValue(event.target.value)}
        />
        <Select
          value={category}
          handleChange={(event) => setCategory(event.target.value)}
        />
        <button
          className={styles.button}
          type={"submit"}
          aria-label={"Botão para criar uma nova tarefa"}
        >
          Cria tarefa
        </button>
      </form>
    </div>
  );
}
