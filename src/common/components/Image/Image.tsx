import { forwardRef, type ImgHTMLAttributes, type ForwardedRef } from 'react';

import { useImageOnLoad } from 'common/hooks';
import { basePlaceholderBase64 } from 'common/constants';

interface IImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    withPlaceholder?: boolean;
}

export const Image = forwardRef((props: IImageProps, ref: ForwardedRef<HTMLImageElement>) => {
    const { alt, src, withPlaceholder = true, ...restProps } = props;
    const {
        handleImageOnLoad,
        css: { fullSize, thumbnail },
        isLoaded
    } = useImageOnLoad();

    const imageSrc = withPlaceholder && !isLoaded ? basePlaceholderBase64 : src;

    return (
        <img
            src={imageSrc}
            style={isLoaded ? fullSize : thumbnail}
            onLoad={handleImageOnLoad}
            ref={ref}
            alt={alt}
            {...restProps}
        />
    );
});

Image.displayName = 'Image';
