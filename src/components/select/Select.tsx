import { ChangeEvent } from "react";

import styles from "./styles.module.css";

interface SelectProps {
  value: string;
  handleChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export default function Select({ value, handleChange }: SelectProps) {
  return (
    <select className={styles.select} value={value} onChange={handleChange}>
      <option value="">Selecione uma categoria</option>
      <option value="Trabalho">Trabalho</option>
      <option value="Pessoal">Pessoal</option>
      <option value="Estudos">Estudos</option>
    </select>
  );
}
