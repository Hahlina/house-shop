import { HomeContent, PropertyDetailContent } from "modules";

import { RootProvider } from "common/providers";

export const App = () => (
    <RootProvider>
        <HomeContent />
        <PropertyDetailContent />
    </RootProvider>
);
