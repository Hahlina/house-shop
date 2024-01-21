import { FullInformationCard, PropertyGallery } from './components';

import { useProperty } from 'common/hooks';
import { EMPTY_OBJECT } from 'common/constants';
import { PropertyDetailContentStyled } from './PropertyDetailContent.styled';

export const PropertyDetailContent = () => {
    const { data } = useProperty(1);
    const { photos, ...restInformation } = data || EMPTY_OBJECT;
    return (
        <PropertyDetailContentStyled>
            <PropertyGallery {...{ photos }} />
            <FullInformationCard {...restInformation} />
        </PropertyDetailContentStyled>
    );
};
