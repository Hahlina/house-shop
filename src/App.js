import { HomeContent, PropertyDetailContent } from 'modules';
import { BaseLayout } from 'common/layouts';

import { RootProvider } from 'common/providers';

export const App = () => (
    <RootProvider>
        <BaseLayout>
            <HomeContent />
            <PropertyDetailContent />
        </BaseLayout>
    </RootProvider>
);
