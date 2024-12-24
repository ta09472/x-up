import { create } from "zustand";

// Zustand 스토어 정의
interface CountState {
  count: number;
  setCount: (newCount: number) => void;
}

export const useCountStore = create<CountState>((set) => ({
  count: 1, // 기본 초기값
  setCount: (newCount) => set({ count: newCount }),
}));
