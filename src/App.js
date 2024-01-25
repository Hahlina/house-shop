import { BaseLayout } from 'common/layouts';

import { AppRouter, RootProvider } from 'common/providers';

export const App = () => (
    <RootProvider>
        <BaseLayout>
            <AppRouter />
        </BaseLayout>
    </RootProvider>
);
