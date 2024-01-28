import { useLocation } from 'react-router-dom';

import { Breadcrumbs, Typography } from '@mui/material';

import { capitalizeFirstLetter } from 'common/utils';
import { APP_ROUTES, EMPTY_ARRAY } from 'common/constants';
import { LinkStyled } from './NavBreadcrumbs.styled';

export const NavBreadcrumbs = ({ customPathNames }) => {
    const { pathname } = useLocation();
    let breadcrumbConfig = customPathNames || EMPTY_ARRAY;

    if (!customPathNames) {
        const pathnames = pathname.split('/').filter(Boolean);
        breadcrumbConfig = pathnames.map((path, index) => ({
            name: capitalizeFirstLetter(path),
            path: `/${pathnames.slice(0, index + 1).join('/')}`
        }));
    }

    return (
        <Breadcrumbs aria-label="breadcrumbs" separator="/">
            <LinkStyled to={APP_ROUTES.HOME}>
                <Typography fontSize={18}>Home</Typography>
            </LinkStyled>
            {breadcrumbConfig.map(({ name, path, ...rest }) => (
                <LinkStyled key={path} to={path} {...rest}>
                    <Typography>{name}</Typography>
                </LinkStyled>
            ))}
        </Breadcrumbs>
    );
};
