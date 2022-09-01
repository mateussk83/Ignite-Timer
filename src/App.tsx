import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { Router } from './Router'
import { defaultTheme } from './themes/default'
import { CyclesContextProvider } from './contexts/CyclesContext'
import { useEffect } from 'react'


// Global Style é os css que foram criados la no global.ts
export function App() {
  
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
    <CyclesContextProvider>
        <Router />
      </CyclesContextProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}
