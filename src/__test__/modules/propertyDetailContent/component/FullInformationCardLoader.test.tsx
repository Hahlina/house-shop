import { FullInformationCardLoader } from 'modules/propertyDetailContent/components';

import { render, screen } from 'common/utils/test';

describe('FullInformationCardLoader', () => {
    it('should renders the correct number of Skeleton components', () => {
        render(<FullInformationCardLoader />);
        expect(screen.getAllByTestId('skeleton')).toHaveLength(6);
    });

    it('should renders the correct height of Skeleton components', () => {
        render(<FullInformationCardLoader />);
        const skeletonComponents = screen.getAllByTestId('skeleton');
        skeletonComponents.forEach((skeleton) => {
            expect(skeleton).toHaveStyle('height: 30px');
        });
    });

    it('should take a snapshot', () => {
        const { container } = render(<FullInformationCardLoader />);
        expect(container).toMatchSnapshot();
    });
});
