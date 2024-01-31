import { SwiperSlide } from 'common/components';

import { render, screen } from 'common/utils/test';

describe('SwiperSlide component', () => {
    const slidesChild = <p>Child</p>;

    it('should render without crashing', () => {
        render(<SwiperSlide />);
        expect(screen.queryByTestId('swiper-slide')).toBeInTheDocument();
    });

    it('should render children', () => {
        render(<SwiperSlide>{slidesChild}</SwiperSlide>);
        expect(screen.getByText(/child/i)).toBeInTheDocument();
    });

    it('should take a snapshot without children', () => {
        const { container } = render(<SwiperSlide />);
        expect(container).toMatchSnapshot();
    });

    it('should take a snapshot with children', () => {
        const { container } = render(<swiper-slide>{slidesChild}</swiper-slide>);
        expect(container).toMatchSnapshot();
    });
});
