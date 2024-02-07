import { NavBreadcrumbs } from 'common/components';

import { screen, mockCustomLinkProps, mockCustomPathNames, renderWithRoutes } from 'common/utils/test';
import { colors } from 'common/styles';

describe('NavBreadcrumbs component', () => {
    it('should render component with default props', () => {
        renderWithRoutes(<NavBreadcrumbs />);
        expect(screen.getByLabelText('breadcrumbs')).toBeInTheDocument();
    });

    it('should render component with customPathNames props', () => {
        renderWithRoutes(<NavBreadcrumbs customPathNames={mockCustomPathNames} />);
        expect(screen.getByLabelText('breadcrumbs')).toBeInTheDocument();
    });

    it('should render component with customPathNames prop and custom LinkProps', () => {
        const customPathNames = mockCustomPathNames.map((path) => ({ ...path, ...mockCustomLinkProps }));
        renderWithRoutes(<NavBreadcrumbs customPathNames={customPathNames} />);
        expect(screen.getByLabelText('breadcrumbs')).toBeInTheDocument();
    });

    it('should render home breadcrumb', () => {
        renderWithRoutes(<NavBreadcrumbs />);
        expect(screen.getByTestId('breadcrumb-link')).toHaveAttribute('href', '/');
    });

    it('should render link item with correct color', () => {
        renderWithRoutes(<NavBreadcrumbs />);
        expect(screen.getByTestId('breadcrumb-link')).toHaveStyle(`color: ${colors.black}`);
    });

    it('should take a snapshot without custom props', () => {
        renderWithRoutes(<NavBreadcrumbs />);
        expect(screen.getByLabelText('breadcrumbs')).toMatchSnapshot();
    });

    it('should take a snapshot with customPathNames', () => {
        renderWithRoutes(<NavBreadcrumbs customPathNames={mockCustomPathNames} />);
        expect(screen.getByLabelText('breadcrumbs')).toMatchSnapshot();
    });
});
