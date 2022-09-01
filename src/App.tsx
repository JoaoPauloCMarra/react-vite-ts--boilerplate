import { StrictMode } from 'react';
import ErrorBoundary from '~/components/ErrorBoundary';

function App() {
  return (
    <StrictMode>
      <ErrorBoundary>
        <h1>React Vite TS App</h1>
      </ErrorBoundary>
    </StrictMode>
  );
}

export default App;
