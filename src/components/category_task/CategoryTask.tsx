import styles from "./styles.module.css";

interface CategoryTaskProps {
  isChecked: boolean;
  children: string;
}

export default function CategoryTask({
  isChecked,
  children,
}: CategoryTaskProps) {
  return (
    <p
      className={
        isChecked
          ? `${styles.category} ${styles.checked}`
          : `${styles.category}`
      }
    >
      ({children})
    </p>
  );
}
