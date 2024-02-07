import { rest } from 'msw';

import { mockPropertyDetail } from 'common/utils/test';
import { API_BASE_URL, API_ROUTES } from 'common/constants';

export const propertyDetailResolver = rest.get(`${API_BASE_URL}/${API_ROUTES.PROPERTY}/1`, (_, responce, context) =>
    responce(context.json(mockPropertyDetail))
);
