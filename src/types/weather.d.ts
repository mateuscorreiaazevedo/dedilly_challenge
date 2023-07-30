interface Weather {
  elevation: number
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
