import { Container } from 'common/components';
import { PropertiesList, PreviewBanner } from './components';

export const HomeContent = () => (
    <>
        <PreviewBanner />
        <Container>
            <PropertiesList />
        </Container>
    </>
);
