import { Box, Skeleton } from '@mui/material';
import { PropertyCardLoader } from 'common/components';

import { PropertiesListStyled } from './PropertiesList.styled';

export const PropertiesListLoader = ({ length = 6 }) => {
    const loaderList = Array(length).fill(null);
    return (
        <PropertiesListStyled>
            <Skeleton height={50} width={200} animation="wave" sx={{ mb: 7 }} />
            <Box className="card-list">
                {loaderList.map((_, index) => (
                    <PropertyCardLoader key={index} />
                ))}
            </Box>
        </PropertiesListStyled>
    );
};
