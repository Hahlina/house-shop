import { StyleProvider } from "./StyleProviders";

export const RootProvider = ({ children }) => {
    return <StyleProvider>{children}</StyleProvider>;
};
