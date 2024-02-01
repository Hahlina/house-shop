import { PropertiesList } from 'modules/homeContent/components';

import { render, screen, mockProperties } from 'common/utils/test';
import * as reduxHooks from 'common/hooks';

jest.mock('common/hooks');

describe('PropertiesList component', () => {
    const mockedUseAppSelector = jest.spyOn(reduxHooks, 'useAppSelector');
    const mockedUseAppDispatch = jest.spyOn(reduxHooks, 'useAppDispatch');

    beforeEach(() => {
        mockedUseAppDispatch.mockReturnValue(jest.fn());
    });

    it('should render a list of properties when data is available', () => {
        mockedUseAppSelector.mockReturnValue({ data: mockProperties, loading: false });
        render(<PropertiesList />);
        expect(screen.getByText(mockProperties[0].title)).toBeInTheDocument();
    });

    it('should render a loading skeleton when data is not available and loading is true', () => {
        mockedUseAppSelector.mockReturnValue({ data: [], loading: true });
        render(<PropertiesList />);
        expect(screen.getByTestId('properties-list-loader')).toBeInTheDocument();
    });

    it('should match snapshots', () => {
        mockedUseAppSelector.mockReturnValue({ data: mockProperties, loading: false });
        const { container } = render(<PropertiesList />);
        expect(container).toMatchSnapshot();
    });
});
