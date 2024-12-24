import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

// User Slice
export interface UserSlice {
  username: string;
  email: string;
  setUsername: (username: string) => void;
  setEmail: (email: string) => void;
}

const createUserSlice = (set: any): UserSlice => ({
  username: "",
  email: "",
  setUsername: (username: string) => set({ username }),
  setEmail: (email: string) => set({ email }),
});

// Theme Slice
export interface ThemeSlice {
  theme: string;
  toggleTheme: () => void;
}

const createThemeSlice = (set: any): ThemeSlice => ({
  theme: "light",
  toggleTheme: () =>
    set((state: ThemeSlice) => ({
      theme: state.theme === "light" ? "dark" : "light",
    })),
});

// Combine Slices
export type StoreState = UserSlice & ThemeSlice;

export const useUserStore = create<StoreState>()(
  persist(
    devtools((...a) => ({
      ...createUserSlice(...a),
      ...createThemeSlice(...a),
    })),
    {
      name: "my-storage", // Key in localStorage
    }
  )
);
