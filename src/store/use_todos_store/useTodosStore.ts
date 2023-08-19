import { create } from "zustand";

import { informationsTodos } from "../../informations/informationsTodos";

type TodosProps = {
  id: number;
  text: string;
  category: string;
  isCompleted: boolean;
};

type ActionsProps = {
  addTodo: (todo: TodosProps) => void;
  removeTodo: (todoId: number) => void;
};

type StoreProps = {
  state: {
    todos: TodosProps[];
  };
  actions: ActionsProps;
};

export const useTodosStore = create<StoreProps>((set) => ({
  state: {
    todos: informationsTodos,
  },
  actions: {
    addTodo: (todo) =>
      set((state) => ({
        state: { todos: [...state.state.todos, todo] },
      })),
    removeTodo: (todoId) =>
      set((state) => ({
        state: {
          todos: state.state.todos.filter((todo) => todo.id !== todoId),
        },
      })),
  },
}));
