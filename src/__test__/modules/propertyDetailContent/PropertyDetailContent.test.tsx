import { PropertyDetailContent } from 'modules/propertyDetailContent/PropertyDetailContent';

import { mockReduxStore, render, screen, mockPathName } from 'common/utils/test';
import * as reduxHooks from 'common/hooks';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    Link: 'a',
    useParams: () => '1',
    useNavigate: jest.fn(),
    useLocation: () => () => ({ pathname: mockPathName })
}));

jest.mock('common/hooks');

describe('PropertyDetailContent page', () => {
    const mockedUseAppSelector = jest.spyOn(reduxHooks, 'useAppSelector');
    const mockedUseAppDispatch = jest.spyOn(reduxHooks, 'useAppDispatch');
    const { propertyDetail } = mockReduxStore;

    beforeEach(() => {
        mockedUseAppSelector.mockReturnValue(propertyDetail);
        mockedUseAppDispatch.mockReturnValue(jest.fn());
    });

    it('should render Container component', () => {
        render(<PropertyDetailContent />);
        const container = screen.getByTestId('container-id');
        expect(container).toBeInTheDocument();
    });

    it('should render title of FullInformationCard', () => {
        render(<PropertyDetailContent />);
        const propertyTitle = screen.getByText(propertyDetail.data.title);
        expect(propertyTitle).toBeInTheDocument();
    });

    it('should render PropertyGallery component', () => {
        render(<PropertyDetailContent />);
        const galleryContainers = screen.getAllByTestId('swiper-container');
        expect(galleryContainers).toHaveLength(2);
    });

    it('should render Breadcrumbs component', () => {
        render(<PropertyDetailContent />);
        const breadcrumbs = screen.getByLabelText('breadcrumbs');
        expect(breadcrumbs).toBeInTheDocument();
    });

    it('should take a snapshot', () => {
        const { container } = render(<PropertyDetailContent />);
        expect(container).toMatchSnapshot();
    });
});
