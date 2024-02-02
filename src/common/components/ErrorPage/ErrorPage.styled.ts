import styled from 'styled-components';

export const ErrorPageStyled = styled.div`
    height: 100vh;
    display: grid;
    place-items: center;

    img {
        max-width: 600px;
        max-height: 600px;
        object-fit: contain;
        width: 100%;
        height: fit-content;
    }
`;

export const ErrorContent = styled.div`
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 50px;
`;

export const ErrorInfoStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    p.code {
        font-size: 60px;
        color: ${({ theme: { colors } }) => colors.orange};
    }
`;
