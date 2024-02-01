import { type FC, useState } from 'react';
import type { Swiper } from 'swiper/types';

import { SwiperSlide } from 'common/components';

import { StyledGalleryWrapper, StyledSwiperMainContainer, StyledSwiperThumbContainer } from './PropertyGallery.styled';

interface IPropertyGallery {
    photos: string[];
}

export const PropertyGallery: FC<IPropertyGallery> = ({ photos }) => {
    const [thumbsRef, setThumbsRef] = useState<Swiper | null>(null);

    return (
        <StyledGalleryWrapper>
            <StyledSwiperMainContainer thumbs={{ swiper: thumbsRef }} navigation pagination>
                {photos?.map((photo, index) => (
                    <SwiperSlide key={`photo-${index}`}>
                        <img src={photo} alt={`property-${index}`} />
                    </SwiperSlide>
                ))}
            </StyledSwiperMainContainer>
            <StyledSwiperThumbContainer
                slidesPerView="auto"
                spaceBetween={20}
                freeMode
                watchSlidesProgress
                on={{
                    init: (swiper: Swiper) => setThumbsRef(swiper)
                }}
            >
                {photos?.map((photo, index) => (
                    <SwiperSlide key={`thumbs-${index}`}>
                        <img src={photo} alt={`property-thumbs-${index}`} />
                    </SwiperSlide>
                ))}
            </StyledSwiperThumbContainer>
        </StyledGalleryWrapper>
    );
};
