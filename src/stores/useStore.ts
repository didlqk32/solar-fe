import { create } from 'zustand'

interface StoreState {
  // Add your global state here
  isLoading: boolean
  setIsLoading: (loading: boolean) => void
}

export const useStore = create<StoreState>((set) => ({
  isLoading: false,
  setIsLoading: (loading) => set({ isLoading: loading }),
}))
