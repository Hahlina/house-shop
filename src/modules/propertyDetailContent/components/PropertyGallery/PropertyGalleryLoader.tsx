import { Skeleton } from '@mui/material';

import { StyledGalleryWrapper, StyledThumbSkeletonContainer } from './PropertyGallery.styled';

export const PropertyGalleryLoader = () => {
    const skeletonArray = Array(5).fill(null);
    return (
        <StyledGalleryWrapper data-testid="property-gallery-loader">
            <Skeleton data-testid="main-photo" height={600} variant="rectangular" />
            <StyledThumbSkeletonContainer>
                {skeletonArray.map((_, index) => (
                    <Skeleton variant="rectangular" key={index} height={100} width={100} data-testid="skeleton" />
                ))}
            </StyledThumbSkeletonContainer>
        </StyledGalleryWrapper>
    );
};
