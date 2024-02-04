import { useState } from 'react';

interface IUsePaginationProps {
    initialPage: number;
    itemsPerPage: number;
    totalItems: number;
}

export const usePagination = ({ initialPage, itemsPerPage, totalItems }: IUsePaginationProps) => {
    const [activePage, setActivePage] = useState(initialPage);
    const pagesNumber = Math.ceil(totalItems / itemsPerPage);

    return {
        activePage,
        pagesNumber,
        setActivePage
    };
};
