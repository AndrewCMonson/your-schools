import { create } from "zustand";
import { User } from "../__generatedTypes__/graphql";
import { persist } from "zustand/middleware";

interface SessionStore {
  user: User | null;

  setUser: (user: User) => void;
  clearSession: () => void;
}

export const useSessionStore = create<SessionStore>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user: User) => set({ user }),
      clearSession: () => set({ user: null }),
    }),
    {
      name: "session-storage",
      storage: {
        getItem: (name) => {
          const item = sessionStorage.getItem(name);
          if (!item) return null;
          return JSON.parse(item);
        },
        setItem: (name, value) => {
          sessionStorage.setItem(name, JSON.stringify(value));
        },
        removeItem: (name) => {
          sessionStorage.removeItem(name);
        },
      },
    },
  ),
);
