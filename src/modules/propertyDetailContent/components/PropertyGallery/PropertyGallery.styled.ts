import styled from 'styled-components';

import { SwiperContainer } from 'common/components';

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
    border-radius: 10px;
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
    border-radius: 10px;
    padding-left: 10px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        cursor: pointer;
    }

    swiper-slide {
        width: 100px;
        height: 100px;
        border-radius: 10px;
        overflow: hidden;
        transition: transform 0.4s ease;

        &:not(.swiper-slide-thumb-active):hover {
            opacity: 0.8;
        }
    }

    .swiper-slide-thumb-active {
        border: 2px solid ${({ theme: { colors } }) => colors.orange};
        transform: scale(0.93);
    }
`;

export const StyledThumbSkeletonContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    overflow: hidden;

    & > * {
        flex-shrink: 0;
    }
`;
