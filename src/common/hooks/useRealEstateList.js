import { useEffect, useState } from "react";
import { API_BASE_URL, API_ROUTES } from "common/constants";

export const useRealEstateList = () => {
    const [data, setData] = useState([]);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const getRealEstateList = async () => {
            const requestUrl = `${API_BASE_URL}/${API_ROUTES.ALL_REAL_ESTATE}`;
            try {
                const response = await fetch(requestUrl);
                const realEstateData = await response.json();
                setData(realEstateData);
            } catch (error) {
                setIsError(true);
            }
        };
        getRealEstateList();
    }, []);

    return { data, isError };
};
