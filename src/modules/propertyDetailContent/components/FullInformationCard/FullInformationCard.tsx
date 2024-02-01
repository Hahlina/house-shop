import type { FC } from 'react';

import { Typography } from '@mui/material';

import { convertPrice } from 'common/utils';
import type { IPropertyDetail } from 'common/types';
import { FullInformationCardStyled } from './FullInformationCard.styled';

interface IFullInformationCard extends Omit<IPropertyDetail, 'photos'> {}

export const FullInformationCard: FC<IFullInformationCard> = ({ address, description, price, seller, title }) => {
    const convertedPriceToUsd: string = convertPrice(price ?? 0);
    return (
        <FullInformationCardStyled>
            <Typography variant="h5" fontWeight={700}>
                {title}
            </Typography>
            <Typography variant="h6">Address: {address}</Typography>
            <Typography variant="h6">Seller: {seller}</Typography>
            <Typography variant="h6">Description: {description}</Typography>
            <Typography className="price">{convertedPriceToUsd}</Typography>
        </FullInformationCardStyled>
    );
};
