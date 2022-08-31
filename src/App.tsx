import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { Router } from './Router'
import { defaultTheme } from './themes/default'
import { CyclesContextProvider } from './contexts/CyclesContext'
import { useEffect } from 'react'


// Global Style é os css que foram criados la no global.ts
export function App() {
  useEffect(() => {
    console.log('meu pau ta rosa')
    localStorage.setItem('@ignite-timer:cycles-state-1.0.0', JSON.stringify({cycles:[], activeCycleId:null}))
  }, [])
  
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
