import type { FC } from 'react';

import { Typography } from '@mui/material';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import HailOutlinedIcon from '@mui/icons-material/HailOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';

import { convertPrice } from 'common/utils';
import type { IPropertyDetail } from 'common/types';
import { FullInformationCardStyled } from './FullInformationCard.styled';

interface IFullInformationCard extends Omit<Partial<IPropertyDetail>, 'photos'> {}

export const FullInformationCard: FC<IFullInformationCard> = ({ address, description, price, seller, title }) => {
    const convertedPriceToUsd: string = convertPrice(price ?? 0);
    return (
        <FullInformationCardStyled>
            <Typography variant="h5" fontWeight={700}>
                {title}
            </Typography>
            <Typography variant="h6">
                <FmdGoodOutlinedIcon />
                Address: {address}
            </Typography>
            <Typography variant="h6">
                <HailOutlinedIcon />
                Seller: {seller}
            </Typography>
            <Typography variant="h6">
                <DescriptionOutlinedIcon />
                Description: {description}
            </Typography>
            <Typography className="price">
                {convertedPriceToUsd}
                <LocalOfferOutlinedIcon />
            </Typography>
        </FullInformationCardStyled>
    );
};
