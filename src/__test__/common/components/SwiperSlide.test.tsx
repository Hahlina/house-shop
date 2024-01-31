import { SwiperSlide } from 'common/components';

import { render, screen } from 'common/utils/test';

describe('SwiperSlide component', () => {
    const slideChild = <p>Child</p>;

    it('should render without crashing', () => {
        render(<SwiperSlide />);
        expect(screen.queryByTestId('swiper-slide')).toBeInTheDocument();
    });

    it('should render children', () => {
        render(<SwiperSlide>{slideChild}</SwiperSlide>);
        expect(screen.getByText(/child/i)).toBeInTheDocument();
    });

    it('should take a snapshot without children', () => {
        const { container } = render(<SwiperSlide />);
        expect(container).toMatchSnapshot();
    });

    it('should take a snapshot with children', () => {
        const { container } = render(<swiper-slide>{slideChild}</swiper-slide>);
        expect(container).toMatchSnapshot();
    });
});
