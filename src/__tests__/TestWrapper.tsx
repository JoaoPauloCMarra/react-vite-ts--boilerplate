import { FC, PropsWithChildren } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';

import Theme from '~/Theme';

const queryClient = new QueryClient();

const TestWrapper: FC<PropsWithChildren> = ({ children }) => (
  <RecoilRoot>
    <ThemeProvider theme={Theme}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ThemeProvider>
  </RecoilRoot>
);

export default TestWrapper;
