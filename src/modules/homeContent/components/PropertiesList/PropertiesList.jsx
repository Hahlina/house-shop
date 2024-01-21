import { PropertyCard } from 'common/components';

import { useProperties } from 'common/hooks';
import { PropertiesListStyled } from './PropertiesList.styled';

export const PropertiesList = () => {
    const { data } = useProperties();
    return (
        <PropertiesListStyled>
            <p className="list-title">List of properties</p>
            <div className="card-list">
                {data?.map((property) => (
                    <PropertyCard key={property.id} {...property} />
                ))}
            </div>
        </PropertiesListStyled>
    );
};
