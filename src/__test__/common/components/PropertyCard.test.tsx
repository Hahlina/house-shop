import { PropertyCard } from 'common/components';

import { mockProperty, screen, renderWithRoutes } from 'common/utils/test';

describe('PropertyCard', () => {
    it('should render a title', () => {
        renderWithRoutes(<PropertyCard {...mockProperty} />);
        expect(screen.getByText(mockProperty.title)).toBeInTheDocument();
    });

    it("should display the mockProperty's preview image", () => {
        renderWithRoutes(<PropertyCard {...mockProperty} />);
        expect(screen.getByRole('img')).toHaveStyle(`background-image: url(${mockProperty.preview_image})`);
    });

    it("should display the mockProperty's price", () => {
        renderWithRoutes(<PropertyCard {...mockProperty} />);
        expect(screen.getByText('$100,000.00')).toBeInTheDocument();
    });

    it('should take a snapshot', () => {
        const { container } = renderWithRoutes(<PropertyCard {...mockProperty} />);
        expect(container).toMatchSnapshot();
    });
});
