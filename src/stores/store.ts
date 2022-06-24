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
