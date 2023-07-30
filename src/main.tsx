import ReactDOM from 'react-dom/client'
import tz from 'dayjs/plugin/timezone'
import ptBr from 'dayjs/locale/pt-br'
import utc from 'dayjs/plugin/utc'
import '@/assets/styles/index.css'
import { App } from '@/app'
import dayjs from 'dayjs'

dayjs.locale(ptBr)
dayjs.extend(utc)
dayjs.extend(tz)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<App />)
