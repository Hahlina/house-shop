import { AppRouter, RootProvider } from 'common/providers';

export const App = () => (
    <RootProvider>
        <AppRouter />
    </RootProvider>
);
