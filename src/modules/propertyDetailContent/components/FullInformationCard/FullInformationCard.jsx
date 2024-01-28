import { Typography } from '@mui/material';

import { convertPrice } from 'common/utils';
import { FullInformationCardStyled } from './FullInformationCard.styled';

export const FullInformationCard = ({ address, description, price, seller, title }) => {
    const convertedPriceToUsd = convertPrice(price);
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
