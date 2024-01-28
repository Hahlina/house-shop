import { useNavigate, useParams } from 'react-router-dom';

import { NavBreadcrumbs } from 'common/components';

import { WrapperStyled } from './PropertyDetailBreadCrumbs.styled';

export const PropertyDetailBreadCrumbs = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const customPathNames = [
        {
            name: 'Properties',
            path: '#',
            onClick: () => navigate(-1)
        },
        {
            name: id,
            path: `/property/${id}`
        }
    ];

    return (
        <WrapperStyled>
            <NavBreadcrumbs {...{ customPathNames }} />
        </WrapperStyled>
    );
};
