import { NothingFound } from 'common/components';

import { render, screen } from 'common/utils/test';

describe('NothingFound component', () => {
    it('should renders the NothingFound component with the specific image', () => {
        render(<NothingFound />);
        const image = screen.getByRole('img');
        expect(image).toBeInTheDocument();
    });

    it('should renders the NothingFound component with the correct alt text', () => {
        render(<NothingFound />);
        const image = screen.getByAltText(/nothing found/i);
        expect(image).toBeInTheDocument();
    });

    it('should take a snapshot', () => {
        const { container } = render(<NothingFound />);
        expect(container).toMatchSnapshot();
    });
});
