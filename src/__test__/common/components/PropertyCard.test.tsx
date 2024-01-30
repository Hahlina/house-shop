import { render, screen } from '@testing-library/react';

import { PropertyCard } from 'common/components/PropertyCard/PropertyCard';
import { RootProvider } from 'common/providers/RootProvider';

const property = {
    address: '123 Main St',
    preview_image: 'image.jpg',
    price: 100000,
    title: 'Beautiful House',
    id: '123'
};

jest.mock('react-router-dom', () => ({
    Link: 'a'
}));

describe('PropertyCard', () => {
    it('should render a title', () => {
        render(<PropertyCard {...property} />, {
            wrapper: RootProvider
        });
        expect(screen.getByText(property.title)).toBeInTheDocument();
    });

    it("should display the property's preview image", () => {
        render(<PropertyCard {...property} />, {
            wrapper: RootProvider
        });
        expect(screen.getByRole('img')).toHaveStyle(`background-image: url(${property.preview_image})`);
    });

    it('should match snapshot', () => {
        const { container } = render(<PropertyCard {...property} />, {
            wrapper: RootProvider
        });
        expect(container).toMatchSnapshot();
    });
});
