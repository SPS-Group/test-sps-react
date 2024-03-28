import { create } from "zustand";

const useStore = create((set) => ({
  isAuthenticated: localStorage.getItem("token") ? true : false,
  setAuth: (value) => set({ isAuthenticated: value }),
}));

export default useStore;