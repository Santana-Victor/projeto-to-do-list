import styles from "./styles.module.css";

interface CompleteButtonProps {
  handleChecked: () => void;
}

export default function ButtonComplete({ handleChecked }: CompleteButtonProps) {
  return (
    <button
      className={styles.button}
      aria-label={"Botão para completar a tarefa"}
      onClick={handleChecked}
    >
      Completar
    </button>
  );
}
