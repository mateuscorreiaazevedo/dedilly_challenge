import { create } from 'zustand'

type Stories = {
  loading: boolean
  setLoading: (value: boolean) => void
  city: GeocodeResponse | null
  weather: Weather | null
  setCity: (city: GeocodeResponse | null) => void
  setWeather: (weather: Weather | null) => void
}

export const useWeatherStory = create<Stories>(set => ({
  city: null,
  weather: null,
  setCity: (city: GeocodeResponse | null) => {
    set(() => ({ city }))
  },
  setWeather: (weather: Weather | null) => {
    set(() => ({ weather }))
  },
  loading: false,
  setLoading: (value: boolean) => {
    set(() => ({ loading: value }))
  }
}))
