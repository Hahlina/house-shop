import type { FC } from 'react';
import { useLocation, LinkProps } from 'react-router-dom';

import { Breadcrumbs, Typography } from '@mui/material';

import { capitalizeFirstLetter } from 'common/utils';
import { APP_ROUTES, EMPTY_ARRAY } from 'common/constants';
import { LinkStyled } from './NavBreadcrumbs.styled';

export interface ICustomPathNames extends LinkProps {
    name: string;
}
interface INavBreadcrumbs {
    customPathNames: ICustomPathNames[];
}

export const NavBreadcrumbs: FC<INavBreadcrumbs> = ({ customPathNames }) => {
    const { pathname } = useLocation();
    let breadcrumbConfig = customPathNames || EMPTY_ARRAY;

    if (!customPathNames) {
        const pathnames: string[] = pathname.split('/').filter(Boolean);
        breadcrumbConfig = pathnames.map((path, index) => ({
            name: capitalizeFirstLetter(path),
            to: `/${pathnames.slice(0, index + 1).join('/')}`
        }));
    }

    return (
        <Breadcrumbs aria-label="breadcrumbs" separator="/">
            <LinkStyled to={APP_ROUTES.HOME}>
                <Typography fontSize={18}>Home</Typography>
            </LinkStyled>
            {breadcrumbConfig.map(({ name, to, ...rest }) => (
                <LinkStyled key={name} to={to} {...rest}>
                    <Typography>{name}</Typography>
                </LinkStyled>
            ))}
        </Breadcrumbs>
    );
};
