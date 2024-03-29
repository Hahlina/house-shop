import { Skeleton } from '@mui/material';
import { Container } from 'common/components';
import { FullInformationCardLoader, PropertyGalleryLoader } from 'modules/propertyDetailContent/components';

import { PropertyDetailContentStyled } from 'modules/propertyDetailContent/PropertyDetailContent.styled';

export const PropertyDetailContentLoader = () => (
    <Container>
        <Skeleton width={200} height={45} />
        <PropertyDetailContentStyled>
            <PropertyGalleryLoader />
            <FullInformationCardLoader />
        </PropertyDetailContentStyled>
    </Container>
);
