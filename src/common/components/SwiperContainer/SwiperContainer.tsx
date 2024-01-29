import { type FC, type PropsWithChildren, useEffect, useRef } from 'react';
import { register } from 'swiper/element/bundle';
import type { SwiperOptions, Swiper as ISwiperRef } from 'swiper/types';

import { EMPTY_OBJECT } from 'common/constants';
import { colors } from 'common/styles';

export type TSwiperRef = HTMLElement & { swiper: ISwiperRef; initialize: () => void };

export const SwiperContainer: FC<PropsWithChildren<SwiperOptions>> = (props) => {
    const swiperRef = useRef<TSwiperRef | null>(null);
    const { children, ...rest } = props;

    useEffect(() => {
        register();

        const params: SwiperOptions = {
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

        Object.assign(swiperRef.current || EMPTY_OBJECT, params);

        swiperRef.current?.initialize();
    }, [rest]);

    return (
        <swiper-container init={false} ref={swiperRef}>
            {children}
        </swiper-container>
    );
};
