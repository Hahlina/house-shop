import { Skeleton } from '@mui/material';

import { FullInformationCardStyled } from './FullInformationCard.styled';

export const FullInformationCardLoader = () => {
    const skeletonArray = Array(6).fill(null);
    return (
        <FullInformationCardStyled>
            {skeletonArray.map((_, index) => (
                <Skeleton key={index} height={30} />
            ))}
        </FullInformationCardStyled>
    );
};
