import { SwiperContainer } from 'common/components';

import { render, screen } from 'common/utils/test';

describe('SwiperContainer component', () => {
    const swiperChild = <p>Child</p>;

    it('should initialize without crashing', () => {
        render(<SwiperContainer />);
        expect(screen.queryByTestId('swiper-container')).toBeInTheDocument();
    });

    it('should render children', () => {
        render(<SwiperContainer>{swiperChild}</SwiperContainer>);
        expect(screen.getByText(/child/i)).toBeInTheDocument();
    });

    it('should take a snapshot without children', () => {
        const { container } = render(<SwiperContainer />);
        expect(container).toMatchSnapshot();
    });

    it('should take a snapshot with children', () => {
        const { container } = render(<SwiperContainer>{swiperChild}</SwiperContainer>);
        expect(container).toMatchSnapshot();
    });
});
