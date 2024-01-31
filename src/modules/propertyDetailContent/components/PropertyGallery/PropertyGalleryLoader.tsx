import { Box, Skeleton } from '@mui/material';

import { StyledGalleryWrapper } from './PropertyGallery.styled';

export const PropertyGalleryLoader = () => {
    const skeletonArray = Array(5).fill(null);
    return (
        <StyledGalleryWrapper data-testid="property-gallery-loader">
            <Skeleton data-testid="main-photo" height={600} sx={{ transform: 'scale(1, 1)', borderRadius: '30px' }} />
            <Box display="flex" justifyContent="center" gap={1}>
                {skeletonArray.map((_, index) => (
                    <Skeleton
                        sx={{ transform: 'scale(1, 1)', borderRadius: '20px' }}
                        key={index}
                        height={100}
                        width={100}
                        data-testid="skeleton"
                    />
                ))}
            </Box>
        </StyledGalleryWrapper>
    );
};
