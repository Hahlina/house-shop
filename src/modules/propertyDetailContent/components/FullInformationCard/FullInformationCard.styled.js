import styled from "styled-components";

export const FullInformationCardStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    min-width: 300px;
    max-width: 700px;
    max-height: 600px;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    padding: 40px;
    background: ${({ theme: { colors } }) => colors.white};

    p {
        font-size: 22px;
    }

    p.title {
        font-size: 25px;
        font-weight: 700;
        text-align: center;
    }

    p.price {
        text-align: center;
        font-size: 30px;
        color: ${({ theme: { colors } }) => colors.orange};
    }
`;
