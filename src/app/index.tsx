import { useWeatherStory } from '@/hooks/use-weather-story'
import { Header, Footer, SidebarContent } from '@/components'
import { Toaster } from 'react-hot-toast'
import React from 'react'

const Map = React.lazy(() => import('@/components/map'))

export const App = () => {
  const { city } = useWeatherStory()

  return (
    <main className='flex items-center justify-center h-screen w-full bg-neutral-100'>
      <section className='flex flex-col relative container mx-auto bg-neutral-200 h-4/5 w-full rounded-xl shadow-sm'>
        <Header />
        <article className='flex-1 flex flex-col items-center justify-center relative'>
          <SidebarContent />
          <React.Suspense fallback={<div className='flex-1 bg-zinc-400 animate-pulse'/>}>
            <Map
              center={city
                ? [
                    parseFloat(city?.lat as string),
                    parseFloat(city?.lon as string)
                  ]
                : undefined}
            />
          </React.Suspense>
        </article>
        <Footer />
      </section>
      <Toaster position='top-left' />
    </main>
  )
}
