import { render, screen } from '@testing-library/react';

import { NavBreadcrumbs } from 'common/components/NavBreadcrumbs/NavBreadcrumbs';

const defaultCustomPathNames = [
    { name: 'Page 1', to: '/page1' },
    { name: 'Page 2', to: '/page1/page2' }
];

const customLinkProps = { target: '_blank' };

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useLocation: () => ({ pathname: 'localhost:3000/example/path' })
}));

jest.mock('common/components/NavBreadcrumbs/NavBreadcrumbs.styled', () => ({
    LinkStyled: 'a'
}));

describe('NavBreadcrumbs', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should render component with default props without crashing', () => {
        render(<NavBreadcrumbs />);
        expect(screen.getByLabelText('breadcrumbs')).toBeInTheDocument();
    });

    it('should render component with customPathNames prop without crashing', () => {
        render(<NavBreadcrumbs customPathNames={defaultCustomPathNames} />);
        expect(screen.getByLabelText('breadcrumbs')).toBeInTheDocument();
    });

    it('should render component with customPathNames prop and custom LinkProps without crashing', () => {
        const customPathNames = defaultCustomPathNames.map((path) => ({ ...path, ...customLinkProps }));
        render(<NavBreadcrumbs customPathNames={customPathNames} />);
        expect(screen.getByLabelText('breadcrumbs')).toBeInTheDocument();
    });

    it('should match snapshot with default props', () => {
        render(<NavBreadcrumbs />);
        expect(screen.getByLabelText('breadcrumbs')).toMatchSnapshot();
    });

    it('should match snapshot with customPathNames', () => {
        render(<NavBreadcrumbs customPathNames={defaultCustomPathNames} />);
        expect(screen.getByLabelText('breadcrumbs')).toMatchSnapshot();
    });
});
