import { geocodeService, weatherService } from '@/services'
import { useWeatherStory } from '@/hooks/use-weather-story'
import { useForm } from 'react-hook-form'
import { Search, X } from 'lucide-react'
import { toast } from 'react-hot-toast'
import React from 'react'

export const Header: React.FC = () => {
  const { register, handleSubmit, resetField, watch } = useForm<InputProps>({
    defaultValues: {
      search: ''
    }
  })
  const [loading, setLoading] = React.useState(false)
  const { setCity, setWeather } = useWeatherStory()

  const submitSearch = async ({ search }: InputProps) => {
    setLoading(true)
    try {
      const geocodeResponse = await geocodeService.searchCity(search)
      if (geocodeResponse) {
        const weatherResponse = await weatherService.getWeatherByLatLng({
          latitude: geocodeResponse?.lat as string,
          longitude: geocodeResponse?.lon as string
        })
        setWeather(weatherResponse!)
      }
      resetField('search')
      setCity({
        ...geocodeResponse!,
        display_name: geocodeResponse?.display_name.split(',')[0] as string,
      })
    } catch (error) {
      toast.error((error as any).message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <header className='sticky px-10 top-1 w-full h-12 mt-1 border-b border-b-neutral-100 flex items-center'>
      <form className='flex flex-1 items-center justify-between gap-2' onSubmit={handleSubmit(submitSearch)}>
        <div className='w-full h-8 rounded flex-row-reverse bg-neutral-300 flex items-center gap-4 px-4'>
          <X
            data-search={watch('search').length === 0}
            className='text-zinc-800 cursor-pointer data-[search=true]:invisible visible transition'
            onClick={() => resetField('search')}
          />
          <input
            {...register('search')}
            className='peer/input bg-transparent placeholder:text-neutral-50 text-zinc-800 outline-none flex-1 h-full px-2' placeholder='Insira o nome da cidade'
          />
          <Search className='text-neutral-50 transition peer-focus/input:text-zinc-800' />
        </div>
        <button type='submit' disabled={loading} className='disabled:cursor-not-allowed bg-neutral-300 px-4 h-8 rounded text-neutral-50 font-bold hover:bg-neutral-300/80 active:text-zinc-800 active:bg-neutral-400 transition'>
          Pesquisar
        </button>
      </form>
    </header>
  )
}
