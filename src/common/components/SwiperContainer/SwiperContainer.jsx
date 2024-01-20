import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";

export const SwiperContainer = (props) => {
    const swiperRef = useRef(null);
    const { children, ...rest } = props;

    useEffect(() => {
        register();

        const params = {
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
