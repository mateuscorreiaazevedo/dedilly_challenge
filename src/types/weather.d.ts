interface Weather {
  elevation: number
  latitude: number
  longitude: number
  current_weather: {
    temperature: number
    windspeed: number
    winddirection: number
    time: string | Date
  }
}

interface WeatherError {
  reason?: string
}

type WeatherResponse = Weather & WeatherError
