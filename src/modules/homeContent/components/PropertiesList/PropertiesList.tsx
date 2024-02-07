import { useEffect, useRef } from 'react';

import { Box, Typography } from '@mui/material';
import { NothingFound, PropertyCard, SomethingWentWrong } from 'common/components';
import { PropertiesPagination } from 'modules/homeContent/components';
import { PropertiesListLoader } from './PropertiesListLoader';

import { useAppDispatch, useAppSelector, usePagination } from 'common/hooks';
import { getProperties, selectProperties } from 'store/ducks';
import { PropertiesListStyled } from './PropertiesList.styled';

const ITEMS_PER_PAGE = 6;

export const PropertiesList = () => {
    const dispatch = useAppDispatch();
    const { data, loading, error } = useAppSelector(selectProperties);
    const listTitleRef = useRef<HTMLElement | null>(null);
    const { setActivePage, pagesNumber, activePage } = usePagination({
        initialPage: 1,
        totalItems: data.length,
        itemsPerPage: ITEMS_PER_PAGE
    });

    const activeSLice = activePage * ITEMS_PER_PAGE;
    const slicedProperties = data.slice(activeSLice - ITEMS_PER_PAGE, activeSLice);
    const isPagination = data.length > ITEMS_PER_PAGE;

    useEffect(() => {
        dispatch(getProperties());
    }, [dispatch]);

    if (loading && !data.length) return <PropertiesListLoader />;
    if (error) return <SomethingWentWrong />;
    if (!data.length) return <NothingFound />;

    return (
        <PropertiesListStyled>
            <Typography ref={listTitleRef} className="list-title">
                List of properties
            </Typography>
            <Box className="card-list">
                {slicedProperties?.map((property) => <PropertyCard key={property.id} {...property} />)}
            </Box>
            {isPagination && (
                <PropertiesPagination
                    {...{ activePage, pagesNumber, onPageChange: setActivePage, refToStartPositionList: listTitleRef }}
                />
            )}
        </PropertiesListStyled>
    );
};
