import { socialLinks } from '@/utils/social-links'

export const Footer = () => {
  return (
    <footer className='h-12 w-full border-t border-neutral-100 px-6 flex items-center justify-between'>
      <ul className='flex gap-4 items-center'>
        {socialLinks.map(({ Icon, link }) => (
          <a href={link} target='_blank' key={link} className='text-zinc-800 hover:text-zinc-600 transition' rel="noreferrer">
            <Icon />
          </a>
        ))}
      </ul>
      <p className='font-semibold text-zinc-600'>
        &copy; 2023 - <a href="https://mateusdev.com.br" className='hover:underline'>Mateus Azevedo</a>
      </p>
    </footer>
  )
}
