import { Header, Footer } from '@/components'
import { Toaster } from 'react-hot-toast'

export const App = () => {
  return (
    <div className='flex items-center justify-center h-screen w-full bg-neutral-100'>
      <main className='flex flex-col relative container mx-auto bg-neutral-200 h-4/5 w-full rounded-xl shadow-sm'>
        <Header />
        <section className='flex-1 flex items-center justify-center'>
          Teste
        </section>
        <Footer />
      </main>
      <Toaster position='top-left' />
    </div>
  )
}
