import { PropertiesList } from 'modules/homeContent/components';

import { renderWithRoutes, screen, mockProperties } from 'common/utils/test';
import * as hooks from 'common/hooks';

jest.mock('common/hooks');

describe('PropertiesList component', () => {
    const mockedUseAppSelector = jest.spyOn(hooks, 'useAppSelector');
    const mockedUseAppDispatch = jest.spyOn(hooks, 'useAppDispatch');
    const mockedUsePagination = jest.spyOn(hooks, 'usePagination');

    beforeEach(() => {
        mockedUseAppDispatch.mockReturnValue(jest.fn());
        mockedUsePagination.mockReturnValue({
            pagesNumber: 1,
            activePage: 1,
            setActivePage: jest.fn()
        });
    });

    it('should render a list of properties when data is available', () => {
        mockedUseAppSelector.mockReturnValue({ data: mockProperties, loading: false });
        renderWithRoutes(<PropertiesList />);
        expect(screen.getByText(mockProperties[0].title)).toBeInTheDocument();
    });

    it('should render a loading skeleton when data is not available and loading is true', () => {
        mockedUseAppSelector.mockReturnValue({ data: [], loading: true });
        renderWithRoutes(<PropertiesList />);
        expect(screen.getByTestId('properties-list-loader')).toBeInTheDocument();
    });

    it('should match snapshots', () => {
        mockedUseAppSelector.mockReturnValue({ data: mockProperties, loading: false });
        const { container } = renderWithRoutes(<PropertiesList />);
        expect(container).toMatchSnapshot();
    });
});
