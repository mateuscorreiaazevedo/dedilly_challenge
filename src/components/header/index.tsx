import { Search, X } from 'lucide-react'
import React from 'react'

export const Header = () => {
  const [search, setSearch] = React.useState('')
  return (
    <header className='sticky px-10 top-1 w-full h-12 mt-1 border-b border-b-neutral-100 flex items-center justify-start gap-2'>
      <div className='w-full h-8 rounded flex-row-reverse bg-neutral-300 flex items-center gap-4 px-4'>
        <X
          data-search={search.length === 0}
          className='text-zinc-800 cursor-pointer data-[search=true]:invisible visible transition'
          onClick={() => setSearch('')}
        />
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          className='peer/input bg-transparent placeholder:text-neutral-50 text-zinc-800 outline-none flex-1 h-full px-2' placeholder='Insira o nome da cidade'
        />
        <Search className='text-neutral-50 transition peer-focus/input:text-zinc-800' />
      </div>
      <button data-loading={''} className='bg-neutral-300 px-4 h-8 rounded text-neutral-50 font-bold hover:bg-neutral-300/80 active:text-zinc-800 active:bg-neutral-400 transition'>
        Pesquisar
      </button>
    </header>
  )
}
