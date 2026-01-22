import { create } from "zustand";

export const useToastStore = create((set) => {
    return {
        isVisible: false,
        message: "",
        showToast: (msg) => set({ isVisible: true, message:msg }),
        hideToast: () => set({ isVisible: false, message:""})
    }
})