import { fetchProperties, fetchPropertyDetail } from 'common/api';

import { server, mockProperties, mockPropertyDetail } from 'common/utils/test';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('API Functions', () => {
    it('fetchProperties should fetches properties successfully', async () => {
        const responce = await fetchProperties();
        expect(responce).toEqual(mockProperties);
    });

    it('fetchPropertyDetail should fetches property successfully', async () => {
        const responce = await fetchPropertyDetail('1');
        expect(responce).toEqual(mockPropertyDetail);
    });
});
