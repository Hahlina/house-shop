import { Box } from '@mui/material';
import { PropertyCardLoader } from 'common/components';

import { ListTitleSkeletonStyled, PropertiesListStyled } from './PropertiesList.styled';

export const PropertiesListLoader = ({ length = 6 }: { length?: number }) => {
    const loaderList = Array(length).fill(null);
    return (
        <PropertiesListStyled data-testid="properties-list-loader">
            <ListTitleSkeletonStyled />
            <Box className="card-list">
                {loaderList.map((_, index) => (
                    <PropertyCardLoader key={index} />
                ))}
            </Box>
        </PropertiesListStyled>
    );
};
