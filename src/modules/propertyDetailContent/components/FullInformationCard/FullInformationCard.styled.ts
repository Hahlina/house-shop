import styled from 'styled-components';

export const FullInformationCardStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    min-width: 300px;
    max-width: 500px;
    max-height: 600px;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    padding: 40px;
    background: ${({ theme: { colors } }) => colors.white};

    p.price {
        text-align: center;
        font-size: 30px;
        color: ${({ theme: { colors } }) => colors.orange};
    }
`;
