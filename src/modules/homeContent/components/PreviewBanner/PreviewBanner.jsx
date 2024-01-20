import { PreviewBannerStyled } from "./PreviewBanner.styled";

export const PreviewBanner = () => (
    <PreviewBannerStyled>
        <img className="preview-image" src="/images/previewImage.jpg" alt="house" />
        <h1 className="preview-title">
            <span>Let's Find Your</span>
            <span>Dream House</span>
        </h1>
    </PreviewBannerStyled>
);
