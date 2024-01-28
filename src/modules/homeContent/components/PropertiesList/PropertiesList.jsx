import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Box, Typography } from '@mui/material';
import { PropertyCard } from 'common/components';
import { PropertiesListLoader } from './PropertiesListLoader';

import { getProperties } from 'store/ducks';
import { PropertiesListStyled } from './PropertiesList.styled';

export const PropertiesList = () => {
    const dispatch = useDispatch();
    const { data, loading } = useSelector(({ properties }) => properties);

    useEffect(() => {
        dispatch(getProperties());
    }, [dispatch]);

    if (loading && !data.length) return <PropertiesListLoader />;

    return (
        <PropertiesListStyled>
            <Typography className="list-title">List of properties</Typography>
            <Box className="card-list">
                {data?.map((property) => (
                    <PropertyCard key={property.id} {...property} />
                ))}
            </Box>
        </PropertiesListStyled>
    );
};
