import { fetchApi } from 'common/api';
import { API_BASE_URL, API_ROUTES } from 'common/constants';
import type { TPropertyList, IPropertyDetail } from 'common/types';

export const fetchProperties = async (): Promise<TPropertyList> => {
    const requestUrl: string = `${API_BASE_URL}/${API_ROUTES.PROPERTIES}`;
    return fetchApi<TPropertyList>(requestUrl);
};

export const fetchPropertyDetail = async (id: string): Promise<IPropertyDetail> => {
    const requestUrl: string = `${API_BASE_URL}/${API_ROUTES.PROPERTY}/${id}`;
    return fetchApi<IPropertyDetail>(requestUrl);
};
