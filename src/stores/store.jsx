import { create } from "zustand";

export const useRefreshKey = create((set) => ({
    refreshKey: 0,
    setRefreshKey: () => set((state) => ({ refreshKey: state.refreshKey + 1 })),
}));