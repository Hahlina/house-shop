import { createBrowserRouter } from 'react-router-dom';

import { HomeContent, PropertyDetailContent } from 'modules';

import { APP_ROUTES } from 'common/constants';

export const router = createBrowserRouter([
    {
        path: APP_ROUTES.HOME,
        element: <HomeContent />
    },
    {
        path: `${APP_ROUTES.PROPERTY}/:id`,
        element: <PropertyDetailContent />
    }
]);
