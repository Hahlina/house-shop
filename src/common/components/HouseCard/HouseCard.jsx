import { HouseCardStyled } from "./HouseCard.styled";

export const HouseCard = ({ address, preview_image, price, title }) => {
    return (
        <HouseCardStyled>
            <img src={preview_image} alt={title} />
            <div className="preview-information">
                <p className="card-title">{title}</p>
                <p className="address">{address}</p>
                <p className="price">${price}</p>
            </div>
        </HouseCardStyled>
    );
};
