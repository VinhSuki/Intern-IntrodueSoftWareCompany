import ErrorBoundary from './components/common/ErrorBoundary'
import AppRouter from './routes/routes'
import './App.css'
import "aos/dist/aos.css";
import { useCallback, useEffect } from 'react';
import excuteAOS from './utils/AOS';

function App() {
  const callBackAos = useCallback(() => {
    excuteAOS()
  }, [])

  useEffect(() => {
    callBackAos()
  }, [callBackAos])
  return (
    <ErrorBoundary>
      <AppRouter />
    </ErrorBoundary>
  )
}

export default App
