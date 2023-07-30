import { envConstants as e } from '@/config/env'
import { Service } from './service'

type Props = {
  latitude: number
  longitude: number
}

const service = new Service(e.baseUrlInfometeo)

class WeatherService {
  async getWeatherByLatLng ({ latitude, longitude }: Props) {
    const response = await service.request<WeatherResponse>({
      url: '/forecast',
      params: {
        current_weather: true,
        latitude,
        longitude
      }
    })

    switch (response.code) {
      case 200: return response.body
      case 400: throw new Error(response.body?.reason)
      default: throw new Error('Sistema fora do ar. Por favor, tente mais tarde.')
    }
  }
}

export const weatherService = new WeatherService()
