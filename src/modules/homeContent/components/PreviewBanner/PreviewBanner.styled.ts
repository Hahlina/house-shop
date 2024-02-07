import styled, { keyframes } from 'styled-components';

const arrowAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
`;

export const PreviewBannerStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    height: 100svh;
    position: relative;

    img.preview-image {
        height: 100%;
        width: 100%;
        position: absolute;
        z-index: -1;
        object-fit: cover;
        object-position: center;
    }

    img.logo {
        position: absolute;
        width: 100px;
        height: 100px;
        left: 50px;
        top: 0;
    }
`;

export const TitleContentStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 60vh;

    p.preview-title {
        text-align: center;
        font-size: calc(35px + (60 - 40) * ((100vw - 375px) / (1200 - 375)));
        font-weight: 700;
        color: ${({ theme: { colors } }) => colors.white};
        text-shadow: 2px 2px 4px ${({ theme: { colors } }) => colors.orange};
        text-transform: capitalize;

        &::first-letter {
            color: ${({ theme: { colors } }) => colors.orange};
        }
    }
`;

export const GoDawnPointBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding-bottom: 50px;

    div.arrow {
        position: relative;
        width: 50px;
        height: 50px;
        border: 3px solid ${({ theme: { colors } }) => colors.orange};
        border-radius: 50%;
        padding: 5px;
        animation: ${arrowAnimation} 2s infinite;

        &::after {
            content: '';
            display: block;
            width: 20px;
            height: 20px;
            position: absolute;
            z-index: 10;
            top: 7px;
            left: 12px;
            transform: rotate(225deg);
            border-top: 3px solid ${({ theme: { colors } }) => colors.orange};
            border-left: 3px solid ${({ theme: { colors } }) => colors.orange};
        }
    }

    p.scroll-dawn-text {
        text-transform: uppercase;
        color: ${({ theme: { colors } }) => colors.white};
        font-size: 20px;
        font-weight: 700;
        text-shadow: 2px 2px 4px ${({ theme: { colors } }) => colors.orange};
    }
`;
