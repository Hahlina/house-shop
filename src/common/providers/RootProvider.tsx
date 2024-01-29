import type { FC, PropsWithChildren } from 'react';

import { StyleProvider } from './StyleProviders';
import { StoreProvider } from './StoreProvider';

export const RootProvider: FC<PropsWithChildren> = ({ children }) => (
    <StoreProvider>
        <StyleProvider>{children}</StyleProvider>
    </StoreProvider>
);
