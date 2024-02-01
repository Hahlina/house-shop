import type { FC } from 'react';
import { useLocation, LinkProps, Link } from 'react-router-dom';

import { Breadcrumbs } from '@mui/material';

import { capitalizeFirstLetter } from 'common/utils';
import { APP_ROUTES, EMPTY_ARRAY } from 'common/constants';
import { BreadcrumbsItemStyled } from './NavBreadcrumbs.styled';

export interface ICustomPathNames extends LinkProps {
    name: string;
}
interface INavBreadcrumbs {
    customPathNames?: ICustomPathNames[];
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
            <Link to={APP_ROUTES.HOME} data-testid="breadcrumb-link">
                <BreadcrumbsItemStyled>Home</BreadcrumbsItemStyled>
            </Link>
            {breadcrumbConfig.map(({ name, to, ...rest }) => (
                <Link key={name} to={to} {...rest}>
                    <BreadcrumbsItemStyled>{name}</BreadcrumbsItemStyled>
                </Link>
            ))}
        </Breadcrumbs>
    );
};
