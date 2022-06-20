import { defineStore } from "pinia";

export const useThemeStore = defineStore("theme", {
  state: () => ({
    /** @type {{ text: string, id: number, isFinished: boolean }[]} */
    todos: [],
    mode: "dark",
    /** @type {'all' | 'finished' | 'unfinished'} */
    filter: "all",
    // type will be automatically inferred to number
    nextId: 0,
  }),
  getters: {
    finishedTodos(state) {
      // autocompletion! ✨
      return state.todos.filter((todo) => todo.isFinished);
    },
    unfinishedTodos(state) {
      return state.todos.filter((todo) => !todo.isFinished);
    },
    /**
     * @returns {{ text: string, id: number, isFinished: boolean }[]}
     */
    filteredTodos(state) {
      if (this.filter === "finished") {
        // call other getters with autocompletion ✨
        return this.finishedTodos;
      } else if (this.filter === "unfinished") {
        return this.unfinishedTodos;
      }
      return this.todos;
    },
    currentMode(state): string {
      return state.mode;
    },
  },
  actions: {
    // any amount of arguments, return a promise or not
    addCurrentMode(mode: string) {
      // you can directly mutate the state
      this.mode = mode;
    },
  },
});
