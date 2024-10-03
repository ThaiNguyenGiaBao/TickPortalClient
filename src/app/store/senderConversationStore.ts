import { create } from "zustand";

export type SenderConversation = {
  sender_Id: string;
};

export type SenderConversationStore = {
  senderConversation: SenderConversation | null;
  setSenderConversation: (senderConversation: SenderConversation) => void;
  clearSenderConversation: () => void;
};

const useSenderConversationStore = create<SenderConversationStore>((set) => ({
  senderConversation: null,
  setSenderConversation: (senderConversation) => set({ senderConversation }),
  clearSenderConversation: () => set({ senderConversation: null }),
}));

export default useSenderConversationStore;
