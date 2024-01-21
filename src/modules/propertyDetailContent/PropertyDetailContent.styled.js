import styled from 'styled-components';

export const PropertyDetailContentStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    gap: 50px;
    margin: 50px 0;

    ${({ theme: { media } }) => media.l`
        flex-direction: row;
        align-items: flex-start;
    `}
`;
