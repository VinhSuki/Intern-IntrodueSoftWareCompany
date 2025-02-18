import ErrorBoundary from './components/common/ErrorBoundary'
import AppRouter from './routes/routes'
import './App.css'
import "aos/dist/aos.css";

function App() {
  return (
    <ErrorBoundary>
      <AppRouter />
    </ErrorBoundary>
  )
}

export default App
