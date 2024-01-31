import { NavBreadcrumbs } from 'common/components';

import { render, screen, mockedCustomLinkProps, mockedCustomPathNames } from 'common/utils/test';
import { colors } from 'common/styles/colors';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    Link: 'a',
    useLocation: () => ({ pathname: '/example/path' })
}));

describe('NavBreadcrumbs component', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should render component with default props without crashing', () => {
        render(<NavBreadcrumbs />);
        expect(screen.getByLabelText('breadcrumbs')).toBeInTheDocument();
    });

    it('should render component with customPathNames prop without crashing', () => {
        render(<NavBreadcrumbs customPathNames={mockedCustomPathNames} />);
        expect(screen.getByLabelText('breadcrumbs')).toBeInTheDocument();
    });

    it('should render component with customPathNames prop and custom LinkProps without crashing', () => {
        const customPathNames = mockedCustomPathNames.map((path) => ({ ...path, ...mockedCustomLinkProps }));
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
        render(<NavBreadcrumbs customPathNames={mockedCustomPathNames} />);
        expect(screen.getByLabelText('breadcrumbs')).toMatchSnapshot();
    });
});
