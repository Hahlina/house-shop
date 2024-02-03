import { type FC, useState } from 'react';
import type { Swiper } from 'swiper/types';

import { Image, SwiperSlide } from 'common/components';

import { StyledGalleryWrapper, StyledSwiperMainContainer, StyledSwiperThumbContainer } from './PropertyGallery.styled';

interface IPropertyGallery {
    photos: string[];
}

export const PropertyGallery: FC<IPropertyGallery> = ({ photos }) => {
    const [thumbsRef, setThumbsRef] = useState<Swiper | null>(null);

    return (
        <StyledGalleryWrapper>
            <StyledSwiperMainContainer
                thumbs={{ swiper: thumbsRef }}
                navigation
                pagination
                keyboard
                lazyPreloadPrevNext={1}
            >
                {photos?.map((photo, index) => (
                    <SwiperSlide key={`photo-${index}`} lazy>
                        <Image src={photo} alt={`property-${index}`} loading="lazy" />
                    </SwiperSlide>
                ))}
            </StyledSwiperMainContainer>
            <StyledSwiperThumbContainer
                lazyPreloadPrevNext={1}
                slidesPerView="auto"
                spaceBetween={20}
                freeMode
                watchSlidesProgress
                on={{
                    init: (swiper: Swiper) => setThumbsRef(swiper)
                }}
            >
                {photos?.map((photo, index) => (
                    <SwiperSlide lazy key={`thumbs-${index}`}>
                        <Image src={photo} alt={`property-thumbs-${index}`} loading="lazy" />
                    </SwiperSlide>
                ))}
            </StyledSwiperThumbContainer>
        </StyledGalleryWrapper>
    );
};
