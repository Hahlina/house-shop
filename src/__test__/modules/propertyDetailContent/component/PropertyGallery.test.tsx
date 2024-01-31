import { PropertyGallery } from 'modules/propertyDetailContent/components';

import { render, screen } from 'common/utils/test';

describe('PropertyGallery component', () => {
    const photos = ['photo1.jpg', 'photo2.jpg'];

    it('should render with photos without crashing', () => {
        render(<PropertyGallery photos={photos} />);
    });

    it('should contain two swiper-containers', () => {
        render(<PropertyGallery photos={photos} />);
        const containers = screen.getAllByTestId('swiper-container');
        expect(containers).toHaveLength(2);
    });

    it('should contain four slides', () => {
        render(<PropertyGallery photos={photos} />);
        const slides = screen.getAllByTestId('swiper-slide');
        expect(slides).toHaveLength(4);
    });

    it('should have correct width', () => {
        render(<PropertyGallery photos={photos} />);
        const containers = screen.getAllByTestId('swiper-container');
        containers.forEach((container) => {
            expect(container).toHaveStyle('width: 100%');
        });
    });

    it('should take a snapshot', () => {
        const { container } = render(<PropertyGallery photos={photos} />);
        expect(container).toMatchSnapshot();
    });
});
