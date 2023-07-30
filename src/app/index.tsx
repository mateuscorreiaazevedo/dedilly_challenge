import { useWeatherStory } from '@/hooks/use-weather-story'
import { Header, Footer } from '@/components'
import { Toaster } from 'react-hot-toast'
import React from 'react'

export const App = () => {
  const { city, weather } = useWeatherStory()

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
