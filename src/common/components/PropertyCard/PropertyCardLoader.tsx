import { Box, Skeleton } from '@mui/material';

import { CardContentStyled } from './PropertyCard.styled';

export const PropertyCardLoader = () => (
    <Box height={500} width={350}>
        <Skeleton animation="wave" height={250} sx={{ transform: 'scale(1, 1)' }} />
        <CardContentStyled>
            <Skeleton animation="wave" height={50} />
            <Skeleton animation="wave" height={50} />
            <Skeleton animation="wave" height={50} />
        </CardContentStyled>
    </Box>
);
