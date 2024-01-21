import { SwiperSlide } from 'common/components';

import { StyledGalleryWrapper, StyledSwiperMainContainer, StyledSwiperThumbContainer } from './PropertyGallery.styled';

export const PropertyGallery = ({ photos }) => (
    <StyledGalleryWrapper>
        <StyledSwiperMainContainer thumbs={{ swiper: '.mySwiper2' }} className="mySwiper1" navigation pagination>
            {photos?.map((photo, index) => (
                <SwiperSlide key={`photo-${index}`}>
                    <img src={photo} alt={`property-${index}`} />
                </SwiperSlide>
            ))}
        </StyledSwiperMainContainer>
        <StyledSwiperThumbContainer
            slidesPerView="auto"
            className="mySwiper2"
            spaceBetween={20}
            freeMode
            watchSlidesProgress>
            {photos?.map((photo, index) => (
                <SwiperSlide key={`thumbs-${index}`}>
                    <img src={photo} alt={`property-thumbs-${index}`} />
                </SwiperSlide>
            ))}
        </StyledSwiperThumbContainer>
    </StyledGalleryWrapper>
);
