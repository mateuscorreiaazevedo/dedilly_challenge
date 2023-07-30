import { compassDirectionHelper } from '@/utils/compass-direction-helper'
import { CalendarDays, Compass, Thermometer, Wind } from 'lucide-react'
import { useWeatherStory } from '@/hooks/use-weather-story'
import { Separator } from '../ui/separator'
import dayjs from 'dayjs'

export const SidebarContent = () => {
  const { city, weather, loading } = useWeatherStory()
  const dateTime = dayjs.tz(weather?.current_weather.time, 'America/Sao_Paulo').format('dddd [,] DD/YYYY')

  return (
    <aside
      data-view={!!weather}
      className='absolute z-10 shadow-lg transition-all duration-500 text-white bg-zinc-800/60 backdrop-blur-sm top-0 bottom-0 right-0 w-0 data-[view=true]:w-80 flex'
    >
      {loading
        ? (
        <div
          data-loading={!!weather}
          className='data-[loading=true]:opacity-100 opacity-0 flex-1 flex py-6 px-4 flex-col items-center justify-between'
        >
          <div className='w-full'>
            <div className='w-full h-10 rounded bg-zinc-400 animate-pulse' />
            <Separator />
          </div>
          <ul className='mt-4 flex flex-col flex-1 items-center justify-center w-full gap-2'>
            {[1, 2, 3, 4].map(item => (
              <li key={item} className='flex items-center justify-between w-full gap-2'>
                <div className='h-6 w-6 rounded-full bg-zinc-400 animate-pulse' />
                <div className='bg-zinc-400 animate-pulse rounded w-32 h-6' />
              </li>
            ))}
          </ul>
          <div
            className='bg-zinc-400 animate-pulse rounded w-full h-40'
          />
        </div>
          )
        : (

        <div
          data-loading={!!weather}
          className='flex-1 flex data-[loading=true]:opacity-100 delay-1000 transition-all opacity-0 py-6 px-4 flex-col items-center justify-between'
        >
          <div className='w-full'>
            <h1 className='text-3xl text-center font-bold'>{city?.title}</h1>
            <Separator />
          </div>
          <ul className='mt-4 flex flex-col flex-1 items-center justify-center gap-2'>
            <li className='flex items-center justify-between w-full gap-2'>
              <Thermometer /> {weather?.current_weather.temperature} °C
            </li>
            <li className='flex items-center justify-between w-full gap-2'>
              <Wind /> {weather?.current_weather.windspeed} Km/h
            </li>
            <li className='flex items-center justify-between w-full gap-2'>
              <Compass /> {compassDirectionHelper(weather?.current_weather.winddirection as number)}
            </li>
            <li className='flex items-center justify-between w-full gap-2'>
              <CalendarDays /> {dateTime}
            </li>
          </ul>
          <p className='w-full'>
            {city?.display_name}
          </p>
        </div>
          )}
    </aside>
  )
}
