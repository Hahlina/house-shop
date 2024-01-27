import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Container } from 'common/components';
import {
    FullInformationCard,
    PropertyGallery,
    PropertyDetailBreadCrumbs,
    PropertyDetailContentLoader
} from './components';

import { getProperty } from 'store/ducks';
import { EMPTY_OBJECT } from 'common/constants';
import { PropertyDetailContentStyled } from './PropertyDetailContent.styled';

export const PropertyDetailContent = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { data: properties, loading } = useSelector(({ propertyDetail }) => propertyDetail);
    const { photos, ...restInformation } = properties || EMPTY_OBJECT;

    useEffect(() => {
        dispatch(getProperty(id));
    }, [dispatch, id]);

    if (loading) return <PropertyDetailContentLoader />;

    return (
        <Container>
            <PropertyDetailBreadCrumbs />
            <PropertyDetailContentStyled>
                <PropertyGallery {...{ photos }} />
                <FullInformationCard {...restInformation} />
            </PropertyDetailContentStyled>
        </Container>
    );
};
