import type { ChangeEvent, FC, MutableRefObject } from 'react';

import { Pagination } from '@mui/material';

import { PropertiesPaginationStyled } from './PropertiesPagination.styled';

interface IPropertiesPaginationProps {
    activePage: number;
    onPageChange: (pageNumber: number) => void;
    pagesNumber: number;
    refToStartPositionList?: MutableRefObject<HTMLElement | null>;
}

export const PropertiesPagination: FC<IPropertiesPaginationProps> = ({
    activePage,
    onPageChange,
    pagesNumber,
    refToStartPositionList
}) => {
    const handleChange = (event: ChangeEvent<unknown>, page: number) => {
        onPageChange(page);
        refToStartPositionList?.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <PropertiesPaginationStyled>
            <Pagination
                variant="outlined"
                shape="rounded"
                page={activePage}
                onChange={handleChange}
                count={pagesNumber}
            />
        </PropertiesPaginationStyled>
    );
};
