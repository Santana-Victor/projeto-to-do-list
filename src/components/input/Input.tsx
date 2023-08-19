import { ChangeEvent } from "react";

import styles from "./styles.module.css";

interface InputProps {
  type: string;
  placeHolder: string;
  value: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  type,
  placeHolder,
  value,
  handleChange,
}: InputProps) {
  return (
    <input
      className={styles.input}
      type={type}
      placeholder={placeHolder}
      value={value}
      onChange={handleChange}
    />
  );
}
