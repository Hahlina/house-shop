import type { FC } from 'react';
import { Link } from 'react-router-dom';

import { CardActionArea, Typography } from '@mui/material';

import { convertPrice } from 'common/utils';
import { APP_ROUTES } from 'common/constants';
import type { IProperty } from 'common/types';
import { PropertyCardStyled, CardMediaStyled, CardContentStyled } from './PropertyCard.styled';

interface IPropertyCard extends IProperty {}

export const PropertyCard: FC<IPropertyCard> = ({ address, preview_image, price, title, id }) => {
    const convertedPriceToUsd = convertPrice(price);

    return (
        <Link to={`${APP_ROUTES.PROPERTY}/${id}`}>
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
        </Link>
    );
};
