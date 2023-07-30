import { useCitySearch } from '@/hooks/use-city-search'
import { Toaster, toast } from 'react-hot-toast'
import { Header, Footer } from '@/components'
import React from 'react'
import { weatherService } from '@/services'

export const App = () => {
  const [weatherData, setWeatherData] = React.useState({} as Weather)
  const { city } = useCitySearch()

  React.useEffect(() => {
    if (city) {
      (async () => {
        try {
          const response = await weatherService.getWeatherByLatLng({
            latitude: parseFloat(city!.lat),
            longitude: parseFloat(city!.lon)
          })
          setWeatherData({
            current_weather: response!.current_weather,
            elevation: response!.elevation
          })
        } catch (error) {
          toast.error((error as any).message)
        }
      })()
    }
  }, [city])

  return (
    <div className='flex items-center justify-center h-screen w-full bg-neutral-100'>
      <main className='flex flex-col relative container mx-auto bg-neutral-200 h-4/5 w-full rounded-xl shadow-sm'>
        <Header />
        <section className='flex-1 flex flex-col items-center justify-center'>
          <span>{city?.display_name}</span>
          {JSON.stringify(weatherData, null, 2)}
        </section>
        <Footer />
      </main>
      <Toaster position='top-left' />
    </div>
  )
}
