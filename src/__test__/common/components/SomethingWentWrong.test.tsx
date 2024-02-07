import { SomethingWentWrong } from 'common/components';

import { render, screen } from 'common/utils/test';

describe('SomethingWentWrong component', () => {
    it('should renders the SomethingWentWrong component with image', () => {
        render(<SomethingWentWrong />);
        const image = screen.getByRole('img');
        expect(image).toBeInTheDocument();
    });

    it('should renders the SomethingWentWrong component with correct alt text', () => {
        render(<SomethingWentWrong />);
        const image = screen.getByAltText(/something went wrong/i);
        expect(image).toBeInTheDocument();
    });

    it('should take a snapshot', () => {
        const { container } = render(<SomethingWentWrong />);
        expect(container).toMatchSnapshot();
    });
});
