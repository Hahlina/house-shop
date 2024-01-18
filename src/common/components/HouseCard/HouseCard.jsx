import { HouseCardStyled } from "./HouseCard.styled";

export const HouseCard = () => {
    return (
        <HouseCardStyled>
            <img src="/images/mockImage.webp" alt="house" />
            <div className="preview-information">
                <p className="card-title">Title</p>
                <p className="address">Adress adress adress adress</p>
                <p className="price">$120 000</p>
            </div>
        </HouseCardStyled>
    );
};
