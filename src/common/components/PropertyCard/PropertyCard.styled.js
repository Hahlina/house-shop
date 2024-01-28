import { Card, CardContent, CardMedia } from '@mui/material';
import styled from 'styled-components';

export const PropertyCardStyled = styled(Card)`
    width: 350px;
    height: 500px;
    border: 1px solid ${({ theme: { colors } }) => colors.gray};
    transition: box-shadow 0.3s ease;

    &:hover {
        box-shadow: 0 34px 36px 0 ${({ theme: { colors } }) => colors.black100};
    }
`;

export const CardMediaStyled = styled(CardMedia)`
    height: 280px;
`;

export const CardContentStyled = styled(CardContent)`
    display: flex;
    flex-direction: column;
    height: 220px;

    & > * {
        height: 33%;
    }

    p {
        font-size: 20px;
    }

    p.title {
        font-weight: 700;
    }

    p.price {
        color: ${({ theme: { colors } }) => colors.orange};
        font-size: 25px;
    }
`;
