import { ChangeEvent } from "react";

import styles from "./styles.module.css";

import Subtitle from "../subitle/Subtitle";
import Input from "../input/Input";

interface SearchProps {
  search: string;
  handleSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function Search({ search, handleSearch }: SearchProps) {
  return (
    <div className={styles.container_search}>
      <Subtitle>Pesquisar:</Subtitle>
      <Input
        type={"text"}
        placeHolder={"Digite o título da tarefa"}
        value={search}
        handleChange={handleSearch}
      />
    </div>
  );
}
