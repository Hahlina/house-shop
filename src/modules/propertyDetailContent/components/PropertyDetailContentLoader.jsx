import { FullInformationCardLoader, PropertyGalleryLoader } from 'modules/propertyDetailContent/components';

import { PropertyDetailContentStyled } from '../PropertyDetailContent.styled';

export const PropertyDetailContentLoader = () => (
    <PropertyDetailContentStyled>
        <PropertyGalleryLoader />
        <FullInformationCardLoader />
    </PropertyDetailContentStyled>
);
