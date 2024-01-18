import styled from "styled-components";

export const HouseCardStyled = styled.div`
    overflow: hidden;
    width: 350px;
    height: 500px;
    border-radius: 26px;
    background: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.gray};
    transition:
        transform 0.5s ease,
        box-shadow 0.3s ease;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 34px 36px 0 ${({ theme }) => theme.colors.black100};
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

    p.card-title {
        font-weight: 700;
        font-size: 25px;
    }

    p.address {
        font-size: 23px;
    }

    p.price {
        font-size: 23px;
        color: ${({ theme }) => theme.colors.orange};
    }
`;
