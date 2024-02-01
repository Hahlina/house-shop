import { PropertyGalleryLoader } from 'modules/propertyDetailContent/components';

import { render, screen } from 'common/utils/test';

describe('FullInformationCardLoader', () => {
    it('renders the correct number of thumb skeletons components', () => {
        render(<PropertyGalleryLoader />);
        const thumbsSkeleton = screen.getAllByTestId('skeleton');
        expect(thumbsSkeleton).toHaveLength(5);
    });

    it('renders the correct height of thumb skeletons components', () => {
        render(<PropertyGalleryLoader />);
        const thumbsSkeleton = screen.getAllByTestId('skeleton');
        thumbsSkeleton.forEach((thumb) => {
            expect(thumb).toHaveStyle('height: 100px');
        });
    });

    it('renders the correct height of skeleton component for big photo', () => {
        render(<PropertyGalleryLoader />);
        const skeletonComponents = screen.getByTestId('main-photo');
        expect(skeletonComponents).toHaveStyle('height: 600px');
    });

    it('should take a snapshot', () => {
        const { container } = render(<PropertyGalleryLoader />);
        expect(container).toMatchSnapshot();
    });
});
