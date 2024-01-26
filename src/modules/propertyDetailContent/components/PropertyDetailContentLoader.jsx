import { Skeleton } from '@mui/material';
import { FullInformationCardLoader, PropertyGalleryLoader } from 'modules/propertyDetailContent/components';

import { PropertyDetailContentStyled } from '../PropertyDetailContent.styled';

export const PropertyDetailContentLoader = () => (
    <>
        <Skeleton width={200} height={30} sx={{ marginTop: 2 }} />
        <PropertyDetailContentStyled>
            <PropertyGalleryLoader />
            <FullInformationCardLoader />
        </PropertyDetailContentStyled>
    </>
);
