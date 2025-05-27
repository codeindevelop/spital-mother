import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';

import {
  LayoutProvider,
  LoadersProvider,
  MenusProvider,
  SettingsProvider,
  SnackbarProvider,
  TranslationProvider
} from '@/providers';
import { HelmetProvider } from 'react-helmet-async';
import rootStore from '@/store/store';

const ProvidersWrapper = ({ children }: PropsWithChildren) => {
  return (
    <Provider store={rootStore}>
      <SettingsProvider>
        <TranslationProvider>
          <HelmetProvider>
            <LayoutProvider>
              <LoadersProvider>
                <MenusProvider>{children}</MenusProvider>
              </LoadersProvider>
            </LayoutProvider>
          </HelmetProvider>
        </TranslationProvider>
      </SettingsProvider>
    </Provider>
  );
};

export { ProvidersWrapper };
