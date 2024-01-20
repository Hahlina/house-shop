import { SwiperSlide } from "common/components";

import {
    StyledGalleryWrapper,
    StyledSwiperMainContainer,
    StyledSwiperThumbContainer
} from "./RealEstateGallery.styled";

export const RealEstateGallery = ({ photos }) => (
    <StyledGalleryWrapper>
        <StyledSwiperMainContainer thumbs={{ swiper: ".mySwiper2" }} className={"mySwiper1"} navigation pagination>
            {photos?.map((photo, index) => (
                <SwiperSlide key={index}>
                    <img src={photo} alt="" />
                </SwiperSlide>
            ))}
        </StyledSwiperMainContainer>
        <StyledSwiperThumbContainer
            slidesPerView="auto"
            spaceBetween={20}
            freeMode={true}
            watchSlidesProgress={true}
            className={"mySwiper2"}>
            {photos?.map((photo, index) => (
                <SwiperSlide key={index}>
                    <img src={photo} alt="" />
                </SwiperSlide>
            ))}
        </StyledSwiperThumbContainer>
    </StyledGalleryWrapper>
);
