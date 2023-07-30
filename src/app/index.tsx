import { useCitySearch } from '@/hooks/use-city-search'
import { Toaster, toast } from 'react-hot-toast'
import { Header, Footer } from '@/components'
import { weatherService } from '@/services'
import React from 'react'

export const App = () => {
  const [weather, setWeather] = React.useState({} as Weather)
  const { city } = useCitySearch()

  React.useEffect(() => {
    if (city) {
      (async () => {
        try {
          const response = await weatherService.getWeatherByLatLng({
            latitude: parseFloat(city!.lat),
            longitude: parseFloat(city!.lon)
          })
          setWeather(response!)
        } catch (error) {
          toast.error((error as any).message)
        }
      })()
    }
  }, [city])

  return (
    <main className='flex items-center justify-center h-screen w-full bg-neutral-100'>
      <section className='flex flex-col relative container mx-auto bg-neutral-200 h-4/5 w-full rounded-xl shadow-sm'>
        <Header />
        <section className='flex-1 flex flex-col items-center justify-center relative'>
          <span>{city?.display_name}</span>
          {JSON.stringify(weather, null, 2)}
        </section>
        <Footer />
      </section>
      <Toaster position='top-left' />
    </main>
  )
}
