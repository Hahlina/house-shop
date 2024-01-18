import { GlobalStyle, theme } from "common/styles";
import { ThemeProvider } from "styled-components";

export const StyleProvider = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            {children}
        </ThemeProvider>
    );
};
