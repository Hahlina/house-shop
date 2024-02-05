import { HomeContent } from 'modules/homeContent/HomeContent';

import { mockProperties, renderWithRoutes, screen } from 'common/utils/test';
import * as hooks from 'common/hooks';

jest.mock('common/hooks');

describe('HomePage', () => {
    const mockedUseAppSelector = jest.spyOn(hooks, 'useAppSelector');
    const mockedUseAppDispatch = jest.spyOn(hooks, 'useAppDispatch');
    const mockedUsePagination = jest.spyOn(hooks, 'usePagination');
    const mockedUseImageOnLoad = jest.spyOn(hooks, 'useImageOnLoad');

    beforeEach(() => {
        mockedUseAppSelector.mockReturnValue({ data: mockProperties, loading: false });
        mockedUseAppDispatch.mockReturnValue(jest.fn());
        mockedUsePagination.mockReturnValue({
            pagesNumber: 1,
            activePage: 1,
            setActivePage: jest.fn()
        });
        mockedUseImageOnLoad.mockReturnValue({
            handleImageOnLoad: jest.fn(),
            css: { thumbnail: {}, fullSize: {} },
            isLoaded: false
        });
    });

    it('should render without crashing', () => {
        renderWithRoutes(<HomeContent />);
    });

    it('should render a previewBanner', () => {
        renderWithRoutes(<HomeContent />);
        const title = screen.getByText(/Let's Find Your/i);
        expect(title).toBeInTheDocument();
    });

    it('should render a propertiesList', () => {
        renderWithRoutes(<HomeContent />);
        const titleOfCard = screen.getByText(mockProperties[0].title);
        expect(titleOfCard).toBeInTheDocument();
    });

    it('should dont contain pagination', () => {
        renderWithRoutes(<HomeContent />);
        const paginationComponent = screen.queryByText('pagination');
        expect(paginationComponent).not.toBeInTheDocument();
    });

    it('should take a snapshot', () => {
        const { container } = renderWithRoutes(<HomeContent />);
        expect(container).toMatchSnapshot();
    });
});
