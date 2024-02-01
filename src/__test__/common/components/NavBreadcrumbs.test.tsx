import { NavBreadcrumbs } from 'common/components';

import { render, screen, mockCustomLinkProps, mockCustomPathNames, mockPathName } from 'common/utils/test';
import { colors } from 'common/styles';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    Link: 'a',
    useLocation: () => ({ pathname: mockPathName })
}));

describe('NavBreadcrumbs component', () => {
    it('should render component with default props', () => {
        render(<NavBreadcrumbs />);
        expect(screen.getByLabelText('breadcrumbs')).toBeInTheDocument();
    });

    it('should render component with customPathNames props', () => {
        render(<NavBreadcrumbs customPathNames={mockCustomPathNames} />);
        expect(screen.getByLabelText('breadcrumbs')).toBeInTheDocument();
    });

    it('should render component with customPathNames prop and custom LinkProps', () => {
        const customPathNames = mockCustomPathNames.map((path) => ({ ...path, ...mockCustomLinkProps }));
        render(<NavBreadcrumbs customPathNames={customPathNames} />);
        expect(screen.getByLabelText('breadcrumbs')).toBeInTheDocument();
    });

    it('should render home breadcrumb', () => {
        render(<NavBreadcrumbs />);
        expect(screen.getByTestId('breadcrumb-link')).toHaveAttribute('to', '/');
    });

    it('should render link item with correct color', () => {
        render(<NavBreadcrumbs />);
        expect(screen.getByTestId('breadcrumb-link')).toHaveStyle(`color: ${colors.black}`);
    });

    it('should take a snapshot without custom props', () => {
        render(<NavBreadcrumbs />);
        expect(screen.getByLabelText('breadcrumbs')).toMatchSnapshot();
    });

    it('should take a snapshot with customPathNames', () => {
        render(<NavBreadcrumbs customPathNames={mockCustomPathNames} />);
        expect(screen.getByLabelText('breadcrumbs')).toMatchSnapshot();
    });
});
