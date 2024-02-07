import { Box, Typography } from '@mui/material';
import { Image } from 'common/components';

import { PreviewBannerStyled, TitleContentStyled, GoDawnPointBlock } from './PreviewBanner.styled';

export const PreviewBanner = () => (
    <PreviewBannerStyled>
        <Image className="logo" src="/images/logo.svg" alt="logo" />
        <Image className="preview-image" src="/images/previewImage.webp" alt="home-banner" withPlaceholder />
        <TitleContentStyled>
            <Typography className="preview-title">Let's find your dream house</Typography>
            <GoDawnPointBlock>
                <Box className="arrow" />
                <Typography className="scroll-dawn-text">scroll dawn to buy your home</Typography>
            </GoDawnPointBlock>
        </TitleContentStyled>
    </PreviewBannerStyled>
);
