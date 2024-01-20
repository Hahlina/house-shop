import { Container } from "@mui/material";

import { PropertiesList, PreviewBanner } from "./components";

export const HomeContent = () => (
    <Container maxWidth="lg">
        <PreviewBanner />
        <PropertiesList />
    </Container>
);
