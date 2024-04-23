import { create } from "zustand";
import { User } from "../__generatedTypes__/graphql";
import { persist } from "zustand/middleware";
import Cookie from "js-cookie";

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
      name: "YSU-SESS",
      storage: {
        getItem: (name) => {
          const item = Cookie.get(name);
          return item ? JSON.parse(item) : null;
        },
        setItem: (name, value) => {
          Cookie.set(name, JSON.stringify(value));
        },
        removeItem: (name) => {
          Cookie.remove(name);
        },
      },
    },
  ),
);
