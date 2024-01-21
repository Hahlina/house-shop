import { ThemeProvider } from 'styled-components';

import { GlobalStyle, theme } from 'common/styles';

export const StyleProvider = ({ children }) => (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
    </ThemeProvider>
);
