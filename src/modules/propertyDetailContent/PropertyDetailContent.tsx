import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Container } from 'common/components';
import {
    FullInformationCard,
    PropertyGallery,
    PropertyDetailBreadCrumbs,
    PropertyDetailContentLoader
} from './components';

import { useAppDispatch, useAppSelector } from 'common/hooks';
import { getProperty, selectPropertyDetail } from 'store/ducks';
import { EMPTY_OBJECT } from 'common/constants';
import { PropertyDetailContentStyled } from './PropertyDetailContent.styled';

export const PropertyDetailContent = () => {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const { data: properties, loading } = useAppSelector(selectPropertyDetail);
    const { photos, ...restInformation } = properties || EMPTY_OBJECT;
    const isExistFullInfo = !!Object.keys(restInformation).length;

    useEffect(() => {
        id && dispatch(getProperty(id));
    }, [dispatch, id]);

    if (loading) return <PropertyDetailContentLoader />;

    return (
        <Container>
            <PropertyDetailBreadCrumbs />
            <PropertyDetailContentStyled>
                {photos && <PropertyGallery {...{ photos }} />}
                {isExistFullInfo && <FullInformationCard {...restInformation} />}
            </PropertyDetailContentStyled>
        </Container>
    );
};
