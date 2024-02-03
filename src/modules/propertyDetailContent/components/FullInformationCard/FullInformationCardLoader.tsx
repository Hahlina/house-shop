import { Skeleton } from '@mui/material';

import { FullInformationCardStyled } from './FullInformationCard.styled';

export const FullInformationCardLoader = () => {
    const skeletonArray = Array(5).fill(null);
    return (
        <FullInformationCardStyled>
            {skeletonArray.map((_, index) => (
                <Skeleton data-testid="skeleton" key={index} />
            ))}
        </FullInformationCardStyled>
    );
};
