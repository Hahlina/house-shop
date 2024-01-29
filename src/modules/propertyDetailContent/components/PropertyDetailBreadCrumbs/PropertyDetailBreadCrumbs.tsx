import { useNavigate, useParams } from 'react-router-dom';

import { type ICustomPathNames, NavBreadcrumbs } from 'common/components';

import { EMPTY_STRING } from 'common/constants';
import { WrapperStyled } from './PropertyDetailBreadCrumbs.styled';

export const PropertyDetailBreadCrumbs = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const customPathNames: ICustomPathNames[] = [
        {
            name: 'Properties',
            to: '#',
            onClick: () => navigate(-1)
        },
        {
            name: id ?? EMPTY_STRING,
            to: `/property/${id ?? EMPTY_STRING}`
        }
    ];

    return (
        <WrapperStyled>
            <NavBreadcrumbs {...{ customPathNames }} />
        </WrapperStyled>
    );
};
