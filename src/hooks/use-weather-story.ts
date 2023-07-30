import { create } from 'zustand'

type Stories = {
  city: GeocodeResponse | null
  weather: Weather | null
  setCity: (city: GeocodeResponse) => void
  setWeather: (weather: Weather) => void
}

export const useWeatherStory = create<Stories>(set => ({
  city: null,
  weather: null,
  setCity: (city: GeocodeResponse) => {
    set(() => ({ city }))
  },
  setWeather: (weather: Weather) => {
    set(() => ({ weather }))
  }
}))
