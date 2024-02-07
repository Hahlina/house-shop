import { Box, Skeleton } from '@mui/material';

import { CardContentStyled } from './PropertyCard.styled';

export const PropertyCardLoader = () => {
    const listSkeletons = Array(3).fill(null);
    return (
        <Box height={500} width={350}>
            <Skeleton height={250} variant="rectangular" />
            <CardContentStyled>
                {listSkeletons.map((_, index) => (
                    <Skeleton key={index} />
                ))}
            </CardContentStyled>
        </Box>
    );
};
