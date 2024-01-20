import styled from "styled-components";

import { SwiperContainer } from "common/components";

export const StyledGalleryWrapper = styled.div`
    max-width: 600px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const StyledSwiperMainContainer = styled(SwiperContainer)`
    width: 100%;
    height: 600px;
    border-radius: 30px;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
`;

export const StyledSwiperThumbContainer = styled(SwiperContainer)`
    width: 100%;
    height: 100px;
    border-radius: 30px;

    img {
        width: 100px;
        height: 100px;
        object-fit: cover;
        object-position: center;
        border-radius: 20px;
    }

    swiper-slide {
        width: 100px;
        height: 100px;
    }
`;
