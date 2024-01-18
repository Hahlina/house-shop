import { Container } from "@mui/material";
import { HousesList, PreviewBanner } from "./components";

export const HomeContent = () => {
    return (
        <Container maxWidth="lg">
            <PreviewBanner />
            <HousesList />
        </Container>
    );
};
