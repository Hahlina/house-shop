import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LinkStyled = styled(Link)`
    color: ${({ theme: { colors } }) => colors.black};
    transition: color 0.3s ease;

    &:hover {
        color: ${({ theme: { colors } }) => colors.orange};
    }
`;
