import { PreviewBanner } from 'modules/homeContent/components';

import { render, screen } from 'common/utils/test';

describe('PreviewBanner components', () => {
    it('should render a preview banner with an image', () => {
        render(<PreviewBanner />);
        const image = screen.getByAltText('house');
        expect(image).toHaveAttribute('src', '/images/previewImage.jpg');
    });

    it('should render a preview banner title', () => {
        render(<PreviewBanner />);
        const title = screen.getByText(/Let's Find Your/i);
        expect(title).toBeInTheDocument();
    });

    it('should generate a math snapshot', () => {
        const { container } = render(<PreviewBanner />);
        expect(container).toMatchSnapshot();
    });
});
