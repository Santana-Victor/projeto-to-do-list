import styles from "./styles.module.css";

export default function Subtitle({ children }: { children: string }) {
  return <h2 className={styles.subtitle}>{children}</h2>;
}
