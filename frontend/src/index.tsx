import { createRoot } from 'react-dom/client';
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { I18nextProvider } from 'react-i18next';

import { App, RouterProvider } from '~/bundles/common/components/components.js';
import { AppRoute } from '~/bundles/common/enums/app-route.enum.js';
import MainPage from '~/bundles/main/pages/main-page.js';
import i18n from '~/locales/i18n.js';

import '~/assets/css/styles.scss';

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => {
      console.log('error123', error);
      
      toast.error(error.message);
    },
  }),
});

createRoot(document.querySelector('#root') as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <I18nextProvider i18n={i18n}>
      <RouterProvider
        routes={[
          {
            path: AppRoute.ROOT,
            element: <App />,
            children: [
              {
                path: AppRoute.ROOT,
                element: <MainPage />,
              },
            ],
          },
        ]}
      />
    </I18nextProvider>
  </QueryClientProvider>,
);
