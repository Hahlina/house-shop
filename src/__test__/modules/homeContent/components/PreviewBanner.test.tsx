import { PreviewBanner } from 'modules/homeContent/components';

import { render, screen } from 'common/utils/test';
import { basePlaceholderBase64 } from 'common/constants';

describe('PreviewBanner components', () => {
    it('should render a preview banner with an placeholders', () => {
        render(<PreviewBanner />);
        const image = screen.getByAltText('home-banner');
        expect(image).toHaveAttribute('src', basePlaceholderBase64);
    });

    it('should render a preview banner title', () => {
        render(<PreviewBanner />);
        const title = screen.getByText(/Let's Find Your/i);
        expect(title).toBeInTheDocument();
    });

    it('should have height - 100svh', () => {
        const { container } = render(<PreviewBanner />);
        expect(container).toHaveStyle('height: 100svh');
    });

    it('should take a snapshot', () => {
        const { container } = render(<PreviewBanner />);
        expect(container).toMatchSnapshot();
    });
});
