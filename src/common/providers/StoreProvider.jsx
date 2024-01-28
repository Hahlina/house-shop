import { Provider } from 'react-redux';

import { appStore } from 'store';

export const StoreProvider = ({ children }) => <Provider store={appStore}>{children}</Provider>;
