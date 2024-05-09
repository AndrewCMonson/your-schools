import { create } from "zustand";
import { School } from "../__generatedTypes__/graphql";

interface SchoolStore {
  school: School | null;
  setSchool: (school: School) => void;
  clearSchool: () => void;
}

export const useSchoolStore = create<SchoolStore>()((set) => ({
  school: null,
  setSchool: (school: School) => set({ school }),
  clearSchool: () => set({ school: null }),
}));
