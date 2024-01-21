import { convertPrice } from 'common/utils';
import { FullInformationCardStyled } from './FullInformationCard.styled';

export const FullInformationCard = ({ address, description, price, seller, title }) => {
    const convertedPriceToUsd = convertPrice(price);
    return (
        <FullInformationCardStyled>
            <p className={'title'}>{title}</p>
            <p className={'address'}>Address: {address}</p>
            <p className={'seller'}>Seller: {seller}</p>
            <p className={'description'}>Description: {description}</p>
            <p className={'price'}>{convertedPriceToUsd}</p>
        </FullInformationCardStyled>
    );
};
