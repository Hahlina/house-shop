import { PropertyCard } from 'common/components';

import { render, screen, mockProperty } from 'common/utils/test';

describe('PropertyCard', () => {
    it('should render a title', () => {
        render(<PropertyCard {...mockProperty} />);
        expect(screen.getByText(mockProperty.title)).toBeInTheDocument();
    });

    it("should display the mockProperty's preview image", () => {
        render(<PropertyCard {...mockProperty} />);
        expect(screen.getByRole('img')).toHaveStyle(`background-image: url(${mockProperty.preview_image})`);
    });

    it("should display the mockProperty's price", () => {
        render(<PropertyCard {...mockProperty} />);
        expect(screen.getByText('$100,000.00')).toBeInTheDocument();
    });

    it('should take a snapshot', () => {
        const { container } = render(<PropertyCard {...mockProperty} />);
        expect(container).toMatchSnapshot();
    });
});
