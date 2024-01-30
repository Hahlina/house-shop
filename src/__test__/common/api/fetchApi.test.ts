import { fetchApi } from 'common/api/fetchApi';

describe('fetchApi', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    const url = 'https://example.com/api/data';
    const options = { method: 'GET' };

    it('should fetch data successfully', async () => {
        global.fetch = jest.fn().mockResolvedValue({
            json: jest.fn().mockResolvedValue({ data: 'mocked data' })
        });
        const result = await fetchApi(url, options);
        expect(result).toEqual({ data: 'mocked data' });
    });

    it('should handle fetch error', async () => {
        global.fetch = jest.fn().mockRejectedValue(new Error('Network error'));
        const result = fetchApi(url, options);
        await expect(result).rejects.toThrow('Network error');
    });
});
