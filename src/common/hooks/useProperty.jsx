import { useEffect, useState } from 'react';

import { API_BASE_URL, API_ROUTES, EMPTY_OBJECT } from 'common/constants';

export const useProperty = (id) => {
    const [data, setData] = useState(EMPTY_OBJECT);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const getProperty = async () => {
            const requestUrl = `${API_BASE_URL}/${API_ROUTES.PROPERTY}/${id}`;
            try {
                const response = await fetch(requestUrl);
                const property = await response.json();
                setData(property);
            } catch (error) {
                setIsError(true);
            }
        };
        getProperty();
    }, [id]);

    return { data, isError };
};
