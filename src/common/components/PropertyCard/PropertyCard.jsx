import { CardActionArea, Typography } from '@mui/material';

import { convertPrice } from 'common/utils';
import { PropertyCardStyled, CardMediaStyled, CardContentStyled } from './PropertyCard.styled';

export const PropertyCard = ({ address, preview_image, price, title }) => {
    const convertedPriceToUsd = convertPrice(price);
    return (
        <PropertyCardStyled>
            <CardActionArea>
                <CardMediaStyled image={preview_image} />
                <CardContentStyled>
                    <Typography className="title">{title}</Typography>
                    <Typography className="address">{address}</Typography>
                    <Typography className="price">{convertedPriceToUsd}</Typography>
                </CardContentStyled>
            </CardActionArea>
        </PropertyCardStyled>
    );
};
