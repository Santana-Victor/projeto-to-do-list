import styles from "./styles.module.css";

interface NameTaskProps {
  isChecked: boolean;
  children: string;
}

export default function NameTask({ isChecked, children }: NameTaskProps) {
  return (
    <p
      className={
        isChecked ? `${styles.name} ${styles.checked}` : `${styles.name}`
      }
    >
      {children}
    </p>
  );
}
