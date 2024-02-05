import type { ReactElement } from 'react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { render, type RenderOptions } from '@testing-library/react';

import { StyleProvider } from 'common/providers';

export const renderWithRoutes = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) => {
    const router = createMemoryRouter([{ path: '/', element: ui }], { initialEntries: ['/'] });

    return render(<RouterProvider router={router} />, { wrapper: StyleProvider, ...options });
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
    render(ui, { wrapper: StyleProvider, ...options });

export * from '@testing-library/react';
export { customRender as render };
