import { type FC, type PropsWithChildren, useEffect, useRef } from 'react';
import { register } from 'swiper/element/bundle';
import type { Swiper as ISwiperRef } from 'swiper/types';
import type { SwiperOptions } from 'swiper/types/swiper-options';

import { EMPTY_OBJECT } from 'common/constants';

export type TSwiperRef = HTMLElement & { swiper: ISwiperRef; initialize: () => void };

export const SwiperContainer: FC<PropsWithChildren<SwiperOptions>> = (props) => {
    const swiperRef = useRef<TSwiperRef | null>(null);
    const { children, ...rest } = props;

    useEffect(() => {
        register();

        const params: SwiperOptions = {
            ...rest
        };

        Object.assign(swiperRef.current || EMPTY_OBJECT, params);

        swiperRef.current?.initialize();
    }, [rest]);

    return (
        <swiper-container init={false} ref={swiperRef} data-testid="swiper-container">
            {children}
        </swiper-container>
    );
};
