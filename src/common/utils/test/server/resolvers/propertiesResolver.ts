import { rest } from 'msw';

import { mockProperties } from 'common/utils/test';
import { API_BASE_URL, API_ROUTES } from 'common/constants';

export const propertiesResolver = rest.get(`${API_BASE_URL}/${API_ROUTES.PROPERTIES}`, (_, responce, context) =>
    responce(context.json(mockProperties))
);
