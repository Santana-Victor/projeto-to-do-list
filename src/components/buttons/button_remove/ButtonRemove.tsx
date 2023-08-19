import styles from "./styles.module.css";

interface ButtonRemoveProps {
  handleClick: () => void;
}

export default function ButtonRemove({ handleClick }: ButtonRemoveProps) {
  return (
    <button
      className={styles.button}
      aria-label={"Botão para remover a tarefa"}
      onClick={handleClick}
    >
      Remover
    </button>
  );
}
