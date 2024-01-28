import styled from 'styled-components';

export const PreviewBannerStyled = styled.div`
    position: relative;
    height: 100dvh;

    img.preview-image {
        object-fit: cover;
        object-position: center;
        height: 100%;
        width: 100%;
    }

    h1.preview-title {
        position: absolute;
        display: flex;
        flex-direction: column;
        top: -1px;
        left: -1px;
    }

    p {
        display: inline-block;
        width: fit-content;
        font-weight: 700;
        font-size: calc(35px + (60 - 40) * ((100vw - 375px) / (1200 - 375)));
        background-color: ${({ theme: { colors } }) => colors.white100};
        border-bottom-right-radius: 20px;
        line-height: 1.3;
    }

    p:first-child {
        padding-right: 80px;
    }

    p:last-child {
        padding-right: 40px;
    }
`;
