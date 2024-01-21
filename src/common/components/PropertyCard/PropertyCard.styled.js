import styled from 'styled-components';

export const PropertyCardStyled = styled.div`
    overflow: hidden;
    width: 350px;
    height: 500px;
    border-radius: 26px;
    background: ${({ theme: { colors } }) => colors.white};
    border: 1px solid ${({ theme: { colors } }) => colors.gray};
    transition:
        transform 0.5s ease,
        box-shadow 0.3s ease;

    &:hover {
        transform: scale(1.02);
        box-shadow: 0 34px 36px 0 ${({ theme: { colors } }) => colors.black100};
    }

    img {
        height: 280px;
        width: 100%;
        object-fit: cover;
        object-position: center;
    }

    div.preview-information {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 25px;
        height: 200px;
    }

    p {
        font-size: 23px;
    }

    p.card-title {
        font-size: 25px;
        font-weight: 700;
    }

    p.price {
        color: ${({ theme: { colors } }) => colors.orange};
    }
`;
