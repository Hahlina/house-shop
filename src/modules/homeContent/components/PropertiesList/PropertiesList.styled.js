import styled from 'styled-components';

export const PropertiesListStyled = styled.div`
    margin: 100px 0;

    p.list-title {
        position: relative;
        font-size: 36px;
        font-weight: 700;
        line-height: 64px;
        text-transform: capitalize;
        margin-bottom: 50px;

        &::before {
            content: '';
            position: absolute;
            display: inline-block;
            height: 4px;
            width: 100px;
            background: ${({ theme: { colors } }) => colors.orange};
            bottom: 0;
        }
    }

    div.card-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 30px 30px;
    }
`;
