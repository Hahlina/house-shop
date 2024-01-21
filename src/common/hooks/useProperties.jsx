import { useEffect, useState } from 'react';

import { API_BASE_URL, API_ROUTES, EMPTY_ARRAY } from 'common/constants';

export const useProperties = () => {
    const [data, setData] = useState(EMPTY_ARRAY);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const getProperties = async () => {
            const requestUrl = `${API_BASE_URL}/${API_ROUTES.PROPERTIES}`;
            try {
                const response = await fetch(requestUrl);
                const properties = await response.json();
                setData(properties);
            } catch (error) {
                setIsError(true);
            }
        };
        getProperties();
    }, []);

    return { data, isError };
};
