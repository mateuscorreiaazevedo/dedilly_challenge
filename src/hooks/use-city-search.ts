import { create } from 'zustand'

type Stories = {
  city: GeocodeResponse | undefined
  setCity: (city?: GeocodeResponse) => void
}

export const useCitySearch = create<Stories>(set => ({
  city: undefined,
  setCity: (city?: GeocodeResponse) => {
    set(() => ({ city }))
  }
}))
