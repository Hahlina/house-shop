import styled from "styled-components";

export const PreviewBannerStyled = styled.div`
    position: relative;
    margin-top: 50px;
    height: 90vh;

    img.preview-image {
        border-radius: 30px;
        object-fit: cover;
        object-position: center;
        height: 100%;
        width: 100%;
    }

    p.preview-title {
        position: absolute;
        display: flex;
        flex-direction: column;
        top: -1px;
        left: -1px;
        font-size: calc(40px + (60 - 40) * ((100vw - 375px) / (1200 - 375)));
        font-weight: 700;

        span {
            display: inline-block;
            background-color: ${({ theme }) => theme.colors.white100};
            border-bottom-right-radius: 20px;
            width: fit-content;
            line-height: 1.3;
        }

        span:first-child {
            padding-right: 80px;
        }

        span:last-child {
            padding-right: 40px;
        }
    }
`;
