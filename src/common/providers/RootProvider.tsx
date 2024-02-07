import type { FC, PropsWithChildren } from 'react';

import { StyleProvider } from './StyleProviders';
import { StoreProvider } from './StoreProvider';
import { MaterialProvider } from './MaterialProvider';

export const RootProvider: FC<PropsWithChildren> = ({ children }) => (
    <StoreProvider>
        <MaterialProvider>
            <StyleProvider>{children}</StyleProvider>
        </MaterialProvider>
    </StoreProvider>
);
