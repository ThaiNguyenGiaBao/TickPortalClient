import { create } from "zustand";
import { persist } from "zustand/middleware";


type userStore = {
  user: {
    username: string | null;
    avatarUrl: string | null;
  };
  setUser: (user: {
    username: string;
    avatarUrl: string;
  }) => void;

  clearUser: () => void;
};

export const useUserStore = create<userStore>()(
  persist(
    (set) => ({
      user: {
        username: null,
        avatarUrl: null,
      },
      setUser: (user) => set({ user }),
      clearUser: () =>
        set({
          user: {
            username: null,
            avatarUrl: null,
          },
        }),
    }),
    {
      name: "user",
    }
  )
);
