import { StyleProvider } from './StyleProviders';
import { StoreProvider } from './StoreProvider';

export const RootProvider = ({ children }) => (
    <StoreProvider>
        <StyleProvider>{children}</StyleProvider>
    </StoreProvider>
);
