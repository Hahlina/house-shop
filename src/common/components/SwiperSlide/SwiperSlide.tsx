import type { FC, PropsWithChildren } from 'react';
import type { SwiperSlideProps } from 'swiper/react';

export const SwiperSlide: FC<PropsWithChildren<SwiperSlideProps>> = ({ children, ...rest }) => (
    <swiper-slide data-testid="swiper-slide" {...rest}>
        {children}
    </swiper-slide>
);
