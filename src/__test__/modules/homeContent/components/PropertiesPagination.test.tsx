import { PropertiesPagination } from 'modules/homeContent/components';

import { render, fireEvent, screen } from 'common/utils/test';

describe('PropertiesPagination', () => {
    const onPageChangeMock = jest.fn();
    const defaultProps = {
        activePage: 1,
        onPageChange: onPageChangeMock,
        pagesNumber: 5,
        refToStartPositionList: { current: null }
    };

    it('should render pagination correctly', () => {
        render(<PropertiesPagination {...defaultProps} />);

        const pagination = screen.getByRole('list');
        expect(pagination).toBeInTheDocument();
    });

    it('should call onPageChange when a page is clicked', () => {
        render(<PropertiesPagination {...defaultProps} />);
        const pageToClick = 3;
        fireEvent.click(screen.getByText(pageToClick));
        expect(onPageChangeMock).toHaveBeenCalledWith(pageToClick);
    });

    it('should render 5th button of pagination', () => {
        render(<PropertiesPagination {...defaultProps} />);
        const pageButton = screen.getByLabelText(`Go to page ${defaultProps.pagesNumber}`);
        expect(pageButton).toBeInTheDocument();
    });

    it('should take a snapshot', () => {
        const { container } = render(<PropertiesPagination {...defaultProps} />);
        expect(container).toMatchSnapshot();
    });
});
