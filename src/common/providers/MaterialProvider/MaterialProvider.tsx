import type { FC, PropsWithChildren } from 'react';
import { ThemeProvider } from '@mui/material';

import { theme } from './theme';

export const MaterialProvider: FC<PropsWithChildren> = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
