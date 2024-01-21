import { convertPrice } from 'common/utils';
import { PropertyCardStyled } from './PropertyCard.styled';

export const PropertyCard = ({ address, preview_image, price, title }) => {
    const convertedPriceToUsd = convertPrice(price);
    return (
        <PropertyCardStyled>
            <img src={preview_image} alt={title} />
            <div className="preview-information">
                <p className="card-title">{title}</p>
                <p className="address">{address}</p>
                <p className="price">{convertedPriceToUsd}</p>
            </div>
        </PropertyCardStyled>
    );
};
