import { PreviewBannerStyled } from "./PreviewBanner.styled";

export const PreviewBanner = () => {
    return (
        <PreviewBannerStyled>
            <img className="preview-image" src="/images/previewHouse.jpeg" alt="house" />
            <p className="preview-title">
                <span>Let's Find Your</span>
                <span>Dream House</span>
            </p>
        </PreviewBannerStyled>
    );
};
