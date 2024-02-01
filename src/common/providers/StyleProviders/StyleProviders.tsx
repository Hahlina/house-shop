import type { FC, PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, theme } from 'common/styles';

export const StyleProvider: FC<PropsWithChildren> = ({ children }) => (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
    </ThemeProvider>
);
