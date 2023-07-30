import { envConstants as e } from '@/config/env'
import { Service } from './service'

const service = new Service(e.baseUrlGeocode)

class GeocodeService {
  async searchCity (q: string) {
    const response = await service.request<GeocodeResponse[]>({
      url: '/search',
      params: { q }
    })

    switch (response.code) {
      case 200: return response.body?.[0]
      default: throw new Error('Sistema fora do ar. Por favor, tente mais tarde.')
    }
  }
}

export const geocodeService = new GeocodeService()
