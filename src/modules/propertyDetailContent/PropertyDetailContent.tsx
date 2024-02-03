import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Container, ErrorPage } from 'common/components';
import {
    FullInformationCard,
    PropertyGallery,
    PropertyDetailBreadCrumbs,
    PropertyDetailContentLoader
} from './components';

import { useAppDispatch, useAppSelector } from 'common/hooks';
import { getProperty, selectPropertyDetail } from 'store/ducks';
import { PropertyDetailContentStyled } from './PropertyDetailContent.styled';

export const PropertyDetailContent = () => {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const { data: property, loading, error } = useAppSelector(selectPropertyDetail);

    const { photos, ...restInformation } = property || {};

    useEffect(() => {
        id && dispatch(getProperty(id));
    }, [dispatch, id]);

    if (loading) return <PropertyDetailContentLoader />;
    if (error || !property) return <ErrorPage />;

    return (
        <Container>
            <PropertyDetailBreadCrumbs />
            <PropertyDetailContentStyled>
                {photos && <PropertyGallery {...{ photos }} />}
                {property && <FullInformationCard {...restInformation} />}
            </PropertyDetailContentStyled>
        </Container>
    );
};
