import { useEffect, useRef } from 'react';
import { register } from 'swiper/element/bundle';

import { colors } from 'common/styles';

export const SwiperContainer = (props) => {
    const swiperRef = useRef(null);
    const { children, ...rest } = props;

    useEffect(() => {
        register();

        const params = {
            injectStyles: [
                `.swiper-button-next, .swiper-button-prev {
                  color: ${colors.orange};
                 }
                 .swiper-pagination-bullet {
                  background: ${colors.orange};
                 }`
            ],
            ...rest
        };

        Object.assign(swiperRef.current, params);

        swiperRef.current.initialize();
    }, [rest]);

    return (
        <swiper-container init="false" ref={swiperRef}>
            {children}
        </swiper-container>
    );
};
