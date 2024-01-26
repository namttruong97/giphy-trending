import 'styles/globals.css';
import 'styles/override.css';

import { ConfigProvider } from 'antd';
import { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <ConfigProvider
          theme={{
            components: {
              Button: {
                colorPrimary: '#2E2466',
              },
              Input: {
                colorPrimary: '#2E2466',
              },
            },
          }}
        >
          <Component {...pageProps} />
        </ConfigProvider>
      </QueryClientProvider>
    </div>
  );
}

export default MyApp;
