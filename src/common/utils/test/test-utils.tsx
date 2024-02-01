import type { ReactElement } from 'react';
import { render, type RenderOptions } from '@testing-library/react';

import { StyleProvider } from 'common/providers';

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
    render(ui, { wrapper: StyleProvider, ...options });

export * from '@testing-library/react';
export { customRender as render };
