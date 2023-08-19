import { useState } from "react";

import styles from "./styles.module.css";

import NameTask from "../name_task/NameTask";
import CategoryTask from "../category_task/CategoryTask";
import ButtonComplete from "../buttons/button_complete/ButtonComplete";
import ButtonRemove from "../buttons/button_remove/ButtonRemove";

import { useTodosStore } from "../../store/use_todos_store/useTodosStore";

interface TodoProps {
  id: number;
  text: string;
  category: string;
  isCompleted: boolean;
}

export default function Todo({ id, text, category, isCompleted }: TodoProps) {
  const [isChecked, setIsChecked] = useState(isCompleted);
  const {
    actions: { removeTodo },
  } = useTodosStore();

  return (
    <li className={styles.todo}>
      <div className={styles.content}>
        <NameTask isChecked={isChecked}>{text}</NameTask>
        <CategoryTask isChecked={isChecked}>{category}</CategoryTask>
      </div>
      <div className={styles.container_buttons}>
        <ButtonComplete handleChecked={() => setIsChecked(!isChecked)} />
        <ButtonRemove handleClick={() => removeTodo(id)} />
      </div>
    </li>
  );
}
