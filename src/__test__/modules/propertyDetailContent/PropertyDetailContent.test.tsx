import { PropertyDetailContent } from 'modules/propertyDetailContent/PropertyDetailContent';

import { mockReduxStore, renderWithRoutes, screen } from 'common/utils/test';
import * as hooks from 'common/hooks';

beforeAll(() => {
    Object.defineProperty(window, 'scrollTo', {
        value: jest.fn(),
        writable: true
    });
});

jest.mock('common/hooks');

describe('PropertyDetailContent page', () => {
    const mockedUseAppSelector = jest.spyOn(hooks, 'useAppSelector');
    const mockedUseAppDispatch = jest.spyOn(hooks, 'useAppDispatch');
    const mockedUseImageOnLoad = jest.spyOn(hooks, 'useImageOnLoad');
    const { propertyDetail } = mockReduxStore;

    beforeEach(() => {
        mockedUseImageOnLoad.mockReturnValue({
            handleImageOnLoad: jest.fn(),
            css: { thumbnail: {}, fullSize: {} },
            isLoaded: false
        });
        mockedUseAppSelector.mockReturnValue(propertyDetail);
        mockedUseAppDispatch.mockReturnValue(jest.fn());
    });

    it('should render Container component', () => {
        renderWithRoutes(<PropertyDetailContent />);
        const container = screen.getByTestId('container-id');
        expect(container).toBeInTheDocument();
    });

    it('should render title of FullInformationCard', () => {
        renderWithRoutes(<PropertyDetailContent />);
        const propertyTitle = screen.getByText(propertyDetail.data.title);
        expect(propertyTitle).toBeInTheDocument();
    });

    it('should render PropertyGallery component', () => {
        renderWithRoutes(<PropertyDetailContent />);
        const galleryContainers = screen.getAllByTestId('swiper-container');
        expect(galleryContainers).toHaveLength(2);
    });

    it('should render Breadcrumbs component', () => {
        renderWithRoutes(<PropertyDetailContent />);
        const breadcrumbs = screen.getByLabelText('breadcrumbs');
        expect(breadcrumbs).toBeInTheDocument();
    });

    it('should take a snapshot', () => {
        const { container } = renderWithRoutes(<PropertyDetailContent />);
        expect(container).toMatchSnapshot();
    });
});
