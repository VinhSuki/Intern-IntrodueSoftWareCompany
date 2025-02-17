import ErrorBoundary from './components/common/ErrorBoundary'
import AppRouter from './routes/routes'

function App() {
  return (
    <ErrorBoundary>
      <AppRouter />
    </ErrorBoundary>
  )
}

export default App
