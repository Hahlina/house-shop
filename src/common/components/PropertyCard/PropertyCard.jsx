import { CardActionArea } from '@mui/material';

import { convertPrice } from 'common/utils';
import { PropertyCardStyled, CardMediaStyled, CardContentStyled } from './PropertyCard.styled';

export const PropertyCard = ({ address, preview_image, price, title }) => {
    const convertedPriceToUsd = convertPrice(price);
    return (
        <PropertyCardStyled>
            <CardActionArea>
                <CardMediaStyled image={preview_image} />
                <CardContentStyled>
                    <p className="title">{title}</p>
                    <p className="address">{address}</p>
                    <p className="price">{convertedPriceToUsd}</p>
                </CardContentStyled>
            </CardActionArea>
        </PropertyCardStyled>
    );
};
