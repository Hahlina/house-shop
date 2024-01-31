import { PropertyDetailBreadCrumbs } from 'modules/propertyDetailContent/components';

import { render, screen } from 'common/utils/test';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    Link: 'a',
    useParams: () => '1',
    useNavigate: jest.fn(),
    useLocation: () => () => ({ pathname: '/example/path' })
}));

describe('PropertyDetailBreadCrumbs component', () => {
    it('should render the component without crashing', () => {
        render(<PropertyDetailBreadCrumbs />);
    });

    it('should display a breadcrumb with a link to the home page', () => {
        render(<PropertyDetailBreadCrumbs />);
        expect(screen.getByText('Home')).toBeInTheDocument();
    });

    it('should display custom breadcrumbs Properties', () => {
        render(<PropertyDetailBreadCrumbs />);
        expect(screen.queryByText('Properties')).toBeInTheDocument();
    });

    it('should take a snapshot', () => {
        const { container } = render(<PropertyDetailBreadCrumbs />);
        expect(container).toMatchSnapshot();
    });
});
