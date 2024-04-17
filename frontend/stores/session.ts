import { create } from "zustand";
import { User } from "../src/__generatedTypes__/graphql";

interface SessionStore {
  user: User | null;
  // eslint-disable-next-line no-unused-vars
  setUser: (user: User) => void;
  clearSession: () => void;
}

export const useSessionStore = create<SessionStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearSession: () => set({ user: null }),
}));
