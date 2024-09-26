import { create } from "zustand";
import { persist } from "zustand/middleware";

// avatarUrl
// :
// "https://avatar.iran.liara.run/username?username=bao"
// email
// :
// "bao5@123"
// isAdmin
// :
// false
// member_id
// :
// "6351f964-6c19-4e0f-9cd7-233035f7f810"
// username
// :
// "bao"

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
