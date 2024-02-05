import { PropertyDetailBreadCrumbs } from 'modules/propertyDetailContent/components';

import { screen, renderWithRoutes } from 'common/utils/test';

describe('PropertyDetailBreadCrumbs component', () => {
    it('should render the component without crashing', () => {
        renderWithRoutes(<PropertyDetailBreadCrumbs />);
    });

    it('should display a breadcrumb with a link to the home page', () => {
        renderWithRoutes(<PropertyDetailBreadCrumbs />);
        expect(screen.getByText('Home')).toBeInTheDocument();
    });

    it('should display custom breadcrumbs Properties', () => {
        renderWithRoutes(<PropertyDetailBreadCrumbs />);
        expect(screen.queryByText('Properties')).toBeInTheDocument();
    });

    it('should take a snapshot', () => {
        const { container } = renderWithRoutes(<PropertyDetailBreadCrumbs />);
        expect(container).toMatchSnapshot();
    });
});
