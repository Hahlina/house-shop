import { useEffect } from 'react';

import { Box, Typography } from '@mui/material';
import { PropertyCard } from 'common/components';
import { PropertiesListLoader } from './PropertiesListLoader';

import { useAppDispatch, useAppSelector } from 'common/hooks';
import { getProperties, selectProperties } from 'store/ducks';
import { PropertiesListStyled } from './PropertiesList.styled';

export const PropertiesList = () => {
    const dispatch = useAppDispatch();
    const { data, loading } = useAppSelector(selectProperties);

    useEffect(() => {
        dispatch(getProperties());
    }, [dispatch]);

    if (loading && !data.length) return <PropertiesListLoader />;

    return (
        <PropertiesListStyled>
            <Typography className="list-title">List of properties</Typography>
            <Box className="card-list">{data?.map((property) => <PropertyCard key={property.id} {...property} />)}</Box>
        </PropertiesListStyled>
    );
};
