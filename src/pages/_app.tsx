import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Quicksand } from 'next/font/google'

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['500', '600', '700']
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`bg-very-dark min-h-screen text-white ${quicksand.className}`}>
      <Component {...pageProps} />
    </div>
  )
}
