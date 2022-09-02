import styled from 'styled-components';

import ErrorBoundary from '~/components/ErrorBoundary';

const TempTitle = styled.h1`
  color: #333;
  font-size: 1.2rem;
  text-align: center;
`;

function App() {
  return (
    <ErrorBoundary>
      <TempTitle>React Vite TS App</TempTitle>
    </ErrorBoundary>
  );
}

export default App;
