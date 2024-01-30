import { NavBreadcrumbs } from 'common/components';

import { render, screen, mockedCustomLinkProps, mockedCustomPathNames } from 'common/utils/test';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useLocation: () => ({ pathname: '/example/path' })
}));

jest.mock('common/components/NavBreadcrumbs/NavBreadcrumbs.styled', () => ({
    LinkStyled: 'a'
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

    it('should match snapshot with default props', () => {
        render(<NavBreadcrumbs />);
        expect(screen.getByLabelText('breadcrumbs')).toMatchSnapshot();
    });

    it('should match snapshot with customPathNames', () => {
        render(<NavBreadcrumbs customPathNames={mockedCustomPathNames} />);
        expect(screen.getByLabelText('breadcrumbs')).toMatchSnapshot();
    });
});
