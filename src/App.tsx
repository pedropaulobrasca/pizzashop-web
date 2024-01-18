import './global.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'

import { ThemeProvider } from './components/theme-provider'
import { Toaster } from './components/ui/sonner'
import { router } from './routes'

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme="system" storageKey="pizza.shop-theme">
        <Helmet titleTemplate="%s | pizza.shop" />
        <RouterProvider router={router} />
        <Toaster />
      </ThemeProvider>
    </HelmetProvider>
  )
}
