import { Typography } from '@mui/material';
import styled from 'styled-components';

export const BreadcrumbsItemStyled = styled(Typography)`
    color: ${({ theme: { colors } }) => colors.black};
    transition: color 0.3s ease;

    &:hover {
        color: ${({ theme: { colors } }) => colors.orange};
    }
`;
