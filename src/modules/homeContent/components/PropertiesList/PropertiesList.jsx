import { Box, Typography } from '@mui/material';

import { PropertyCard } from 'common/components';

import { useProperties } from 'common/hooks';
import { PropertiesListStyled } from './PropertiesList.styled';

export const PropertiesList = () => {
    const { data } = useProperties();
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
