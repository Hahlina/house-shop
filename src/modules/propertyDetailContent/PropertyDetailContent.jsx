import { Container } from "@mui/material";

import { FullInformationCard, RealEstateGallery } from "./components";

import { useProperty } from "common/hooks";
import { EMPTY_OBJECT } from "common/constants";
import { PropertyDetailContentStyled } from "./PropertyDetailContent.styled";

export const PropertyDetailContent = () => {
    const { data } = useProperty(1);
    const { photos, ...allInformation } = data || EMPTY_OBJECT;
    return (
        <Container maxWidth="lg">
            <PropertyDetailContentStyled>
                <RealEstateGallery {...{ photos }} />
                <FullInformationCard {...allInformation} />
            </PropertyDetailContentStyled>
        </Container>
    );
};
