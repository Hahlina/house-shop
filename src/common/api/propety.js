import { API_BASE_URL, API_ROUTES } from 'common/constants';

export const fetchProperties = async () => {
    try {
        const requestUrl = `${API_BASE_URL}/${API_ROUTES.PROPERTIES}`;
        const response = await fetch(requestUrl);
        return await response.json();
    } catch (error) {
        throw new Error(error.message || 'Something went wrong');
    }
};
export const fetchPropertyDetail = async (id) => {
    try {
        const requestUrl = `${API_BASE_URL}/${API_ROUTES.PROPERTY}/${id}`;
        const response = await fetch(requestUrl);
        return await response.json();
    } catch (error) {
        throw new Error(error.message || 'Something went wrong');
    }
};
