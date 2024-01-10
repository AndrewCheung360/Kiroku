import { ThemesProvider } from './ThemeProvider'
import { ModalProvider } from './ModalProvider'

export default function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemesProvider>
      <ModalProvider>
        {children}
      </ModalProvider>
    </ThemesProvider>
  )
}