import { Typography } from '@mui/material';

import { PreviewBannerStyled } from './PreviewBanner.styled';

export const PreviewBanner = () => (
    <PreviewBannerStyled>
        <img className="preview-image" src="/images/previewImage.jpg" alt="house" />
        <Typography className="preview-title" component="h1">
            <Typography>Let's Find Your</Typography>
            <Typography>Dream House</Typography>
        </Typography>
    </PreviewBannerStyled>
);
